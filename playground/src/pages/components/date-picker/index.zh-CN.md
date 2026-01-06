---
category: Components
group: 数据录入
title: DatePicker
subtitle: 日期选择框
description: 输入或选择日期的控件。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*qK9mRqFnBbAAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*wz1QTJSQgmAAAAAAAAAAAAAADrJ8AQ/original
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
| multiple | - | IsMultiple | - | - |
| defaultValue | - | MultiValueType&lt;ValueType, IsMultiple&gt; \| null | - | - |
| value | - | MultiValueType&lt;ValueType, IsMultiple&gt; \| null | - | - |
| locale | 国际化配置 | PickerLocale | [默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) | - |
| size | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | SizeType | - | - |
| placement | 选择框弹出的位置 | DataPickerPlacement | bottomLeft | - |
| bordered | Deprecated. | boolean | - | - |
| status | 设置校验状态 | InputStatus | - | 4.19.0 |
| variant | 形态变体 | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| dropdownClassName | Deprecated. | string | - | - |
| popupClassName | 额外的弹出日历 className，使用 `classNames.popup.root` 替代 | string | - | 4.23.0 |
| rootClass | - | string | - | - |
| popupStyle | 额外的弹出日历样式，使用 `styles.popup.root` 替代 | CSSProperties | {} | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | DatePickerClassNamesType&lt;Props&gt; | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | DatePickerStylesType&lt;Props&gt; | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | - | (date: DateType \| DateType[] \| null, dateString: string \| string[]) =&gt; void | - |
| update:value | - | (date: DateType \| DateType[] \| null) =&gt; void | - |
| calendarChange | - | (date: DateType \| DateType[], dateString: string \| string[], info: any) =&gt; void | - |
| panelChange | 日历面板切换的回调 | (date: DateType, mode: PickerMode) =&gt; void | - |
| openChange | 弹出日历和关闭日历的回调 | (open: boolean) =&gt; void | - |
| ok | - | (date: DateType \| DateType[]) =&gt; void | - |
| select | - | (date: DateType) =&gt; void | - |
| focus | - | (e: FocusEvent, info: any) =&gt; void | - |
| blur | - | (e: FocusEvent, info: any) =&gt; void | - |
| keydown | - | (e: KeyboardEvent, preventDefault: VoidFunction) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| suffixIcon | 自定义的选择框后缀图标 | () =&gt; any | - |
| renderExtraFooter | - | (mode: PickerMode) =&gt; any | - |
| panelRender | 自定义渲染面板 | (originPanel: VueNode) =&gt; any | 4.5.0 |
| inputRender | - | (props: Record&lt;string, any&gt;) =&gt; any | - |
| cellRender | 自定义单元格的内容 | (ctx: \{ current: AnyObject, info: any \}) =&gt; any | 5.4.0 |
| dateRender | 自定义日期单元格的内容，5.4.0 起用 `cellRender` 代替 | (ctx: \{ date: AnyObject, today: AnyObject \}) =&gt; any | &lt; 5.4.0 |
| monthCellRender | - | (ctx: \{ date: AnyObject, locale: any \}) =&gt; any | - |