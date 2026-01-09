<docs lang="zh-CN">
从堆叠到水平排列。11

使用一组 `Row` 和 `Col` 创建基础栅格，所有列（Col）必须放在 `Row` 内。
</docs>

<docs lang="en-US">
From the stack to the horizontal arrangement.

Create a basic grid using a single set of `Row` and `Col`. All `Col` must be placed inside a `Row`.
</docs>

<template>
  <a-row>
    <a-col :span="24">
      col
    </a-col>
  </a-row>

  <a-row>
    <a-col :span="12">
      col-12
    </a-col>
    <a-col :span="12">
      col-12
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="8">
      col-8
    </a-col>
    <a-col :span="8">
      col-8
    </a-col>
    <a-col :span="8">
      col-8
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="6">
      col-6
    </a-col>
    <a-col :span="6">
      col-6
    </a-col>
    <a-col :span="6">
      col-6
    </a-col>
    <a-col :span="6">
      col-6
    </a-col>
  </a-row>
</template>
