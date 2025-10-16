import type { VNodeChild } from 'vue'

export type AnyObject = Record<PropertyKey, any>

export type RenderNodeFn<Args extends any[] = any[]> = (...args: Args) => VNodeChild

export type EmitsType<T extends Record<string, any>> = T & {
  [key: string]: any
}

export type SlotsDefineType<T extends Record<string, any> = Record<string, any>> = {
  default?: () => any
} & T
