<script setup lang="ts">
import type { DocPage } from '@/composables/doc-page.ts'
import { computed, inject, onMounted, onUnmounted, ref } from 'vue'

defineOptions({
  name: 'DemoGroup',
})

const props = defineProps<{
  cols?: number // 允许外部手动覆盖列数
}>()

const containerRef = ref<HTMLElement>()
const pageInfo = inject<DocPage | null>('__pageInfo__', null)

// 基础配置
const gap = 16
const minColumnWidth = 360 // 每列最小宽度，可根据需求调整
const dynamicCols = ref(2)

// 计算最终列数：如果 Props 有值则固定，否则动态计算
const finalCols = computed(() => {
  if (props.cols)
    return props.cols
  return dynamicCols.value
})

function updateColumns() {
  if (!containerRef.value)
    return
  const containerWidth = containerRef.value.offsetWidth

  // 根据容器宽度计算列数
  const maxPossibleColumns = Math.floor((containerWidth + gap) / (minColumnWidth + gap))

  // 读取 frontmatter 中的配置作为上限（默认 2）
  const maxLimit = pageInfo?.frontmatter?.demo?.cols || 2

  dynamicCols.value = Math.max(1, Math.min(maxPossibleColumns, maxLimit))
}

const waterfallStyle = computed(() => ({
  '--columns': finalCols.value,
  '--gap': `${gap}px`,
}))

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  updateColumns()
  if (containerRef.value && window.ResizeObserver) {
    resizeObserver = new ResizeObserver(() => {
      // 使用 requestAnimationFrame 避免 "ResizeObserver loop limit exceeded" 错误
      window.requestAnimationFrame(updateColumns)
    })
    resizeObserver.observe(containerRef.value)
  }
})

onUnmounted(() => {
  resizeObserver?.disconnect()
})
</script>

<template>
  <div
    ref="containerRef"
    class="ant-doc-demo-group"
    :style="waterfallStyle"
  >
    <slot />
  </div>
</template>

<style lang="less" scoped>
.ant-doc-demo-group {
  column-count: var(--columns);
  column-gap: var(--gap);
  column-fill: balance;
  width: 100%;
  margin-bottom: 24px;

  :deep(> *) {
    break-inside: avoid;
    margin-bottom: var(--gap);
    display: block;
    width: 100%;
  }
}
</style>
