import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    /* css: false — Vite's CSS pipeline can't process Tailwind v4 @theme.
       Component tests don't need real styles to assert structure. */
    css: false,
  },
  resolve: {
    alias: {
      /* next/font isn't transformed by Vite. Mock to a no-op so any test
         that imports a layout/page tree doesn't blow up. */
      "next/font/google": path.resolve(__dirname, "./test/mocks/next-font.ts"),
      "next/font/local": path.resolve(__dirname, "./test/mocks/next-font.ts"),
      "@": path.resolve(__dirname, "."),
    },
  },
});
