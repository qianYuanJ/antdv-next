---
category: Components
group: Data Display
title: Tour
description: A popup component for guiding users through a product.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*NMvqRZpuJfQAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*D70qQJJmzhgAAAAAAAAAAAAADrJ8AQ/original
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
| steps | - | TourStepProps[] | - | - |
| prefixCls | - | string | - | - |
| current | What is the current step | number | - | - |
| indicatorsRender | custom indicator | (current: number, total: number) =&gt; any | - | 5.2.0 |
| actionsRender | custom action | TourStepProps['actionsRender'] | - | 5.25.0 |
| type | Type, affects the background color and text color | 'default' \| 'primary' | `default` | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | TourClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | TourStylesType | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | Callback when the step changes. Current is the previous step | (current: number) =&gt; void | - |
| close | Callback function on shutdown | (current: number) =&gt; void | - |
| finish | - | () =&gt; void | - |
| update:open | - | (open: boolean) =&gt; void | - |
| update:current | - | (current: number) =&gt; void | - |
| popupAlign | - | VcTourProps['onPopupAlign'] | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| actionsRender | custom action | (originNode: any, info: \{ current: number, total: number \}) =&gt; any | 5.25.0 |
| indicatorsRender | custom indicator | (current: number, total: number) =&gt; any | 5.2.0 |
| nextButton | - | (params: \{ current: number, isFirst: boolean, isLast: boolean \}) =&gt; any | - |
| prevButton | - | (params: \{ current: number, isFirst: boolean, isLast: boolean \}) =&gt; any | - |
| coverRender | - | (params: \{ step: TourStepProps, index: number \}) =&gt; any | - |
| titleRender | - | (params: \{ step: TourStepProps, index: number \}) =&gt; any | - |
| descriptionRender | - | (params: \{ step: TourStepProps, index: number \}) =&gt; any | - |