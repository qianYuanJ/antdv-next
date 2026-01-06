---
category: Components
group: 数据录入
title: Mentions
subtitle: 提及
description: 用于在输入中提及某人或某事。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*e4bXT7Uhi9YAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*pxR2S53P_xoAAAAAAAAAAAAADrJ8AQ/original
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
| loading | - | boolean | - | - |
| status | 设置校验状态 | InputStatus | - | 4.19.0 |
| options | 选项配置 | MentionsOptionProps[] | [] | 5.1.0 |
| popupClassName | - | string | - | - |
| variant | 形态变体 | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | MentionsClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | MentionsStylesType | - | - |
| size | - | SizeType | - | - |
| labelRender | - | (ctx: \{ option: MentionsOptionProps, index: number \}) =&gt; any | - | - |
| allowClear | 可以点击清除图标删除内容 | boolean \| \{     clearIcon?: VueNode   \} | false | 5.13.0 |
| disabled | - | boolean | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| focus | 获得焦点时触发 | (event: FocusEvent) =&gt; void | - |
| blur | 失去焦点时触发 | (event: FocusEvent) =&gt; void | - |
| change | 值改变时触发 | (value: string) =&gt; void | - |
| select | 选择选项时触发 | (option: MentionsOptionProps, prefix: string) =&gt; void | - |
| popupScroll | 滚动时触发 | (event: Event) =&gt; void | 5.23.0 |
| search | 搜索时触发 | (text: string, prefix: string) =&gt; void | - |
| update:value | - | (value: string) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| suffix | - | () =&gt; any | - |
| labelRender | - | (ctx: \{ option: MentionsOptionProps, index: number \}) =&gt; any | - |