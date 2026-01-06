---
category: Components
group: 数据录入
title: Input
subtitle: 输入框
description: 通过鼠标或键盘输入内容，是最基础的表单域的包装。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Y3R0RowXHlAAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*sBqqTatJ-AkAAAAAAAAAAAAADrJ8AQ/original
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

#### InputGroup

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| size | 控件大小。注：标准表单内的输入框大小限制为 `middle` | SizeType | - | - |

#### Input

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value | 输入框内容 | any | - | - |
| defaultValue | 输入框默认内容 | any | - | - |
| type | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性)(请直接使用 `Input.TextArea` 代替 `type="textarea"`) | VcInputProps['type'] | `text` | - |
| showCount | 是否展示字数 | VcInputProps['showCount'] | false | 4.18.0 info.value: 4.23.0 |
| autoComplete | - | string | - | - |
| htmlSize | - | number | - | - |
| placeholder | - | string | - | - |
| count | 字符计数配置 | VcInputProps['count'] | - | 5.10.0 |
| maxlength | - | number | - | - |
| readonly | - | boolean | - | - |
| hidden | - | boolean | - | - |
| dataAttrs | - | VcInputProps['dataAttrs'] | - | - |
| components | - | VcInputProps['components'] | - | - |
| prefix | 带有前缀图标的 input | VueNode | - | - |
| suffix | 带有后缀图标的 input | VueNode | - | - |
| allowClear | 可以点击清除图标删除内容 | VcInputProps['allowClear'] | - | - |
| autoFocus | - | boolean | - | - |
| inputMode | - | string | - | - |
| size | 控件大小。注：标准表单内的输入框大小限制为 `middle` | SizeType | - | - |
| disabled | 是否禁用状态，默认为 false | boolean | false | - |
| status | 设置校验状态 | InputStatus | - | 4.19.0 |
| addonBefore | 带标签的 input，设置前置标签，请使用 Space.Compact 替换 | VueNode | - | - |
| addonAfter | 带标签的 input，设置后置标签，请使用 Space.Compact 替换 | VueNode | - | - |
| bordered | 是否有边框, 请使用 `variant` 替换 | boolean | true | 4.5.0 |
| variant | 形态变体 | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | InputClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | InputStylesType | - | - |

#### OTP

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| length | - | number | - | - |
| variant | 形态变体 | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| size | 控件大小。注：标准表单内的输入框大小限制为 `middle` | SizeType | - | - |
| defaultValue | 输入框默认内容 | string | - | - |
| value | 输入框内容 | string | - | - |
| formatter | - | (value: string) =&gt; string | - | - |
| separator | - | VueNode \| ((index: number) =&gt; VueNode) | - | - |
| disabled | 是否禁用状态，默认为 false | boolean | false | - |
| status | 设置校验状态 | InputStatus | - | 4.19.0 |
| mask | - | boolean \| string | - | - |
| type | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性)(请直接使用 `Input.TextArea` 代替 `type="textarea"`) | HTMLInputElement['type'] | `text` | - |
| inputMode | - | string | - | - |
| autoFocus | - | boolean | - | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | OTPClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | OTPStylesType | - | - |

#### Password

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| inputPrefixCls | - | string | - | - |
| action | - | PasswordAction | - | - |
| visibilityToggle | - | VisibilityToggle | - | - |
| suffix | 带有后缀图标的 input | VueNode | - | - |
| iconRender | - | (params: \{ visible: boolean \}) =&gt; any | - | - |
| iconVisible | - | boolean | - | - |

#### Search

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| inputPrefixCls | - | string | - | - |
| on | - | never | - | - |
| enterButton | - | boolean \| VueNode | - | - |
| loading | - | boolean | - | - |
| size | 控件大小。注：标准表单内的输入框大小限制为 `middle` | SizeType | - | - |
| hidden | - | boolean | - | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | InputSearchClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | InputSearchStylesType | - | - |

#### TextArea

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| bordered | 是否有边框, 请使用 `variant` 替换 | boolean | true | 4.5.0 |
| size | 控件大小。注：标准表单内的输入框大小限制为 `middle` | SizeType | - | - |
| status | 设置校验状态 | InputStatus | - | 4.19.0 |
| variant | 形态变体 | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | TextAreaClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | TextAreaStylesType | - | - |
| rows | - | number | - | - |
| maxlength | - | number | - | - |
| minlength | - | number | - | - |
| readonly | - | boolean | - | - |
| showCount | 是否展示字数 | InputProps['showCount'] | false | 4.18.0 info.value: 4.23.0 |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| pressEnter | 按下回车的回调 | NonNullable&lt;VcInputProps['onPressEnter']&gt; | - |
| clear | 按下清除按钮的回调 | () =&gt; void | 5.20.0 |
| change | 输入框内容变化时的回调 | NonNullable&lt;VcInputProps['onChange']&gt; | - |
| blur | - | NonNullable&lt;VcInputProps['onBlur']&gt; | - |
| focus | - | NonNullable&lt;VcInputProps['onFocus']&gt; | - |
| keydown | - | NonNullable&lt;VcInputProps['onKeyDown']&gt; | - |
| keyup | - | NonNullable&lt;VcInputProps['onKeyUp']&gt; | - |
| compositionstart | - | NonNullable&lt;VcInputProps['onCompositionStart']&gt; | - |
| compositionend | - | NonNullable&lt;VcInputProps['onCompositionEnd']&gt; | - |
| update:value | - | (value: VcInputProps['value']) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| prefix | 带有前缀图标的 input | () =&gt; any | - |
| suffix | 带有后缀图标的 input | () =&gt; any | - |
| addonBefore | 带标签的 input，设置前置标签，请使用 Space.Compact 替换 | () =&gt; any | - |
| addonAfter | 带标签的 input，设置后置标签，请使用 Space.Compact 替换 | () =&gt; any | - |
| clearIcon | - | () =&gt; any | - |

### 方法 {#methods}

#### TextArea

| 方法 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| resizableTextArea | - | any | - |
| focus | - | (...args: any[]) =&gt; void | - |
| blur | - | () =&gt; void | - |