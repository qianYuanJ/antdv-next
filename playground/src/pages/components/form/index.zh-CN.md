---
category: Components
group: 数据录入
title: Form
subtitle: 表单
description: 高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-lcdS5Qm1bsAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ylFATY6w-ygAAAAAAAAAAAAADrJ8AQ/original
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
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | FormClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | FormStylesType | - | - |
| colon | 配置 Form.Item 的 `colon` 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效) | boolean | true | - |
| name | 表单名称，会作为表单字段 `id` 前缀使用 | string | - | - |
| layout | 表单布局 | FormLayout | `horizontal` | - |
| labelAlign | label 标签的文本对齐方式 | FormLabelAlign | `right` | - |
| labelWrap | label 标签的文本换行方式 | boolean | false | 4.18.0 |
| labelCol | label 标签布局，同 `&lt;Col&gt;` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}` | ColProps | - | - |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol | ColProps | - | - |
| feedbackIcons | 当 `Form.Item` 有 `hasFeedback` 属性时可以自定义图标 | FeedbackIcons | - | 5.9.0 |
| size | 设置字段组件的尺寸（仅限 antd 组件） | SizeType | - | - |
| disabled | 设置表单组件禁用，仅对 antd 组件有效 | boolean | false | 4.21.0 |
| scrollToFirstError | 提交失败自动滚动到第一个错误字段 | ScrollFocusOptions \| boolean | false | focus: 5.24.0 |
| requiredMark | 必选样式，可以切换为必选或者可选展示样式。此为 Form 配置，Form.Item 无法单独配置 | RequiredMark | true | `renderProps`: 5.9.0 |
| variant | 表单内控件变体 | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| validateMessages | 验证提示模板，说明[见下](#validatemessages) | ValidateMessages | - | - |
| model | - | Record&lt;string, any&gt; | - | - |
| rules | - | Record&lt;string, Rule[]&gt; | - | - |
| validateTrigger | 统一设置字段触发验证的时机 | string \| string[] \| false | `onChange` | 4.3.0 |
| preserve | 当字段被删除时保留字段值。你可以通过 `getFieldsValue(true)` 来获取保留字段值 | boolean | true | 4.4.0 |
| clearOnDestroy | 当表单被卸载时清空表单值 | boolean | false | 5.18.0 |
| validateOnRuleChange | - | boolean | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| finish | 提交表单且数据验证成功后回调事件 | (values: Record&lt;string, any&gt;) =&gt; void | - |
| finishFailed | 提交表单且数据验证失败后回调事件 | (errorInfo: ValidateErrorEntity) =&gt; void | - |
| submit | - | (e: Event) =&gt; void | - |
| reset | - | (e: Event) =&gt; void | - |
| validate | - | (name: InternalNamePath, status: boolean, errors: any[] \| null) =&gt; void | - |
| valuesChange | 字段值更新时触发回调事件 | (changedValues: Record&lt;string, any&gt;, values: Record&lt;string, any&gt;) =&gt; void | - |
| fieldsChange | 字段更新时触发回调事件 | (changedFields: FieldData[], allFields: FieldData[]) =&gt; void | - |

### 方法 {#methods}

#### Form

| 方法 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| getFieldValue | - | (name: NamePath&lt;Values&gt;) =&gt; StoreValue | - |
| getFieldsValue | - | (() =&gt; Values)     & ((nameList: NamePath&lt;Values&gt;[] \| true, filterFunc?: FilterFunc) =&gt; any)     & ((config: GetFieldsValueConfig) =&gt; any) | - |
| getFieldError | - | (name: NamePath&lt;Values&gt;) =&gt; string[] | - |
| getFieldsError | - | (nameList?: NamePath&lt;Values&gt;[]) =&gt; FieldError[] | - |
| getFieldWarning | - | (name: NamePath&lt;Values&gt;) =&gt; string[] | - |
| isFieldsTouched | - | ((nameList?: NamePath&lt;Values&gt;[], allFieldsTouched?: boolean) =&gt; boolean)     & ((allFieldsTouched?: boolean) =&gt; boolean) | - |
| isFieldTouched | - | (name: NamePath&lt;Values&gt;) =&gt; boolean | - |
| isFieldValidating | - | (name: NamePath&lt;Values&gt;) =&gt; boolean | - |
| isFieldsValidating | - | (nameList?: NamePath&lt;Values&gt;[]) =&gt; boolean | - |
| resetFields | - | (fields?: NamePath&lt;Values&gt;[]) =&gt; void | - |
| setFields | - | (fields: FieldData&lt;Values&gt;[]) =&gt; void | - |
| setFieldValue | - | (name: NamePath&lt;Values&gt;, value: any) =&gt; void | - |
| setFieldsValue | - | (values: RecursivePartial&lt;Values&gt;) =&gt; void | - |
| validateFields | - | ValidateFields&lt;Values&gt; | - |
| submit | - | () =&gt; void | - |

#### Form

| 方法 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| getFieldValue | - | (name: NamePath&lt;Values&gt;) =&gt; StoreValue | - |
| getFieldsValue | - | (() =&gt; Values)     & ((nameList: NamePath&lt;Values&gt;[] \| true, filterFunc?: FilterFunc) =&gt; any)     & ((config: GetFieldsValueConfig) =&gt; any) | - |
| getFieldError | - | (name: NamePath&lt;Values&gt;) =&gt; string[] | - |
| getFieldsError | - | (nameList?: NamePath&lt;Values&gt;[]) =&gt; FieldError[] | - |
| getFieldWarning | - | (name: NamePath&lt;Values&gt;) =&gt; string[] | - |
| isFieldsTouched | - | ((nameList?: NamePath&lt;Values&gt;[], allFieldsTouched?: boolean) =&gt; boolean)     & ((allFieldsTouched?: boolean) =&gt; boolean) | - |
| isFieldTouched | - | (name: NamePath&lt;Values&gt;) =&gt; boolean | - |
| isFieldValidating | - | (name: NamePath&lt;Values&gt;) =&gt; boolean | - |
| isFieldsValidating | - | (nameList?: NamePath&lt;Values&gt;[]) =&gt; boolean | - |
| resetFields | - | (fields?: NamePath&lt;Values&gt;[]) =&gt; void | - |
| setFields | - | (fields: FieldData&lt;Values&gt;[]) =&gt; void | - |
| setFieldValue | - | (name: NamePath&lt;Values&gt;, value: any) =&gt; void | - |
| setFieldsValue | - | (values: RecursivePartial&lt;Values&gt;) =&gt; void | - |
| validateFields | - | ValidateFields&lt;Values&gt; | - |
| submit | - | () =&gt; void | - |
| nativeElement | - | HTMLElement | - |