---
category: Components
title: Anchor
subtitle: 锚点
description: 用于跳转到页面指定位置。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ufP1TLS5VvIAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*_9_eTrgvHNQAAAAAAAAAAAAADrJ8AQ/original
demo:
group:
  title: 导航
  order: 3
---

<DocHeading></DocHeading>

## 何时使用 {#when-to-use}

## 示例 {#examples}

<demo-group>
</demo-group>

## API

### 属性 {#property}

通用属性参考：[通用属性](/docs/vue/common-props)

#### Anchor

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | AnchorClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | AnchorStylesType | - | - |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number | - | - |
| bounds | 锚点区域边界 | number | 5 | - |
| affix | 固定模式 | boolean \| Omit&lt;AffixProps, 'offsetTop' \| 'target'&gt; | true | object: 5.19.0 |
| showInkInFixed | `affix={false}` 时是否显示小方块 | boolean | false | - |
| getContainer | 指定滚动的容器 | () =&gt; AnchorContainer | () =&gt; window | - |
| getCurrentAnchor | 自定义高亮的锚点 | (activeLink: string) =&gt; string | - | - |
| targetOffset | 锚点滚动偏移量，默认与 offsetTop 相同，[例子](#anchor-demo-targetoffset) | number | - | - |
| items | 数据化配置选项内容，支持通过 children 嵌套 | AnchorLinkItemProps[] | - | 5.1.0 |
| direction | 设置导航方向 | AnchorDirection | `vertical` | 5.2.0 |
| replace | 替换浏览器历史记录中项目的 href 而不是推送它 | boolean | false | 5.7.0 |

#### AnchorLink

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| href | - | string | - | - |
| target | - | string | - | - |
| title | - | VueNode | - | - |
| replace | 替换浏览器历史记录中项目的 href 而不是推送它 | boolean | false | 5.7.0 |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| click | `click` 事件的 handler | (e: MouseEvent, link: \{ title: VNodeChild, href: string \}) =&gt; any | - |
| change | 监听锚点链接改变 | (currentActiveLink: string) =&gt; any | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| item | - | (item: AnchorLinkItemProps) =&gt; any | - |