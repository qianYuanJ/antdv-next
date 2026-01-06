---
category: Components
group: Layout
title: Splitter
description: Split panels to isolate
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*f0SISaETY0wAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*y92yRYhObU8AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 1
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

## Examples {#examples}

<demo-group>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

| Property | Description | Type                                         | Default | Version |
| --- | --- |----------------------------------------------| --- | --- |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | SplitterClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | SplitterStylesType | - | - |
| layout | Layout direction | Orientation | `horizontal` | - |
| orientation | Orientation direction | Orientation | `horizontal` | - |
| vertical | Orientation，Simultaneously existing with `orientation`, `orientation` takes priority | boolean | `false` | - |
| draggerIcon | custom dragger icon | VueNode | - | 6.0.0 |
| collapsibleIcon | custom collapsible icon | \{     start?: VueNode     end?: VueNode  \} | - | 6.0.0 |
| lazy | Lazy mode | boolean | `false` | 5.23.0 |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| resizeStart | Callback before dragging starts | (sizes: number[]) =&gt; void | - |
| resize | Panel size change callback | (sizes: number[]) =&gt; void | - |
| resizeEnd | Drag end callback | (sizes: number[]) =&gt; void | - |
| collapse | Callback when expanding or collapsing | (collapsed: boolean[], sizes: number[]) =&gt; void | 5.28.0 |
| update:collapse | - | (collapsed: boolean[]) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| draggerIcon | custom dragger icon | () =&gt; any | 6.0.0 |
| collapsibleIconStart | - | () =&gt; any | - |
| collapsibleIconEnd | - | () =&gt; any | - |