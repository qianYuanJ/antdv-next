---
category: Components
subtitle: 全局化配置
group: 其他
title: ConfigProvider
description: 为组件提供统一的全局化配置。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*NVKORa7BCVwAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*YC4ERpGAddoAAAAAAAAAAAAADrJ8AQ/original
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
| getTargetContainer | 配置 Affix、Anchor 滚动监听容器。 | () =&gt; HTMLElement \| Window | () =&gt; window | 4.2.0 |
| getPopupContainer | 弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。 | (triggerNode?: HTMLElement) =&gt; HTMLElement | () =&gt; document.body | - |
| prefixCls | 设置统一样式前缀 | string | `ant` | - |
| iconPrefixCls | 设置图标统一样式前缀 | string | `anticon` | 4.11.0 |
| renderEmpty | 自定义组件空状态。参考 [空状态](/components/empty-cn) | RenderEmptyHandler | - | - |
| csp | 设置 [Content Security Policy](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP) 配置 | CSPConfig | - | - |
| variant | 设置全局输入组件形态变体 | Variant | - | 5.19.0 |
| input | - | InputConfig | - | - |
| inputNumber | - | InputNumberConfig | - | - |
| textArea | - | TextAreaConfig | - | - |
| mentions | - | MentionsConfig | - | - |
| inputSearch | - | InputSearchConfig | - | - |
| otp | - | OTPConfig | - | - |
| select | - | SelectConfig | - | - |
| pagination | - | PaginationConfig | - | - |
| locale | 语言包配置，语言包可到 [antd/locale](http://unpkg.com/antd/locale/) 目录下寻找 | Locale | - | - |
| componentSize | 设置 antd 组件大小 | SizeType | - | - |
| componentDisabled | 设置 antd 组件禁用状态 | boolean | - | 4.21.0 |
| direction | 设置文本展示方向。 [示例](#config-provider-demo-direction) | DirectionType | `ltr` | - |
| space | - | SpaceConfig | - | - |
| splitter | - | ComponentStyleConfig | - | - |
| virtual | 设置 `false` 时关闭虚拟滚动 | boolean | - | 4.3.0 |
| popupMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。`false` 时会关闭虚拟滚动 | boolean | - | 5.5.0 |
| popupOverflow | Select 类组件弹层展示逻辑，默认为可视区域滚动，可配置成滚动区域滚动 | PopupOverflow | 'viewport' | 5.5.0 |
| theme | 设置主题，参考 [定制主题](/docs/react/customize-theme-cn) | ThemeConfig | - | 5.0.0 |
| warning | 设置警告等级，`strict` 为 `false` 时会将废弃相关信息聚合为单条信息 | WarningContextProps | - | 5.10.0 |
| alert | - | AlertConfig | - | - |
| anchor | - | ComponentStyleConfig | - | - |
| button | - | ButtonConfig | - | - |
| calendar | - | ComponentStyleConfig | - | - |
| carousel | - | ComponentStyleConfig | - | - |
| cascader | - | CascaderConfig | - | - |
| treeSelect | - | TreeSelectConfig | - | - |
| collapse | - | CollapseConfig | - | - |
| divider | - | ComponentStyleConfig | - | - |
| typography | - | ComponentStyleConfig | - | - |
| skeleton | - | ComponentStyleConfig | - | - |
| spin | - | SpinConfig | - | - |
| segmented | - | ComponentStyleConfig | - | - |
| statistic | - | ComponentStyleConfig | - | - |
| steps | - | ComponentStyleConfig | - | - |
| layout | - | ComponentStyleConfig | - | - |
| progress | - | ComponentStyleConfig | - | - |
| result | - | ComponentStyleConfig | - | - |
| slider | - | ComponentStyleConfig | - | - |
| breadcrumb | - | ComponentStyleConfig | - | - |
| menu | - | MenuConfig | - | - |
| floatButton | - | FloatButtonConfig | - | - |
| floatButtonGroup | - | FloatButtonGroupConfig | - | - |
| checkbox | - | ComponentStyleConfig | - | - |
| descriptions | - | ComponentStyleConfig | - | - |
| empty | - | EmptyConfig | - | - |
| badge | - | BadgeConfig | - | - |
| radio | - | ComponentStyleConfig | - | - |
| rate | - | ComponentStyleConfig | - | - |
| switch | - | ComponentStyleConfig | - | - |
| transfer | - | TransferConfig | - | - |
| avatar | - | ComponentStyleConfig | - | - |
| message | - | ComponentStyleConfig | - | - |
| tag | - | TagConfig | - | - |
| card | - | CardConfig | - | - |
| tabs | - | TabsConfig | - | - |
| timeline | - | ComponentStyleConfig | - | - |
| timePicker | - | TimePickerConfig | - | - |
| notification | - | NotificationConfig | - | - |
| tree | - | ComponentStyleConfig | - | - |
| colorPicker | - | ComponentStyleConfig | - | - |
| datePicker | - | DatePickerConfig | - | - |
| rangePicker | - | RangePickerConfig | - | - |
| dropdown | - | ComponentStyleConfig | - | - |
| flex | - | FlexConfig | - | - |
| wave | - | WaveConfig | - | - |
| tooltip | - | TooltipConfig | - | - |
| popover | - | PopoverConfig | - | - |
| popconfirm | - | PopconfirmConfig | - | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| renderEmpty | 自定义组件空状态。参考 [空状态](/components/empty-cn) | (componentName?: string) =&gt; any | - |