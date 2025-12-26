<docs lang="zh-CN">
组件 Token
</docs>

<docs lang="en-US">
Component Token
</docs>

<script setup lang="ts">
import type { CascaderEmits } from 'antdv-next'

interface Option {
  value: string
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
]

const onChange: CascaderEmits['change'] = (value) => {
  console.log(value)
}
</script>

<template>
  <a-config-provider
    :theme="{
      components: {
        Cascader: {
          optionSelectedColor: 'red',
        },
      },
    }"
  >
    <a-cascader :options="options" placeholder="Please select" @change="onChange" />
  </a-config-provider>
</template>
