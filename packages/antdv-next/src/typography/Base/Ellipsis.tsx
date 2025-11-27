import type { CSSProperties, SlotsType } from 'vue'
import type { EmptyEmit } from '../../_util/type'
import { filterEmpty } from '@v-c/util/dist/props-util'
import { defineComponent, Fragment, nextTick, shallowRef, watch, watchEffect } from 'vue'
import toList from '../../_util/toList'
import { isValidText } from './util'

interface MeasureTextProps {
  style?: CSSProperties
}

interface MeasureTextExpose {
  isExceed: () => boolean
  getHeight: () => number
}

const MeasureText = defineComponent<
  MeasureTextProps,
  EmptyEmit,
  string,
  SlotsType<{ default?: () => any }>
>({
  name: 'TypographyMeasureText',
  inheritAttrs: false,
  expose: ['isExceed', 'getHeight'],
  setup(props, { slots, expose }) {
    const spanRef = shallowRef<HTMLSpanElement>()

    expose({
      isExceed: () => {
        const span = spanRef.value!
        return span.scrollHeight > span.clientHeight
      },
      getHeight: () => spanRef.value?.clientHeight || 0,
    })

    return () => (
      <span
        aria-hidden
        ref={spanRef}
        style={{
          position: 'fixed',
          display: 'block',
          left: 0,
          top: 0,
          pointerEvents: 'none',
          backgroundColor: 'rgba(255, 0, 0, 0.65)',
          ...props.style,
        }}
      >
        {slots.default?.()}
      </span>
    )
  },
})

function getNodesLen(nodeList: any[]) {
  return nodeList.reduce((totalLen, node) => totalLen + (isValidText(node) ? String(node).length : 1), 0)
}

function sliceNodes(nodeList: any[], len: number) {
  let currLen = 0
  const currentNodeList: any[] = []

  for (let i = 0; i < nodeList.length; i += 1) {
    if (currLen === len) {
      return currentNodeList
    }

    const node = nodeList[i]
    const canCut = isValidText(node)
    const nodeLen = canCut ? String(node).length : 1
    const nextLen = currLen + nodeLen

    if (nextLen > len) {
      const restLen = len - currLen
      currentNodeList.push(String(node).slice(0, restLen))
      return currentNodeList
    }

    currentNodeList.push(node)
    currLen = nextLen
  }

  return nodeList
}

export interface EllipsisProps {
  enableMeasure?: boolean
  text?: any
  width: number
  rows: number
  onEllipsis: (isEllipsis: boolean) => void
  expanded: boolean
  miscDeps: any[]
}

// Measure for the `text` is exceed the `rows` or not
const STATUS_MEASURE_NONE = 0
const STATUS_MEASURE_PREPARE = 1
const STATUS_MEASURE_START = 2
const STATUS_MEASURE_NEED_ELLIPSIS = 3
const STATUS_MEASURE_NO_NEED_ELLIPSIS = 4

const lineClipStyle: CSSProperties = {
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
}

const Ellipsis = defineComponent<
  EllipsisProps,
  EmptyEmit,
  string,
  SlotsType<{
    default?: (nodeList: any[], canEllipsis: boolean) => any
  }>
