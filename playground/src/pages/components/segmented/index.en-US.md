---
category: Components
group: Data Display
title: Segmented
description: Display multiple options and allow users to select a single option.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*XJR2TbS1aaQAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-9tSSoO_MkIAAAAAAAAAAAAADrJ8AQ/original
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
| options | Set children optional | SegmentedOptions | [] | - |
| rootClass | - | string | - | - |
| block | Option to fit width to its parent\'s width | boolean | false | - |
| size | The size of the Segmented. | SizeType | `middle` | - |
| vertical | Orientation，Simultaneously existing with `orientation`, `orientation` takes priority | boolean | `false` | 5.21.0 |
| orientation | Orientation | Orientation | `horizontal` | - |
| classes | Customize class for each semantic structure inside the Segmented component. Supports object or function. | SegmentedClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the Segmented component. Supports object or function. | SegmentedStylesType | - | - |
| shape | shape of Segmented | 'default' \| 'round' | `default` | 5.24.0 |
| iconRender | - | (option: SegmentedLabeledOption) =&gt; any | - | - |
| labelRender | - | (option: SegmentedLabeledOption) =&gt; any | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | The callback function that is triggered when the state changes | (value: RcSegmentedValue) =&gt; void | - |
| update:value | - | (value: RcSegmentedValue) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| iconRender | - | (option: SegmentedLabeledOption) =&gt; any | - |
| labelRender | - | (option: SegmentedLabeledOption) =&gt; any | - |