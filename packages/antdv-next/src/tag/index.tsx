import type { LiteralUnion } from '@v-c/util/dist/type'
import type { App, CSSProperties, SlotsType } from 'vue'
import type { PresetColorType, PresetStatusColorType } from '../_util/colors.ts'
import type { ClosableType } from '../_util/hooks/useClosable.tsx'
import type { EmitsType, VueNode } from '../_util/type.ts'
import type { ComponentBaseProps } from '../config-provider/context.ts'
import { classNames } from '@v-c/util'
import { computed, defineComponent, getCurrentInstance, shallowRef } from 'vue'
import { isPresetColor, isPresetStatusColor } from '../_util/colors.ts'
import { useConfig } from '../config-provider/context.ts'
import CheckableTag from './CheckableTag.tsx'
import useStyle from './style'

export type { CheckableTagProps } from './CheckableTag.tsx'
type SemanticName = 'root'

export interface TagProps extends ComponentBaseProps {
  color?: LiteralUnion<PresetColorType | PresetStatusColorType>
  /** Advised to use closeIcon instead. */
  closable?: ClosableType
  closeIcon?: VueNode | boolean
  icon?: VueNode
  bordered?: boolean
  styles?: Partial<Record<SemanticName, CSSProperties>>
  classes?: Partial<Record<SemanticName, string>>
}

export interface TagSlots {
  default?: () => any
  icon?: () => any
  closeIcon?: () => any
}

export type TagEmits = EmitsType<{
  close?: (ev: MouseEvent) => void
  click?: (ev: MouseEvent) => void
}>

const defaultProps: Partial<TagProps> = {
  bordered: true,
}
const InternalTag = defineComponent<
  TagProps,
  TagEmits,
  string,
  SlotsType<TagSlots>
>(
  (props = defaultProps, { slots, attrs, emit, expose }) => {
    const configContext = useConfig()
    const prefixCls = computed(() => configContext.value.getPrefixCls('tag', props.prefixCls))
    const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls)
    const instance = getCurrentInstance()
    const tagRef = shallowRef<HTMLElement>()
    expose({ tagRef })

    const handleInternalClick = (e: MouseEvent) => {
      emit('click', e)
    }

    const handleCloseClick = (e: MouseEvent) => {
      e.stopPropagation()
      emit('close', e)
    }

    return () => {
      const {
        color,
      } = props
      const tagContext = configContext.value.tag
      const isPreset = isPresetColor(color)
      const isStatus = isPresetStatusColor(color)
      const isInternalColor = isPreset || isStatus
      const tagStyle: CSSProperties[] = [{
        backgroundColor: color && !isInternalColor ? color : undefined,
      }, tagContext?.style].filter(Boolean)

      // Style
      const tagClassName = classNames(
        prefixCls.value,
        tagContext?.class,
        {
          [`${prefixCls.value}-${color}`]: isInternalColor,
          [`${prefixCls.value}-has-color`]: color && !isInternalColor,
          // [`${prefixCls.value}-hidden`]: !visible,
          [`${prefixCls.value}-rtl`]: configContext.value.direction === 'rtl',
          [`${prefixCls.value}-borderless`]: !props.bordered,
        },
        tagContext?.class,
        hashId.value,
        cssVarCls.value,
        (attrs as any).class,
      )

      return null
    }
  },
  {
    name: 'ATag',
    inheritAttrs: false,
  },
)

const Tag = InternalTag as typeof InternalTag & {
  CheckableTag: typeof CheckableTag
}

Tag.CheckableTag = CheckableTag

;(Tag as any).install = (app: App) => {
  app.component(InternalTag.name, Tag)
  app.component(CheckableTag.name, CheckableTag)
}

export default Tag
