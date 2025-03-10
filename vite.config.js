import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
  },
  define: {
    global: 'globalThis',
  },
  plugins: [react(), svgr()],
});
