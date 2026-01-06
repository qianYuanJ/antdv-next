---
category: Components
title: ColorPicker
description: Used for color selection.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*PpY4RYNM8UcAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*EHL-QYJofZsAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: Data Entry
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
| mode | - | ModeType \| ModeType[] | - | - |
| value | - | ColorValueType | - | - |
| defaultValue | - | ColorValueType | - | - |
| open | - | boolean | - | - |
| disabled | - | boolean | - | - |
| placement | - | TriggerPlacement | - | - |
| trigger | - | TriggerType | - | - |
| format | - | ColorFormatType | - | - |
| defaultFormat | - | ColorFormatType | - | - |
| allowClear | - | boolean | - | - |
| presets | - | PresetsItem[] | - | - |
| arrow | - | boolean \| \{ pointAtCenter: boolean \} | - | - |
| panelRender | - | (params: \{ panel: any, extra: \{ components: \{ Picker: any, Presets: any \} \} \}) =&gt; any | - | - |
| showText | - | boolean \| ((params: \{ color: AggregationColor \}) =&gt; any) | - | - |
| size | - | SizeType | - | - |
| classes | - | ColorPickerClassNamesType | - | - |
| styles | - | ColorPickerStylesType | - | - |
| rootClass | - | string | - | - |
| disabledAlpha | - | boolean | - | - |
| disabledFormat | - | boolean | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | - | (value: AggregationColor, css: string) =&gt; void | - |
| clear | - | () =&gt; void | - |
| changeComplete | - | (value: AggregationColor) =&gt; void | - |
| openChange | - | (open: boolean) =&gt; void | - |
| update:open | - | (open: boolean) =&gt; void | - |
| formatChange | - | (format?: ColorFormatType) =&gt; void | - |
| update:value | - | (value: ColorValueType) =&gt; void | - |
| update:format | - | (format: ColorFormatType) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| panelRender | - | (params: \{ panel: any, extra: \{ components: \{ Picker: any, Presets: any \} \} \}) =&gt; any | - |
| showText | - | (params: \{ color: AggregationColor \}) =&gt; any | - |