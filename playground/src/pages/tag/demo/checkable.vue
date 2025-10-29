<script setup lang="ts">
import { ref } from 'vue'

const tagsData = ['Movies', 'Books', 'Music', 'Sports']
const selectedTags = ref<string[]>([])
function handleChange(tag: string, checked: boolean) {
  if (checked) {
    selectedTags.value.push(tag)
  }
  else {
    const index = selectedTags.value.indexOf(tag)
    if (index > -1) {
      selectedTags.value.splice(index, 1)
    }
  }
}
</script>

<template>
  <a-flex :gap="4" wrap align="center">
    <span>Categories:</span>
    <template v-for="tag in tagsData" :key="tag">
      <a-checkable-tag
        :checked="selectedTags.includes(tag)"
        @change="(checked) => handleChange(tag, checked)"
      >
        {{ tag }}
      </a-checkable-tag>
    </template>
  </a-flex>
</template>
