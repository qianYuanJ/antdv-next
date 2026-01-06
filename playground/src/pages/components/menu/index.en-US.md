---
category: Components
group: Navigation
title: Menu
description: A versatile menu for navigation.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KeyQQL5iKkkAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Vn4XSqJFAxcAAAAAAAAAAAAADrJ8AQ/original
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

## Examples {#examples}

<demo-group>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

#### MenuItem

| Property | Description | Type | Default | Version |
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

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| theme | - | MenuTheme | - | - |
| inlineIndent | - | number | - | - |
| _internalDisableMenuItemTitleTooltip | - | boolean | - | - |
| items | - | ItemType[] | - | - |
| classes | - | MenuClassNamesType | - | - |
| styles | - | MenuStylesType | - | - |
| rootClass | - | string | - | - |
| labelRender | - | (item: RenderItem) =&gt; any | - | - |
| extraRender | - | (item: RenderItem) =&gt; any | - | - |
| itemIcon | - | (props: MenuItemProps & RenderIconInfo) =&gt; any | - | - |

#### SubMenu

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | - | VueNode | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| click | - | (info: MenuInfo) =&gt; void | - |
| select | - | (info: SelectInfo) =&gt; void | - |
| deselect | - | (info: SelectInfo) =&gt; void | - |
| openChange | - | (openKeys: string[]) =&gt; void | - |
| update:openKeys | - | (openKeys: string[]) =&gt; void | - |
| update:selectedKeys | - | (selectedKeys: string[]) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| expandIcon | - | () =&gt; any | - |
| labelRender | - | (item: RenderItem) =&gt; any | - |
| extraRender | - | (item: RenderItem) =&gt; any | - |
| itemIcon | - | (props: MenuItemProps & RenderIconInfo) =&gt; any | - |

### Methods {#methods}

| Method | Description | Type | Version |
| --- | --- | --- | --- |
| menu | - | VcMenuRef \| null | - |
| focus | - | (options?: FocusOptions) =&gt; void | - |