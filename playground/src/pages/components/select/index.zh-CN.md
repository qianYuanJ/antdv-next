---
category: Components
group: 数据录入
title: Select
subtitle: 选择器
description: 下拉选择器。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*qGSbQJ0POEsAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*a6ggRInInJ4AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

<DocHeading></DocHeading>

## 何时使用 {#when-to-use}

## 示例 {#examples}

<demo-group>
</demo-group>

## API

### 属性 {#property}

通用属性参考：[通用属性](/docs/vue/common-props)

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| placement | 选择框弹出的位置 | SelectCommonPlacement | bottomLeft | - |
| mode | 设置 Select 的模式为多选或标签 | 'multiple' \| 'tags' | - | - |
| status | 设置校验状态 | InputStatus | - | 4.19.0 |
| popupClassName | 下拉菜单的 className 属性，使用 `classNames.popup.root` 替换 | string | - | 4.23.0 |
| dropdownClassName | Deprecated. | string | - | - |
| dropdownStyle | 下拉菜单的 style 属性，使用 `styles.popup.root` 替换 | CSSProperties | - | - |
| dropdownRender | 自定义下拉框内容，使用 `popupRender` 替换 | SelectProps['popupRender'] | - | - |
| dropdownMatchSelectWidth | Deprecated. | boolean \| number | - | - |
| popupMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 | boolean \| number | true | 5.5.0 |
| styles | 用于自定义 Select 组件内部各语义化结构的行内 style，支持对象或函数 | SelectStylesType | - | - |
| classes | 用于自定义 Select 组件内部各语义化结构的 class，支持对象或函数 | SelectClassNamesType | - | - |
| optionRender | 自定义渲染下拉选项 | (params: \{ option: OptionParams[0], info: OptionParams[1] \}) =&gt; any | - | 5.11.0 |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| openChange | 展开下拉菜单的回调 | (open: boolean) =&gt; void | - |
| dropdownVisibleChange | 展开下拉菜单的回调，使用 `onOpenChange` 替换 | (open: boolean) =&gt; void | - |
| clear | 清除内容时回调 | NonNullable&lt;VcSelectProps['onClear']&gt; | 4.6.0 |
| keydown | - | NonNullable&lt;VcSelectProps['onKeyDown']&gt; | - |
| keyup | - | NonNullable&lt;VcSelectProps['onKeyUp']&gt; | - |
| blur | 失去焦点时回调 | NonNullable&lt;VcSelectProps['onBlur']&gt; | - |
| update:value | - | (value: SelectValue) =&gt; void | - |
| click | - | NonNullable&lt;VcSelectProps['onClick']&gt; | - |
| active | 键盘和鼠标交互时触发 | NonNullable&lt;VcSelectProps['onActive']&gt; | - |
| change | 选中 option，或 input 的 value 变化时，调用此函数 | NonNullable&lt;VcSelectProps['onChange']&gt; | - |
| deselect | 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 `multiple` 或 `tags` 模式下生效 | NonNullable&lt;VcSelectProps['onDeselect']&gt; | - |
| inputKeydown | - | NonNullable&lt;VcSelectProps['onInputKeyDown']&gt; | - |
| mousedown | - | NonNullable&lt;VcSelectProps['onMouseDown']&gt; | - |
| mouseleave | - | NonNullable&lt;VcSelectProps['onMouseLeave']&gt; | - |
| mouseenter | - | NonNullable&lt;VcSelectProps['onMouseEnter']&gt; | - |
| focus | 获得焦点时回调 | NonNullable&lt;VcSelectProps['onFocus']&gt; | - |
| popupScroll | 下拉列表滚动时的回调 | NonNullable&lt;VcSelectProps['onPopupScroll']&gt; | - |
| select | 被选中时调用，参数为选中项的 value (或 key) 值 | NonNullable&lt;VcSelectProps['onSelect']&gt; | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| suffixIcon | 自定义的选择框后缀图标。以防止图标被用于其他交互，替换的图标默认不会响应展开、收缩事件，可以通过添加 `pointer-events: none` 样式透传。 | () =&gt; any | - |
| prefix | 自定义前缀 | () =&gt; any | 5.22.0 |
| tagRender | 自定义 tag 内容 render，仅在 `mode` 为 `multiple` 或 `tags` 时生效 | SelectProps['tagRender'] | - |
| labelRender | 自定义当前选中的 label 内容 render （LabelInValueType的定义见 [LabelInValueType](https://github.com/react-component/select/blob/b39c28aa2a94e7754ebc570f200ab5fd33bd31e7/src/Select.tsx#L70)） | SelectProps['labelRender'] | 5.15.0 |
| popupRender | 自定义下拉框内容 | SelectProps['popupRender'] | 5.25.0 |
| optionRender | 自定义渲染下拉选项 | (params: \{ option: OptionParams[0], info: OptionParams[1] \}) =&gt; any | 5.11.0 |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | (data: any[]) =&gt; any | - |
| notFoundContent | 当下拉列表为空时显示的内容 | () =&gt; any | - |