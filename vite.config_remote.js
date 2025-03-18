import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

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
  resolve: {
    alias: {
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@hooks': path.resolve(__dirname, 'src/utils/hooks'),
    },
  },
  define: {
    global: 'globalThis',
  },
});
