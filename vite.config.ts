import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// REMOVED: componentTagger import

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // REMOVED: componentTagger() from plugins
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));