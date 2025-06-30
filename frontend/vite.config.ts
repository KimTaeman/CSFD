import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-oxc";
import tailwindcss from "@tailwindcss/vite";
import Pages from "vite-plugin-pages";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Pages({
      dirs: "./src/pages",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  optimizeDeps: {
    rollupOptions: {
      jsx: "react-jsx",
    },
  },
});
