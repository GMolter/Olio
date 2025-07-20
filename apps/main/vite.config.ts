import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // relative to apps/main
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'), // ✅ this works now
    },
  },
});
