---
category: Components
title: Avatar
subtitle: 头像
description: 用来代表用户或事物，支持图片、图标或字符展示。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JJBSS5lBG4IAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*YbgyQaRGz-UAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: 数据展示
  order: 5
---

<DocHeading></DocHeading>

## 何时使用 {#when-to-use}

## 示例 {#examples}

<demo-group>
</demo-group>

## API

### 属性 {#property}

通用属性参考：[通用属性](/docs/vue/common-props)

#### Avatar

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| shape | 指定头像的形状 | 'circle' \| 'square' | `circle` | - |
| size | 设置头像的大小 | AvatarSize | `default` | 4.7.0 |
| gap | 字符类型距离左右两侧边界单位像素 | number | 4 | 4.3.0 |
| src | 图片类头像的资源地址或者图片元素 | VueNode | - | ReactNode: 4.8.0 |
| srcSet | 设置图片类头像响应式资源地址 | string | - | - |
| draggable | 图片是否允许拖动 | boolean \| 'true' \| 'false' | true | - |
| icon | 设置头像的自定义图标 | VueNode | - | - |
| alt | 图像无法显示时的替代文本 | string | - | - |
| crossOrigin | CORS 属性设置 | '' \| 'anonymous' \| 'use-credentials' | - | 4.17.0 |
| onError | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | () =&gt; boolean | - | - |

#### AvatarGroup

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| prefixCls | - | string | - | - |
| max | - | \{     count?: number     style?: CSSProperties     popover?: PopoverProps   \} | - | - |
| size | 设置头像的大小 | AvatarSize | `default` | 4.7.0 |
| shape | 指定头像的形状 | 'circle' \| 'square' | `circle` | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| click | - | (e: MouseEvent) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| icon | 设置头像的自定义图标 | () =&gt; any | - |
| src | 图片类头像的资源地址或者图片元素 | () =&gt; any | ReactNode: 4.8.0 |