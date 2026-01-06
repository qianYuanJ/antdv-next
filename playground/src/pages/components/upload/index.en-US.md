---
category: Components
group: Data Entry
title: Upload
description: Used to select and upload files or drag and drop files.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*93ymR4RD4S0AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*l1nlSryXib8AAAAAAAAAAAAADrJ8AQ/original
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

#### Dragger

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| type | - | UploadType | - | - |
| name | The name of uploading file | string | `file` | - |
| defaultFileList | Default list of files that have been uploaded | Array&lt;UploadFile&lt;T&gt;&gt; | - | - |
| fileList | List of files that have been uploaded (controlled). Here is a common issue [#2423](https://github.com/ant-design/ant-design/issues/2423) when using it | Array&lt;UploadFile&lt;T&gt;&gt; | - | - |
| action | Uploading URL | string \| ((file: VcFile) =&gt; string) \| ((file: VcFile) =&gt; PromiseLike&lt;string&gt;) | - | - |
| directory | Support upload whole directory ([caniuse](https://caniuse.com/#feat=input-file-directory)) | boolean | false | - |
| data | Uploading extra params or function which can return uploading extra params | \| Record&lt;string, unknown&gt;     \| ((file: UploadFile&lt;T&gt;) =&gt; Record&lt;string, unknown&gt; \| Promise&lt;Record&lt;string, unknown&gt;&gt;) | - | - |
| method | The http method of upload request | 'POST' \| 'PUT' \| 'PATCH' \| 'post' \| 'put' \| 'patch' | `post` | - |
| headers | Set request headers, valid above IE10 | HttpRequestHeader | - | - |
| showUploadList | Whether to show default upload list, could be an object to specify `extra`, `showPreviewIcon`, `showRemoveIcon`, `showDownloadIcon`, `removeIcon` and `downloadIcon` individually | boolean \| ShowUploadListInterface&lt;T&gt; | true | `extra`: 5.20.0, `showPreviewIcon` function: 5.21.0, `showRemoveIcon` function: 5.21.0, `showDownloadIcon` function: 5.21.0 |
| multiple | Whether to support selected multiple files. `IE10+` supported. You can select multiple files with CTRL holding down while multiple is set to be true | boolean | false | - |
| accept | File types that can be accepted. See [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string \| AcceptConfig | - | - |
| beforeUpload | Hook function which will be executed before uploading. Uploading will be stopped with `false` or a rejected Promise returned. When returned value is `Upload.LIST_IGNORE`, the list of files that have been uploaded will ignore it. **Warning：this function is not supported in IE9** | (     file: VcFile,     fileList: VcFile[],   ) =&gt; BeforeUploadValueType \| Promise&lt;BeforeUploadValueType&gt; | - | - |
| listType | Built-in stylesheets, support for four types: `text`, `picture`, `picture-card` or `picture-circle` | UploadListType | `text` | `picture-circle`(5.2.0+) |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | UploadClassNamesType&lt;T&gt; | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | UploadStylesType&lt;T&gt; | - | - |
| rootClass | - | string | - | - |
| supportServerRender | - | boolean | - | - |
| disabled | Disable upload button | boolean | false | When customizing Upload children, please pass the disabled attribute to the child node at the same time to ensure the disabled rendering effect is consistent. |
| prefixCls | - | string | - | - |
| customRequest | Override for the default xhr behavior allowing for additional customization and the ability to implement your own XMLHttpRequest | (     options: VcCustomRequestOptions&lt;T&gt;,     info: \{       /**        * @since 5.28.0        */       defaultRequest: (option: VcCustomRequestOptions&lt;T&gt;) =&gt; void     \},   ) =&gt; void | - | defaultRequest: 5.28.0 |
| withCredentials | The ajax upload with cookie sent | boolean | false | - |
| openFileDialogOnClick | Click open file dialog | boolean | true | - |
| locale | - | UploadLocale | - | - |
| id | - | string | - | - |
| previewFile | Customize preview file logic | PreviewFileHandler | - | - |
| iconRender | Custom show icon | (file: UploadFile&lt;T&gt;, listType?: UploadListType) =&gt; any | - | - |
| isImageUrl | Customize if render &lt;img /&gt; in thumbnail | (file: UploadFile&lt;T&gt;) =&gt; boolean | [(inside implementation)](https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68) | - |
| progress | Custom progress bar | UploadListProgressProps | { strokeWidth: 2, showInfo: false } | 4.3.0 |
| itemRender | Custom item of uploadList | ItemRender&lt;T&gt; | - | 4.16.0 |
| maxCount | Limit the number of uploaded files. Will replace current one when `maxCount` is `1` | number | - | 4.10.0 |
| onRemove | A callback function, will be executed when removing file button is clicked, remove event will be prevented when the return value is false or a Promise which resolve(false) or reject | (file: UploadFile&lt;T&gt;) =&gt; void \| boolean \| Promise&lt;void \| boolean&gt; | - | - |
| onPreview | A callback function, will be executed when the file link or preview icon is clicked | (file: UploadFile&lt;T&gt;) =&gt; void | - | - |
| onDownload | Click the method to download the file, pass the method to perform the method logic, and do not pass the default jump to the new TAB | (file: UploadFile&lt;T&gt;) =&gt; void | (Jump to new TAB) | - |
| capture | - | string \| boolean | - | - |
| hasControlInside | - | boolean | - | - |
| pastable | Support paste file | boolean | false | 5.25.0 |
| height | - | number | - | - |

#### UploadList

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | UploadClassNamesType&lt;T&gt; | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | UploadStylesType&lt;T&gt; | - | - |
| listType | Built-in stylesheets, support for four types: `text`, `picture`, `picture-card` or `picture-circle` | UploadListType | `text` | `picture-circle`(5.2.0+) |
| items | - | Array&lt;UploadFile&lt;T&gt;&gt; | - | - |
| progress | Custom progress bar | UploadListProgressProps | { strokeWidth: 2, showInfo: false } | 4.3.0 |
| prefixCls | - | string | - | - |
| showRemoveIcon | - | boolean \| ((file: UploadFile&lt;T&gt;) =&gt; boolean) | - | - |
| showDownloadIcon | - | boolean \| ((file: UploadFile&lt;T&gt;) =&gt; boolean) | - | - |
| showPreviewIcon | - | boolean \| ((file: UploadFile&lt;T&gt;) =&gt; boolean) | - | - |
| removeIcon | - | any \| ((file: UploadFile&lt;T&gt;) =&gt; any) | - | - |
| downloadIcon | - | any \| ((file: UploadFile&lt;T&gt;) =&gt; any) | - | - |
| previewIcon | - | any \| ((file: UploadFile&lt;T&gt;) =&gt; any) | - | - |
| extra | - | any \| ((file: UploadFile&lt;T&gt;) =&gt; any) | - | - |
| locale | - | UploadLocale | - | - |
| previewFile | Customize preview file logic | PreviewFileHandler | - | - |
| iconRender | Custom show icon | (file: UploadFile&lt;T&gt;, listType?: UploadListType) =&gt; any | - | - |
| isImageUrl | Customize if render &lt;img /&gt; in thumbnail | (file: UploadFile&lt;T&gt;) =&gt; boolean | [(inside implementation)](https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68) | - |
| appendAction | - | any | - | - |
| appendActionVisible | - | boolean | - | - |
| itemRender | Custom item of uploadList | ItemRender&lt;T&gt; | - | 4.16.0 |
| disabled | Disable upload button | boolean | false | When customizing Upload children, please pass the disabled attribute to the child node at the same time to ensure the disabled rendering effect is consistent. |
| onRemove | A callback function, will be executed when removing file button is clicked, remove event will be prevented when the return value is false or a Promise which resolve(false) or reject | (file: UploadFile&lt;T&gt;) =&gt; void \| boolean | - | - |
| onPreview | A callback function, will be executed when the file link or preview icon is clicked | (file: UploadFile&lt;T&gt;) =&gt; void | - | - |
| onDownload | Click the method to download the file, pass the method to perform the method logic, and do not pass the default jump to the new TAB | (file: UploadFile&lt;T&gt;) =&gt; void | (Jump to new TAB) | - |

#### Upload

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| type | - | UploadType | - | - |
| name | The name of uploading file | string | `file` | - |
| defaultFileList | Default list of files that have been uploaded | Array&lt;UploadFile&lt;T&gt;&gt; | - | - |
| fileList | List of files that have been uploaded (controlled). Here is a common issue [#2423](https://github.com/ant-design/ant-design/issues/2423) when using it | Array&lt;UploadFile&lt;T&gt;&gt; | - | - |
| action | Uploading URL | string \| ((file: VcFile) =&gt; string) \| ((file: VcFile) =&gt; PromiseLike&lt;string&gt;) | - | - |
| directory | Support upload whole directory ([caniuse](https://caniuse.com/#feat=input-file-directory)) | boolean | false | - |
| data | Uploading extra params or function which can return uploading extra params | \| Record&lt;string, unknown&gt;     \| ((file: UploadFile&lt;T&gt;) =&gt; Record&lt;string, unknown&gt; \| Promise&lt;Record&lt;string, unknown&gt;&gt;) | - | - |
| method | The http method of upload request | 'POST' \| 'PUT' \| 'PATCH' \| 'post' \| 'put' \| 'patch' | `post` | - |
| headers | Set request headers, valid above IE10 | HttpRequestHeader | - | - |
| showUploadList | Whether to show default upload list, could be an object to specify `extra`, `showPreviewIcon`, `showRemoveIcon`, `showDownloadIcon`, `removeIcon` and `downloadIcon` individually | boolean \| ShowUploadListInterface&lt;T&gt; | true | `extra`: 5.20.0, `showPreviewIcon` function: 5.21.0, `showRemoveIcon` function: 5.21.0, `showDownloadIcon` function: 5.21.0 |
| multiple | Whether to support selected multiple files. `IE10+` supported. You can select multiple files with CTRL holding down while multiple is set to be true | boolean | false | - |
| accept | File types that can be accepted. See [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string \| AcceptConfig | - | - |
| beforeUpload | Hook function which will be executed before uploading. Uploading will be stopped with `false` or a rejected Promise returned. When returned value is `Upload.LIST_IGNORE`, the list of files that have been uploaded will ignore it. **Warning：this function is not supported in IE9** | (     file: VcFile,     fileList: VcFile[],   ) =&gt; BeforeUploadValueType \| Promise&lt;BeforeUploadValueType&gt; | - | - |
| listType | Built-in stylesheets, support for four types: `text`, `picture`, `picture-card` or `picture-circle` | UploadListType | `text` | `picture-circle`(5.2.0+) |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | UploadClassNamesType&lt;T&gt; | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | UploadStylesType&lt;T&gt; | - | - |
| rootClass | - | string | - | - |
| supportServerRender | - | boolean | - | - |
| disabled | Disable upload button | boolean | false | When customizing Upload children, please pass the disabled attribute to the child node at the same time to ensure the disabled rendering effect is consistent. |
| prefixCls | - | string | - | - |
| customRequest | Override for the default xhr behavior allowing for additional customization and the ability to implement your own XMLHttpRequest | (     options: VcCustomRequestOptions&lt;T&gt;,     info: \{       /**        * @since 5.28.0        */       defaultRequest: (option: VcCustomRequestOptions&lt;T&gt;) =&gt; void     \},   ) =&gt; void | - | defaultRequest: 5.28.0 |
| withCredentials | The ajax upload with cookie sent | boolean | false | - |
| openFileDialogOnClick | Click open file dialog | boolean | true | - |
| locale | - | UploadLocale | - | - |
| id | - | string | - | - |
| previewFile | Customize preview file logic | PreviewFileHandler | - | - |
| iconRender | Custom show icon | (file: UploadFile&lt;T&gt;, listType?: UploadListType) =&gt; any | - | - |
| isImageUrl | Customize if render &lt;img /&gt; in thumbnail | (file: UploadFile&lt;T&gt;) =&gt; boolean | [(inside implementation)](https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68) | - |
| progress | Custom progress bar | UploadListProgressProps | { strokeWidth: 2, showInfo: false } | 4.3.0 |
| itemRender | Custom item of uploadList | ItemRender&lt;T&gt; | - | 4.16.0 |
| maxCount | Limit the number of uploaded files. Will replace current one when `maxCount` is `1` | number | - | 4.10.0 |
| onRemove | A callback function, will be executed when removing file button is clicked, remove event will be prevented when the return value is false or a Promise which resolve(false) or reject | (file: UploadFile&lt;T&gt;) =&gt; void \| boolean \| Promise&lt;void \| boolean&gt; | - | - |
| onPreview | A callback function, will be executed when the file link or preview icon is clicked | (file: UploadFile&lt;T&gt;) =&gt; void | - | - |
| onDownload | Click the method to download the file, pass the method to perform the method logic, and do not pass the default jump to the new TAB | (file: UploadFile&lt;T&gt;) =&gt; void | (Jump to new TAB) | - |
| capture | - | string \| boolean | - | - |
| hasControlInside | - | boolean | - | - |
| pastable | Support paste file | boolean | false | 5.25.0 |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | A callback function, can be executed when uploading state is changing. It will trigger by every uploading phase. see [onChange](#onchange) | (info: UploadChangeParam&lt;UploadFile&lt;T&gt;&gt;) =&gt; void | - |
| drop | A callback function executed when files are dragged and dropped into the upload area | (event: DragEvent) =&gt; void | 4.16.0 |
| update:fileList | - | (fileList: UploadFile&lt;T&gt;[]) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| iconRender | Custom show icon | (props: \{ file: UploadFile&lt;T&gt;, listType?: UploadListType \}) =&gt; any | - |
| itemRender | Custom item of uploadList | (props: \{     originNode: any     file: UploadFile&lt;T&gt;     fileList: Array&lt;UploadFile&lt;T&gt;&gt;     actions: \{       download: () =&gt; void       preview: () =&gt; void       remove: () =&gt; void     \}   \}) =&gt; any | 4.16.0 |

### Methods {#methods}

| Method | Description | Type | Version |
| --- | --- | --- | --- |
| onBatchStart | - | VcUploadProps['onBatchStart'] | - |
| onSuccess | - | (response: any, file: VcFile, xhr: any) =&gt; void | - |
| onProgress | - | (e: \{ percent: number \}, file: VcFile) =&gt; void | - |
| onError | - | (error: Error, response: any, file: VcFile) =&gt; void | - |
| fileList | - | UploadFile&lt;T&gt;[] | - |
| upload | - | any \| null | - |
| nativeElement | Get native element for wrapping upload | HTMLSpanElement \| null | - |