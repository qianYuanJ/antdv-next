---
category: Components
group: 数据录入
title: Rate
subtitle: 评分
description: 用于对事物进行评分操作。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*oyOcTrB12_YAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*M7_ER7GJr6wAAAAAAAAAAAAADrJ8AQ/original
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

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| rootClass | - | string | - | - |
| size | 星星尺寸 | 'small' \| 'middle' \| 'large' | 'middle' | - |
| tooltips | 自定义每项的提示信息 | (TooltipProps \| string)[] | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| update:value | - | (value: number) =&gt; void | - |
| change | 选择时的回调 | (value: number) =&gt; void | - |
| hoverChange | 鼠标经过时数值变化的回调 | (value: number) =&gt; void | - |
| focus | 获取焦点时的回调 | () =&gt; void | - |
| blur | 失去焦点时的回调 | () =&gt; void | - |
| keydown | - | (e: KeyboardEvent) =&gt; void | - |
| mouseleave | - | (e: FocusEvent) =&gt; void | - |