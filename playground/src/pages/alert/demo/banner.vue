<script setup lang="ts">

</script>

<template>
  <a-alert message="Warning text" banner />
  <br>
  <a-alert
    message="Very long warning text warning text text text text text text text"
    banner
    closable
  />
  <br>
  <a-alert :show-icon="false" message="Warning text without icon" banner />
  <br>
  <a-alert type="error" message="Error text" banner />
</template>

<style scoped>

</style>
