import type { ComputedRef } from 'vue'

import type { TimelineItemType, TimelineMode, TimelineProps } from './Timeline'
import { LoadingOutlined } from '@antdv-next/icons'
import { classNames as clsx } from '@v-c/util'
import { computed } from 'vue'
import { genCssVar } from '../theme/util/genStyleUtils'

function useItems(rootPrefixCls: ComputedRef<string>, prefixCls: ComputedRef<string>, mode: ComputedRef<TimelineMode>, items?: ComputedRef<TimelineItemType[] | undefined>, pending?: ComputedRef<TimelineProps['pending']>, pendingDot?: ComputedRef<TimelineProps['pendingDot']>) {
  // convert legacy type
  return computed(() => {
    const itemCls = `${prefixCls.value}-item`

    const [varName] = genCssVar(rootPrefixCls.value, 'cmp-steps')

    // Merge items and children
    const parseItems = computed<TimelineItemType[]>(() => {
      return items && Array.isArray(items.value)
        ? items.value
        // no children
        : []
    })

    const mergedItems = parseItems.value.map<TimelineItemType>((item, index) => {
      const {
        label,
        children,
        title,
        content,
        color,
        classes,
        style,
        icon,
        dot,
        placement,
        position,
        loading,
        ...restProps
      } = item

      let mergedStyle = style
      let mergedClassName = classes

      if (color) {
        if (['blue', 'red', 'green', 'gray'].includes(color)) {
          mergedClassName = clsx(classes, `${itemCls}-color-${color}`)
        }
        else {
          mergedStyle = {
            [varName('item-icon-dot-color')]: color,
            ...style,
          }
        }
      }

      // Placement
      const mergedPlacement
        = placement
          ?? position
          ?? (mode.value === 'alternate' ? (index % 2 === 0 ? 'start' : 'end') : mode.value)

      mergedClassName = clsx(mergedClassName, `${itemCls}-placement-${mergedPlacement}`)

      // Icon
      let mergedIcon = icon ?? dot
      if (!mergedIcon && loading) {
        mergedIcon = <LoadingOutlined />
      }

      return {
        ...restProps,
        title: title ?? label,
        content: content ?? children,
        style: mergedStyle,
        class: mergedClassName,
        icon: mergedIcon,
        status: loading ? 'process' : 'finish',
      }
    })

    if (pending?.value) {
      mergedItems.push({
        icon: pendingDot?.value ?? <LoadingOutlined />,
        content: pending.value,
        status: 'process',
      } as TimelineItemType)
    }

    return mergedItems
  })
}

export default useItems
