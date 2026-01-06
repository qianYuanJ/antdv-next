---
category: Components
group: 数据展示
title: Timeline
subtitle: 时间轴
description: 垂直展示的时间流信息。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*FkTySqNt3sYAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*yIl9S4hAIBcAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

<DocHeading></DocHeading>

## 何时使用 {#when-to-use}

## 示例 {#examples}

<demo-group>
</demo-group>

## API

### 属性 {#property}

通用属性参考：[通用属性](/docs/vue/common-props)

#### Timeline

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| pending | 指定最后一个幽灵节点是否存在或内容，请使用 `item.loading` 代替 | VueNode | false | - |
| pendingDot | 当最后一个幽灵节点存在時，指定其时间图点，请使用 `item.icon` 代替 | VueNode | &lt;LoadingOutlined /&gt; | - |
| reverse | 节点排序 | boolean | false | - |
| mode | 通过设置 `mode` 可以改变时间轴和内容的相对位置 | 'left' \| 'alternate' \| 'right' | `start` | - |
| items | 选项配置 | TimelineItemProps[] | - | - |
| dotRender | - | (params: \{ item: TimelineItemProps, index: number \}) =&gt; void | - | - |
| labelRender | - | (params: \{ item: TimelineItemProps, index: number \}) =&gt; void | - | - |
| contentRender | - | (params: \{ item: TimelineItemProps, index: number \}) =&gt; void | - | - |

#### TimelineItem

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| key | - | Key | - | - |
| prefixCls | - | string | - | - |
| class | - | string | - | - |
| color | - | LiteralUnion&lt;Color&gt; | - | - |
| dot | - | VueNode | - | - |
| pending | 指定最后一个幽灵节点是否存在或内容，请使用 `item.loading` 代替 | boolean | false | - |
| position | - | string | - | - |
| style | - | CSSProperties | - | - |
| label | - | VueNode | - | - |
| children | - | VueNode | - | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| pending | 指定最后一个幽灵节点是否存在或内容，请使用 `item.loading` 代替 | () =&gt; void | - |
| pendingDot | 当最后一个幽灵节点存在時，指定其时间图点，请使用 `item.icon` 代替 | () =&gt; void | - |
| dotRender | - | (params: \{ item: TimelineItemProps, index: number \}) =&gt; void | - |
| labelRender | - | (params: \{ item: TimelineItemProps, index: number \}) =&gt; void | - |
| contentRender | - | (params: \{ item: TimelineItemProps, index: number \}) =&gt; void | - |