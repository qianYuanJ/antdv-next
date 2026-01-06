---
category: Components
title: QRCode
description: Components that can convert text into QR codes, and support custom color and logo.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cJopQrf0ncwAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*M4PBTZ_n9OgAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: Data Display
  order: 5
---

<DocHeading></DocHeading>


## When To Use

Used when the text needs to be converted into a QR Code.

## Examples

<!-- prettier-ignore -->
<demo src="./demo/base.vue">base</demo>
<demo src="./demo/icon.vue">With Icon</demo>
<demo src="./demo/status.vue">other status</demo>
<demo src="./demo/customStatusRender.vue" version="5.20.0">custom status render</demo>
<demo src="./demo/type.vue">Custom Render Type</demo>
<demo src="./demo/customSize.vue">Custom Size</demo>
<demo src="./demo/customColor.vue">Custom Color</demo>
<demo src="./demo/download.vue">Download QRCode</demo>
<demo src="./demo/errorLevel.vue">Error Level</demo>
<demo src="./demo/Popover.vue">Advanced Usage</demo>
<!-- <demo src="./demo/style-class.vue" version="6.0.0">Custom semantic dom styling</demo> -->

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| type | - | 'canvas' \| 'svg' | - | - |
| icon | - | string | - | - |
| iconSize | - | number \| \{ width: number, height: number \} | - | - |
| bordered | - | boolean | - | - |
| errorLevel | - | 'L' \| 'M' \| 'Q' \| 'H' | - | - |
| status | - | QRStatus | - | - |
| statusRender | - | (info: StatusRenderInfo) =&gt; any | - | - |
| color | - | any | - | - |
| classes | - | QRCodeClassNamesType | - | - |
| styles | - | QRCodeStylesType | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| refresh | - | () =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| statusRender | - | (info: StatusRenderInfo) =&gt; any | - |
## Semantic DOM

<!-- <code src="./demo/_semantic.vue" simplify="true"></code> -->

## Design Token

<!-- <ComponentTokenTable component="QRCode"></ComponentTokenTable> -->

## FAQ

### About QRCode ErrorLevel {#faq-error-correction-level}

The ErrorLevel means that the QR code can be scanned normally after being blocked, and the maximum area that can be blocked is the error correction rate.

Generally, the QR code is divided into 4 error correction levels: Level `L` can correct about `7%` errors, Level `M` can correct about `15%` errors, Level `Q` can correct about `25%` errors, and Level `H` can correct about `30%` errors. When the content encoding of the QR code carries less information, in other words, when the value link is short, set different error correction levels, and the generated image will not change.

> For more information, see the: [https://www.qrcode.com/en/about/error_correction](https://www.qrcode.com/en/about/error_correction.html)

### ⚠️⚠️⚠️ Cannot scan the QR code? {#faq-cannot-scan}

If the QR code cannot be scanned for identification, it may be because the link address is too long, which leads to too dense pixels.

You can configure the QR code to be larger through size, or shorten the link through short link services.
