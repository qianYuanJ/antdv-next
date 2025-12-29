import { defineConfig } from 'tsdown'

export default defineConfig({
  fromVite: true,
  entry: 'src/index.ts',
  unbundle: true,
  format: 'es',
  clean: true,
  copy: [
    { from: 'src/style/reset.css', to: 'dist/reset.css' },
  ],
  external: [
    'vue',
    '@antdv-next/icon',
  ],
})
