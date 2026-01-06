---
category: Components
group: 数据展示
title: Empty
subtitle: 空状态
description: 空状态时的展示占位图。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ZdiZSLzEV0wAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*obM7S5lIxeMAAAAAAAAAAAAADrJ8AQ/original
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
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | EmptyClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | EmptyStylesType | - | - |
| image | 设置显示图片，为 string 时表示自定义图片地址。 | VueNode | `Empty.PRESENTED_IMAGE_DEFAULT` | - |
| description | 自定义描述内容 | VueNode | - | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| image | 设置显示图片，为 string 时表示自定义图片地址。 | () =&gt; any | - |
| description | 自定义描述内容 | () =&gt; any | - |