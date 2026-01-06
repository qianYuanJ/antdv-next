---
category: Components
group: 反馈
title: Popconfirm
subtitle: 气泡确认框
description: 点击元素，弹出气泡式的确认框。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*a7tqQ6wrdeAAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*iwYsQpeFcB0AAAAAAAAAAAAADrJ8AQ/original
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
| title | 确认框标题 | VueNode | - | - |
| description | 确认内容的详细描述 | VueNode | - | 5.1.0 |
| disabled | 阻止点击 Popconfirm 子元素时弹出确认框 | boolean | false | - |
| okText | 确认按钮文字 | VueNode | `确定` | - |
| cancelText | 取消按钮文字 | VueNode | `取消` | - |
| okType | 确认按钮类型 | LegacyButtonType | `primary` | - |
| okButtonProps | ok 按钮 props | ButtonProps | - | - |
| cancelButtonProps | cancel 按钮 props | ButtonProps | - | - |
| showCancel | 是否显示取消按钮 | boolean | true | 4.18.0 |
| icon | 自定义弹出气泡 Icon 图标 | VueNode | &lt;ExclamationCircle /&gt; | - |
| classes | - | PopconfirmClassNamesType | - | - |
| styles | - | PopconfirmStylesType | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| openChange | - | (open: boolean, e?: MouseEvent \| KeyboardEvent) =&gt; void | - |
| confirm | 点击确认的回调 | (e?: MouseEvent) =&gt; void | - |
| cancel | 点击取消的回调 | (e?: MouseEvent) =&gt; void | - |
| popupClick | 弹出气泡点击事件 | (e: MouseEvent) =&gt; void | 5.5.0 |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| title | 确认框标题 | () =&gt; any | - |
| description | 确认内容的详细描述 | () =&gt; any | 5.1.0 |
| icon | 自定义弹出气泡 Icon 图标 | () =&gt; any | - |
| okText | 确认按钮文字 | () =&gt; any | - |
| cancelText | 取消按钮文字 | () =&gt; any | - |