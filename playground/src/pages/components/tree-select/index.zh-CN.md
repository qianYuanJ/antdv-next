---
category: Components
group: 数据录入
title: TreeSelect
subtitle: 树选择
description: 树型选择控件。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*1zcHQLltaJcAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*hjwGSIa4J8QAAAAAAAAAAAAADrJ8AQ/original
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
| size | 选择框大小 | SizeType | - | - |
| disabled | 是否禁用 | boolean | false | - |
| status | 设置校验状态 | InputStatus | - | 4.19.0 |
| variant | 形态变体 | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | TreeSelectStylesType | - | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | TreeSelectClassNamesType | - | - |
| suffixIcon | 自定义的选择框后缀图标 | VueNode | `&lt;DownOutlined /&gt;` | - |
| placement | 选择框弹出的位置 | SelectCommonPlacement | bottomLeft | - |
| popupClassName | 下拉菜单的 className 属性，使用 `classNames.popup.root` 替换 | string | - | 4.23.0 |
| dropdownClassName | Deprecated. | string | - | - |
| dropdownRender | 自定义下拉框内容，使用 `popupRender` 替换 | (menu: any) =&gt; any | - | - |
| popupRender | 自定义下拉框内容 | (menu: any) =&gt; any | - | - |
| dropdownStyle | 下拉菜单的样式，使用 `styles.popup.root` 替换 | CSSProperties | - | - |
| bordered | Deprecated. | boolean | - | - |
| treeLine | 是否展示线条样式，请参考 [Tree - showLine](/components/tree-cn#tree-demo-line) | TreeProps['showLine'] | false | 4.17.0 |
| switcherIcon | 自定义树节点的展开/折叠图标 | SwitcherIcon \| VcTreeSelectProps&lt;ValueType, OptionType&gt;['switcherIcon'] | - | renderProps: 4.20.0 |
| rootClass | - | string | - | - |
| dropdownMatchSelectWidth | Deprecated. | boolean \| number | - | - |
| popupMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 | boolean \| number | true | 5.5.0 |
| showArrow | Deprecated. | boolean | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| openChange | 展开下拉菜单的回调 | (open: boolean) =&gt; void | - |
| dropdownVisibleChange | 展开下拉菜单的回调，使用 `onOpenChange` 替换 | (open: boolean) =&gt; void | - |
| select | 被选中时调用 | NonNullable&lt;VcTreeSelectProps['onSelect']&gt; | - |
| treeExpand | 展示节点时调用 | NonNullable&lt;VcTreeSelectProps['onTreeExpand']&gt; | - |
| treeLoad | - | NonNullable&lt;VcTreeSelectProps['onTreeLoad']&gt; | - |
| change | 选中树节点时调用此函数 | NonNullable&lt;VcTreeSelectProps['onChange']&gt; | - |
| update:value | - | (value: any) =&gt; void | - |
| deselect | - | NonNullable&lt;VcTreeSelectProps['onDeselect']&gt; | - |
| popupScroll | 下拉列表滚动时的回调 | NonNullable&lt;VcTreeSelectProps['onPopupScroll']&gt; | 5.17.0 |
| search | 文本框值变化时的回调 | NonNullable&lt;VcTreeSelectProps['onSearch']&gt; | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| suffixIcon | 自定义的选择框后缀图标 | () =&gt; any | - |
| tagRender | 自定义 tag 内容，多选时生效 | (props: any) =&gt; any | - |
| notFoundContent | 当下拉列表为空时显示的内容 | () =&gt; any | - |
| switcherIcon | 自定义树节点的展开/折叠图标 | () =&gt; any | renderProps: 4.20.0 |
| treeTitleRender | 自定义渲染节点 | (nodeData: DataNode) =&gt; any | 5.12.0 |