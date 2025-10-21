import type { SlotsType } from 'vue'
import type { EmitsType, VueNode } from '../_util/type.ts'
import type { ComponentBaseProps } from '../config-provider/context.ts'
import { classNames } from '@v-c/util'
import { computed, defineComponent } from 'vue'
import { getSlotPropsFnRun } from '../_util/tools.ts'
import { useConfig } from '../config-provider/context.ts'
import useStyle from './style'

export interface CheckableTagProps extends ComponentBaseProps {
  /**
   * It is an absolute controlled component and has no uncontrolled mode.
   *
   * .zh-cn 该组件为完全受控组件，不支持非受控用法。
   */
  checked: boolean
  /**
   * @since 5.27.0
   */
  icon?: VueNode
}

export type CheckableTagEmits = EmitsType<{
  change: (checked: boolean) => void
  click: (e: MouseEvent) => void
}>

export interface CheckableTagSlots {
  default: () => any
  icon: () => any

}

const CheckableTag = defineComponent<
  CheckableTagProps,
  CheckableTagEmits,
  string,
  SlotsType<CheckableTagSlots>
>(
  (props, { slots, emit, attrs }) => {
    const configCtx = useConfig()
    const handleClick = (e: MouseEvent) => {
      emit('click', e)
      emit('change', !props.checked)
    }
    const prefixCls = computed(() => configCtx.value.getPrefixCls('tag', props.prefixCls))
    const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls.value)

    return () => {
      const tag = configCtx.value.tag
      const { checked } = props
      const cls = classNames(
        prefixCls.value,
        `${prefixCls.value}-checkable`,
        {
          [`${prefixCls.value}-checkable-checked`]: checked,
        },
        tag?.class,
        hashId,
        cssVarCls,
      )
      const icon = getSlotPropsFnRun(slots, props, 'icon')

      return wrapCSSVar(
        <span
          {...attrs}
          style={tag?.style}
          class={cls}
          onClick={handleClick}
        >
          {icon}
          <span>{slots?.default?.()}</span>
        </span>,
      )
    }
  },
  {
    name: 'ACheckableTag',
    inheritAttrs: false,
  },
)

export default CheckableTag
