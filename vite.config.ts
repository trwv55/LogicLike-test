import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@api": "/src/api",
      "@config": "/src/config.ts",
      "@types": "/src/types/types.ts",
      "@hooks": "/src/hooks",
    },
  },
});
