---
category: Components
group: 反馈
noinstant: true
title: Message
subtitle: 全局提示
description: 全局展示操作反馈信息。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Xl5ORK7Iy44AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*fv7mQIWdUgcAAAAAAAAAAAAADrJ8AQ/original
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
| content | 提示内容 | VueNode | - | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | number | 3 | - |
| type | - | NoticeType | - | - |
| onClose | 关闭时触发的回调函数 | () =&gt; void | - | - |
| icon | - | VueNode | - | - |
| key | - | Key | - | - |
| style | - | CSSProperties | - | - |
| class | - | string | - | - |
| classes | - | ArgsClassNamesType | - | - |
| styles | - | ArgsStylesType | - | - |
| onClick | - | (e: MouseEvent) =&gt; void | - | - |
| pauseOnHover | - | boolean | - | - |

### 方法 {#methods}

| 方法 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| info | - | TypeOpen | - |
| success | - | TypeOpen | - |
| error | - | TypeOpen | - |
| warning | - | TypeOpen | - |
| loading | - | TypeOpen | - |
| open | - | (args: ArgsProps) =&gt; MessageType | - |
| destroy | - | (key?: Key) =&gt; void | - |