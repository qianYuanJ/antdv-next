<docs lang="zh-CN">
简单的 checkbox。
</docs>

<docs lang="en-US">
Basic usage of checkbox.
</docs>

<script setup lang="ts">
import { shallowRef } from 'vue'

const checked = shallowRef(false)
</script>

<template>
  <a-checkbox v-model:checked="checked">
    Checkbox
  </a-checkbox>
</template>
