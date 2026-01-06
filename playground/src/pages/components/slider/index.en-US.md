---
category: Components
group: Data Entry
title: Slider
description: A Slider component for displaying current value and intervals in range.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*_4heQaUrFn4AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*XkgXTaudeosAAAAAAAAAAAAADrJ8AQ/original
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
| classes | Customize class for each semantic structure inside the component. Supports object or function. | SliderClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | SliderStylesType | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | Callback function that is fired when the user changes the slider's value | (value: any) =&gt; void | - |
| afterChange | - | (value: any) =&gt; void | - |
| update:value | - | (value: any) =&gt; void | - |
| changeComplete | Fire when `mouseup` or `keyup` is fired | (value: any) =&gt; void | - |