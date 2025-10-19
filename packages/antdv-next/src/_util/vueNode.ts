import type { VNodeChild } from 'vue'
import type { AnyObject } from './type.ts'
import { isFragment } from '@v-c/util/dist/Children/isFragment'
import { cloneVNode, isVNode } from 'vue'

export {
  isFragment,
}

type RenderProps = AnyObject | ((originProps: AnyObject) => AnyObject | undefined)

export function replaceElement(element: VNodeChild, replacement: VNodeChild, props?: RenderProps) {
  if (!isVNode(element)) {
    return replacement
  }
  return cloneVNode(element, typeof props === 'function' ? props(element.props || {}) : props)
}

export function cloneElement(element: VNodeChild, props?: RenderProps) {
  return replaceElement(element, element, props)
}
