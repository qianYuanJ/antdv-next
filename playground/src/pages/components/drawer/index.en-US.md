---
group: Feedback
category: Components
title: Drawer
description: A panel that slides out from the edge of the screen.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BD2JSKm8I-kAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*r29rQ51bNdwAAAAAAAAAAAAADrJ8AQ/original
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
| size | - | sizeType \| number | - | - |
| resizable | - | boolean \| DrawerResizableConfig | - | - |
| rootClass | - | string | - | - |
| open | - | boolean | - | - |
| afterOpenChange | - | (open: boolean) =&gt; void | - | - |
| destroyOnClose | Deprecated. | boolean | - | - |
| destroyOnHidden | - | boolean | - | - |
| mask | - | MaskType | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| update:open | - | (open: boolean) =&gt; void | - |
| afterOpenChange | - | (open: boolean) =&gt; void | - |
| close | - | (e: MouseEvent \| KeyboardEvent) =&gt; void | - |
| keydown | - | (e: KeyboardEvent) =&gt; void | - |
| keyup | - | (e: KeyboardEvent) =&gt; void | - |
| mouseenter | - | (e: MouseEvent) =&gt; void | - |
| mouseleave | - | (e: MouseEvent) =&gt; void | - |
| mouseover | - | (e: MouseEvent) =&gt; void | - |
| click | - | (e: MouseEvent) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| title | - | () =&gt; any | - |
| footer | - | () =&gt; any | - |
| extra | - | () =&gt; any | - |
| closeIcon | - | () =&gt; any | - |