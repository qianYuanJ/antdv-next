---
category: Components
title: Avatar
description: Used to represent users or things, supporting the display of images, icons, or characters.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JJBSS5lBG4IAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*YbgyQaRGz-UAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: Data Display
  order: 5
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

## Examples {#examples}

<demo-group>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

#### Avatar

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| shape | The shape of avatar | 'circle' \| 'square' | `circle` | - |
| size | The size of the avatar | AvatarSize | `default` | 4.7.0 |
| gap | Letter type unit distance between left and right sides | number | 4 | 4.3.0 |
| src | The address of the image for an image avatar or image element | VueNode | - | ReactNode: 4.8.0 |
| srcSet | A list of sources to use for different screen resolutions | string | - | - |
| draggable | Whether the picture is allowed to be dragged | boolean \| 'true' \| 'false' | true | - |
| icon | Custom icon type for an icon avatar | VueNode | - | - |
| alt | This attribute defines the alternative text describing the image | string | - | - |
| crossOrigin | CORS settings attributes | '' \| 'anonymous' \| 'use-credentials' | - | 4.17.0 |
| onError | Handler when img load error, return false to prevent default fallback behavior | () =&gt; boolean | - | - |

#### AvatarGroup

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| prefixCls | - | string | - | - |
| max | - | \{     count?: number     style?: CSSProperties     popover?: PopoverProps   \} | - | - |
| size | The size of the avatar | AvatarSize | `default` | 4.7.0 |
| shape | The shape of avatar | 'circle' \| 'square' | `circle` | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| click | - | (e: MouseEvent) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| icon | Custom icon type for an icon avatar | () =&gt; any | - |
| src | The address of the image for an image avatar or image element | () =&gt; any | ReactNode: 4.8.0 |