---
category: Components
group: Data Display
title: Tag
description: Used for marking and categorization.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*_SBsSrKLg00AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JPNAQYrVkYkAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

## Examples {#examples}

<demo-group>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| checked | It is an absolute controlled component and has no uncontrolled mode.  .zh-cn 该组件为完全受控组件，不支持非受控用法。 | boolean | - | - |
| icon | Set the icon of tag | VueNode | - | - |
| disabled | Whether the tag is disabled | boolean | false | 6.0.0 |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| close | Callback executed when tag is closed (can be prevented by `e.preventDefault()`) | (ev: MouseEvent) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| icon | Set the icon of tag | () =&gt; any | - |
| closeIcon | Custom close icon. 5.7.0: close button will be hidden when setting to `null` or `false` | () =&gt; any | 4.4.0 |