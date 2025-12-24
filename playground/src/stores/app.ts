import { defineStore } from 'pinia'
import { menusMap } from '@/config/menu'

export interface AppState {
  headerKey: string[]
  siderKey: string[]
  siderOpenKeys: string[]
  locale: 'zh-CN' | 'en-US'
}

export const useAppStore = defineStore('app', {
  state: (): AppState => {
    return {
      headerKey: [],
      siderKey: [],
      siderOpenKeys: [],
      locale: 'zh-CN',
    }
  },
  actions: {
    setHeaderKey(keys: string[]) {
      this.headerKey = keys
    },
    setSiderKey(keys: string[]) {
      this.siderKey = keys
    },
    setSiderOpenKeys(keys: string[]) {
      this.siderOpenKeys = keys
    },
    setLocale(locale: AppState['locale']) {
      this.locale = locale
    },
  },
  getters: {
    siderMenus(store) {
      const currentKey = store.headerKey[0]
      if (!currentKey) {
        return []
      }
      const currentMenus = menusMap[currentKey]
      if (currentMenus) {
        return currentMenus.menus
      }
      return []
    },
  },
})
