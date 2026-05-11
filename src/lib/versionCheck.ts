// Detecta uma nova versão publicada e recarrega a página automaticamente,
// evitando que o cache do GitHub Pages sirva um index.html antigo apontando
// para JS desatualizado.

declare const __BUILD_ID__: string;

const CURRENT_BUILD_ID = typeof __BUILD_ID__ !== "undefined" ? __BUILD_ID__ : "";
const RELOAD_FLAG = "vch_reloaded_for";

const versionUrl = () => {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}version.json?ts=${Date.now()}`;
};

const reloadOnce = (newId: string) => {
  try {
    if (sessionStorage.getItem(RELOAD_FLAG) === newId) return;
    sessionStorage.setItem(RELOAD_FLAG, newId);
  } catch {
    /* ignore */
  }
  // bypass cache
  window.location.reload();
};

const check = async () => {
  try {
    const res = await fetch(versionUrl(), { cache: "no-store" });
    if (!res.ok) return;
    const data = (await res.json()) as { buildId?: string };
    if (data.buildId && CURRENT_BUILD_ID && data.buildId !== CURRENT_BUILD_ID) {
      reloadOnce(data.buildId);
    }
  } catch {
    /* offline ou rede instável — ignora */
  }
};

export const startVersionCheck = () => {
  if (import.meta.env.DEV) return;
  // checa ao carregar
  check();
  // checa quando a aba volta a ficar ativa
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") check();
  });
  // checa periodicamente (5 min)
  window.setInterval(check, 5 * 60 * 1000);
};
