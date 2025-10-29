import type { LiteralUnion } from '@v-c/util/dist/type'
import type { App, CSSProperties, SlotsType } from 'vue'
import type { PresetColorType, PresetStatusColorType } from '../_util/colors.ts'
import type { ClosableType } from '../_util/hooks/useClosable.tsx'
import type { EmitsType, VueNode } from '../_util/type.ts'
import type { ComponentBaseProps } from '../config-provider/context.ts'
import { classNames } from '@v-c/util'
import { filterEmpty } from '@v-c/util/dist/props-util'
import { computed, defineComponent, shallowRef } from 'vue'
import { isPresetColor, isPresetStatusColor } from '../_util/colors.ts'
import useClosable, { pickClosable } from '../_util/hooks/useClosable.tsx'
import { getSlotPropsFnRun } from '../_util/tools.ts'
import { replaceElement } from '../_util/vueNode.ts'
import Wave from '../_util/wave'
import { useConfig } from '../config-provider/context.ts'
import CheckableTag from './CheckableTag.tsx'
import useStyle from './style'
import PresetCmp from './style/presetCmp.ts'
import StatusCmp from './style/statusCmp.ts'

export type { CheckableTagProps } from './CheckableTag.tsx'
type SemanticName = 'root'

export interface TagProps extends ComponentBaseProps {
  color?: LiteralUnion<PresetColorType | PresetStatusColorType>
  /** Advised to use closeIcon instead. */
  closable?: ClosableType
  closeIcon?: VueNode
  icon?: VueNode
  onClick?: (e: MouseEvent) => void
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
}>

const defaultProps: Partial<TagProps> = {
  bordered: true,
  closable: undefined,
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
    const tagRef = shallowRef<HTMLElement>()
    expose({ tagRef })

    const handleCloseClick = (e: MouseEvent) => {
      e.stopPropagation()
      emit('close', e)
    }

    const closableInfo = useClosable(
      pickClosable(computed(() => ({ ...props, closeIcon: getSlotPropsFnRun(slots, props, 'closeIcon') }) as unknown as any)) as any,
      pickClosable(computed(() => configContext.value.tag as any)) as any,
      computed(() => {
        return {
          closable: false,
          closeIconRender(iconNode) {
            const replacement = (
              <span class={`${prefixCls.value}-close-icon`} onClick={handleCloseClick}>{iconNode}</span>
            )
            return replaceElement(iconNode, replacement, (originProps) => {
              return {
                onClick(e: MouseEvent) {
                  originProps?.onClick?.(e)
                  handleCloseClick(e)
                },
                class: classNames(originProps?.class, `${prefixCls.value}-close-icon`),
              }
            })
          },
        }
      }),
    )

    return () => {
      const {
        color,
      } = props
      const tagContext = configContext.value.tag
      const isPreset = isPresetColor(color)
      const isStatus = isPresetStatusColor(color)
      const isInternalColor = isPreset || isStatus
      const tagStyle: any[] = [{
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
      const children = filterEmpty(slots?.default?.())[0]
      const isNeedWave = children.type === 'a' || props.onClick
      const iconNodes = getSlotPropsFnRun(slots, props, 'icon')
      const kids = iconNodes
        ? (
            <>
              {iconNodes}
              {children && <span>{children}</span>}
            </>
          )
        : children
      const mergedCloseIcon = closableInfo.value?.[1]
      const tagNode = (
        <span {...attrs} class={tagClassName} style={tagStyle} onClick={props.onClick}>
          {kids}
          {mergedCloseIcon}
          {isPreset && <PresetCmp key="preset" prefixCls={prefixCls.value} />}
          {isStatus && <StatusCmp key="status" prefixCls={prefixCls.value} />}
        </span>
      )
      return wrapCSSVar(isNeedWave ? <Wave component="Tag">{tagNode}</Wave> : tagNode)
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
export {
  CheckableTag,
}

export default Tag
