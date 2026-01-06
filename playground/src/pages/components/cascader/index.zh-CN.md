---
category: Components
group: 数据录入
title: Cascader
subtitle: 级联选择
description: 级联选择框。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ngTnQZNOcK0AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Nt8xR7afyr0AAAAAAAAAAAAADrJ8AQ/original
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
| value | 指定选中项 | any | - | - |
| multiple | 支持多选节点 | boolean | - | 4.17.0 |
| size | 输入框大小 | SizeType | - | - |
| showArrow | Deprecated. | boolean | - | - |
| disabled | 禁用 | boolean | false | - |
| bordered | Deprecated. | boolean | - | - |
| placement | 浮层预设位置 | SelectCommonPlacement | `bottomLeft` | 4.17.0 |
| suffixIcon | 自定义的选择框后缀图标 | VueNode | - | - |
| options | 可选项数据源 | OptionType[] | - | - |
| status | 设置校验状态 | InputStatus | - | 4.19.0 |
| rootClass | - | string | - | - |
| popupClassName | 自定义浮层类名，使用 `classNames.popup.root` 替换 | string | - | 4.23.0 |
| dropdownClassName | Deprecated. | string | - | - |
| dropdownStyle | 下拉菜单的 style 属性，使用 `styles.popup.root` 替换 | CSSProperties | - | - |
| dropdownRender | 自定义下拉框内容，请使用 `popupRender` 替换 | (menu: any) =&gt; any | - | 4.4.0 |
| popupRender | 自定义下拉框内容 | (menu: any) =&gt; any | - | - |
| dropdownMenuColumnStyle | 下拉菜单列的样式，请使用 `popupMenuColumnStyle` 替换 | CSSProperties | - | - |
| popupMenuColumnStyle | 下拉菜单列的样式 | CSSProperties | - | - |
| variant | 形态变体 | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | CascaderClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | CascaderStylesType | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| openChange | 显示/隐藏浮层的回调 | (visible: boolean) =&gt; void | - |
| dropdownVisibleChange | 显示/隐藏浮层的回调，请使用 `onOpenChange` 替换 | (visible: boolean) =&gt; void | 4.17.0 |
| popupVisibleChange | - | (visible: boolean) =&gt; void | - |
| change | 选择完成后的回调 | NonNullable&lt;VcCascaderProps['onChange']&gt; | - |
| update:value | - | (value: any) =&gt; void | - |
| search | - | NonNullable&lt;VcCascaderProps['onSearch']&gt; | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| suffixIcon | 自定义的选择框后缀图标 | () =&gt; any | - |
| notFoundContent | 当下拉列表为空时显示的内容 | () =&gt; any | - |
| popupRender | 自定义下拉框内容 | (menu: any) =&gt; any | - |
| displayRender | 选择后展示的渲染函数 | (data: \{ labels: string[], selectedOptions?: DefaultOptionType[] \}) =&gt; any | `multiple`: 4.18.0 |
| optionRender | 自定义渲染下拉选项 | (option: DefaultOptionType) =&gt; any | 5.16.0 |
| expandIcon | 自定义次级菜单展开图标 | () =&gt; any | 4.4.0 |