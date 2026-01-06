---
category: Components
group: Data Display
title: Image
description: Preview-able image.
cols: 2
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*FbOCS6aFMeUAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*LVQ3R5JjjJEAAAAAAAAAAAAADrJ8AQ/original
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
| preview | Preview configuration; set to false to disable | boolean \| PreviewConfig | true | - |
| wrapperStyle | Deprecated. | CSSProperties | - | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | ImageClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | ImageStylesType | - | - |
| rootClass | - | string | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| error | Callback when loading error occurs | NonNullable&lt;VcImageProps['onError']&gt; | - |
| click | - | NonNullable&lt;VcImageProps['onClick']&gt; | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| fallback | Fallback URL when load fails | () =&gt; any | - |
| placeholder | Loading placeholder; if true, uses default placeholder | () =&gt; any | - |