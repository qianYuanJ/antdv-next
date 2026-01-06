---
category: Components
group: 布局
title: Splitter
subtitle: 分隔面板
description: 自由切分指定区域
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*f0SISaETY0wAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*y92yRYhObU8AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 1
---

<DocHeading></DocHeading>

## 何时使用 {#when-to-use}

## 示例 {#examples}

<demo-group>
</demo-group>

## API

### 属性 {#property}

通用属性参考：[通用属性](/docs/vue/common-props)

| 属性 | 说明 | 类型                                           | 默认值 | 版本 |
| --- | --- |----------------------------------------------| --- | --- |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | SplitterClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | SplitterStylesType | - | - |
| layout | 布局方向 | Orientation | `horizontal` | - |
| orientation | 布局方向 | Orientation | `horizontal` | - |
| vertical | 排列方向，与 `orientation` 同时存在，以 `orientation` 优先 | boolean | `false` | - |
| draggerIcon | 拖拽图标 | VueNode | - | 6.0.0 |
| collapsibleIcon | 折叠图标 | \{     start?: VueNode     end?: VueNode  \} | - | 6.0.0 |
| lazy | 延迟渲染模式 | boolean | `false` | 5.23.0 |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| resizeStart | 开始拖拽之前回调 | (sizes: number[]) =&gt; void | - |
| resize | 面板大小变化回调 | (sizes: number[]) =&gt; void | - |
| resizeEnd | 拖拽结束回调 | (sizes: number[]) =&gt; void | - |
| collapse | 展开-收起时回调 | (collapsed: boolean[], sizes: number[]) =&gt; void | 5.28.0 |
| update:collapse | - | (collapsed: boolean[]) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| draggerIcon | 拖拽图标 | () =&gt; any | 6.0.0 |
| collapsibleIconStart | - | () =&gt; any | - |
| collapsibleIconEnd | - | () =&gt; any | - |