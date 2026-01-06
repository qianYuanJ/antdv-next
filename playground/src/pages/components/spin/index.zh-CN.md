---
category: Components
group: 反馈
title: Spin
subtitle: 加载中
description: 用于页面和区块的加载中状态。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*5mC5TomY4B0AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*i43_ToFrL8YAAAAAAAAAAAAADrJ8AQ/original
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
| spinning | 是否为加载中状态 | boolean | true | - |
| size | 组件大小，可选值为 `small` `default` `large` | SpinSize | `default` | - |
| tip | 当作为包裹元素时，可以自定义描述文案 | VueNode | - | - |
| delay | 延迟显示加载效果的时间（防止闪烁） | number | - | - |
| wrapperClassName | 包装器的类属性 | string | - | - |
| indicator | 加载指示符 | VueNode | - | - |
| fullscreen | 显示带有 `Spin` 组件的背景 | boolean | false | 5.11.0 |
| percent | 展示进度，当设置 `percent="auto"` 时会预估一个永远不会停止的进度 | number \| 'auto' | - | 5.18.0 |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | SpinClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | SpinStylesType | - | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| indicator | 加载指示符 | () =&gt; any | - |
| tip | 当作为包裹元素时，可以自定义描述文案 | () =&gt; any | - |