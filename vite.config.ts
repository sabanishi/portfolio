import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import mdx from '@mdx-js/rollup';
import remarkGfm from "remark-gfm";

export default defineConfig({
  plugins: [
      mdx({
        jsxImportSource: 'solid-js/h',
        remarkPlugins: [remarkGfm]
      }),
      solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  base: "/",
});
