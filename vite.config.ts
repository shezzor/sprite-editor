import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  build: {
    target: 'esnext',
    sourcemap: true,
    outDir: 'public/dist',
  },
  plugins: [preact()],
});
