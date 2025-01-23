import fs from 'fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: 'dev.skillzzy.com',
    port: 443,
    open: true,
    https: {
      key: fs.readFileSync('C:\\Windows\\System32\\dev.skillzzy.com+3-key.pem'),
      cert: fs.readFileSync('C:\\Windows\\System32\\dev.skillzzy.com+3.pem'),
    },
  },
  build: {
    outDir: 'build',
  },
  plugins: [react(), svgr()],
});
