---
category: Components
group: 数据展示
title: Tooltip
subtitle: 文字提示
description: 简单的文字提示气泡框。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*9LKlRbWytugAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*bCbPTJ7LQngAAAAAAAAAAAAADrJ8AQ/original
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
| align | - | AlignType | - | - |
| arrow | - | boolean \| \{ pointAtCenter?: boolean \} | - | - |
| autoAdjustOverflow | - | boolean \| AdjustOverflow | - | - |
| color | 设置背景颜色，使用该属性后内部文字颜色将自适应 | LiteralUnion&lt;PresetColorType&gt; | - | 5.27.0 |
| open | - | boolean | - | - |
| defaultOpen | - | boolean | - | - |
| getPopupContainer | - | (triggerNode: HTMLElement) =&gt; HTMLElement | - | - |
| destroyOnHidden | - | boolean | - | - |
| zIndex | - | number | - | - |
| placement | - | TooltipPlacement | - | - |
| trigger | - | ActionType \| ActionType[] | - | - |
| fresh | - | boolean | - | - |
| mouseEnterDelay | - | number | - | - |
| mouseLeaveDelay | - | number | - | - |
| classes | 语义化结构 class | TooltipClassNamesType | - | - |
| styles | 语义化结构 style | TooltipStylesType | - | - |
| getTooltipContainer | - | (node: HTMLElement) =&gt; HTMLElement | - | - |
| motion | - | VcTooltipProps['motion'] | - | - |
| afterOpenChange | - | (open: boolean) =&gt; void | - | - |
| builtinPlacements | - | typeof Placements | - | - |
| title | 提示文字 | VueNode | - | - |
| overlay | - | VueNode | - | - |
| openClass | - | string | - | - |
| unique | - | boolean | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| openChange | - | (open: boolean) =&gt; void | - |
| update:open | - | (open: boolean) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| title | 提示文字 | () =&gt; any | - |

### 方法 {#methods}

| 方法 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| forcePopupAlign | Deprecated. | VoidFunction | - |
| forceAlign | - | VoidFunction | - |
| nativeElement | Wrapped dom element. Not promise valid if child not support ref | HTMLElement | - |
| popupElement | Popup dom element | HTMLDivElement | - |