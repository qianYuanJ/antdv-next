---
category: Components
group: Feedback
title: Watermark
description: Add specific text or patterns to the page.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*wr1ISY50SyYAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*duAQQbjHlHQAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 1
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
| zIndex | The z-index of the appended watermark element | number | 9 | - |
| rotate | When the watermark is drawn, the rotation Angle, unit `°` | number | -22 | - |
| width | The width of the watermark, the default value of `content` is its own width | number | 120 | - |
| height | The height of the watermark, the default value of `content` is its own height | number | 64 | - |
| image | Image source, it is recommended to export 2x or 3x image, high priority (support base64 format) | string | - | - |
| content | Watermark text content | string \| string[] | - | - |
| font | Text style | \{     color?: CanvasFillStrokeStyles['fillStyle']     fontSize?: number \| string     fontWeight?: 'normal' \| 'light' \| 'weight' \| number     fontStyle?: 'none' \| 'normal' \| 'italic' \| 'oblique'     fontFamily?: string     textAlign?: CanvasTextAlign   \} | [Font](#font) | - |
| rootClass | - | string | - | - |
| gap | The spacing between watermarks | [number, number] | \[100, 100\] | - |
| offset | The offset of the watermark from the upper left corner of the container. The default is `gap/2` | [number, number] | \[gap\[0\]/2, gap\[1\]/2\] | - |
| inherit | Pass the watermark to the pop-up component such as Modal, Drawer | boolean | true | 5.11.0 |