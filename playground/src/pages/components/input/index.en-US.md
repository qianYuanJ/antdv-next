---
category: Components
group: Data Entry
title: Input
description: Through mouse or keyboard input content, it is the most basic form field wrapper.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Y3R0RowXHlAAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*sBqqTatJ-AkAAAAAAAAAAAAADrJ8AQ/original
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

#### InputGroup

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| size | The size of the input box. Note: in the context of a form, the `middle` size is used | SizeType | - | - |

#### Input

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| value | The input content value | any | - | - |
| defaultValue | The initial input content | any | - | - |
| type | The type of input, see: [MDN](https://developer.mozilla.org/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)( use `Input.TextArea` instead of `type="textarea"`) | VcInputProps['type'] | `text` | - |
| showCount | Whether to show character count | VcInputProps['showCount'] | false | 4.18.0 info.value: 4.23.0 |
| autoComplete | - | string | - | - |
| htmlSize | - | number | - | - |
| placeholder | - | string | - | - |
| count | Character count config | VcInputProps['count'] | - | 5.10.0 |
| maxlength | - | number | - | - |
| readonly | - | boolean | - | - |
| hidden | - | boolean | - | - |
| dataAttrs | - | VcInputProps['dataAttrs'] | - | - |
| components | - | VcInputProps['components'] | - | - |
| prefix | The prefix icon for the Input | VueNode | - | - |
| suffix | The suffix icon for the Input | VueNode | - | - |
| allowClear | If allow to remove input content with clear icon | VcInputProps['allowClear'] | false | - |
| autoFocus | - | boolean | - | - |
| inputMode | - | string | - | - |
| size | The size of the input box. Note: in the context of a form, the `middle` size is used | SizeType | - | - |
| disabled | Whether the input is disabled | boolean | false | - |
| status | Set validation status | InputStatus | - | 4.19.0 |
| addonBefore | The label text displayed before (on the left side of) the input field, please use Space.Compact instead | VueNode | - | - |
| addonAfter | The label text displayed after (on the right side of) the input field, please use Space.Compact instead | VueNode | - | - |
| bordered | Whether has border style, please use `variant` instead | boolean | true | 4.5.0 |
| variant | Variants of Input | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | InputClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | InputStylesType | - | - |

#### OTP

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| length | - | number | - | - |
| variant | Variants of Input | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| size | The size of the input box. Note: in the context of a form, the `middle` size is used | SizeType | - | - |
| defaultValue | The initial input content | string | - | - |
| value | The input content value | string | - | - |
| formatter | - | (value: string) =&gt; string | - | - |
| separator | - | VueNode \| ((index: number) =&gt; VueNode) | - | - |
| disabled | Whether the input is disabled | boolean | false | - |
| status | Set validation status | InputStatus | - | 4.19.0 |
| mask | - | boolean \| string | - | - |
| type | The type of input, see: [MDN](https://developer.mozilla.org/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)( use `Input.TextArea` instead of `type="textarea"`) | HTMLInputElement['type'] | `text` | - |
| inputMode | - | string | - | - |
| autoFocus | - | boolean | - | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | OTPClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | OTPStylesType | - | - |

#### Password

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| inputPrefixCls | - | string | - | - |
| action | - | PasswordAction | - | - |
| visibilityToggle | - | VisibilityToggle | - | - |
| suffix | The suffix icon for the Input | VueNode | - | - |
| iconRender | - | (params: \{ visible: boolean \}) =&gt; any | - | - |
| iconVisible | - | boolean | - | - |

#### Search

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| inputPrefixCls | - | string | - | - |
| on | - | never | - | - |
| enterButton | - | boolean \| VueNode | - | - |
| loading | - | boolean | - | - |
| size | The size of the input box. Note: in the context of a form, the `middle` size is used | SizeType | - | - |
| hidden | - | boolean | - | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | InputSearchClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | InputSearchStylesType | - | - |

#### TextArea

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| bordered | Whether has border style, please use `variant` instead | boolean | true | 4.5.0 |
| size | The size of the input box. Note: in the context of a form, the `middle` size is used | SizeType | - | - |
| status | Set validation status | InputStatus | - | 4.19.0 |
| variant | Variants of Input | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | TextAreaClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | TextAreaStylesType | - | - |
| rows | - | number | - | - |
| maxlength | - | number | - | - |
| minlength | - | number | - | - |
| readonly | - | boolean | - | - |
| showCount | Whether to show character count | InputProps['showCount'] | false | 4.18.0 info.value: 4.23.0 |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| pressEnter | The callback function that is triggered when Enter key is pressed | NonNullable&lt;VcInputProps['onPressEnter']&gt; | - |
| clear | Callback when click the clear button | () =&gt; void | 5.20.0 |
| change | Callback when user input | NonNullable&lt;VcInputProps['onChange']&gt; | - |
| blur | - | NonNullable&lt;VcInputProps['onBlur']&gt; | - |
| focus | - | NonNullable&lt;VcInputProps['onFocus']&gt; | - |
| keydown | - | NonNullable&lt;VcInputProps['onKeyDown']&gt; | - |
| keyup | - | NonNullable&lt;VcInputProps['onKeyUp']&gt; | - |
| compositionstart | - | NonNullable&lt;VcInputProps['onCompositionStart']&gt; | - |
| compositionend | - | NonNullable&lt;VcInputProps['onCompositionEnd']&gt; | - |
| update:value | - | (value: VcInputProps['value']) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| prefix | The prefix icon for the Input | () =&gt; any | - |
| suffix | The suffix icon for the Input | () =&gt; any | - |
| addonBefore | The label text displayed before (on the left side of) the input field, please use Space.Compact instead | () =&gt; any | - |
| addonAfter | The label text displayed after (on the right side of) the input field, please use Space.Compact instead | () =&gt; any | - |
| clearIcon | - | () =&gt; any | - |

### Methods {#methods}

#### TextArea

| Method | Description | Type | Version |
| --- | --- | --- | --- |
| resizableTextArea | - | any | - |
| focus | - | (...args: any[]) =&gt; void | - |
| blur | - | () =&gt; void | - |