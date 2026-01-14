---
category: Components
group: 导航
title: Tabs
subtitle: 标签页
description: 选项卡切换组件。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*72NDQqXkyOEAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*8HMoTZUoSGoAAAAAAAAAAAAADrJ8AQ/original
---

<DocHeading></DocHeading>

## 何时使用 {#when-to-use}

## 示例 {#examples}

<demo-group>
<demo src="./demo/basic.vue">基本</demo>
<demo src="./demo/disabled.vue">禁用</demo>
<demo src="./demo/centered.vue">居中</demo>
<demo src="./demo/icon.vue">图标</demo>
<demo src="./demo/custom-indicator.vue">指示条</demo>
<demo src="./demo/slide.vue">滑动</demo>
<demo src="./demo/extra.vue">附加内容</demo>
<demo src="./demo/size.vue">大小</demo>
<demo src="./demo/placement.vue">位置</demo>
<demo src="./demo/card.vue">卡片式页签</demo>
<demo src="./demo/editable-card.vue">新增和关闭页签</demo>
<demo src="./demo/card-top.vue" compact background="grey" debug>卡片式页签容器</demo>
<demo src="./demo/custom-add-trigger.vue">自定义新增页签触发器</demo>
<demo src="./demo/custom-tab-bar.vue">自定义页签头</demo>
<demo src="./demo/custom-tab-bar-node.vue">可拖拽标签</demo>
<demo src="./demo/style-class.vue" version="6.0.0">自定义语义结构的样式和类</demo>
<demo src="./demo/animated.vue" debug>动画</demo>
<demo src="./demo/nest.vue" debug>嵌套</demo>
<demo src="./demo/component-token.vue" debug>组件 Token</demo>
</demo-group>

## API

### 属性 {#property}

通用属性参考：[通用属性](/docs/vue/common-props)

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| destroyInactiveTabPane | 被隐藏时是否销毁 DOM 结构，使用 `destroyOnHidden` 代替 | boolean | false | - |
| class | - | string | - | - |
| style | - | CSSProperties | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| edit | 新增和删除页签的回调，在 `type="editable-card"` 时有效 | (e: MouseEvent \| KeyboardEvent \| string, action: 'add' \| 'remove') =&gt; void | - |
| change | 切换面板的回调 | NonNullable&lt;VcTabsProps['onChange']&gt; | - |
| tabClick | tab 被点击的回调 | NonNullable&lt;VcTabsProps['onTabClick']&gt; | - |
| tabScroll | tab 滚动时触发 | NonNullable&lt;VcTabsProps['onTabScroll']&gt; | 4.3.0 |
| update:activeKey | - | (activeKey: string) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| addIcon | 自定义添加按钮，设置 `type="editable-card"` 时有效 | () =&gt; any | 4.4.0 |
| moreIcon | - | () =&gt; any | - |
| removeIcon | 自定义删除按钮，设置 `type="editable-card"` 时有效 | () =&gt; any | 5.15.0 |
| labelRender | - | (args: &#123; item: Tab, index: number &#125;) =&gt; any | - |
| contentRender | - | (args: &#123; item: Tab, index: number &#125;) =&gt; any | - |
| renderTabBar | 替换 TabBar，用于二次封装标签头 | (args: &#123; props: any, TabNavListComponent: any &#125;) =&gt; any | - |
| rightExtra | - | () =&gt; any | - |
| leftExtra | - | () =&gt; any | - |

### 方法 {#methods}

| 方法 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| nativeElement | - | any | - |
