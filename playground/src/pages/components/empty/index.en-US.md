---
category: Components
group: Layout
title: Flex
description: A flex layout container for alignment.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*SMzgSJZE_AwAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*8yArQ43EGccAAAAAAAAAAAAADrJ8AQ/original
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
| classes | Customize class for each semantic structure inside the component. Supports object or function. | EmptyClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | EmptyStylesType | - | - |
| image | Customize image. Will treat as image url when string provided | VueNode | `Empty.PRESENTED_IMAGE_DEFAULT` | - |
| description | Customize description | VueNode | - | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| image | Customize image. Will treat as image url when string provided | () =&gt; any | - |
| description | Customize description | () =&gt; any | - |