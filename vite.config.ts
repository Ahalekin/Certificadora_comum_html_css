import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const BUILD_ID = Date.now().toString();

// Emite /version.json no build para detectar novas versões publicadas
const emitVersionJson = () => ({
  name: "emit-version-json",
  apply: "build" as const,
  generateBundle() {
    // @ts-expect-error - rollup plugin context
    this.emitFile({
      type: "asset",
      fileName: "version.json",
      source: JSON.stringify({ buildId: BUILD_ID }),
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/Certificadora_comun_html_css/" : "/",
  define: {
    __BUILD_ID__: JSON.stringify(BUILD_ID),
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    emitVersionJson(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
