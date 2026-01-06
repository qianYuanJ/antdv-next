---
category: Components
group: General
title: FloatButton
description: A button that floats at the top of the page.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*tXAoQqyr-ioAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*hSAwR7cnabwAAAAAAAAAAAAADrJ8AQ/original
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

#### FloatButtonGroup

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | FloatButtonGroupClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | FloatButtonGroupStylesType | - | - |
| trigger | - | FloatButtonGroupTrigger | - | - |
| open | - | boolean | - | - |
| defaultOpen | - | boolean | - | - |
| closeIcon | - | VueNode | - | - |
| placement | - | 'top' \| 'left' \| 'right' \| 'bottom' | - | - |
| style | - | CSSProperties | - | - |

#### FloatButton

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| icon | Set the icon component of button | VueNode | - | - |
| description | Please use `content` instead | VueNode | - | - |
| content | Text and other | VueNode | - | - |
| type | Setting button type | FloatButtonType | `default` | - |
| shape | Setting button shape | FloatButtonShape | `circle` | - |
| tooltip | The text shown in the tooltip | VueNode \| TooltipProps | - | TooltipProps: 5.25.0 |
| href | The target of hyperlink | string | - | - |
| target | Specifies where to display the linked URL | '_self' \| '_blank' \| '_parent' \| '_top' \| string | - | - |
| badge | Attach Badge to FloatButton. `status` and other props related are not supported. | FloatButtonBadgeProps & \{ class?: string \} | - | 5.4.0 |
| htmlType | Set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type) | ButtonHTMLType | `button` | 5.21.0 |
| ariaLabel | - | string | - | - |
| style | - | CSSProperties | - | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | FloatButtonClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | FloatButtonStylesType | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| click | Set the handler to handle `click` event | (e: MouseEvent) =&gt; void | - |
| mouseenter | - | (e: MouseEvent) =&gt; void | - |
| mouseleave | - | (e: MouseEvent) =&gt; void | - |
| focus | - | (e: FocusEvent) =&gt; void | - |
| blur | - | (e: FocusEvent) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| icon | Set the icon component of button | () =&gt; any | - |
| tooltip | The text shown in the tooltip | () =&gt; any | TooltipProps: 5.25.0 |

### Methods {#methods}

| Method | Description | Type | Version |
| --- | --- | --- | --- |
| nativeElement | - | FloatButtonElement \| null | - |