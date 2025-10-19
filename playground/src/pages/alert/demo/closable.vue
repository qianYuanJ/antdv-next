<script setup lang="ts">
import { CloseSquareOutlined } from '@antdv-next/icons'

function onClose(e: any) {
  console.log('Alert closed', e)
}
</script>

<template>
  <a-alert
    message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
    type="warning"
    closable
    @click="onClose"
  />
  <br>
  <a-alert
    message="Error Text"
    description="Error Description Error Description Error Description Error Description Error Description Error Description"
    type="error"
    closable
    @click="onClose"
  />
  <br>
  <a-alert
    message="Error Text"
    description="Error Description Error Description Error Description Error Description Error Description Error Description"
    type="error"
    :closable="{
      'aria-label': 'Close',
    }"
    @click="onClose"
  >
    <template #closeIcon>
      <CloseSquareOutlined />
    </template>
  </a-alert>
</template>
