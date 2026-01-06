---
category: Components
group: 数据展示
title: Tour
subtitle: 漫游式引导
description: 用于分步引导用户了解产品功能的气泡组件。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*NMvqRZpuJfQAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*D70qQJJmzhgAAAAAAAAAAAAADrJ8AQ/original
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
| steps | - | TourStepProps[] | - | - |
| prefixCls | - | string | - | - |
| current | 当前处于哪一步 | number | - | - |
| indicatorsRender | 自定义指示器 | (current: number, total: number) =&gt; any | - | 5.2.0 |
| actionsRender | 自定义操作按钮 | TourStepProps['actionsRender'] | - | 5.25.0 |
| type | 类型，影响底色与文字颜色 | 'default' \| 'primary' | `default` | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | TourClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | TourStylesType | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 步骤改变时的回调，current 为当前的步骤 | (current: number) =&gt; void | - |
| close | 关闭引导时的回调函数 | (current: number) =&gt; void | - |
| finish | 引导完成时的回调 | () =&gt; void | - |
| update:open | - | (open: boolean) =&gt; void | - |
| update:current | - | (current: number) =&gt; void | - |
| popupAlign | - | VcTourProps['onPopupAlign'] | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| actionsRender | 自定义操作按钮 | (originNode: any, info: \{ current: number, total: number \}) =&gt; any | 5.25.0 |
| indicatorsRender | 自定义指示器 | (current: number, total: number) =&gt; any | 5.2.0 |
| nextButton | - | (params: \{ current: number, isFirst: boolean, isLast: boolean \}) =&gt; any | - |
| prevButton | - | (params: \{ current: number, isFirst: boolean, isLast: boolean \}) =&gt; any | - |
| coverRender | - | (params: \{ step: TourStepProps, index: number \}) =&gt; any | - |
| titleRender | - | (params: \{ step: TourStepProps, index: number \}) =&gt; any | - |
| descriptionRender | - | (params: \{ step: TourStepProps, index: number \}) =&gt; any | - |