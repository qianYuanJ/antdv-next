---
category: Components
group: 反馈
title: Progress
subtitle: 进度条
description: 展示操作的当前进度。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*gK_4S6fDRfgAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HJH8Tb1lcYAAAAAAAAAAAAAADrJ8AQ/original
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

#### Progress

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | ProgressClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | ProgressStylesType | - | - |
| type | 类型，可选 `line` `circle` `dashboard` | ProgressType | `line` | - |
| percent | 百分比 | number | 0 | - |
| format | 内容的模板函数 | (percent?: number, successPercent?: number) =&gt; any | (percent) =&gt; percent + `%` | - |
| status | 状态，可选：`success` `exception` `normal` `active`(仅限 line) | (typeof ProgressStatuses)[number] | - | - |
| showInfo | 是否显示进度数值或状态图标 | boolean | true | - |
| strokeWidth | - | number | - | - |
| strokeLinecap | 进度条的样式 | 'butt' \| 'square' \| 'round' | `round` | - |
| strokeColor | 进度条的色彩 | string \| string[] \| ProgressGradient | - | - |
| trailColor | 未完成的分段的颜色。已废弃，请使用 `railColor` | string | - | - |
| railColor | 未完成的分段的颜色 | string | - | - |
| width | Deprecated. | number | - | - |
| success | 成功进度条相关配置 | SuccessProps | - | - |
| gapDegree | - | number | - | - |
| gapPlacement | - | GapPlacement | - | - |
| gapPosition | Deprecated. | GapPosition | - | - |
| size | 进度条的尺寸 | number \| [number \| string, number] \| ProgressSize \| \{ width?: number, height?: number \} | "default" | 5.3.0, Object: 5.18.0 |
| steps | - | number \| \{ count: number, gap: number \} | - | - |
| percentPosition | - | PercentPositionType | - | - |
| rounding | - | (step: number) =&gt; number | - | - |