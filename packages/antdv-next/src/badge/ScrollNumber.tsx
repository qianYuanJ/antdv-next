import type { CSSProperties, SlotsType } from 'vue'
import { classNames } from '@v-c/util'
import { filterEmpty } from '@v-c/util/dist/props-util'
import { cloneVNode, computed, defineComponent } from 'vue'
import { useConfig } from '../config-provider/context.ts'
import SingleNumber from './SingleNumber.tsx'

export interface ScrollNumberProps {
  prefixCls?: string
  count?: string | number | null
  component?: string | object
  title?: string | number | null
  show: boolean
}

export interface ScrollNumberSlots {
  default?: () => any
}

export default defineComponent<
  ScrollNumberProps,
  Record<string, any>,
  string,
  SlotsType<ScrollNumberSlots>
>(
  (props, { slots, attrs }) => {
    const configContext = useConfig()
    const prefixCls = computed(() => configContext.value.getPrefixCls('scroll-number', props.prefixCls))

    return () => {
      const { component = 'sup', count, show, title } = props
      const { class: attrClass, style: attrStyle, ...restAttrs } = attrs as any
      const children = filterEmpty(slots.default?.() ?? [])

      const styleWithBorder = attrStyle?.borderColor
        ? {
            ...attrStyle,
            boxShadow: `0 0 0 1px ${attrStyle.borderColor} inset`,
          }
        : attrStyle
      const mergedStyleList = [styleWithBorder, attrStyle].filter(Boolean) as CSSProperties[]

      if (children.length) {
        const child = children[0]
        return cloneVNode(child, {
          class: classNames(`${prefixCls.value}-custom-component`, child.props?.class, attrClass as any),
        })
      }

      let numberNodes: any = count
      const numericValue = Number(count)
      if (count !== null && count !== undefined && !Number.isNaN(numericValue) && numericValue % 1 === 0) {
        const numberList = String(count).split('')
        numberNodes = (
          <bdi>
            {numberList.map((num, index) => (
              <SingleNumber
                key={numberList.length - index}
                prefixCls={prefixCls.value}
                value={num}
                count={numericValue}
              />
            ))}
          </bdi>
        )
      }

      const ComponentTag = component as any

      return (
        <ComponentTag
          {...restAttrs}
          data-show={show}
          class={classNames(prefixCls.value, attrClass)}
          style={mergedStyleList.length ? mergedStyleList : undefined}
          title={title as any}
        >
          {numberNodes}
        </ComponentTag>
      )
    }
  },
  {
    name: 'AScrollNumber',
    inheritAttrs: false,
  },
)
