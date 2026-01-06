---
category: Components
title: Affix
description: Stick an element to the viewport.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*YSm4RI3iOJ8AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*03dxS64LxeQAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: Other
  order: 7
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

On longer web pages, it's helpful to stick component into the viewport. This is common for menus and actions.

Please note that Affix should not cover other content on the page, especially when the size of the viewport is small.

## Examples {#examples}

<demo-group>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| offsetTop | Offset from the top of the viewport (in pixels) | number | 0 | - |
| offsetBottom | Offset from the bottom of the viewport (in pixels) | number | - | - |
| target | Specifies the scrollable area DOM node | () =&gt; Window \| HTMLElement \| null | () =&gt; window | - |

### Methods {#methods}

| Method | Description | Type | Version |
| --- | --- | --- | --- |
| updatePosition | - | ReturnType&lt;typeof throttleByAnimationFrame&gt; | - |