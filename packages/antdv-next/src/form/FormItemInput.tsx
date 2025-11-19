import type { VueNode } from '../_util/type'
import type { ColProps } from '../grid'
import type { ValidateStatus } from './FormItem'
import type { ColPropsWithClass } from './FormItemLabel.tsx'
import { clsx, get, set } from '@v-c/util'
import { filterEmpty } from '@v-c/util/dist/props-util'
import { omit } from 'es-toolkit'
import { computed, defineComponent, nextTick, shallowRef, watch } from 'vue'
import { getSlotPropsFnRun } from '../_util/tools'
import { useFormContext } from './context'

const GRID_MAX = 24

interface FormItemInputMiscProps {
  prefixCls: string
  errors: any[]
  warnings: any[]
  marginBottom?: number | null
  onErrorVisibleChanged?: (visible: boolean) => void
}

export interface FormItemInputProps {
  labelCol?: ColProps
  wrapperCol?: ColProps
  extra?: VueNode
  status?: ValidateStatus
  help?: VueNode
  fieldId?: string
  label?: VueNode
}

const FormItemInput = defineComponent<
    FormItemInputProps & FormItemInputMiscProps
>(
  (props, { slots }) => {
    const baseClassName = computed(() => `${props.prefixCls}-item`)
    const formContext = useFormContext()
    const contextClassNames = computed(() => formContext.value?.classes ?? {})
    const contextStyles = computed(() => formContext.value?.styles ?? {})

    const extraRef = shallowRef<HTMLDivElement>()
    const extraHeight = shallowRef(0)

    watch(
      () => props.extra,
      async () => {
        await nextTick()
        if (props.extra && extraRef.value) {
          extraHeight.value = extraRef.value.clientHeight
        }
        else {
          extraHeight.value = 0
        }
      },
      {
        immediate: true,
      },
    )

    const formItemContext = computed(() => {
      return {
        prefixCls: props.prefixCls,
        status: props.status,
      }
    })

    return () => {
      const { wrapperCol, labelCol } = props
      const label = getSlotPropsFnRun({}, props, 'label')
      const children = filterEmpty(slots?.default?.() ?? [])
      // const {} = f
      const mergedWrapperColFn = () => {
        let mergedWrapper: ColPropsWithClass = { ...(wrapperCol || formContext.value?.wrapperCol || {}) }
        if (label === null && !labelCol && !wrapperCol && formContext.value?.labelCol) {
          const list = [undefined, 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
          list.forEach((size) => {
            const _size = size ? [size] : []
            const formLabel = get(formContext?.value?.labelCol, _size)
            const formLabelObj = typeof formLabel === 'object' ? formLabel : {}

            const wrapper = get(mergedWrapper, _size)
            const wrapperObj = typeof wrapper === 'object' ? wrapper : {}
            if ('span' in formLabelObj && !('offset' in wrapperObj) && formLabelObj.span < GRID_MAX) {
              mergedWrapper = set(mergedWrapper, [..._size, 'offset'], formLabelObj.span)
            }
          })
          return mergedWrapper
        }
      }
      const mergedWrapperCol = mergedWrapperColFn()

      const className = clsx(`${baseClassName.value}-control`, mergedWrapperCol?.class)
      // Pass to sub FormItem should not with col info
      const subFormContext = omit(formContext.value ?? {}, ['labelCol', 'wrapperCol'])
      const inputDom = (
        <div class={`${baseClassName.value}-control-input`}>
          <div
            class={clsx(
              `${baseClassName.value}-control-input-content`,
              contextClassNames.value?.content,
            )}
            style={contextStyles.value?.content}
          >
            {children}
          </div>
        </div>
      )
      return null
    }
  },
)

export default FormItemInput
