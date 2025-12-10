<template>
  <a-flex vertical gap="small">
    <a-progress stroke-linecap="butt" :percent="75" />
    <a-flex wrap gap="small">
      <a-progress stroke-linecap="butt" type="circle" :percent="75" />
      <a-progress stroke-linecap="butt" type="dashboard" :percent="75" />
    </a-flex>
  </a-flex>
</template>
