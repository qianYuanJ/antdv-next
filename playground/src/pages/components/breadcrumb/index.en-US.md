---
category: Components
group: Navigation
title: Breadcrumb
description: Display the current location within a hierarchy. And allow going back to states higher up in the hierarchy.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*I5a2Tpqs3y0AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Tr90QKrE_LcAAAAAAAAAAAAADrJ8AQ/original
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

#### Breadcrumb

| Property | Description | Type                                                                     | Default | Version |
| --- | --- |--------------------------------------------------------------------------| --- | --- |
| prefixCls | - | string | - | - |
| params | Routing parameters | T | - | - |
| separator | Custom separator | VueNode | `/` | - |
| rootClass | - | string | - | - |
| items | The routing stack information of router | ItemType[] | - | 5.3.0 |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | BreadcrumbClassNamesType&lt;T&gt; | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | BreadcrumbStylesType&lt;T&gt; | - | - |
| itemRender | Custom item renderer | (route: ItemType, params: T, routes: ItemType[], paths: string[]) =&gt; any | - | - |
| titleRender | - | (params: \{ item: ItemType, index: number \}) =&gt; any | - | - |
| menuLabelRender | - | (params: \{ item: ItemType, index: number, menu: MenuItem \}) =&gt; any | - | - |
| menuExtraRender | - | (params: \{ item: ItemType, index: number, menu: MenuItem \}) =&gt; any | - | - |

#### BreadcrumbItem

| Property | Description | Type                                                     | Default | Version |
| --- | --- |----------------------------------------------------------| --- | --- |
| separator | Custom separator | VueNode | `/` | - |
| key | - | Key | - | - |
| prefixCls | - | string | - | - |
| href | - | string | - | - |
| menu | - | Omit&lt;MenuType, 'items'&gt; & \{     items?: MenuItem[]   \} | - | - |
| dropdownProps | - | DropdownProps | - | - |
| onClick | - | (event: MouseEvent) =&gt; void | - | - |
| class | - | string | - | - |
| style | - | CSSProperties | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| clickItem | - | (item: ItemType, event: MouseEvent) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type                                                                             | Version |
| --- | --- |----------------------------------------------------------------------------------| --- |
| itemRender | Custom item renderer | (route: ItemType, params: AnyObject, routes: ItemType[], paths: string[]) =&gt; any | - |
| titleRender | - | (params: \{ item: ItemType, index: number \}) =&gt; any | - |
| separator | Custom separator | () =&gt; any | - |
| menuLabelRender | - | (params: \{ item: ItemType, index: number, menu: MenuItem \}) =&gt; any | - |
| menuExtraRender | - | (params:\{ item: ItemType, index: number, menu: MenuItem \}) =&gt; any | - |