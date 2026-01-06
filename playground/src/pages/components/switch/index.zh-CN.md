---
category: Components
group: 数据录入
title: Switch
subtitle: 开关
description: 使用开关切换两种状态之间。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*rtArRpBNDZcAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*al07RK8SGf4AAAAAAAAAAAAADrJ8AQ/original
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
| size | 开关大小，可选值：`default` `small` | SwitchSize | `default` | - |
| checked | 指定当前是否选中 | boolean | false | - |
| defaultChecked | 初始是否选中 | boolean | false | - |
| value | `checked` 的别名 | boolean | - | 5.12.0 |
| defaultValue | `defaultChecked` 的别名 | boolean | - | 5.12.0 |
| checkedChildren | 选中时的内容 | VueNode | - | - |
| unCheckedChildren | 非选中时的内容 | VueNode | - | - |
| disabled | 是否禁用 | boolean | false | - |
| loading | 加载中的开关 | boolean | false | - |
| autoFocus | - | boolean | - | - |
| title | - | string | - | - |
| tabIndex | - | number | - | - |
| id | - | string | - | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | SwitchClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | SwitchStylesType | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 变化时的回调函数 | SwitchChangeEventHandler | - |
| click | 点击时的回调函数 | SwitchClickEventHandler | - |
| update:checked | - | (checked: boolean) =&gt; void | - |
| update:value | - | (checked: boolean) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| checkedChildren | 选中时的内容 | () =&gt; any | - |
| unCheckedChildren | 非选中时的内容 | () =&gt; any | - |