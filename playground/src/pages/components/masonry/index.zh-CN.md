---
category: Components
subtitle: 瀑布流
group: 布局
title: Masonry
cover: https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*cELTRrM5HpAAAAAAOGAAAAgAegCCAQ/original
coverDark: https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*2CxJRYJmfbIAAAAAPqAAAAgAegCCAQ/original
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

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | MasonryClassNamesType | - | - |
| styles | 语义化结构 style，支持对象和函数形式 | MasonryStylesType | - | - |
| gutter | 间距，可以是固定值、响应式配置或水平垂直间距配置 | RowProps['gutter'] | `0` | - |
| items | 瀑布流项 | MasonryItemType[] | - | - |
| itemRender | 自定义项渲染 | (itemInfo: MasonryItemType & \{ index: number \}) =&gt; any | - | - |
| columns | 列数，可以是固定值或响应式配置 | number \| Partial&lt;Record&lt;Breakpoint, number&gt;&gt; | `3` | - |
| fresh | 是否持续监听子项尺寸变化 | boolean | `false` | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| layoutChange | 列排序回调 | (sortInfo: \{ key: Key, column: number \}[]) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| itemRender | 自定义项渲染 | (itemInfo: MasonryItemType & \{ index: number \}) =&gt; any | - |

### 方法 {#methods}

| 方法 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| nativeElement | - | HTMLDivElement | - |