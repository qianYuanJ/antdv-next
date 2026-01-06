---
category: Components
group: 导航
title: Steps
subtitle: 步骤条
description: 引导用户按照流程完成任务的导航条。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*677sTqCpE3wAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cFsBQLA0b7UAAAAAAAAAAAAADrJ8AQ/original
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
| rootClass | - | string | - | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | StepsClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | StepsStylesType | - | - |
| variant | 设置样式变体 | 'filled' \| 'outlined' | `filled` | - |
| size | 指定大小，目前支持普通（`default`）和迷你（`small`） | 'default' \| 'small' | `default` | - |
| type | 步骤条类型，可选 `default` `dot` `inline` `navigation` `panel` | 'default' \| 'navigation' \| 'inline' \| 'panel' \| 'dot' | `default` | - |
| direction | 指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向 | 'horizontal' \| 'vertical' | `horizontal` | - |
| orientation | 指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向 | 'horizontal' \| 'vertical' | `horizontal` | - |
| labelPlacement | 指定标签放置位置，默认水平放图标右侧，可选 `vertical` 放图标下方 | 'horizontal' \| 'vertical' | `horizontal` | - |
| titlePlacement | 指定标签放置位置，默认水平放图标右侧，可选 `vertical` 放图标下方 | 'horizontal' \| 'vertical' | `horizontal` | - |
| progressDot | 点状步骤条，可以设置为一个 function，`titlePlacement` 将强制为 `vertical` | boolean \| ProgressDotRender | false | - |
| responsive | 当屏幕宽度小于 `532px` 时自动变为垂直模式 | boolean | true | - |
| ellipsis | - | boolean | - | - |
| offset | Set offset cell, only work when `type` is `inline`. | number | - | - |
| current | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | number | 0 | - |
| initial | 起始序号，从 0 开始记数 | number | 0 | - |
| items | 配置选项卡内容 | StepItem[] | [] | 4.24.0 |
| percent | 当前 `process` 步骤显示的进度条进度（只对基本类型的 Steps 生效） | number | - | 4.5.0 |
| status | 指定当前步骤的状态，可选 `wait` `process` `finish` `error` | 'wait' \| 'process' \| 'finish' \| 'error' | `process` | - |
| iconRender | 自定义渲染图标，请优先使用 `items.icon` | IconRenderType | - | - |
| onChange | 点击切换步骤时触发 | (current: number) =&gt; void | - | - |
| prefixCls | - | string | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| update:current | - | (current: number) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| iconRender | 自定义渲染图标，请优先使用 `items.icon` | IconRenderType | - |