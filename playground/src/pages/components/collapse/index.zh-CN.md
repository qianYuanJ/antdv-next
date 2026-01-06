---
category: Components
group: 数据展示
title: Collapse
subtitle: 折叠面板
description: 可以折叠/展开的内容区域。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*B7HKR5OBe8gAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*sir-TK0HkWcAAAAAAAAAAAAADrJ8AQ/original
---

<DocHeading></DocHeading>

## 何时使用 {#when-to-use}

## 示例 {#examples}

<demo-group>
</demo-group>

## API

### 属性 {#property}

通用属性参考：[通用属性](/docs/vue/common-props)

#### Collapse

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| activeKey | 当前激活 tab 面板的 key | Array&lt;string \| number&gt; \| string \| number | [手风琴模式](#collapse-demo-accordion)下默认第一个元素 | - |
| defaultActiveKey | 初始化选中面板的 key | Array&lt;string \| number&gt; \| string \| number | - | - |
| accordion | 手风琴模式 | boolean | false | - |
| destroyOnHidden | 销毁折叠隐藏的面板 | boolean | false | 5.25.0 |
| rootClass | - | string | - | - |
| bordered | 带边框风格的折叠面板 | boolean | true | - |
| prefixCls | - | string | - | - |
| expandIcon | 自定义切换图标 | (panelProps: PanelProps) =&gt; any | - | - |
| expandIconPlacement | 设置图标位置 | ExpandIconPlacement | `start` | - |
| ghost | 使折叠面板透明且无边框 | boolean | false | 4.4.0 |
| size | 设置折叠面板大小 | SizeType | `middle` | 5.2.0 |
| collapsible | 所有子面板是否可折叠或指定可折叠触发区域 | CollapsibleType | - | 4.9.0 |
| labelRender | - | (params: \{ item: CollapseItemType, index: number \}) =&gt; any | - | - |
| contentRender | - | (params: \{ item: CollapseItemType, index: number \}) =&gt; any | - | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | CollapseClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | CollapseStylesType | - | - |
| items | 折叠项目内容 | CollapseItemType[] | - | 5.6.0 |

#### CollapsePanel

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| key | - | string \| number | - | - |
| header | - | VueNode | - | - |
| showArrow | - | boolean | - | - |
| prefixCls | - | string | - | - |
| forceRender | - | boolean | - | - |
| id | - | string | - | - |
| extra | - | VueNode | - | - |
| collapsible | 所有子面板是否可折叠或指定可折叠触发区域 | CollapsibleType | - | 4.9.0 |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 切换面板的回调 | (key: string[]) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| expandIcon | 自定义切换图标 | (panelProps: PanelProps) =&gt; any | - |
| labelRender | - | (params: \{ item: CollapseItemType, index: number \}) =&gt; any | - |
| contentRender | - | (params: \{ item: CollapseItemType, index: number \}) =&gt; any | - |