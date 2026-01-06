---
category: Components
group: 数据录入
title: Radio
subtitle: 单选框
description: 用于在多个备选项中选中单个状态。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*mrPVRope68wAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xPfTSphsiA0AAAAAAAAAAAAADrJ8AQ/original
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

#### RadioGroup

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | - | any | - | - |
| value | 根据 value 进行比较，判断是否选中 | any | - | - |
| size | - | SizeType | - | - |
| disabled | 禁用 Radio | boolean | false | - |
| name | - | string | - | - |
| id | - | string | - | - |
| optionType | - | RadioGroupOptionType | - | - |
| orientation | - | Orientation | - | - |
| buttonStyle | - | RadioGroupButtonStyle | - | - |
| block | - | boolean | - | - |
| vertical | - | boolean | - | - |
| labelRender | - | (params: \{ item: CheckboxOptionType, index: number \}) =&gt; any | - | - |

#### Radio

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| optionType | Control the appearance for Radio to display as button or not | RadioGroupOptionType | - | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | RadioClassNamesType | - | 6.0.0 |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | RadioStylesType | - | 6.0.0 |

### 事件 {#events}

#### RadioGroup

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | - | (e: RadioChangeEvent) =&gt; void | - |
| mouseenter | - | (e: MouseEvent) =&gt; void | - |
| mouseleave | - | (e: MouseEvent) =&gt; void | - |
| focus | - | (e: FocusEvent) =&gt; void | - |
| blur | - | (e: FocusEvent) =&gt; void | - |
| update:value | - | (value: any) =&gt; void | - |

### 插槽 {#slots}

#### RadioGroup

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| labelRender | - | (params: \{ item: CheckboxOptionType, index: number \}) =&gt; any | - |