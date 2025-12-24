<docs lang="zh-CN">
我们默认在两个汉字之间添加空格，可以通过设置 `autoInsertSpace` 为 `false` 关闭。
</docs>

<docs lang="en-US">
We add a space between two Chinese characters by default, which can be removed by setting `autoInsertSpace` to `false`.
</docs>

<template>
  <a-flex gap="small" wrap>
    <a-button type="primary" :auto-insert-space="false">
      确定
    </a-button>
    <a-button type="primary" auto-insert-space>
      确定
    </a-button>
  </a-flex>
</template>
