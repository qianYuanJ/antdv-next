import type { VNodeChild } from 'vue'

export type {
  OverrideTokenMap,
  TokenMap,
  TokenMapKey,
  GlobalTokenWithComponent,
  ComponentToken,
  ComponentTokenKey,
  GlobalToken,
} from './components'

export type UseComponentStyleResult = [wrapSSR: (node: VNodeChild) => VNodeChild, hashId: string]
