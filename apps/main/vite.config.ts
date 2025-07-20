import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: './apps/main', // 👈 tell Vite where the actual app root is
  build: {
    outDir: '../../dist', // ⬅ so the dist isn't inside apps/main
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'apps/main/index.html'),
    },
  },
});
