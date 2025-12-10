<template>
  <div style="width: 180px">
    <a-flex vertical gap="small">
      <a-progress :percent="30" size="small" />
      <a-progress :percent="50" size="small" status="active" />
      <a-progress :percent="70" size="small" status="exception" />
      <a-progress :percent="100" size="small" />
    </a-flex>
  </div>
</template>
