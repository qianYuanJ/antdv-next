---
category: Components
group: Feedback
noinstant: true
title: Message
description: Display global messages as feedback in response to user operations.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Xl5ORK7Iy44AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*fv7mQIWdUgcAAAAAAAAAAAAADrJ8AQ/original
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
| content | - | VueNode | - | - |
| duration | - | number | - | - |
| type | - | NoticeType | - | - |
| onClose | - | () =&gt; void | - | - |
| icon | - | VueNode | - | - |
| key | - | Key | - | - |
| style | - | CSSProperties | - | - |
| class | - | string | - | - |
| classes | - | ArgsClassNamesType | - | - |
| styles | - | ArgsStylesType | - | - |
| onClick | - | (e: MouseEvent) =&gt; void | - | - |
| pauseOnHover | - | boolean | - | - |

### Methods {#methods}

| Method | Description | Type | Version |
| --- | --- | --- | --- |
| info | - | TypeOpen | - |
| success | - | TypeOpen | - |
| error | - | TypeOpen | - |
| warning | - | TypeOpen | - |
| loading | - | TypeOpen | - |
| open | - | (args: ArgsProps) =&gt; MessageType | - |
| destroy | - | (key?: Key) =&gt; void | - |