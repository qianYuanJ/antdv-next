---
category: Components
group: 数据展示
title: Popover
subtitle: 气泡卡片
description: 点击/鼠标移入元素，弹出气泡式的卡片浮层。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*kfW5RrfF4L8AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*6b8fSKVVtXIAAAAAAAAAAAAADrJ8AQ/original
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
| title | 卡片标题 | VueNode | - | - |
| content | 卡片内容 | VueNode | - | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | PopoverClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | PopoverStylesType | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| openChange | - | (open: boolean, e?: MouseEvent \| KeyboardEvent) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| title | 卡片标题 | () =&gt; any | - |
| content | 卡片内容 | () =&gt; any | - |