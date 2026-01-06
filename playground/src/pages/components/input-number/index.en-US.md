---
category: Components
group: Data Entry
title: InputNumber
description: Enter a number within certain range with the mouse or keyboard.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JvWbSYhuNlIAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*1uH-R5kLAMIAAAAAAAAAAAAADrJ8AQ/original
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
| size | The height of input box | SizeType | - | - |
| status | Set validation status | InputStatus | - | - |
| disabled | If the input is disabled | boolean | false | - |
| addonBefore | The label text displayed before (on the left side of) the input field, please use Space.Compact instead | VueNode | - | - |
| addonAfter | The label text displayed after (on the right side of) the input field, please use Space.Compact instead | VueNode | - | - |
| prefix | The prefix icon for the Input | VueNode | - | - |
| suffix | The suffix icon for the Input | VueNode | - | 5.20.0 |
| bordered | Deprecated. | boolean | - | - |
| variant | Variants of Input | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | InputNumberClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | InputNumberStylesType | - | - |
| controls | Whether to show `+-` controls, or set custom arrow icons | boolean \| \{ upIcon?: VueNode, downIcon?: VueNode \} | - | - |
| type | - | 'number' \| 'text' | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | The callback triggered when the value is changed | (value: any) =&gt; void | - |
| update:value | - | (value: any) =&gt; void | - |
| input | - | (text: string) =&gt; void | - |
| pressEnter | The callback function that is triggered when Enter key is pressed | (e: KeyboardEvent) =&gt; void | - |
| step | The number to which the current value is increased or decreased. It can be an integer or decimal | (value: any, info: InputNumberStepContext) =&gt; void | - |
| mousedown | - | (e: MouseEvent) =&gt; void | - |
| click | - | (e: MouseEvent) =&gt; void | - |
| mouseup | - | (e: MouseEvent) =&gt; void | - |
| mouseleave | - | (e: MouseEvent) =&gt; void | - |
| mousemove | - | (e: MouseEvent) =&gt; void | - |
| mouseenter | - | (e: MouseEvent) =&gt; void | - |
| mouseout | - | (e: MouseEvent) =&gt; void | - |
| focus | - | (e: FocusEvent) =&gt; void | - |
| blur | - | (e: FocusEvent) =&gt; void | - |
| keydown | - | (e: KeyboardEvent) =&gt; void | - |
| keyup | - | (e: KeyboardEvent) =&gt; void | - |
| compositionstart | - | (e: CompositionEvent) =&gt; void | - |
| compositionend | - | (e: CompositionEvent) =&gt; void | - |
| beforeinput | - | (e: InputEvent) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| prefix | The prefix icon for the Input | () =&gt; any | - |
| suffix | The suffix icon for the Input | () =&gt; any | 5.20.0 |
| addonBefore | The label text displayed before (on the left side of) the input field, please use Space.Compact instead | () =&gt; any | - |
| addonAfter | The label text displayed after (on the right side of) the input field, please use Space.Compact instead | () =&gt; any | - |