import { updateCSS } from '@v-c/util/dist/Dom/dynamicCSS'

const insertedStyleKeys = new Set<string>()

export interface EnsureStyleOptions {
  key: string
  attachTo?: HTMLElement
}

export function ensureStyle(css: string, options: EnsureStyleOptions): void {
  const { key, attachTo } = options
  if (insertedStyleKeys.has(key)) {
    return
  }
  updateCSS(css, key, {
    mark: key,
    attachTo,
  })
  insertedStyleKeys.add(key)
}
