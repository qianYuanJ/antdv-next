import type { LiteralUnion } from '@v-c/util/dist/type'
import type { App, CSSProperties, SlotsType, VNode } from 'vue'
import type { PresetStatusColorType } from '../_util/colors.ts'
import type { VueNode } from '../_util/type.ts'
import type { ComponentBaseProps } from '../config-provider/context.ts'
import type { PresetColorKey } from '../theme/interface'
import type { RibbonProps } from './Ribbon.tsx'
import { classNames } from '@v-c/util'
import { filterEmpty } from '@v-c/util/dist/props-util'
import { cloneVNode, computed, defineComponent, shallowRef, Transition, watchEffect } from 'vue'
import { isPresetColor } from '../_util/colors.ts'
import { getTransitionProps } from '../_util/motion.ts'
import { getSlotPropsFnRun } from '../_util/tools.ts'
import { useConfig } from '../config-provider/context.ts'
import Ribbon from './Ribbon.tsx'
import ScrollNumber from './ScrollNumber.tsx'

import useStyle from './style'

type SemanticName = 'root' | 'indicator'

export interface BadgeProps extends ComponentBaseProps {
  /** Number to show in badge */
  count?: VueNode
  showZero?: boolean
  /** Max count to show */
  overflowCount?: number
  /** Whether to show red dot without number */
  dot?: boolean
  scrollNumberPrefixCls?: string
  status?: PresetStatusColorType
  color?: LiteralUnion<PresetColorKey>
  text?: VueNode
  size?: 'default' | 'small'
  offset?: [number | string, number | string]
  title?: string
  classes?: Partial<Record<SemanticName, string>>
  styles?: Partial<Record<SemanticName, CSSProperties>>
}

export interface BadgeSlots {
  default?: () => any
  count?: () => any
  text?: () => any
}

const defaultProps = {
  count: null,
  overflowCount: 99,
  size: 'default',
} as BadgeProps

const InternalBadge = defineComponent<
  BadgeProps,
  Record<string, any>,
  string,
  SlotsType<BadgeSlots>
