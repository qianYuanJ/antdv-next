import { clsx } from '@v-c/util'
import { defineComponent } from 'vue'
import { getAttrStyleAndClass } from '../_util/hooks'
import { useBaseConfig } from '../config-provider/context.ts'

export interface CardGridProps {
  prefixCls?: string
  hoverable?: boolean
}

const defaultProps: CardGridProps = {
  hoverable: true,
}

const Grid = defineComponent<CardGridProps>(
  (props = defaultProps, { attrs, slots }) => {
    const { prefixCls } = useBaseConfig('card', props)
    return () => {
      const prefix = `${prefixCls.value}-grid`
      const { className, restAttrs, style } = getAttrStyleAndClass(attrs)
      const classString = clsx(prefix, className, {
        [`${prefix}-hoverable`]: props.hoverable,
      })
      return (
        <div {...restAttrs} class={classString} style={style}>
          {slots?.default?.()}
        </div>
      )
    }
  },
  {
    name: 'ACardGrid',
    inheritAttrs: false,
  },
)

export default Grid
