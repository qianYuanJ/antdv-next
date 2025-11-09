import type { BuildInPlacements, UniqueProviderProps } from '@v-c/trigger'
import { UniqueProvider as VcUniqueProvider } from '@v-c/trigger'
import { defineComponent } from 'vue'
import { getSlotPropsFnRun } from '../../_util/tools.ts'
import MotionContent from './MotionContent.tsx'

const cachedPlacements: [key: BuildInPlacements, target: BuildInPlacements] = [null!, null!]

function uniqueBuiltinPlacements(ori: BuildInPlacements): BuildInPlacements {
  if (cachedPlacements[0] !== ori) {
    const target: BuildInPlacements = {}
    Object.keys(ori).forEach((placement) => {
      target[placement] = {
        ...ori[placement],
        dynamicInset: false,
      }
    })
    cachedPlacements[0] = ori
    cachedPlacements[1] = target
  }
  return cachedPlacements[1]
}

const UniqueProvider = defineComponent(
  (_, { slots }) => {
    const renderPopup: UniqueProviderProps['postTriggerProps'] = (options) => {
      const popupEle = getSlotPropsFnRun({}, options, 'popup')
      const { id, builtinPlacements } = options
      const parsedPlacements = uniqueBuiltinPlacements(builtinPlacements!)
      return {
        ...options,
        getPopupContainer: null!,
        arrow: false as any,
        popup: <MotionContent key={id}>{popupEle}</MotionContent>,
        builtinPlacements: parsedPlacements,
      }
    }
    return () => {
      return (
        <VcUniqueProvider postTriggerProps={renderPopup}>
          {slots?.default?.()}
        </VcUniqueProvider>
      )
    }
  },
  {
    name: 'AUniqueProvider',
  },
)

export default UniqueProvider
