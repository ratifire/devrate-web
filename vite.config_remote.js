import fs from 'fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    host: 'dev.skillzzy.com',
    port: 443,
    open: true,
    https: {
      key: fs.readFileSync('/Users/vladyslavdykyi/dev.skillzzy.com+3-key.pem'), // path to your ssl certificate key
      cert: fs.readFileSync('/Users/vladyslavdykyi/dev.skillzzy.com+3.pem'), // path to your ssl certificate key
    },
  },
  build: {
    outDir: 'build',
  },
  plugins: [react(), svgr()],
  define: {
    global: 'globalThis',
  },
});
