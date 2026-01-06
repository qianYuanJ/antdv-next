---
category: Components
group: 数据录入
title: Slider
subtitle: 滑动输入条
description: 滑动型输入器，展示当前值和可选范围。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*_4heQaUrFn4AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*XkgXTaudeosAAAAAAAAAAAAADrJ8AQ/original
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
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | SliderClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | SliderStylesType | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入 | (value: any) =&gt; void | - |
| afterChange | - | (value: any) =&gt; void | - |
| update:value | - | (value: any) =&gt; void | - |
| changeComplete | 与 `mouseup` 和 `keyup` 触发时机一致，把当前值作为参数传入 | (value: any) =&gt; void | - |