>(
  (props = defaultProps, { slots, attrs, expose }) => {
    const configContext = useConfig()
    const prefixCls = computed(() => configContext.value.getPrefixCls('badge', props.prefixCls))
    const badgeRef = shallowRef<HTMLSpanElement>()
    expose({ badgeRef })
    const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls.value)

    const numberedDisplayCount = computed(() => {
      const { count, overflowCount } = props
      return ((count as number) > (overflowCount as number) ? `${overflowCount}+` : count) as string | number | null
    })

    const isZero = computed(() => numberedDisplayCount.value === '0' || numberedDisplayCount.value === 0 || props.text === '0' || props.text === 0)
    const countNodes = computed(() => {
      const result = getSlotPropsFnRun(slots, props, 'count')
      if (!result) {
        return [] as VueNode[]
      }
      return Array.isArray(result) ? result : [result]
    })
    const textNodes = computed(() => {
      const result = getSlotPropsFnRun(slots, props, 'text')
      if (!result) {
        return [] as VueNode[]
      }
      return Array.isArray(result) ? result : [result]
    })
    const ignoreCount = computed(() => props.count === null || (isZero.value && !props.showZero))
    const hasStatus = computed(() => {
      const { status, color } = props
      return ((status !== null && status !== undefined) || (color !== null && color !== undefined)) && ignoreCount.value
    })
    const hasStatusValue = computed(() => (props.status !== null && props.status !== undefined) || !isZero.value)
    const showAsDot = computed(() => props.dot && !isZero.value)

    const mergedCount = computed(() => (showAsDot.value ? '' : numberedDisplayCount.value))
    const isHidden = computed(() => {
      const textEmpty = textNodes.value.length === 0 && (props.text === undefined || props.text === null || props.text === '')
      const isEmptyCount = (mergedCount.value === null || mergedCount.value === undefined || mergedCount.value === '') && countNodes.value.length === 0
      return (isEmptyCount || (isZero.value && !props.showZero)) && !showAsDot.value && textEmpty
    })

    const displayCountRef = shallowRef(mergedCount.value)
    const countCacheRef = shallowRef<VueNode | null>(props.count ?? null)
    const isDotRef = shallowRef(showAsDot.value)

    const mergedOffsetStyles = computed(() => {
      const styleList: CSSProperties[] = []
      const { offset } = props
      if (offset) {
        const horizontal = offset[0]
        const vertical = offset[1]
        const offsetStyle: CSSProperties = {
          marginTop: vertical as any,
        }
        const horizontalValue = typeof horizontal === 'number' ? horizontal : Number.parseInt(horizontal as string, 10)
        if (configContext.value.direction === 'rtl') {
          offsetStyle.left = horizontalValue
        }
        else {
          offsetStyle.right = -horizontalValue
        }
        styleList.push(offsetStyle)
      }
      if (configContext.value.badge?.style) {
        styleList.push(configContext.value.badge.style)
      }
      return styleList
    })

    watchEffect(() => {
      if (!isHidden.value) {
        displayCountRef.value = mergedCount.value
      }
    })

    watchEffect(() => {
      if (!isHidden.value) {
        countCacheRef.value = countNodes.value[0] ?? null
      }
    })

    watchEffect(() => {
      if (!isHidden.value) {
        isDotRef.value = showAsDot.value
      }
    })

    const displayCount = computed(() => displayCountRef.value)
    const isInternalColor = computed(() => isPresetColor(props.color, false))

    return () => {
      const { class: attrClass, style: attrStyle, ...restAttrs } = attrs
      const children = filterEmpty(slots.default?.() ?? [])
      let livingCount = countCacheRef.value
      if (typeof livingCount === 'function') {
        livingCount = livingCount()
      }
      const titleNode = props.title ?? (typeof livingCount === 'string' || typeof livingCount === 'number' ? livingCount : undefined)
      const hasTextSlot = textNodes.value.length > 0
      const showStatusTextNode = !isHidden.value && (hasTextSlot ? true : (props.text === 0 ? props.showZero : !!props.text && props.text !== true))

      const statusCls = classNames(
        props.classes?.indicator,
        configContext.value.badge?.classes?.indicator,
        {
          [`${prefixCls.value}-status-dot`]: hasStatus.value,
          [`${prefixCls.value}-status-${props.status}`]: !!props.status,
          [`${prefixCls.value}-color-${props.color}`]: isInternalColor.value,
        },
      )

      const badgeClassName = classNames(
        prefixCls.value,
        {
          [`${prefixCls.value}-status`]: hasStatus.value,
          [`${prefixCls.value}-not-a-wrapper`]: children.length === 0,
          [`${prefixCls.value}-rtl`]: configContext.value.direction === 'rtl',
        },
        configContext.value.badge?.class,
        configContext.value.badge?.classes?.root,
        props.classes?.root,
        props.rootClass,
        hashId,
        cssVarCls,
        attrClass as any,
      )

      const indicatorStyleList: CSSProperties[] = [
        configContext.value.badge?.styles?.indicator,
        props.styles?.indicator,
      ].filter(Boolean) as CSSProperties[]

      const rootStyleListBase: CSSProperties[] = [
        configContext.value.badge?.styles?.root,
        props.styles?.root,
      ].filter(Boolean) as CSSProperties[]

      const statusStyle: CSSProperties = {}
      if (props.color && !isInternalColor.value) {
        statusStyle.background = props.color
        statusStyle.color = props.color
      }

      const renderStatusText = (style?: CSSProperties) => {
        if (!showStatusTextNode) {
          return null
        }
        return (
          <span class={`${prefixCls.value}-status-text`} style={style}>
            {hasTextSlot ? textNodes.value : props.text}
          </span>
        )
      }

      if (!children.length && hasStatus.value && (showStatusTextNode || hasStatusValue.value || !ignoreCount.value)) {
        const rootStyleList = [...rootStyleListBase, ...mergedOffsetStyles.value, attrStyle].filter(Boolean) as CSSProperties[]
        const mergedRootStyle = Object.assign({}, ...rootStyleList)
        const statusIndicatorStyleList = [...indicatorStyleList, statusStyle].filter(Boolean) as CSSProperties[]
        return wrapCSSVar(
          <span
            {...restAttrs}
            ref={badgeRef}
            class={badgeClassName}
            style={rootStyleList.length ? rootStyleList : undefined}
          >
            <span
              class={statusCls}
              style={statusIndicatorStyleList.length ? Object.assign({}, ...statusIndicatorStyleList) : undefined}
            />
            {renderStatusText(mergedRootStyle.color ? { color: mergedRootStyle.color } : undefined)}
          </span>,
        )
      }

      const mergedIndicatorStyleList = [
        ...indicatorStyleList,
        ...mergedOffsetStyles.value,
        attrStyle,
      ].filter(Boolean) as CSSProperties[]
      const indicatorStyle = Object.assign({}, ...mergedIndicatorStyleList)
      if (props.color && !isInternalColor.value) {
        indicatorStyle.background = props.color
      }

      const scrollNumberCls = classNames(
        props.classes?.indicator,
        configContext.value.badge?.classes?.indicator,
        {
          [`${prefixCls.value}-dot`]: isDotRef.value,
          [`${prefixCls.value}-count`]: !isDotRef.value,
          [`${prefixCls.value}-count-sm`]: props.size === 'small',
          [`${prefixCls.value}-multiple-words`]: !isDotRef.value && displayCount.value && displayCount.value.toString().length > 1,
          [`${prefixCls.value}-status-${props.status}`]: !!props.status,
          [`${prefixCls.value}-color-${props.color}`]: isInternalColor.value,
        },
      )

      const scrollNumberPrefixCls = configContext.value.getPrefixCls('scroll-number', props.scrollNumberPrefixCls)

      const rootStyle = rootStyleListBase.length ? rootStyleListBase : undefined

      const livingVNode = (livingCount && typeof livingCount === 'object') ? livingCount as VNode : null
      const clonedNode = livingVNode
        ? cloneVNode(livingVNode, {
            style: [
              ...mergedOffsetStyles.value,
              attrStyle,
              (livingVNode.props && (livingVNode.props as any).style) || undefined,
            ].filter(Boolean),
          })
        : undefined

      return wrapCSSVar(
        <span
          {...restAttrs}
          ref={badgeRef}
          class={badgeClassName}
          style={rootStyle}
        >
          {children}
          <Transition
            {
              ...getTransitionProps(`${prefixCls.value}-zoom`, { appear: false })
            }
          >
            {{
              default: () => (!isHidden.value
                ? (
                    <ScrollNumber
                      key="scrollNumber"
                      prefixCls={scrollNumberPrefixCls}
                      show={!isHidden.value}
                      class={scrollNumberCls}
                      count={displayCount.value}
                      title={titleNode}
                      style={indicatorStyle}
                    >
                      {clonedNode}
                    </ScrollNumber>
                  )
                : null),
            }}
          </Transition>
          {renderStatusText()}
        </span>,
      )
    }
  },
  {
    name: 'ABadge',
    inheritAttrs: false,
  },
)

const Badge = InternalBadge as typeof InternalBadge & {
  Ribbon: typeof Ribbon
}

Badge.Ribbon = Ribbon

;(Badge as any).install = (app: App) => {
  app.component(InternalBadge.name, Badge)
  app.component(Ribbon.name, Ribbon)
}

export default Badge

export type BadgeRibbonProps = RibbonProps
