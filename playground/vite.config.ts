import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import inspect from 'vite-plugin-inspect'

import { tsxResolveTypes } from 'vite-plugin-tsx-resolve-types'
import { mdPlugin } from './plugins/markdown'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    mdPlugin(),
    tsxResolveTypes({
      defaultPropsToUndefined: true,
    }),
    vueJsx(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    inspect(),
    Unocss(),
  ],
  server: {
    port: 3322,
  },
  optimizeDeps: {
    exclude: [
      '@v-c/segmented',
      '@v-c/trigger',
      '@v-c/tooltip',
      '@v-c/util',
      '@v-c/menu',
      '@v-c/tour',
      '@v-c/input',
      '@v-c/input-number',
      '@v-c/textarea',
      '@v-c/select',
    ],
  },
  resolve: {
    alias: [
      {
        find: /^antdv-next/,
        replacement: path.resolve(baseUrl, '../packages/antdv-next/src'),
      },
      {
        find: /^@antdv-next\/cssinjs/,
        replacement: path.resolve(baseUrl, '../packages/cssinjs/src'),
      },
      // {
      //   find: /^@antdv-next\/icons/,
      //   replacement: path.resolve(baseUrl, '../packages/icons/src'),
      // },
      {
        find: '@',
        replacement: '/src',
      },
    ],
  },
})
