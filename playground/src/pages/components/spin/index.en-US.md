---
category: Components
group: Feedback
title: Spin
description: Used for the loading status of a page or a block.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*5mC5TomY4B0AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*i43_ToFrL8YAAAAAAAAAAAAADrJ8AQ/original
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
| spinning | Whether Spin is visible | boolean | true | - |
| size | The size of Spin, options: `small`, `default` and `large` | SpinSize | `default` | - |
| tip | Customize description content when Spin has children | VueNode | - | - |
| delay | Specifies a delay in milliseconds for loading state (prevent flush) | number | - | - |
| wrapperClassName | The className of wrapper when Spin has children | string | - | - |
| indicator | React node of the spinning indicator | VueNode | - | - |
| fullscreen | Display a backdrop with the `Spin` component | boolean | false | 5.11.0 |
| percent | The progress percentage, when set to `auto`, it will be an indeterminate progress | number \| 'auto' | - | 5.18.0 |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | SpinClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | SpinStylesType | - | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| indicator | React node of the spinning indicator | () =&gt; any | - |
| tip | Customize description content when Spin has children | () =&gt; any | - |