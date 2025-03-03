import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:8081', // Проксируем API на Express
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../server/public'), // Выход в server/public
    emptyOutDir: true, // Очищает public перед билдом
  },
})