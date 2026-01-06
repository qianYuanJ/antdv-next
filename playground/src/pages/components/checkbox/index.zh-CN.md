---
category: Components
group: 数据录入
title: Checkbox
subtitle: 多选框
description: 收集用户的多项选择。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*DzgiRbW3khIAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*G3MjTYXL6AIAAAAAAAAAAAAADrJ8AQ/original
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

#### Checkbox

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultChecked | 初始是否选中 | boolean | false | - |
| checked | 指定当前是否选中 | boolean | false | - |
| disabled | 失效状态 | boolean | false | - |
| title | - | string | - | - |
| value | - | any | - | - |
| tabIndex | - | number | - | - |
| name | - | string | - | - |
| id | - | string | - | - |
| autoFocus | - | boolean | - | - |
| type | - | string | - | - |
| skipGroup | - | boolean | - | - |
| required | - | boolean | - | - |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | false | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | CheckboxClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | CheckboxStylesType | - | - |

#### CheckboxGroup

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| options | - | (CheckboxOptionType \| string \| number)[] | - | - |
| disabled | 失效状态 | boolean | false | - |
| name | - | string | - | - |
| defaultValue | - | any[] | - | - |
| value | - | any[] | - | - |
| labelRender | - | (params: \{ item: CheckboxOptionType, index: number \}) =&gt; any | - | - |

### 事件 {#events}

#### Checkbox

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 变化时的回调函数 | (checked: CheckboxChangeEvent) =&gt; void | - |
| update:checked | - | (checked: any) =&gt; void | - |
| update:value | - | (value: any) =&gt; void | - |
| mouseenter | - | (event: MouseEvent) =&gt; void | - |
| mouseleave | - | (event: MouseEvent) =&gt; void | - |
| keypress | - | (event: KeyboardEvent) =&gt; void | - |
| keydown | - | (event: KeyboardEvent) =&gt; void | - |
| focus | 获得焦点时的回调 | (event: FocusEvent) =&gt; void | - |
| blur | 失去焦点时的回调 | (event: FocusEvent) =&gt; void | - |
| click | - | (event: MouseEvent) =&gt; void | - |

#### CheckboxGroup

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| update:value | - | (value: any[]) =&gt; void | - |
| change | 变化时的回调函数 | (checkedValue: any[]) =&gt; void | - |

### 插槽 {#slots}

#### CheckboxGroup

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| labelRender | - | (params: \{ item: CheckboxOptionType, index: number \}) =&gt; any | - |