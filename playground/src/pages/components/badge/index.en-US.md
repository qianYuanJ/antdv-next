---
category: Components
title: Badge
description: Small numerical value or status descriptor for UI elements.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*e0qITYqF394AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*v8EQT7KoGbcAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group: Data Display
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
| count | Number to show in badge | VueNode | - | - |
| showZero | Whether to show badge when `count` is zero | boolean | false | - |
| overflowCount | Max count to show | number | 99 | - |
| dot | Whether to display a red dot instead of `count` | boolean | false | - |
| scrollNumberPrefixCls | - | string | - | - |
| status | Set Badge as a status dot | PresetStatusColorType | - | - |
| color | Customize Badge dot color | LiteralUnion&lt;PresetColorKey&gt; | - | - |
| text | If `status` is set, `text` sets the display text of the status `dot` | VueNode | - | - |
| size | If `count` is set, `size` sets the size of badge | 'default' \| 'small' | - | - |
| offset | Set offset of the badge dot | [number \| string, number \| string] | - | - |
| title | Text to show when hovering over the badge | string | - | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | BadgeClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | BadgeStylesType | - | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| count | Number to show in badge | () =&gt; any | - |
| text | If `status` is set, `text` sets the display text of the status `dot` | () =&gt; any | - |