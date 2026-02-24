import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  define: {
    __APP_BUILD_ID__: JSON.stringify(process.env.VERCEL_GIT_COMMIT_SHA ?? new Date().toISOString())
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/index.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.names.some((name) => name.endsWith(".css"))) {
            return "assets/index.css";
          }
          return "assets/[name][extname]";
        }
      }
    }
  }
});
