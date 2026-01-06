---
category: Components
group: 反馈
title: Watermark
subtitle: 水印
description: 给页面的某个区域加上水印。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*wr1ISY50SyYAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*duAQQbjHlHQAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 1
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
| zIndex | 追加的水印元素的 z-index | number | 9 | - |
| rotate | 水印绘制时，旋转的角度，单位 `°` | number | -22 | - |
| width | 水印的宽度，`content` 的默认值为自身的宽度 | number | 120 | - |
| height | 水印的高度，`content` 的默认值为自身的高度 | number | 64 | - |
| image | 图片源，建议导出 2 倍或 3 倍图，优先级高 (支持 base64 格式) | string | - | - |
| content | 水印文字内容 | string \| string[] | - | - |
| font | 文字样式 | \{     color?: CanvasFillStrokeStyles['fillStyle']     fontSize?: number \| string     fontWeight?: 'normal' \| 'light' \| 'weight' \| number     fontStyle?: 'none' \| 'normal' \| 'italic' \| 'oblique'     fontFamily?: string     textAlign?: CanvasTextAlign   \} | [Font](#font) | - |
| rootClass | - | string | - | - |
| gap | 水印之间的间距 | [number, number] | \[100, 100\] | - |
| offset | 水印距离容器左上角的偏移量，默认为 `gap/2` | [number, number] | \[gap\[0\]/2, gap\[1\]/2\] | - |
| inherit | 是否将水印传导给弹出组件如 Modal、Drawer | boolean | true | 5.11.0 |