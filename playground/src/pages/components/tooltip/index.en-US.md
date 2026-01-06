---
category: Components
group: Data Display
title: Tooltip
description: Simple text popup box.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*9LKlRbWytugAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*bCbPTJ7LQngAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

## Examples {#examples}

<demo-group>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| align | - | AlignType | - | - |
| arrow | - | boolean \| \{ pointAtCenter?: boolean \} | - | - |
| autoAdjustOverflow | - | boolean \| AdjustOverflow | - | - |
| color | The background color. After using this attribute, the internal text color will adapt automatically | LiteralUnion&lt;PresetColorType&gt; | - | 5.27.0 |
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
| classes | Semantic DOM class | TooltipClassNamesType | - | - |
| styles | Semantic DOM style | TooltipStylesType | - | - |
| getTooltipContainer | - | (node: HTMLElement) =&gt; HTMLElement | - | - |
| motion | - | VcTooltipProps['motion'] | - | - |
| afterOpenChange | - | (open: boolean) =&gt; void | - | - |
| builtinPlacements | - | typeof Placements | - | - |
| title | The text shown in the tooltip | VueNode | - | - |
| overlay | - | VueNode | - | - |
| openClass | - | string | - | - |
| unique | - | boolean | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| openChange | - | (open: boolean) =&gt; void | - |
| update:open | - | (open: boolean) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| title | The text shown in the tooltip | () =&gt; any | - |

### Methods {#methods}

| Method | Description | Type | Version |
| --- | --- | --- | --- |
| forcePopupAlign | Deprecated. | VoidFunction | - |
| forceAlign | - | VoidFunction | - |
| nativeElement | Wrapped dom element. Not promise valid if child not support ref | HTMLElement | - |
| popupElement | Popup dom element | HTMLDivElement | - |