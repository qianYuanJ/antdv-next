<docs lang="zh-CN">
不浮动，状态不随页面滚动变化。
</docs>

<docs lang="en-US">
Do not change state when page is scrolling.
</docs>

<template>
  <a-anchor
    :affix="false"
    :items="[
      {
        key: '1',
        href: '#anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]"
  />
</template>
