<docs lang="zh-CN">
使用 `status` 为 Cascader 添加状态，可选 `error` 或者 `warning`。
</docs>

<docs lang="en-US">
Add status to Cascader with `status`, which could be `error` or `warning`.
</docs>

<template>
  <a-space vertical>
    <a-cascader status="error" placeholder="Error" />
    <a-cascader status="warning" multiple placeholder="Warning multiple" />
  </a-space>
</template>
