import type { App, Plugin } from 'vue'
import type { SizeType } from './config-provider/SizeContext'
import * as components from './components'
import version from './version'

export type {
  SizeType,
}
export { useResponsive } from './_util/hooks/useResponsive'
let prefix = 'A'
export * from './components'
export default {
  setPrefix(newPrefix: string) {
    prefix = newPrefix
  },
  install(app: App) {
    app.config.globalProperties._ant_prefix = prefix
    Object.keys(components).forEach((key) => {
      const component = (components as any)[key]
      if ('install' in component) {
        app.use(component)
      }
    })
  },
  version,
} as Plugin

export { useBreakpoint } from './grid'

export { default as theme } from './theme'

export {
  version,
}
