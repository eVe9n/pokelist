import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/pokelist/',
  test: {
    globals: true,
    enviroment: 'happy-dom',
  },
});
