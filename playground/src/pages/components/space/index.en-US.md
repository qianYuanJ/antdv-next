---
category: Components
group: Layout
title: Space
description: Set components spacing.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ZiJ3SbOH9SUAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*37T2R6O9oi0AAAAAAAAAAAAADrJ8AQ/original
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
| size | The space size | SpaceSize \| [SpaceSize, SpaceSize] | `small` | 4.1.0 \| Array: 4.9.0 |
| direction | The space direction | Orientation | `horizontal` | 4.1.0 |
| orientation | The space direction | Orientation | `horizontal` | - |
| vertical | Orientation, Simultaneously configure with `orientation` and prioritize `orientation` | boolean | false | - |
| align | Align items | 'start' \| 'end' \| 'center' \| 'baseline' | - | 4.2.0 |
| separator | Set separator | VueNode | - | - |
| wrap | Auto wrap line, when `horizontal` effective | boolean | false | 4.9.0 |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | SpaceClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | SpaceStylesType | - | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| separator | Set separator | () =&gt; any | - |