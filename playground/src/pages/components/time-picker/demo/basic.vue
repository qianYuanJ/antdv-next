<script setup lang="ts">
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { shallowRef } from 'vue'

dayjs.extend(customParseFormat)
const value = shallowRef(dayjs('00:00:00', 'HH:mm:ss'))
</script>

<template>
  <a-time-picker
    v-model:value="value"
    @change="(date, dateString) => {
      console.log('Change:', date, dateString)
    }"
  />
</template>
