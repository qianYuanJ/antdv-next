---
category: Components
group: Feedback
title: Progress
description: Display the current progress of the operation.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*gK_4S6fDRfgAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HJH8Tb1lcYAAAAAAAAAAAAAADrJ8AQ/original
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

#### Progress

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | ProgressClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | ProgressStylesType | - | - |
| type | To set the type, options: `line` `circle` `dashboard` | ProgressType | `line` | - |
| percent | To set the completion percentage | number | 0 | - |
| format | The template function of the content | (percent?: number, successPercent?: number) =&gt; any | (percent) =&gt; percent + `%` | - |
| status | To set the status of the Progress, options: `success` `exception` `normal` `active`(line only) | (typeof ProgressStatuses)[number] | - | - |
| showInfo | Whether to display the progress value and the status icon | boolean | true | - |
| strokeWidth | - | number | - | - |
| strokeLinecap | To set the style of the progress linecap | 'butt' \| 'square' \| 'round' | `round` | - |
| strokeColor | The color of progress bar | string \| string[] \| ProgressGradient | - | - |
| trailColor | The color of unfilled part. Please use `railColor` instead | string | - | - |
| railColor | The color of unfilled part | string | - | - |
| width | Deprecated. | number | - | - |
| success | Configs of successfully progress bar | SuccessProps | - | - |
| gapDegree | - | number | - | - |
| gapPlacement | - | GapPlacement | - | - |
| gapPosition | Deprecated. | GapPosition | - | - |
| size | Progress size | number \| [number \| string, number] \| ProgressSize \| \{ width?: number, height?: number \} | "default" | 5.3.0, Object: 5.18.0 |
| steps | - | number \| \{ count: number, gap: number \} | - | - |
| percentPosition | - | PercentPositionType | - | - |
| rounding | - | (step: number) =&gt; number | - | - |