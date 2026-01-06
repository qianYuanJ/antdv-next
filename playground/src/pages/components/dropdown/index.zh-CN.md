---
category: Components
group: 导航
title: Dropdown
subtitle: 下拉菜单
description: 向下弹出的列表。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*gTBySYX11WcAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*k619RJ_7bKEAAAAAAAAAAAAADrJ8AQ/original
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
| classes | 用于自定义 Dropdown 组件内部各语义化结构的 class，支持对象或函数 | DropdownClassNamesType | - | - |
| styles | 用于自定义 Dropdown 组件内部各语义化结构的行内 style，支持对象或函数 | DropdownStylesType | - | - |
| menu | 菜单配置项 | MenuProps & \{ activeKey?: VcMenuProps['activeKey'] \} | - | - |
| autoFocus | - | boolean | - | - |
| arrow | 下拉框箭头是否显示 | boolean \| DropdownArrowOptions | false | - |
| trigger | 触发下拉的行为，移动端不支持 hover | ('click' \| 'hover' \| 'contextMenu')[] | \[`hover`] | - |
| popupRender | 自定义弹出框内容 | (Vnode: any) =&gt; any | - | 5.25.0 |
| open | 菜单是否显示 | boolean | - | - |
| disabled | 菜单是否禁用 | boolean | - | - |
| destroyOnHidden | 关闭后是否销毁 Dropdown | boolean | false | 5.25.0 |
| align | - | AlignType | - | - |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | (triggerNode: HTMLElement) =&gt; HTMLElement | () =&gt; document.body | - |
| prefixCls | - | string | - | - |
| transitionName | - | string | - | - |
| placement | 菜单弹出位置：`bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight` | Placement | `bottomLeft` | - |
| forceRender | - | boolean | - | - |
| mouseEnterDelay | - | number | - | - |
| mouseLeaveDelay | - | number | - | - |
| openClassName | - | string | - | - |
| autoAdjustOverflow | 下拉框被遮挡时自动调整位置 | boolean \| AdjustOverflow | true | 5.2.0 |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| update:open | - | (open: boolean) =&gt; void | - |
| openChange | 菜单显示状态改变时调用，点击菜单按钮导致的消失不会触发 | (open: boolean, info: \{ source: 'trigger' \| 'menu' \}) =&gt; void | `info.source`: 5.11.0 |
| menuClick | - | MenuEmits['click'] | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| popupRender | 自定义弹出框内容 | (info: \{ open: boolean, source: 'trigger' \| 'menu' \}) =&gt; any | 5.25.0 |