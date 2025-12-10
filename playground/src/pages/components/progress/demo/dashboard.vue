<script setup lang="ts">
import type { ProgressGapPlacement } from '../../../../../packages/antdv-next/src/components'
import { ref } from 'vue'

const gapPlacement = ref<ProgressGapPlacement>('bottom')
const gapDegree = ref<number>(50)
</script>

<template>
  <a-flex vertical gap="large">
    <div>
      gapDegree:
      <a-segmented
        :options="[
          { label: 50, value: 50 },
          { label: 100, value: 100 },
        ]"
        v-model:value="gapDegree"
      />
    </div>
    <div>
      gapPlacement:
      <a-segmented
        :options="[
          { label: 'start', value: 'start' },
          { label: 'end', value: 'end' },
          { label: 'top', value: 'top' },
          { label: 'bottom', value: 'bottom' },
        ]"
        v-model:value="gapPlacement"
      />
    </div>
    <a-progress type="dashboard" :gap-degree="gapDegree" :percent="30" :gap-placement="gapPlacement" />
  </a-flex>
</template>
