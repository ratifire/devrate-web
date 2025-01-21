import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
  },
  plugins: [react(), svgr()],
  define: {
    global: 'globalThis',
  },
});
