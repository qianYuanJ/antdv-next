---
category: Components
title: ColorPicker
subtitle: 颜色选择器
description: 用于选择颜色。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*PpY4RYNM8UcAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*EHL-QYJofZsAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: 数据录入
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

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | - | (value: AggregationColor, css: string) =&gt; void | - |
| clear | - | () =&gt; void | - |
| changeComplete | - | (value: AggregationColor) =&gt; void | - |
| openChange | - | (open: boolean) =&gt; void | - |
| update:open | - | (open: boolean) =&gt; void | - |
| formatChange | - | (format?: ColorFormatType) =&gt; void | - |
| update:value | - | (value: ColorValueType) =&gt; void | - |
| update:format | - | (format: ColorFormatType) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| panelRender | - | (params: \{ panel: any, extra: \{ components: \{ Picker: any, Presets: any \} \} \}) =&gt; any | - |
| showText | - | (params: \{ color: AggregationColor \}) =&gt; any | - |