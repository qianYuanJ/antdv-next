---
category: Components
group: Data Display
title: Collapse
description: A content area which can be collapsed and expanded.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*B7HKR5OBe8gAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*sir-TK0HkWcAAAAAAAAAAAAADrJ8AQ/original
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

## Examples {#examples}

<demo-group>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

#### Collapse

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| activeKey | Key of the active panel | Array&lt;string \| number&gt; \| string \| number | No default value. In [accordion mode](#collapse-demo-accordion), it's the key of the first panel | - |
| defaultActiveKey | Key of the initial active panel | Array&lt;string \| number&gt; \| string \| number | - | - |
| accordion | If true, Collapse renders as Accordion | boolean | false | - |
| destroyOnHidden | Destroy Inactive Panel | boolean | false | 5.25.0 |
| rootClass | - | string | - | - |
| bordered | Toggles rendering of the border around the collapse block | boolean | true | - |
| prefixCls | - | string | - | - |
| expandIcon | Allow to customize collapse icon | (panelProps: PanelProps) =&gt; any | - | - |
| expandIconPlacement | Set expand icon placement | ExpandIconPlacement | `start` | - |
| ghost | Make the collapse borderless and its background transparent | boolean | false | 4.4.0 |
| size | Set the size of collapse | SizeType | `middle` | 5.2.0 |
| collapsible | Specify how to trigger Collapse. Either by clicking icon or by clicking any area in header or disable collapse functionality itself | CollapsibleType | - | 4.9.0 |
| labelRender | - | (params: \{ item: CollapseItemType, index: number \}) =&gt; any | - | - |
| contentRender | - | (params: \{ item: CollapseItemType, index: number \}) =&gt; any | - | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | CollapseClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | CollapseStylesType | - | - |
| items | collapse items content | CollapseItemType[] | - | 5.6.0 |

#### CollapsePanel

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| key | - | string \| number | - | - |
| header | - | VueNode | - | - |
| showArrow | - | boolean | - | - |
| prefixCls | - | string | - | - |
| forceRender | - | boolean | - | - |
| id | - | string | - | - |
| extra | - | VueNode | - | - |
| collapsible | Specify how to trigger Collapse. Either by clicking icon or by clicking any area in header or disable collapse functionality itself | CollapsibleType | - | 4.9.0 |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | Callback function executed when active panel is changed | (key: string[]) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| expandIcon | Allow to customize collapse icon | (panelProps: PanelProps) =&gt; any | - |
| labelRender | - | (params: \{ item: CollapseItemType, index: number \}) =&gt; any | - |
| contentRender | - | (params: \{ item: CollapseItemType, index: number \}) =&gt; any | - |