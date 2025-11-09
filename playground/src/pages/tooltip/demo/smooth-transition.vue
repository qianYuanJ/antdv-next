<script lang="ts" setup>
import SharedButton from './components/shared-button.vue'
</script>

<template>
  <div class="h-200px" />
  <a-config-provider
    :tooltip="{
      unique: true,
    }"
  >
    <a-flex vertical gap="small">
      <a-flex gap="small" justify="center">
        <SharedButton />
        <SharedButton />
      </a-flex>
      <a-flex gap="small" justify="center">
        <SharedButton placement="bottom" />
        <SharedButton placement="bottom" />
      </a-flex>
    </a-flex>
  </a-config-provider>
</template>
