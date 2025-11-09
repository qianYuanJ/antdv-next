import { filterEmpty } from '@v-c/util/dist/props-util'
import { defineComponent, isVNode, Transition } from 'vue'
import { getTransitionProps } from '../../_util/motion.ts'
import { useBaseConfig } from '../../config-provider/context.ts'

const MotionContent = defineComponent(
  (_, { slots }) => {
    const { getPrefixCls } = useBaseConfig()
    const rootPrefixCls = getPrefixCls()
    const visible = true
    return () => {
      const children = filterEmpty(slots?.default?.() ?? [])?.[0]
      if (!isVNode(children)) {
        return slots?.default?.()
      }

      const transitionProps = getTransitionProps(`${rootPrefixCls}-fade`)
      return (
        <Transition appear={true} {...transitionProps}>
          { visible ? children : null}
        </Transition>
      )
    }
  },
)

export default MotionContent
