---
category: Components
group: Feedback
noinstant: true
title: Notification
description: Prompt notification message globally.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cRmqTY4nKPEAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*W3RmSov-xVMAAAAAAAAAAAAADrJ8AQ/original
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
| title | The title of notification box | VueNode | - | 6.0.0 |
| description | The content of notification box (required) | VueNode | - | - |
| actions | Customized button group | VueNode | - | 5.24.0 |
| key | The unique identifier of the Notification | Key | - | - |
| onClose | Trigger when notification closed | () =&gt; void | - | - |
| duration | Time in seconds before Notification is closed. When set to `0` or `false`, it will never be closed automatically | number \| false | 4.5 | - |
| showProgress | Show progress bar for auto-closing notification | boolean | - | 5.18.0 |
| pauseOnHover | keep the timer running or not on hover | boolean | true | 5.18.0 |
| icon | Customized icon | VueNode | - | - |
| placement | Position of Notification, can be one of `top` \| `topLeft` \| `topRight` \| `bottom` \| `bottomLeft` \| `bottomRight` | NotificationPlacement | `topRight` | - |
| style | Customized inline style | CSSProperties | - | - |
| class | - | string | - | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | NotificationClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | NotificationStylesType | - | - |
| type | - | IconType | - | - |
| onClick | Specify a function that will be called when the notification is clicked | () =&gt; void | - | - |
| closeIcon | Custom close icon | VueNode | true | 5.7.0: close button will be hidden when setting to null or false |
| closable | - | \| boolean     \| (Exclude&lt;ClosableType, boolean&gt; & \{       onClose?: () =&gt; void     \}) | - | - |
| props | An object that can contain `data-*`, `aria-*`, or `role` props, to be put on the notification `div`. This currently only allows `data-testid` instead of `data-*` in TypeScript. See https://github.com/microsoft/TypeScript/issues/28960. | DivProps | - | - |
| role | The semantics of notification content recognized by screen readers. The default value is `alert`. When set as the default value, the screen reader will promptly interrupt any ongoing content reading and prioritize the notification content for immediate attention. | 'alert' \| 'status' | `alert` | 5.6.0 |

### Methods {#methods}

| Method | Description | Type | Version |
| --- | --- | --- | --- |
| success | - | StaticFn | - |
| error | - | StaticFn | - |
| info | - | StaticFn | - |
| warning | - | StaticFn | - |
| open | - | StaticFn | - |
| destroy | - | (key?: Key) =&gt; void | - |