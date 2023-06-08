import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import remarkRehypePlugin from "vite-plugin-remark-rehype";

// @ts-ignore
import { readdirSync } from "node:fs";

const dirents = readdirSync("./public/post-md", { withFileTypes: true });

const fnames = [];

for (let f of dirents) {
  if (!f.isDirectory()) {
    fnames.push(f.name);
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), remarkRehypePlugin()],
  define: {
    POSTS: fnames,
  },
});
