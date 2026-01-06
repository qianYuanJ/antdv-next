---
group: 反馈
category: Components
title: Result
subtitle: 结果
description: 用于反馈一系列操作任务的处理结果。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-e2IRroDJyEAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-0kxQrbHx2kAAAAAAAAAAAAADrJ8AQ/original
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
| icon | 自定义 icon | VueNode | - | - |
| status | 结果的状态，决定图标和颜色 | ResultStatusType | `info` | - |
| title | title 文字 | VueNode | - | - |
| subTitle | subTitle 文字 | VueNode | - | - |
| extra | 操作区 | VueNode | - | - |
| classes | 自定义组件内部各语义化结构的类名。支持对象或函数 | ResultClassNamesType | - | - |
| styles | 自定义组件内部各语义化结构的内联样式。支持对象或函数 | ResultStylesType | - | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| icon | 自定义 icon | () =&gt; any | - |
| title | title 文字 | () =&gt; any | - |
| subTitle | subTitle 文字 | () =&gt; any | - |
| extra | 操作区 | () =&gt; any | - |