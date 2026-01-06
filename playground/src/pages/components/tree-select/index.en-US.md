---
category: Components
group: Data Entry
title: TreeSelect
description: Tree selection control.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*1zcHQLltaJcAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*hjwGSIa4J8QAAAAAAAAAAAAADrJ8AQ/original
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
| size | To set the size of the select input | SizeType | - | - |
| disabled | Disabled or not | boolean | false | - |
| status | Set validation status | InputStatus | - | 4.19.0 |
| variant | Variants of selector | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | TreeSelectStylesType | - | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | TreeSelectClassNamesType | - | - |
| suffixIcon | The custom suffix icon | VueNode | `&lt;DownOutlined /&gt;` | - |
| placement | The position where the selection box pops up | SelectCommonPlacement | bottomLeft | - |
| popupClassName | The className of dropdown menu, use `classNames.popup.root` instead | string | - | 4.23.0 |
| dropdownClassName | Deprecated. | string | - | - |
| dropdownRender | Customize dropdown content, use `popupRender` instead | (menu: any) =&gt; any | - | - |
| popupRender | Customize dropdown content | (menu: any) =&gt; any | - | - |
| dropdownStyle | To set the style of the dropdown menu, use `styles.popup.root` instead | CSSProperties | - | - |
| bordered | Deprecated. | boolean | - | - |
| treeLine | Show the line. Ref [Tree - showLine](/components/tree/#tree-demo-line) | TreeProps['showLine'] | false | 4.17.0 |
| switcherIcon | Customize collapse/expand icon of tree node | SwitcherIcon \| VcTreeSelectProps&lt;ValueType, OptionType&gt;['switcherIcon'] | - | renderProps: 4.20.0 |
| rootClass | - | string | - | - |
| dropdownMatchSelectWidth | Deprecated. | boolean \| number | - | - |
| popupMatchSelectWidth | Determine whether the popup menu and the select input are the same width. Default set `min-width` same as input. Will ignore when value less than select width. `false` will disable virtual scroll | boolean \| number | true | 5.5.0 |
| showArrow | Deprecated. | boolean | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| openChange | - | (open: boolean) =&gt; void | - |
| dropdownVisibleChange | Called when dropdown open, use `onOpenChange` instead | (open: boolean) =&gt; void | - |
| select | A callback function, can be executed when you select a treeNode | NonNullable&lt;VcTreeSelectProps['onSelect']&gt; | - |
| treeExpand | A callback function, can be executed when treeNode expanded | NonNullable&lt;VcTreeSelectProps['onTreeExpand']&gt; | - |
| treeLoad | - | NonNullable&lt;VcTreeSelectProps['onTreeLoad']&gt; | - |
| change | A callback function, can be executed when selected treeNodes or input value change | NonNullable&lt;VcTreeSelectProps['onChange']&gt; | - |
| update:value | - | (value: any) =&gt; void | - |
| deselect | - | NonNullable&lt;VcTreeSelectProps['onDeselect']&gt; | - |
| popupScroll | Called when dropdown scrolls | NonNullable&lt;VcTreeSelectProps['onPopupScroll']&gt; | 5.17.0 |
| search | A callback function, can be executed when the search input changes | NonNullable&lt;VcTreeSelectProps['onSearch']&gt; | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| suffixIcon | The custom suffix icon | () =&gt; any | - |
| tagRender | Customize tag render when `multiple` | (props: any) =&gt; any | - |
| notFoundContent | Specify content to show when no result matches | () =&gt; any | - |
| switcherIcon | Customize collapse/expand icon of tree node | () =&gt; any | renderProps: 4.20.0 |
| treeTitleRender | Customize tree node title render | (nodeData: DataNode) =&gt; any | 5.12.0 |