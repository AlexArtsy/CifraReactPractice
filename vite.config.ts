import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwind from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      jsxImportSource: '@emotion/react', // Если используете Emotion (опционально)
      babel: {
        plugins: ['@emotion/babel-plugin'], // Для Emotion (опционально)
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    port: 3003,
    open: true,
    host: true, // Доступ по сети (например, для мобильных устройств)
    strictPort: true, // Завершить работу, если порт занят
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()], // Плагины через вызов функций
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Папка для статики
    sourcemap: true, // Карты кода для продакшена (можно отключить)
    chunkSizeWarningLimit: 1600, // Лимит для предупреждений о размере чанков
    rollupOptions: {
      output: {
        manualChunks: {
          // Разделение кода на чанки (опционально)
          react: ['react', 'react-dom'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Предварительно оптимизировать зависимости
  },
});
