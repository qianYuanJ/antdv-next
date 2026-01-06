---
category: Components
group: Navigation
title: Tabs
description: Tabs make it easy to explore and switch between different views.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*72NDQqXkyOEAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*8HMoTZUoSGoAAAAAAAAAAAAADrJ8AQ/original
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
| destroyInactiveTabPane | Whether destroy inactive TabPane when change tab, use `destroyOnHidden` instead | boolean | false | - |
| class | - | string | - | - |
| style | - | CSSProperties | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| edit | Callback executed when tab is added or removed. Only works while `type="editable-card"` | (e: MouseEvent \| KeyboardEvent \| string, action: 'add' \| 'remove') =&gt; void | - |
| change | Callback executed when active tab is changed | NonNullable&lt;VcTabsProps['onChange']&gt; | - |
| tabClick | Callback executed when tab is clicked | NonNullable&lt;VcTabsProps['onTabClick']&gt; | - |
| tabScroll | Trigger when tab scroll | NonNullable&lt;VcTabsProps['onTabScroll']&gt; | 4.3.0 |
| update:activeKey | - | (activeKey: string) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| addIcon | Customize add icon, only works with `type="editable-card"` | () =&gt; any | 4.4.0 |
| moreIcon | - | () =&gt; any | - |
| removeIcon | The custom icon of remove, only works with `type="editable-card"` | () =&gt; any | 5.15.0 |
| labelRender | - | (args: \{ item: Tab, index: number \}) =&gt; any | - |
| contentRender | - | (args: \{ item: Tab, index: number \}) =&gt; any | - |
| renderTabBar | Replace the TabBar | (args: \{ props: any, TabNavListComponent: any \}) =&gt; any | - |
| rightExtra | - | () =&gt; any | - |
| leftExtra | - | () =&gt; any | - |

### Methods {#methods}

| Method | Description | Type | Version |
| --- | --- | --- | --- |
| nativeElement | - | any | - |