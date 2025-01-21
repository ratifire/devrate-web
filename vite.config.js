import fs from 'fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    host: 'dev.skillzzy.com',
    port: 3000,
    open: true,
    https: {
      key: fs.readFileSync('./dev.skillzzy.com+2-key.pem'),
      cert: fs.readFileSync('./dev.skillzzy.com+2.pem'),
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
