import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3001,
    open: true, // Автоматически открывать браузер
  },
  build: {
    outDir: 'dist', // Папка для сборки
  },
});
