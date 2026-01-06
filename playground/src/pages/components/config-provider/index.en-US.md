---
category: Components
group: Other
title: ConfigProvider
description: Provide a uniform configuration support for components.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*NVKORa7BCVwAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*YC4ERpGAddoAAAAAAAAAAAAADrJ8AQ/original
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
| getTargetContainer | Config Affix, Anchor scroll target container | () =&gt; HTMLElement \| Window | () =&gt; window | 4.2.0 |
| getPopupContainer | To set the container of the popup element. The default is to create a `div` element in `body` | (triggerNode?: HTMLElement) =&gt; HTMLElement | () =&gt; document.body | - |
| prefixCls | Set prefix className | string | `ant` | - |
| iconPrefixCls | Set icon prefix className | string | `anticon` | 4.11.0 |
| renderEmpty | Set empty content of components. Ref [Empty](/components/empty/) | RenderEmptyHandler | - | - |
| csp | Set [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) config | CSPConfig | - | - |
| variant | Set variant of data entry components | Variant | - | 5.19.0 |
| input | - | InputConfig | - | - |
| inputNumber | - | InputNumberConfig | - | - |
| textArea | - | TextAreaConfig | - | - |
| mentions | - | MentionsConfig | - | - |
| inputSearch | - | InputSearchConfig | - | - |
| otp | - | OTPConfig | - | - |
| select | - | SelectConfig | - | - |
| pagination | - | PaginationConfig | - | - |
| locale | Language package setting, you can find the packages in [antd/locale](http://unpkg.com/antd/locale/) | Locale | - | - |
| componentSize | Config antd component size | SizeType | - | - |
| componentDisabled | Config antd component `disabled` | boolean | - | 4.21.0 |
| direction | Set direction of layout. See [demo](#config-provider-demo-direction) | DirectionType | `ltr` | - |
| space | - | SpaceConfig | - | - |
| splitter | - | ComponentStyleConfig | - | - |
| virtual | Disable virtual scroll when set to `false` | boolean | - | 4.3.0 |
| popupMatchSelectWidth | Determine whether the dropdown menu and the select input are the same width. Default set `min-width` same as input. Will ignore when value less than select width. `false` will disable virtual scroll | boolean | - | 5.5.0 |
| popupOverflow | Select like component popup logic. Can set to show in viewport or follow window scroll | PopupOverflow | 'viewport' | 5.5.0 |
| theme | Set theme, ref [Customize Theme](/docs/react/customize-theme) | ThemeConfig | - | 5.0.0 |
| warning | Config warning level, when `strict` is `false`, it will aggregate deprecated information into a single message | WarningContextProps | - | 5.10.0 |
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

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| renderEmpty | Set empty content of components. Ref [Empty](/components/empty/) | (componentName?: string) =&gt; any | - |