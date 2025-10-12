import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      resolveType: true,
    }),
  ],
  server: {
    port: 3322,
  },
  resolve: {
    alias: [
      {
        find: '@antdv-next/cssinjs',
        replacement: '../packages/cssinjs/src',
      },
      {
        find: '@',
        replacement: '/src',
      },
      {
        find: 'antdv-next',
        replacement: '../packages/antdv-next/src',
      },
    ],
  },
})
