---
category: Components
group: Data Display
title: Statistic
description: Display statistic number.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*YL7PRYNtH-4AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BPWDRbSYxJ4AAAAAAAAAAAAADrJ8AQ/original
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

#### Statistic

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| formatter | Customize value display logic | Formatter | - | - |
| decimalSeparator | The decimal separator | string | `.` | - |
| groupSeparator | Group separator | string | `,` | - |
| precision | The precision of input value | number | - | - |
| value | Display value | valueType | - | - |
| valueStyle | Set value section style | CSSProperties | - | - |
| valueRender | - | (node: any) =&gt; VNodeChild | - | - |
| title | Display title | VueNode | - | - |
| prefix | The prefix node of value | VueNode | - | - |
| suffix | The suffix node of value | VueNode | - | - |
| loading | Loading status of Statistic | boolean | false | 4.8.0 |
| classes | Customize class for each semantic structure inside the Statistic component. Supports object or function. | StatisticClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the Statistic component. Supports object or function. | StatisticStylesType | - | - |

#### StatisticTimer

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| formatter | Customize value display logic | Formatter | - | - |
| decimalSeparator | The decimal separator | string | `.` | - |
| groupSeparator | Group separator | string | `,` | - |
| precision | The precision of input value | number | - | - |
| value | Display value | valueType | - | - |
| valueStyle | Set value section style | CSSProperties | - | - |
| valueRender | - | (node: any) =&gt; VNodeChild | - | - |
| title | Display title | VueNode | - | - |
| prefix | The prefix node of value | VueNode | - | - |
| suffix | The suffix node of value | VueNode | - | - |
| loading | Loading status of Statistic | boolean | false | 4.8.0 |
| classes | Customize class for each semantic structure inside the Statistic component. Supports object or function. | StatisticClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the Statistic component. Supports object or function. | StatisticStylesType | - | - |
| type | - | TimerType | - | - |
| format | - | string | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| mouseenter | - | (e: MouseEvent) =&gt; void | - |
| mouseleave | - | (e: MouseEvent) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| title | Display title | () =&gt; any | - |
| prefix | The prefix node of value | () =&gt; any | - |
| suffix | The suffix node of value | () =&gt; any | - |