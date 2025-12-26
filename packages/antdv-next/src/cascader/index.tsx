import type { DefaultOptionType, FieldNames, SearchConfig, CascaderProps as VcCascaderProps } from '@v-c/cascader'
import type { CSSProperties } from 'vue'
import type { SemanticClassNames, SemanticClassNamesType, SemanticStyles, SemanticStylesType } from '../_util/hooks'
import type { SelectCommonPlacement } from '../_util/motion'
import type { InputStatus } from '../_util/statusUtils.ts'
import type { VueNode } from '../_util/type.ts'
import type { Variant } from '../config-provider/context.ts'
import type { SizeType } from '../config-provider/SizeContext'

export type FieldNamesType = FieldNames

export type FilledFieldNamesType = Required<FieldNamesType>

type SemanticName
  = | 'root'
    | 'prefix'
    | 'suffix'
    | 'input'
    | 'placeholder'
    | 'content'
    | 'item'
    | 'itemContent'
    | 'itemRemove'
type PopupSemantic = 'root' | 'listItem' | 'list'

function highlightKeyword(str: string, lowerKeyword: string, prefixCls?: string) {
  const cells = str
    .toLowerCase()
    .split(lowerKeyword)
    .reduce<string[]>(
      (list, cur, index) => (index === 0 ? [cur] : [...list, lowerKeyword, cur]),
      [],
    )
  const fillCells: any[] = []
  let start = 0

  cells.forEach((cell, index) => {
    const end = start + cell.length
    let originWorld: any = str.slice(start, end)
    start = end

    if (index % 2 === 1) {
      originWorld = (
        <span class={`${prefixCls}-menu-item-keyword`} key={`separator-${index}`}>
          {originWorld}
        </span>
      )
    }

    fillCells.push(originWorld)
  })

  return fillCells
}

const defaultSearchRender: SearchConfig['render'] = (inputValue, path, prefixCls, fieldNames) => {
  const optionList: any[] = []

  // We do lower here to save perf
  const lower = inputValue.toLowerCase()

  path.forEach((node, index) => {
    if (index !== 0) {
      optionList.push(' / ')
    }

    let label = node[fieldNames.label!]
    const type = typeof label
    if (type === 'string' || type === 'number') {
      label = highlightKeyword(String(label), lower, prefixCls)
    }

    optionList.push(label)
  })
  return optionList
}

export type CascaderClassNamesType = SemanticClassNamesType<
  CascaderProps,
  SemanticName,
  { popup?: SemanticClassNames<PopupSemantic> }
>

export type CascaderStylesType = SemanticStylesType<
  CascaderProps,
  SemanticName,
  { popup?: SemanticStyles<PopupSemantic> }
>

export interface CascaderProps<
  OptionType extends DefaultOptionType = DefaultOptionType,
  ValueField extends keyof OptionType = keyof OptionType,
  Multiple extends boolean = boolean,
> extends Omit<
    VcCascaderProps<OptionType, ValueField, Multiple>,
    'checkable' | 'classNames' | 'styles' | 'onChange' | 'onSearch' | 'onPopupVisibleChange'
  > {
  multiple?: Multiple
  size?: SizeType
  /**
   * @deprecated `showArrow` is deprecated which will be removed in next major version. It will be a
   *   default behavior, you can hide it by setting `suffixIcon` to null.
   */
  showArrow?: boolean
  disabled?: boolean
  /** @deprecated Use `variant` instead. */
  bordered?: boolean
  placement?: SelectCommonPlacement
  suffixIcon?: VueNode
  options?: OptionType[]
  status?: InputStatus

  rootClass?: string
  /** @deprecated Please use `classNames.popup.root` instead */
  popupClassName?: string
  /** @deprecated Please use `classNames.popup.root` instead */
  dropdownClassName?: string
  /** @deprecated Please use `styles.popup.root` instead */
  dropdownStyle?: CSSProperties
  /** @deprecated Please use `popupRender` instead */
  dropdownRender?: (menu: any) => any
  popupRender?: (menu: any) => any
  /** @deprecated Please use `popupMenuColumnStyle` instead */
  dropdownMenuColumnStyle?: CSSProperties
  popupMenuColumnStyle?: CSSProperties
  /** @deprecated Please use `onOpenChange` instead */
  onDropdownVisibleChange?: (visible: boolean) => void
  /** @deprecated Please use `onOpenChange` instead */
  onPopupVisibleChange?: (visible: boolean) => void
  onOpenChange?: (visible: boolean) => void
  /**
   * @since 5.13.0
   * @default "outlined"
   */
  variant?: Variant
  classes?: CascaderClassNamesType
  styles?: CascaderStylesType
}

export interface CascaderSlots {
  suffixIcon: () => any
}

export interface CascaderEmits {
  openChange: (visible: boolean) => void
  change: NonNullable<VcCascaderProps['onChange']>
  search: NonNullable<VcCascaderProps['onSearch']>
  [key: string]: (...args: any[]) => void
}
