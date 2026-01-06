---
category: Components
group: Data Entry
title: Rate
description: Used for rating operation on something.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*oyOcTrB12_YAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*M7_ER7GJr6wAAAAAAAAAAAAADrJ8AQ/original
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
| rootClass | - | string | - | - |
| size | Star size | 'small' \| 'middle' \| 'large' | 'middle' | - |
| tooltips | Customize tooltip by each character | (TooltipProps \| string)[] | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| update:value | - | (value: number) =&gt; void | - |
| change | Callback when select value | (value: number) =&gt; void | - |
| hoverChange | Callback when hover item | (value: number) =&gt; void | - |
| focus | Callback when component get focus | () =&gt; void | - |
| blur | Callback when component lose focus | () =&gt; void | - |
| keydown | - | (e: KeyboardEvent) =&gt; void | - |
| mouseleave | - | (e: FocusEvent) =&gt; void | - |