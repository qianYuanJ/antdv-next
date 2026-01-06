---
category: Components
group: Data Display
title: Card
description: A container for displaying information.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*QXO1SKEdIzYAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*5WDvQp_H7LUAAAAAAAAAAAAADrJ8AQ/original
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

## Examples {#examples}

<demo-group>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

#### Card

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | Card title | VueNode | - | - |
| extra | Content to render in the top-right corner of the card | VueNode | - | - |
| bordered | Toggles rendering of the border around the card, please use `variant` instead | boolean | true | - |
| headStyle | Deprecated. | CSSProperties | - | - |
| bodyStyle | Deprecated. | CSSProperties | - | - |
| loading | Shows a loading indicator while the contents of the card are being fetched | boolean | false | - |
| hoverable | Lift up when hovering card | boolean | false | - |
| id | - | string | - | - |
| size | Size of card | CardSize | `default` | - |
| type | Card style type, can be set to `inner` or not set | CardType | - | - |
| cover | Card cover | VueNode | - | - |
| actions | The action list, shows at the bottom of the Card | VueNode[] | - | - |
| tabList | List of TabPane's head | CardTabListType[] | - | - |
| tabBarExtraContent | Extra content in tab bar | VueNode \| \{ [key: string]: VueNode \} | - | - |
| activeTabKey | Current TabPane's key | string | - | - |
| defaultActiveTabKey | Initial active TabPane's key, if `activeTabKey` is not set | string | `The key of first tab` | - |
| tabProps | [Tabs](/components/tabs/#tabs) | Record&lt;string, any&gt; | - | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | CardClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | CardStylesType | - | - |
| variant | Variants of Card | 'borderless' \| 'outlined' | `outlined` | 5.24.0 |

#### CardGrid

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| prefixCls | - | string | - | - |
| hoverable | Lift up when hovering card | boolean | false | - |

#### CardMeta

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| prefixCls | - | string | - | - |
| avatar | - | VueNode | - | - |
| title | Card title | VueNode | - | - |
| description | - | VueNode | - | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | CardMetaClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | CardMetaStylesType | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| tabChange | Callback when tab is switched | (key: string) =&gt; void | - |
| update:activeTabKey | - | (key: string) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| title | Card title | () =&gt; any | - |
| extra | Content to render in the top-right corner of the card | () =&gt; any | - |
| cover | Card cover | () =&gt; any | - |
| actions | The action list, shows at the bottom of the Card | () =&gt; any | - |
| tabContentRender | - | TabsSlots['contentRender'] | - |
| tabLabelRender | - | TabsSlots['labelRender'] | - |
| tabBarExtraContent | Extra content in tab bar | () =&gt; any | - |