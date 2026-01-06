---
category: Components
group: Navigation
title: Steps
description: A navigation bar that guides users through the steps of a task.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*677sTqCpE3wAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cFsBQLA0b7UAAAAAAAAAAAAADrJ8AQ/original
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
| classes | Customize class for each semantic structure inside the component. Supports object or function. | StepsClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | StepsStylesType | - | - |
| variant | Config style variant | 'filled' \| 'outlined' | `filled` | - |
| size | To specify the size of the step bar, `default` and `small` are currently supported | 'default' \| 'small' | `default` | - |
| type | Type of steps, can be set to one of the following values: `default` `dot` `inline` `navigation` `panel` | 'default' \| 'navigation' \| 'inline' \| 'panel' \| 'dot' | `default` | - |
| direction | To specify the direction of the step bar, `horizontal` or `vertical` | 'horizontal' \| 'vertical' | `horizontal` | - |
| orientation | To specify the orientation of the step bar, `horizontal` or `vertical` | 'horizontal' \| 'vertical' | `horizontal` | - |
| labelPlacement | Place title and content with `horizontal` or `vertical` direction | 'horizontal' \| 'vertical' | `horizontal` | - |
| titlePlacement | Place title and content with `horizontal` or `vertical` direction | 'horizontal' \| 'vertical' | `horizontal` | - |
| progressDot | Steps with progress dot style, customize the progress dot by setting it to a function. `titlePlacement` will be `vertical` | boolean \| ProgressDotRender | false | - |
| responsive | Change to vertical direction when screen width smaller than `532px` | boolean | true | - |
| ellipsis | - | boolean | - | - |
| offset | Set offset cell, only work when `type` is `inline`. | number | - | - |
| current | To set the current step, counting from 0. You can overwrite this state by using `status` of `Step` | number | 0 | - |
| initial | Set the initial step, counting from 0 | number | 0 | - |
| items | StepItem content | StepItem[] | [] | 4.24.0 |
| percent | Progress circle percentage of current step in `process` status (only works on basic Steps) | number | - | 4.5.0 |
| status | To specify the status of current step, can be set to one of the following values: `wait` `process` `finish` `error` | 'wait' \| 'process' \| 'finish' \| 'error' | `process` | - |
| iconRender | Custom render icon, please use `items.icon` first | IconRenderType | - | - |
| onChange | Trigger when Step is changed | (current: number) =&gt; void | - | - |
| prefixCls | - | string | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| update:current | - | (current: number) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| iconRender | Custom render icon, please use `items.icon` first | IconRenderType | - |