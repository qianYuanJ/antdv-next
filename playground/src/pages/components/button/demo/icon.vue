<docs lang="zh-CN">
可以通过 `icon`属性/插槽添加图标。
</docs>

<docs lang="en-US">
You can add an icon using the `icon`/`slot` property.
</docs>

<script setup lang="ts">
import { SearchOutlined } from '@antdv-next/icons'
</script>

<template>
  <a-flex gap="small" vertical>
    <a-flex wrap gap="small">
      <!--      <Tooltip title="search"> -->
      <a-button type="primary" shape="circle">
        <template #icon>
          <SearchOutlined />
        </template>
      </a-button>
      <!--      </Tooltip> -->
      <a-button type="primary" shape="circle">
        A
      </a-button>
      <a-button type="primary">
        <template #icon>
          <SearchOutlined />
        </template>
        Search
      </a-button>
      <!--      <Tooltip title="search"> -->
      <a-button shape="circle">
        <template #icon>
          <SearchOutlined />
        </template>
      </a-button>
      <!--      </Tooltip> -->
      <a-button>
        <template #icon>
          <SearchOutlined />
        </template>
        Search
      </a-button>
    </a-flex>
    <a-flex wrap gap="small">
      <!--      <Tooltip title="search"> -->
      <a-button shape="circle">
        <template #icon>
          <SearchOutlined />
        </template>
      </a-button>
      <!--      </Tooltip> -->
      <a-button>
        <template #icon>
          <SearchOutlined />
        </template>
        Search
      </a-button>
      <!--      <Tooltip title="search"> -->
      <a-button type="dashed" shape="circle">
        <template #icon>
          <SearchOutlined />
        </template>
      </a-button>
      <!--      </Tooltip> -->
      <a-button type="dashed">
        <template #icon>
          <SearchOutlined />
        </template>
        Search
      </a-button>
      <a-button href="https://www.google.com" target="_blank">
        <template #icon>
          <SearchOutlined />
        </template>
      </a-button>
    </a-flex>
  </a-flex>
</template>
