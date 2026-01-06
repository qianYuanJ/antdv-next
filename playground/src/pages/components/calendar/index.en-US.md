---
category: Components
group: Data Display
title: Calendar
description: A container that displays data in calendar form.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*nF6_To7pDSAAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-p-wQLik200AAAAAAAAAAAAADrJ8AQ/original
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
| prefixCls | - | string | - | - |
| rootClass | - | string | - | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | CalendarClassNamesType&lt;DateType&gt; | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | CalendarStylesType&lt;DateType&gt; | - | - |
| locale | The calendar's locale | typeof enUS | [(default)](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) | - |
| validRange | To set valid range | [DateType, DateType] | - | - |
| disabledDate | Function that specifies the dates that cannot be selected, `currentDate` is same dayjs object as `value` prop which you shouldn't mutate it](https://github.com/ant-design/ant-design/issues/30987) | (date: DateType) =&gt; boolean | - | - |
| dateFullCellRender | Customize the display of the date cell, the returned content will override the cell | (date: DateType) =&gt; VueNode | - | - |
| dateCellRender | Deprecated. | (date: DateType) =&gt; VueNode | - | - |
| monthFullCellRender | Deprecated. | (date: DateType) =&gt; VueNode | - | - |
| monthCellRender | Deprecated. | (date: DateType) =&gt; VueNode | - | - |
| cellRender | Customize cell content | (date: DateType, info: any) =&gt; VueNode | - | 5.4.0 |
| fullCellRender | Customize cell content | (date: DateType, info: any) =&gt; VueNode | - | 5.4.0 |
| headerRender | Render custom header in panel | HeaderRender&lt;DateType&gt; | - | - |
| value | The current selected date | DateType | - | - |
| defaultValue | The date selected by default | DateType | - | - |
| mode | The display mode of the calendar | CalendarMode | `month` | - |
| fullscreen | Whether to display in full-screen | boolean | true | - |
| showWeek | Whether to display week number | boolean | false | 5.23.0 |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | Callback for when date changes | (date: DateType) =&gt; void | - |
| update:value | - | (date: DateType) =&gt; void | - |
| panelChange | Callback for when panel changes | (date: DateType, mode: CalendarMode) =&gt; void | - |
| select | Callback for when a date is selected, include source info | (date: DateType, selectInfo: SelectInfo) =&gt; void | `info`: 5.6.0 |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| dateFullCellRender | Customize the display of the date cell, the returned content will override the cell | (ctx: \{ date: AnyObject \}) =&gt; any | - |
| dateCellRender | - | (ctx: \{ date: AnyObject \}) =&gt; any | - |
| monthFullCellRender | - | (ctx: \{ date: AnyObject \}) =&gt; any | - |
| monthCellRender | - | (ctx: \{ date: AnyObject \}) =&gt; any | - |
| cellRender | Customize cell content | (ctx: \{ date: AnyObject, info: any \}) =&gt; any | 5.4.0 |
| fullCellRender | Customize cell content | (ctx: \{ date: AnyObject, info: any \}) =&gt; any | 5.4.0 |
| headerRender | Render custom header in panel | (config: \{ value: AnyObject, type: CalendarMode, onChange: (date: AnyObject) =&gt; void, onTypeChange: (type: CalendarMode) =&gt; void \}) =&gt; any | - |