---
category: Components
group: Data Entry
title: Mentions
description: Used to mention someone or something in an input.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*e4bXT7Uhi9YAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*pxR2S53P_xoAAAAAAAAAAAAADrJ8AQ/original
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
| loading | - | boolean | - | - |
| status | Set validation status | InputStatus | - | 4.19.0 |
| options | Option Configuration | MentionsOptionProps[] | \[] | 5.1.0 |
| popupClassName | - | string | - | - |
| variant | Variants of Input | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | MentionsClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | MentionsStylesType | - | - |
| size | - | SizeType | - | - |
| labelRender | - | (ctx: \{ option: MentionsOptionProps, index: number \}) =&gt; any | - | - |
| allowClear | If allow to remove mentions content with clear icon | boolean \| \{     clearIcon?: VueNode   \} | false | 5.13.0 |
| disabled | - | boolean | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| focus | Trigger when mentions get focus | (event: FocusEvent) =&gt; void | - |
| blur | Trigger when mentions lose focus | (event: FocusEvent) =&gt; void | - |
| change | Trigger when value changed | (value: string) =&gt; void | - |
| select | Trigger when user select the option | (option: MentionsOptionProps, prefix: string) =&gt; void | - |
| popupScroll | Trigger when mentions scroll | (event: Event) =&gt; void | 5.23.0 |
| search | Trigger when prefix hit | (text: string, prefix: string) =&gt; void | - |
| update:value | - | (value: string) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| suffix | - | () =&gt; any | - |
| labelRender | - | (ctx: \{ option: MentionsOptionProps, index: number \}) =&gt; any | - |