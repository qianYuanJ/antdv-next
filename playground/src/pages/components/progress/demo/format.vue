<template>
  <a-flex gap="small" wrap>
    <a-progress type="circle" :percent="75" :format="percent => `${percent} Days`" />
    <a-progress type="circle" :percent="100" :format="() => 'Done'" />
  </a-flex>
</template>
