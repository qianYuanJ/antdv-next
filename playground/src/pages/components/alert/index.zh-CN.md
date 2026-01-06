---
category: Components
title: Alert
subtitle: 警告提示
description: 警告提示，展现需要关注的信息。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*QsvtS41m45UAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*gOTISoMFZV0AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: 反馈
  order: 6
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
| type | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error` | 'success' \| 'info' \| 'warning' \| 'error' | `info`，`banner` 模式下默认值为 `warning` | - |
| closable | 可关闭配置，&gt;=5.15.0: 支持 `aria-*` | ClosableType | `false` | - |
| title | 警告提示内容 | VueNode | - | - |
| message | 警告提示内容，请使用 `title` 替换 | VueNode | - | - |
| description | 警告提示的辅助性文字介绍 | VueNode | - | - |
| afterClose | 关闭动画结束后触发的回调函数，请使用 `closable.afterClose` 替换 | () =&gt; void | - | - |
| showIcon | 是否显示辅助图标 | boolean | false，`banner` 模式下默认值为 true | - |
| role | https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#aria-role-attribute | string | - | - |
| classes | 自定义组件内部各语义化结构的类名。支持对象或函数 | AlertClassNamesType | - | - |
| styles | 自定义组件内部各语义化结构的内联样式。支持对象或函数 | AlertStylesType | - | - |
| banner | 是否用作顶部公告 | boolean | false | - |
| icon | 自定义图标，`showIcon` 为 true 时有效 | VueNode | - | - |
| closeIcon | - | VueNode | - | - |
| action | 自定义操作项 | VueNode | - | 4.9.0 |
| id | - | string | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| close | Callback when close Alert | (e: any) =&gt; any | - |
| mouseenter | - | (e: any) =&gt; any | - |
| mouseleave | - | (e: any) =&gt; any | - |
| click | - | (e: any) =&gt; any | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| message | 警告提示内容，请使用 `title` 替换 | () =&gt; any | - |
| description | 警告提示的辅助性文字介绍 | () =&gt; any | - |
| icon | 自定义图标，`showIcon` 为 true 时有效 | () =&gt; any | - |
| closeIcon | - | () =&gt; any | - |
| action | 自定义操作项 | () =&gt; any | 4.9.0 |