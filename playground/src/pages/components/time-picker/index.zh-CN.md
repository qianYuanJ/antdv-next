---
category: Components
group: 数据录入
title: TimePicker
subtitle: 时间选择框
description: 输入或选择时间的控件。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*kGmGSLk_1fwAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*1hDmQJIDFJQAAAAAAAAAAAAADrJ8AQ/original
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
| addon | - | () =&gt; VueNode | - | - |
| status | 设置校验状态 | InputStatus | - | 4.19.0 |
| popupClassName | 弹出层类名，请使用 `classNames.popup` 替换 | string | - | - |
| popupStyle | 弹出层样式对象, 请使用 `styles.popup` 替换 | CSSProperties | - | - |
| rootClass | - | string | - | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | TimePickerClassNames | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | TimePickerStyles | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 时间发生变化的回调 | (date: DateType \| DateType[] \| null, dateString: string \| string[]) =&gt; void | - |
| update:value | - | (date: DateType \| DateType[] \| null) =&gt; void | - |
| calendarChange | 待选日期发生变化的回调。`info` 参数自 4.4.0 添加 | (date: DateType \| DateType[], dateString: string \| string[], info: any) =&gt; void | - |
| panelChange | - | (date: DateType, mode: PickerMode) =&gt; void | - |
| openChange | 面板打开/关闭时的回调 | (open: boolean) =&gt; void | - |
| ok | - | (date: DateType \| DateType[]) =&gt; void | - |
| select | - | (date: DateType) =&gt; void | - |
| focus | - | (e: FocusEvent, info: any) =&gt; void | - |
| blur | - | (e: FocusEvent, info: any) =&gt; void | - |
| keydown | - | (e: KeyboardEvent, preventDefault: VoidFunction) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| addon | - | () =&gt; any | - |
| renderExtraFooter | 选择框底部显示自定义的内容 | (mode: PickerMode) =&gt; any | - |
| suffixIcon | 自定义的选择框后缀图标 | () =&gt; any | - |