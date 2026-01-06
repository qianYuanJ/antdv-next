---
category: Components
group: Data Entry
title: Select
description: A dropdown menu for displaying choices.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*qGSbQJ0POEsAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*a6ggRInInJ4AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

## Examples {#examples}

<demo-group>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| placement | The position where the selection box pops up | SelectCommonPlacement | bottomLeft | - |
| mode | Set mode of Select | 'multiple' \| 'tags' | - | - |
| status | Set validation status | InputStatus | - | 4.19.0 |
| popupClassName | The className of dropdown menu, use `classNames.popup.root` instead | string | - | 4.23.0 |
| dropdownClassName | Deprecated. | string | - | - |
| dropdownStyle | The style of dropdown menu, use `styles.popup.root` instead | CSSProperties | - | - |
| dropdownRender | Customize dropdown content, use `popupRender` instead | SelectProps['popupRender'] | - | - |
| dropdownMatchSelectWidth | Deprecated. | boolean \| number | - | - |
| popupMatchSelectWidth | Determine whether the popup menu and the select input are the same width. Default set `min-width` same as input. Will ignore when value less than select width. `false` will disable virtual scroll | boolean \| number | true | 5.5.0 |
| styles | Customize inline style for each semantic structure inside the Select component. Supports object or function. | SelectStylesType | - | - |
| classes | Customize class for each semantic structure inside the Select component. Supports object or function. | SelectClassNamesType | - | - |
| optionRender | Customize the rendering dropdown options | (params: \{ option: OptionParams[0], info: OptionParams[1] \}) =&gt; any | - | 5.11.0 |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| openChange | Called when dropdown open | (open: boolean) =&gt; void | - |
| dropdownVisibleChange | Called when dropdown open, use `onOpenChange` instead | (open: boolean) =&gt; void | - |
| clear | Called when clear | NonNullable&lt;VcSelectProps['onClear']&gt; | 4.6.0 |
| keydown | - | NonNullable&lt;VcSelectProps['onKeyDown']&gt; | - |
| keyup | - | NonNullable&lt;VcSelectProps['onKeyUp']&gt; | - |
| blur | Called when blur | NonNullable&lt;VcSelectProps['onBlur']&gt; | - |
| update:value | - | (value: SelectValue) =&gt; void | - |
| click | - | NonNullable&lt;VcSelectProps['onClick']&gt; | - |
| active | Called when keyboard or mouse interaction occurs | NonNullable&lt;VcSelectProps['onActive']&gt; | - |
| change | Called when select an option or input value change | NonNullable&lt;VcSelectProps['onChange']&gt; | - |
| deselect | Called when an option is deselected, param is the selected option's value. Only called for `multiple` or `tags`, effective in multiple or tags mode only | NonNullable&lt;VcSelectProps['onDeselect']&gt; | - |
| inputKeydown | - | NonNullable&lt;VcSelectProps['onInputKeyDown']&gt; | - |
| mousedown | - | NonNullable&lt;VcSelectProps['onMouseDown']&gt; | - |
| mouseleave | - | NonNullable&lt;VcSelectProps['onMouseLeave']&gt; | - |
| mouseenter | - | NonNullable&lt;VcSelectProps['onMouseEnter']&gt; | - |
| focus | Called when focus | NonNullable&lt;VcSelectProps['onFocus']&gt; | - |
| popupScroll | Called when dropdown scrolls | NonNullable&lt;VcSelectProps['onPopupScroll']&gt; | - |
| select | Called when an option is selected, the params are option's value (or key) and option instance | NonNullable&lt;VcSelectProps['onSelect']&gt; | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| suffixIcon | The custom suffix icon. Customize icon will not response click open to avoid icon designed to do other interactive. You can use `pointer-events: none` style to bypass | () =&gt; any | - |
| prefix | The custom prefix | () =&gt; any | 5.22.0 |
| tagRender | Customize tag render, only applies when `mode` is set to `multiple` or `tags` | SelectProps['tagRender'] | - |
| labelRender | Customize selected label render (LabelInValueType definition see [LabelInValueType](https://github.com/react-component/select/blob/b39c28aa2a94e7754ebc570f200ab5fd33bd31e7/src/Select.tsx#L70)) | SelectProps['labelRender'] | 5.15.0 |
| popupRender | Customize dropdown content | SelectProps['popupRender'] | 5.25.0 |
| optionRender | Customize the rendering dropdown options | (params: \{ option: OptionParams[0], info: OptionParams[1] \}) =&gt; any | 5.11.0 |
| maxTagPlaceholder | Placeholder for not showing tags | (data: any[]) =&gt; any | - |
| notFoundContent | Specify content to show when no result matches | () =&gt; any | - |