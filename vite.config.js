var _a;
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    define: {
        __APP_BUILD_ID__: JSON.stringify((_a = process.env.VERCEL_GIT_COMMIT_SHA) !== null && _a !== void 0 ? _a : new Date().toISOString())
    },
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                entryFileNames: "assets/index.js",
                chunkFileNames: "assets/[name].js",
                assetFileNames: function (assetInfo) {
                    if (assetInfo.names.some(function (name) { return name.endsWith(".css"); })) {
                        return "assets/index.css";
                    }
                    return "assets/[name][extname]";
                }
            }
        }
    }
});
