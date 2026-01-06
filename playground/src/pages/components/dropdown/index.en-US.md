---
category: Components
group: Navigation
title: Dropdown
description: A dropdown list.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*gTBySYX11WcAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*k619RJ_7bKEAAAAAAAAAAAAADrJ8AQ/original
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
| classes | Customize class for each semantic structure inside the Dropdown component. Supports object or function. | DropdownClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the Dropdown component. Supports object or function. | DropdownStylesType | - | - |
| menu | The menu props | MenuProps & \{ activeKey?: VcMenuProps['activeKey'] \} | - | - |
| autoFocus | - | boolean | - | - |
| arrow | Whether the dropdown arrow should be visible | boolean \| DropdownArrowOptions | false | - |
| trigger | The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens | ('click' \| 'hover' \| 'contextMenu')[] | \[`hover`] | - |
| popupRender | Customize popup content | (Vnode: any) =&gt; any | - | 5.25.0 |
| open | Whether the dropdown menu is currently open | boolean | - | - |
| disabled | Whether the dropdown menu is disabled | boolean | - | - |
| destroyOnHidden | Whether destroy dropdown when hidden | boolean | false | 5.25.0 |
| align | - | AlignType | - | - |
| getPopupContainer | To set the container of the dropdown menu. The default is to create a div element in body, but you can reset it to the scrolling area and make a relative reposition. [Example on CodePen](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | (triggerNode: HTMLElement) =&gt; HTMLElement | () =&gt; document.body | - |
| prefixCls | - | string | - | - |
| transitionName | - | string | - | - |
| placement | Placement of popup menu: `bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight` | Placement | `bottomLeft` | - |
| forceRender | - | boolean | - | - |
| mouseEnterDelay | - | number | - | - |
| mouseLeaveDelay | - | number | - | - |
| openClassName | - | string | - | - |
| autoAdjustOverflow | Whether to adjust dropdown placement automatically when dropdown is off screen | boolean \| AdjustOverflow | true | 5.2.0 |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| update:open | - | (open: boolean) =&gt; void | - |
| openChange | Called when the open state is changed. Not trigger when hidden by click item | (open: boolean, info: \{ source: 'trigger' \| 'menu' \}) =&gt; void | `info.source`: 5.11.0 |
| menuClick | - | MenuEmits['click'] | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| popupRender | Customize popup content | (info: \{ open: boolean, source: 'trigger' \| 'menu' \}) =&gt; any | 5.25.0 |