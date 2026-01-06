---
category: Components
group: 数据展示
title: Statistic
subtitle: 统计数值
description: 展示统计数值。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*YL7PRYNtH-4AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BPWDRbSYxJ4AAAAAAAAAAAAADrJ8AQ/original
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

#### Statistic

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| formatter | 自定义数值展示 | Formatter | - | - |
| decimalSeparator | 设置小数点 | string | `.` | - |
| groupSeparator | 设置千分位标识符 | string | `,` | - |
| precision | 数值精度 | number | - | - |
| value | 数值内容 | valueType | - | - |
| valueStyle | 设置数值区域的样式 | CSSProperties | - | - |
| valueRender | - | (node: any) =&gt; VNodeChild | - | - |
| title | 数值的标题 | VueNode | - | - |
| prefix | 设置数值的前缀 | VueNode | - | - |
| suffix | 设置数值的后缀 | VueNode | - | - |
| loading | 数值是否加载中 | boolean | false | 4.8.0 |
| classes | 用于自定义 Statistic 组件内部各语义化结构的 class，支持对象或函数 | StatisticClassNamesType | - | - |
| styles | 用于自定义 Statistic 组件内部各语义化结构的行内 style，支持对象或函数 | StatisticStylesType | - | - |

#### StatisticTimer

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| formatter | 自定义数值展示 | Formatter | - | - |
| decimalSeparator | 设置小数点 | string | `.` | - |
| groupSeparator | 设置千分位标识符 | string | `,` | - |
| precision | 数值精度 | number | - | - |
| value | 数值内容 | valueType | - | - |
| valueStyle | 设置数值区域的样式 | CSSProperties | - | - |
| valueRender | - | (node: any) =&gt; VNodeChild | - | - |
| title | 数值的标题 | VueNode | - | - |
| prefix | 设置数值的前缀 | VueNode | - | - |
| suffix | 设置数值的后缀 | VueNode | - | - |
| loading | 数值是否加载中 | boolean | false | 4.8.0 |
| classes | 用于自定义 Statistic 组件内部各语义化结构的 class，支持对象或函数 | StatisticClassNamesType | - | - |
| styles | 用于自定义 Statistic 组件内部各语义化结构的行内 style，支持对象或函数 | StatisticStylesType | - | - |
| type | - | TimerType | - | - |
| format | - | string | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| mouseenter | - | (e: MouseEvent) =&gt; void | - |
| mouseleave | - | (e: MouseEvent) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| title | 数值的标题 | () =&gt; any | - |
| prefix | 设置数值的前缀 | () =&gt; any | - |
| suffix | 设置数值的后缀 | () =&gt; any | - |