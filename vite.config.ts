import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    sourcemap: true,
  },
  plugins: [solidPlugin(), tsconfigPaths()],
});
