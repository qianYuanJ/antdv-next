---
category: Components
group: Data Display
title: Carousel
description: A set of carousel areas.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*bPMSSqbaTMkAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*a-58QpYnqOsAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

- When there is a group of content on the same level.
- When there is insufficient content space, it can be used to save space in the form of a revolving door.
- Commonly used for a group of pictures/cards.

## Examples {#examples}

<demo-group>
  <demo src="./demo/basic.vue">Basic</demo>
  <demo src="./demo/placement.vue">Position</demo>
  <demo src="./demo/autoplay.vue">Scroll automatically</demo>
  <demo src="./demo/fade.vue">Fade in</demo>
  <demo src="./demo/arrows.vue" >Arrows for switching</demo>
  <demo src="./demo/dot-duration.vue" >Progress of dots</demo>
  <demo src="./demo/component-token.vue" debug>Component Token</demo>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| effect | Transition effect | CarouselEffect | `scrollx` | - |
| id | - | string | - | - |
| slickGoTo | - | number | - | - |
| dotPosition | The position of the dots, which can be one of `top` `bottom` `left` `right` `start` `end`, Please use `dotPlacement` instead | DotPlacement \| 'left' \| 'right' | `bottom` | - |
| dotPlacement | The position of the dots, which can be one of `top` `bottom` `start` `end` | DotPlacement | `bottom` | - |
| dots | Whether to show the dots at the bottom of the gallery, `object` for `dotsClass` | boolean \| \{ class?: string \} | true | - |
| waitForAnimate | Whether to wait for the animation when switching | boolean | false | - |
| autoplay | Whether to scroll automatically, you can specify `autoplay={{ dotDuration: true }}` to display the progress bar | boolean \| \{ dotDuration?: boolean \} | false | dotDuration: 5.24.0 |
| prevArrow | - | VueNode | - | - |
| nextArrow | - | VueNode | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| init | - | NonNullable&lt;Settings['onInit']&gt; | - |
| reInit | - | NonNullable&lt;Settings['onReInit']&gt; | - |
| edge | - | NonNullable&lt;Settings['onEdge']&gt; | - |
| swipe | - | NonNullable&lt;Settings['onSwipe']&gt; | - |
| lazyLoad | - | NonNullable&lt;Settings['onLazyLoad']&gt; | - |
| lazyLoadError | - | NonNullable&lt;Settings['onLazyLoadError']&gt; | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| prevArrow | - | () =&gt; any | - |
| nextArrow | - | () =&gt; any | - |

### Methods {#methods}

| Method | Description | Type | Version |
| --- | --- | --- | --- |
| goTo | - | (slide: number, dontAnimate?: boolean) =&gt; void | - |
| next | - | () =&gt; void | - |
| prev | - | () =&gt; void | - |
| autoPlay | - | (playType?: 'update' \| 'leave' \| 'blur') =&gt; void | - |
| innerSlider | - | any | - |