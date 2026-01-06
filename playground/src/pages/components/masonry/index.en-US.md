---
category: Components
group: Layout
title: Masonry
cover: https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*cELTRrM5HpAAAAAAOGAAAAgAegCCAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*2CxJRYJmfbIAAAAAPqAAAAgAegCCAQ/original
demo:
  cols: 1
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
| classes | - | MasonryClassNamesType | - | - |
| styles | - | MasonryStylesType | - | - |
| gutter | Spacing between items | RowProps['gutter'] | - | - |
| items | - | MasonryItemType[] | - | - |
| itemRender | - | (itemInfo: MasonryItemType & \{ index: number \}) =&gt; any | - | - |
| columns | Number of columns in the masonry grid layout | number \| Partial&lt;Record&lt;Breakpoint, number&gt;&gt; | - | - |
| fresh | Trigger when item layout order changed | boolean | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| layoutChange | - | (sortInfo: \{ key: Key, column: number \}[]) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| itemRender | - | (itemInfo: MasonryItemType & \{ index: number \}) =&gt; any | - |

### Methods {#methods}

| Method | Description | Type | Version |
| --- | --- | --- | --- |
| nativeElement | - | HTMLDivElement | - |