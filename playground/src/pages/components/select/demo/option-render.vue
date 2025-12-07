<script setup lang="ts">
import { shallowRef } from 'vue'

const value = shallowRef(['china'])

const options = [
  {
    label: 'China',
    value: 'china',
    emoji: '🇨🇳',
    desc: 'China (中国)',
  },
  {
    label: 'USA',
    value: 'usa',
    emoji: '🇺🇸',
    desc: 'USA (美国)',
  },
  {
    label: 'Japan',
    value: 'japan',
    emoji: '🇯🇵',
    desc: 'Japan (日本)',
  },
  {
    label: 'Korea',
    value: 'korea',
    emoji: '🇰🇷',
    desc: 'Korea (韩国)',
  },
]

function handleChange(val: string[]) {
  console.log(`selected ${val}`)
}
</script>

<template>
  <a-select
    v-model:value="value"
    mode="multiple"
    style="width: 100%"
    placeholder="select one country"
    :options="options"
    @change="handleChange"
  >
    <template #optionRender="{ option }">
      <a-space>
        <span role="img" :aria-label="option.data.label">
          {{ option.data.emoji }}
        </span>
        {{ option.data.desc }}
      </a-space>
    </template>
  </a-select>
</template>
