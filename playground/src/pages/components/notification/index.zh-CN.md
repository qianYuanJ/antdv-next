---
category: Components
group: 反馈
noinstant: true
title: Notification
subtitle: 通知提醒框
description: 全局展示通知提醒信息。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cRmqTY4nKPEAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*W3RmSov-xVMAAAAAAAAAAAAADrJ8AQ/original
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
| title | 通知提醒标题 | VueNode | - | 6.0.0 |
| description | 通知提醒内容，必选 | VueNode | - | - |
| actions | 自定义按钮组 | VueNode | - | 5.24.0 |
| key | 当前通知唯一标志 | Key | - | - |
| onClose | 当通知关闭时触发 | () =&gt; void | - | - |
| duration | 默认 4.5 秒后自动关闭，配置为 `0 \| false` 则不会自动关闭 | number \| false | 4.5 | - |
| showProgress | 显示自动关闭通知框的进度条 | boolean | - | 5.18.0 |
| pauseOnHover | 悬停时是否暂停计时器 | boolean | true | 5.18.0 |
| icon | 自定义图标 | VueNode | - | - |
| placement | 弹出位置，可选 `top` \| `topLeft` \| `topRight` \| `bottom` \| `bottomLeft` \| `bottomRight` | NotificationPlacement | `topRight` | - |
| style | 自定义内联样式 | CSSProperties | - | - |
| class | - | string | - | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | NotificationClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | NotificationStylesType | - | - |
| type | - | IconType | - | - |
| onClick | 点击通知时触发的回调函数 | () =&gt; void | - | - |
| closeIcon | 自定义关闭图标 | VueNode | true | 5.7.0：设置为 null 或 false 时隐藏关闭按钮 |
| closable | 是否显示右上角的关闭按钮 | \| boolean     \| (Exclude&lt;ClosableType, boolean&gt; & \{       onClose?: () =&gt; void     \}) | true | - |
| props | 透传至通知 `div` 上的 props 对象，支持传入 `data-*` `aria-*` 或 `role` 作为对象的属性。需要注意的是，虽然在 TypeScript 类型中声明的类型支持传入 `data-*` 作为对象的属性，但目前只允许传入 `data-testid` 作为对象的属性。 详见 https://github.com/microsoft/TypeScript/issues/28960 | DivProps | - | - |
| role | 供屏幕阅读器识别的通知内容语义，默认为 `alert`。此情况下屏幕阅读器会立即打断当前正在阅读的其他内容，转而阅读通知内容 | 'alert' \| 'status' | `alert` | 5.6.0 |

### 方法 {#methods}

| 方法 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| success | - | StaticFn | - |
| error | - | StaticFn | - |
| info | - | StaticFn | - |
| warning | - | StaticFn | - |
| open | - | StaticFn | - |
| destroy | - | (key?: Key) =&gt; void | - |