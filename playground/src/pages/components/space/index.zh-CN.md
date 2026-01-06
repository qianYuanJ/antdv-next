---
category: Components
group: 布局
title: Space
subtitle: 间距
description: 设置组件之间的间距。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ZiJ3SbOH9SUAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*37T2R6O9oi0AAAAAAAAAAAAADrJ8AQ/original
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
| size | 间距大小 | SpaceSize \| [SpaceSize, SpaceSize] | `small` | 4.1.0 \| Array: 4.9.0 |
| direction | 间距方向 | Orientation | `horizontal` | 4.1.0 |
| orientation | 间距方向 | Orientation | `horizontal` | - |
| vertical | 是否垂直，和 `orientation` 同时配置以 `orientation` 优先 | boolean | false | - |
| align | 对齐方式 | 'start' \| 'end' \| 'center' \| 'baseline' | - | 4.2.0 |
| separator | 设置分隔符 | VueNode | - | - |
| wrap | 是否自动换行，仅在 `horizontal` 时有效 | boolean | false | 4.9.0 |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | SpaceClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | SpaceStylesType | - | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| separator | 设置分隔符 | () =&gt; any | - |