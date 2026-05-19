import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const BUILD_ID = Date.now().toString();

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

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/certificadora/" : "/",
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
    emitVersionJson(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
