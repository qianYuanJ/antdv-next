---
category: Components
group: Data Entry
title: DatePicker
description: To select or input a date.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*qK9mRqFnBbAAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*wz1QTJSQgmAAAAAAAAAAAAAADrJ8AQ/original
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
| multiple | - | IsMultiple | - | - |
| defaultValue | - | MultiValueType&lt;ValueType, IsMultiple&gt; \| null | - | - |
| value | - | MultiValueType&lt;ValueType, IsMultiple&gt; \| null | - | - |
| locale | Localization configuration | PickerLocale | [default](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) | - |
| size | To determine the size of the input box, the height of `large` and `small`, are 40px and 24px respectively, while default size is 32px | SizeType | - | - |
| placement | The position where the selection box pops up | DataPickerPlacement | bottomLeft | - |
| bordered | Deprecated. | boolean | - | - |
| status | Set validation status | InputStatus | - | 4.19.0 |
| variant | Variants of picker | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| dropdownClassName | Deprecated. | string | - | - |
| popupClassName | To customize the className of the popup calendar, use `classNames.popup.root` instead | string | - | 4.23.0 |
| rootClass | - | string | - | - |
| popupStyle | To customize the style of the popup calendar, use `styles.popup.root` instead | CSSProperties | {} | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | DatePickerClassNamesType&lt;Props&gt; | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | DatePickerStylesType&lt;Props&gt; | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | - | (date: DateType \| DateType[] \| null, dateString: string \| string[]) =&gt; void | - |
| update:value | - | (date: DateType \| DateType[] \| null) =&gt; void | - |
| calendarChange | - | (date: DateType \| DateType[], dateString: string \| string[], info: any) =&gt; void | - |
| panelChange | Callback when picker panel mode is changed | (date: DateType, mode: PickerMode) =&gt; void | - |
| openChange | Callback function, can be executed whether the popup calendar is popped up or closed | (open: boolean) =&gt; void | - |
| ok | - | (date: DateType \| DateType[]) =&gt; void | - |
| select | - | (date: DateType) =&gt; void | - |
| focus | - | (e: FocusEvent, info: any) =&gt; void | - |
| blur | - | (e: FocusEvent, info: any) =&gt; void | - |
| keydown | - | (e: KeyboardEvent, preventDefault: VoidFunction) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| suffixIcon | The custom suffix icon | () =&gt; any | - |
| renderExtraFooter | - | (mode: PickerMode) =&gt; any | - |
| panelRender | Customize panel render | (originPanel: VueNode) =&gt; any | 4.5.0 |
| inputRender | - | (props: Record&lt;string, any&gt;) =&gt; any | - |
| cellRender | Custom rendering function for picker cells | (ctx: \{ current: AnyObject, info: any \}) =&gt; any | 5.4.0 |
| dateRender | Custom rendering function for date cells, &gt;= 5.4.0 use `cellRender` instead. | (ctx: \{ date: AnyObject, today: AnyObject \}) =&gt; any | &lt; 5.4.0 |
| monthCellRender | - | (ctx: \{ date: AnyObject, locale: any \}) =&gt; any | - |