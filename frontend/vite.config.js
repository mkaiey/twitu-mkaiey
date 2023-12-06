import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: "https://twitu-app.vercel.app",
    // Get rid of the CORS error
    proxy: {
      "/api": {
        target: "https://twitu-mkaiey.vercel.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
