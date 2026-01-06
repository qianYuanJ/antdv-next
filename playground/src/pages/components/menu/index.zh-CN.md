---
category: Components
group: 导航
title: Menu
subtitle: 导航菜单
description: 为页面和功能提供导航的菜单列表。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KeyQQL5iKkkAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Vn4XSqJFAxcAAAAAAAAAAAAADrJ8AQ/original
---

<DocHeading></DocHeading>

## 何时使用 {#when-to-use}

## 示例 {#examples}

<demo-group>
</demo-group>

## API

### 属性 {#property}

通用属性参考：[通用属性](/docs/vue/common-props)

#### MenuItem

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| icon | - | VueNode | - | - |
| danger | - | boolean | - | - |
| title | - | VueNode | - | - |
| eventKey | - | string | - | - |
| warnKey | - | boolean | - | - |
| attribute | Deprecated. | Record&lt;string, string&gt; | - | - |
| onKeyDown | - | (e: KeyboardEvent) =&gt; void | - | - |
| onFocus | - | (e: FocusEvent) =&gt; void | - | - |
| role | - | string | - | - |

#### Menu

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| theme | 主题颜色 | MenuTheme | `light` | - |
| inlineIndent | inline 模式的菜单缩进宽度 | number | 24 | - |
| _internalDisableMenuItemTitleTooltip | - | boolean | - | - |
| items | 菜单内容 | ItemType[] | - | 4.20.0 |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | MenuClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | MenuStylesType | - | - |
| rootClass | - | string | - | - |
| labelRender | - | (item: RenderItem) =&gt; any | - | - |
| extraRender | - | (item: RenderItem) =&gt; any | - | - |
| itemIcon | - | (props: MenuItemProps & RenderIconInfo) =&gt; any | - | - |

#### SubMenu

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| title | - | VueNode | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| click | 点击 MenuItem 调用此函数 | (info: MenuInfo) =&gt; void | - |
| select | 被选中时调用 | (info: SelectInfo) =&gt; void | - |
| deselect | 取消选中时调用，仅在 multiple 生效 | (info: SelectInfo) =&gt; void | - |
| openChange | SubMenu 展开/关闭的回调 | (openKeys: string[]) =&gt; void | - |
| update:openKeys | - | (openKeys: string[]) =&gt; void | - |
| update:selectedKeys | - | (selectedKeys: string[]) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| expandIcon | 自定义展开图标 | () =&gt; any | 4.9.0 |
| labelRender | - | (item: RenderItem) =&gt; any | - |
| extraRender | - | (item: RenderItem) =&gt; any | - |
| itemIcon | - | (props: MenuItemProps & RenderIconInfo) =&gt; any | - |

### 方法 {#methods}

| 方法 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| menu | - | VcMenuRef \| null | - |
| focus | - | (options?: FocusOptions) =&gt; void | - |