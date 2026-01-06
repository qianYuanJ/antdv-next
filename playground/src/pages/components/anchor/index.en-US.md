---
category: Components
title: Anchor
description: Hyperlinks to scroll on one page.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ufP1TLS5VvIAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*_9_eTrgvHNQAAAAAAAAAAAAADrJ8AQ/original
demo:
group:
  title: Navigation
  order: 3
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

## Examples {#examples}

<demo-group>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

#### Anchor

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | AnchorClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | AnchorStylesType | - | - |
| offsetTop | Pixels to offset from top when calculating position of scroll | number | 0 | - |
| bounds | Bounding distance of anchor area | number | 5 | - |
| affix | Fixed mode of Anchor | boolean \| Omit&lt;AffixProps, 'offsetTop' \| 'target'&gt; | true | object: 5.19.0 |
| showInkInFixed | Whether show ink-square when `affix={false}` | boolean | false | - |
| getContainer | Scrolling container | () =&gt; AnchorContainer | () =&gt; window | - |
| getCurrentAnchor | Customize the anchor highlight | (activeLink: string) =&gt; string | - | - |
| targetOffset | Anchor scroll offset, default as `offsetTop`, [example](#anchor-demo-targetoffset) | number | - | - |
| items | Data configuration option content, support nesting through children | AnchorLinkItemProps[] | - | 5.1.0 |
| direction | Set Anchor direction | AnchorDirection | `vertical` | 5.2.0 |
| replace | Replace items' href in browser history instead of pushing it | boolean | false | 5.7.0 |

#### AnchorLink

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| href | - | string | - | - |
| target | - | string | - | - |
| title | - | VueNode | - | - |
| replace | Replace items' href in browser history instead of pushing it | boolean | false | 5.7.0 |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| click | Set the handler to handle `click` event | (e: MouseEvent, link: \{ title: VNodeChild, href: string \}) =&gt; any | - |
| change | Listening for anchor link change | (currentActiveLink: string) =&gt; any | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| item | - | (item: AnchorLinkItemProps) =&gt; any | - |