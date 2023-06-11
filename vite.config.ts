import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import indexify from "vite-plugin-indexify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    indexify([
      {
        directory: "posts",
        include: /.*\.(md|markdown)$/,
        includeSubdirs: false,
        indexFileName: "index.json",
      },
      {
        directory: "mainpages",
        include: /.*\.(md|markdown)$/,
        includeSubdirs: false,
        indexFileName: "index.json",
      },
    ]),
  ],
});
