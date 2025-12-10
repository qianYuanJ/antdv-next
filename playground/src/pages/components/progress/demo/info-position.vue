<template>
  <a-flex gap="small" vertical>
    <a-progress
      :percent="0"
      :percent-position="{ align: 'center', type: 'inner' }"
      :size="[200, 20]"
      stroke-color="#E6F4FF"
    />
    <a-progress :percent="10" :percent-position="{ align: 'center', type: 'inner' }" :size="[300, 20]" />
    <a-progress
      :percent="50"
      :percent-position="{ align: 'start', type: 'inner' }"
      :size="[300, 20]"
      stroke-color="#B7EB8F"
    />
    <a-progress
      :percent="60"
      :percent-position="{ align: 'end', type: 'inner' }"
      :size="[300, 20]"
      stroke-color="#001342"
    />
    <a-progress :percent="100" :percent-position="{ align: 'center', type: 'inner' }" :size="[400, 20]" />
    <a-progress :percent="60" :percent-position="{ align: 'start', type: 'outer' }" />
    <a-progress :percent="100" :percent-position="{ align: 'start', type: 'outer' }" />
    <a-progress :percent="60" :percent-position="{ align: 'center', type: 'outer' }" size="small" />
    <a-progress :percent="100" :percent-position="{ align: 'center', type: 'outer' }" />
  </a-flex>
</template>
