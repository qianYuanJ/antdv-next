import type { SlotsType } from 'vue'
import type { EmitsType, SlotsDefineType } from '../_util/type.ts'
import type { ComponentBaseProps } from '../config-provider/context.ts'
import { defineComponent, shallowRef } from 'vue'

export interface BackTopProps extends ComponentBaseProps {
  visibilityHeight?: number
  target?: () => HTMLElement | Window | Document
  duration?: number
}

const defaultProps: BackTopProps = {
  visibilityHeight: 400,
  duration: 450,
}

export type BackTopEmits = EmitsType<{
  click: (e: MouseEvent) => void
}>

export type BackTopSlots = SlotsDefineType
const BackTop = defineComponent<
  BackTopProps,
  BackTopEmits,
  string,
  SlotsType<BackTopSlots>
>(
  (props = defaultProps, { attrs }) => {
    const visible = shallowRef(props.visibilityHeight === 0)
    const domRef = shallowRef<HTMLDivElement>()

    const getDefaultTarget = (): HTMLElement | Document | Window =>
      domRef.value?.ownerDocument || window
    return () => {
      return <div ref={domRef} {...attrs}></div>
    }
  },
  {
    name: 'ABackTop',
    inheritAttrs: false,
  },
)

export default BackTop
