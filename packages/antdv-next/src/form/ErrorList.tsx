import type { CSSProperties } from 'vue'
import type { VueNode } from '../_util/type'
import type { ValidateStatus } from './FormItem'
import { clsx } from '@v-c/util'
import { getTransitionGroupProps, getTransitionProps } from '@v-c/util/dist/utils/transition'
import { computed, defineComponent, Transition, TransitionGroup } from 'vue'
import { getAttrStyleAndClass } from '../_util/hooks'
import isNonNullable from '../_util/isNonNullable.ts'
import initCollapseMotion from '../_util/motion.ts'
import { getSlotPropsFnRun } from '../_util/tools.ts'
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls'
import { useFormItemPrefixContext } from './context'
import useStyle from './style'

const EMPTY_LIST: any[] = []

interface ErrorEntity {
  error: any
  errorStatus?: string
  key: string
  class?: string
  style?: CSSProperties
}

function toErrorEntity(
  error: any,
  prefix: string,
  errorStatus?: string,
  index = 0,
): ErrorEntity {
  return {
    key: typeof error === 'string' ? error : `${prefix}-${index}`,
    error,
    errorStatus,
  }
}

export interface ErrorListProps {
  fieldId?: string
  help?: VueNode
  helpStatus?: ValidateStatus
  errors?: any[]
  warnings?: any[]
  onVisibleChanged?: (visible: boolean) => void
}

const ErrorList = defineComponent<
  ErrorListProps
>(
  (props, { attrs }) => {
    const formItemPrefixContext = useFormItemPrefixContext()
    const prefixCls = computed(() => formItemPrefixContext.value?.prefixCls ?? '')
    const baseClassName = computed(() => `${prefixCls.value}-item-explain`)
    const rootCls = useCSSVarCls(prefixCls)
    const [hashId, cssVarCls] = useStyle(prefixCls, rootCls)

    // We have to debounce here again since somewhere use ErrorList directly still need no shaking
    // ref: https://github.com/ant-design/ant-design/issues/36336
    return () => {
      const {
        fieldId,
        errors,
        warnings,
        helpStatus,
      } = props
      const help = getSlotPropsFnRun({}, props, 'help')

      const debounceErrors = errors || EMPTY_LIST
      const debouncedWarnings = warnings || EMPTY_LIST
      const fullKeyListFn = () => {
        if (isNonNullable(help)) {
          return [toErrorEntity(help, 'help', helpStatus)]
        }
        return [
          ...debounceErrors.map((error, index) => toErrorEntity(error, 'error', 'error', index)),
          ...debouncedWarnings.map((warning, index) =>
            toErrorEntity(warning, 'warning', 'warning', index),
          ),
        ]
      }
      const fullKeyList = fullKeyListFn()

      const filledKeyFullKeyListFn = () => {
        const keysCount: Record<string, number> = {}
        fullKeyList.forEach(({ key }) => {
          keysCount[key] = (keysCount[key] || 0) + 1
        })
        return fullKeyList.map((entity, index) => ({
          ...entity,
          // @ts-expect-error this key generation is fine
          key: keysCount[entity.key] > 1 ? `${entity.key}-fallback-${index}` : entity.key,
        }))
      }
      const filledKeyFullKeyList = filledKeyFullKeyListFn() as ErrorEntity[]

      const helpProps: { id?: string } = {}

      if (fieldId) {
        helpProps.id = `${fieldId}_help`
      }

      const transitionProps = getTransitionProps(`${prefixCls.value}-show-help`)
      const transitionGroupProps = getTransitionGroupProps(
        `${prefixCls.value}-show-help-item`,
      )
      const { className: rootClassName } = getAttrStyleAndClass(attrs)
      const collapseMotion = initCollapseMotion(prefixCls.value)
      const mergedTransitionProps = {
        ...collapseMotion,
        ...transitionGroupProps,
        class: clsx(
          baseClassName.value,
          cssVarCls.value,
          rootCls.value,
          rootClassName,
          hashId.value,
        ),
      }
      return (
        <Transition
          {...transitionProps}
          onAfterEnter={() => props.onVisibleChanged?.(true)}
          onAfterLeave={() => props.onVisibleChanged?.(false)}
        >
          <TransitionGroup
            {...mergedTransitionProps}
            v-show={!!filledKeyFullKeyList.length}
            tag="div"
          >
            {filledKeyFullKeyList.map((itemProps) => {
              const { key, error, errorStatus, class: itemClassName, style: itemStyle } = itemProps
              return (
                <div
                  key={key}
                  class={clsx(
                    itemClassName,
                    {
                      [`${baseClassName.value}-${errorStatus}`]: !!errorStatus,
                    },
                  )}
                  style={itemStyle}
                >
                  {error}
                </div>
              )
            })}
          </TransitionGroup>
        </Transition>
      )
    }
  },
  {
    name: 'FormErrorList',
    inheritAttrs: false,
  },
)

export default ErrorList
