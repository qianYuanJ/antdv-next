---
category: Components
group: 数据展示
title: Image
subtitle: 图片
description: 可预览的图片。
cols: 2
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*FbOCS6aFMeUAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*LVQ3R5JjjJEAAAAAAAAAAAAADrJ8AQ/original
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
| preview | 预览参数，为 `false` 时禁用 | boolean \| PreviewConfig | true | - |
| wrapperStyle | Deprecated. | CSSProperties | - | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | ImageClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | ImageStylesType | - | - |
| rootClass | - | string | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| error | 加载错误回调 | NonNullable&lt;VcImageProps['onError']&gt; | - |
| click | - | NonNullable&lt;VcImageProps['onClick']&gt; | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| fallback | 加载失败容错地址 | () =&gt; any | - |
| placeholder | 加载占位，为 `true` 时使用默认占位 | () =&gt; any | - |