>(
  (props, { slots }) => {
    const nodeList = shallowRef<any[]>([])
    watchEffect(() => {
      nodeList.value = filterEmpty(toList(props.text as any, true))
    })
    const nodeLen = shallowRef(0)
    watchEffect(() => {
      nodeLen.value = getNodesLen(nodeList.value)
    })

    const ellipsisCutIndex = shallowRef<[number, number] | null>(null)
    const cutMidRef = shallowRef<MeasureTextExpose>()

    const measureWhiteSpaceRef = shallowRef<HTMLElement>()
    const needEllipsisRef = shallowRef<MeasureTextExpose>()
    const descRowsEllipsisRef = shallowRef<MeasureTextExpose>()
    const symbolRowEllipsisRef = shallowRef<MeasureTextExpose>()

    const canEllipsis = shallowRef(false)
    const needEllipsis = shallowRef(STATUS_MEASURE_NONE)
    const ellipsisHeight = shallowRef(0)
    const parentWhiteSpace = shallowRef<CSSProperties['whiteSpace'] | null>(null)

    watch(
      () => [props.enableMeasure, props.width, nodeLen.value, props.rows],
      ([enableMeasure, width, len, rows]) => {
        if (enableMeasure && width && len && rows) {
          needEllipsis.value = STATUS_MEASURE_PREPARE
        }
        else {
          needEllipsis.value = STATUS_MEASURE_NONE
        }
      },
      { immediate: true },
    )

    watch(
      needEllipsis,
      async (status) => {
        if (status === STATUS_MEASURE_PREPARE) {
          needEllipsis.value = STATUS_MEASURE_START
          await nextTick()
          const nextWhiteSpace = measureWhiteSpaceRef.value
            ? getComputedStyle(measureWhiteSpaceRef.value).whiteSpace
            : null
          parentWhiteSpace.value = nextWhiteSpace
        }
        else if (status === STATUS_MEASURE_START) {
          await nextTick()
          const isOverflow = !!needEllipsisRef.value?.isExceed()

          needEllipsis.value = isOverflow ? STATUS_MEASURE_NEED_ELLIPSIS : STATUS_MEASURE_NO_NEED_ELLIPSIS
          ellipsisCutIndex.value = isOverflow ? [0, nodeLen.value] : null
          canEllipsis.value = isOverflow

          const baseRowsEllipsisHeight = needEllipsisRef.value?.getHeight?.() || 0
          const descRowsEllipsisHeight = props.rows === 1 ? 0 : descRowsEllipsisRef.value?.getHeight?.() || 0
          const symbolRowEllipsisHeight = symbolRowEllipsisRef.value?.getHeight?.() || 0
          const maxRowsHeight = Math.max(
            baseRowsEllipsisHeight,
            descRowsEllipsisHeight + symbolRowEllipsisHeight,
          )

          ellipsisHeight.value = maxRowsHeight + 1

          props.onEllipsis?.(isOverflow)
        }
      },
      { flush: 'post', immediate: true },
    )

    const cutMidIndex = shallowRef(0)
    watchEffect(() => {
      const range = ellipsisCutIndex.value
      if (range) {
        cutMidIndex.value = Math.ceil((range[0] + range[1]) / 2)
      }
    })

    watch(
      () => ellipsisCutIndex.value,
      async (range, prevRange) => {
        if (!range || range[0] === range[1])
          return
        await nextTick()
        const midHeight = cutMidRef.value?.getHeight?.() || 0

        const isOverflow = midHeight > ellipsisHeight.value
        let targetMidIndex = cutMidIndex.value
        if (range[1] - range[0] === 1) {
          targetMidIndex = isOverflow ? range[0] : range[1]
        }
        const nextRange: [number, number] = isOverflow
          ? [range[0], targetMidIndex]
          : [targetMidIndex, range[1]]

        if (!prevRange || nextRange[0] !== prevRange[0] || nextRange[1] !== prevRange[1]) {
          ellipsisCutIndex.value = nextRange
        }
      },
      { flush: 'post' },
    )

    return () => {
      const fullContent = slots?.default?.(nodeList.value, false)
      const finalContentFn = () => {
        // Ensure deps reactive
        props.miscDeps?.forEach(() => {})

        if (!props.enableMeasure) {
          return slots?.default?.(nodeList.value, false)
        }

        if (
          needEllipsis.value !== STATUS_MEASURE_NEED_ELLIPSIS
          || !ellipsisCutIndex.value
          || ellipsisCutIndex.value[0] !== ellipsisCutIndex.value[1]
        ) {
          const content = slots?.default?.(nodeList.value, false)
          if ([STATUS_MEASURE_NO_NEED_ELLIPSIS, STATUS_MEASURE_NONE].includes(needEllipsis.value)) {
            return content
          }
          return (
            <span
              style={{
                ...lineClipStyle,
                WebkitLineClamp: props.rows,
              }}
            >
              {content}
            </span>
          )
        }

        return slots?.default?.(
          props.expanded ? nodeList.value : sliceNodes(nodeList.value, ellipsisCutIndex.value[0]),
          canEllipsis.value,
        )
      }
      const finalContent = finalContentFn()
      const measureStyle = {
        width: `${props.width}px`,
        margin: 0,
        padding: 0,
        whiteSpace: parentWhiteSpace.value === 'nowrap' ? 'normal' : 'inherit',
      }
      return (
        <>
          {finalContent}

          {needEllipsis.value === STATUS_MEASURE_START && (
            <>
              <MeasureText
                style={{
                  ...measureStyle,
                  ...lineClipStyle,
                  WebkitLineClamp: props.rows,
                }}
                ref={needEllipsisRef as any}
              >
                {fullContent}
              </MeasureText>

              <MeasureText
                style={{
                  ...measureStyle,
                  ...lineClipStyle,
                  WebkitLineClamp: props.rows - 1,
                }}
                ref={descRowsEllipsisRef as any}
              >
                {fullContent}
              </MeasureText>

              <MeasureText
                style={{
                  ...measureStyle,
                  ...lineClipStyle,
                  WebkitLineClamp: 1,
                }}
                ref={symbolRowEllipsisRef as any}
              >
                {slots?.default?.([], true)}
              </MeasureText>
            </>
          )}

          {needEllipsis.value === STATUS_MEASURE_NEED_ELLIPSIS
            && ellipsisCutIndex.value
            && ellipsisCutIndex.value[0] !== ellipsisCutIndex.value[1]
            && (
              <MeasureText
                style={{
                  ...measureStyle,
                  top: 400,
                }}
                ref={cutMidRef as any}
              >
                {slots?.default?.(sliceNodes(nodeList.value, cutMidIndex.value), true)}
              </MeasureText>
            )}

          {needEllipsis.value === STATUS_MEASURE_PREPARE && (
            <Fragment>
              <span style={{ whiteSpace: 'inherit' }} ref={measureWhiteSpaceRef as any} />
            </Fragment>
          )}
        </>
      )
    }
  },
  {
    name: 'TypographyEllipsis',
    inheritAttrs: false,
  },
)

export default Ellipsis
