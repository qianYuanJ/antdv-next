<script setup lang="ts">
import { theme } from 'antdv-next'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useAppStore } from '@/stores/app.ts'

const locales = {
  'zh-CN': {
    values: '设计价值观',
    valuesDesc: '确定性、意义感、生长性、自然',
    guide: '设计指引',
    guideDesc: '全局样式、设计模式',
    lib: '组件库',
    libDesc: 'Antdv Next of Vue 3',
  },
  'en-US': {
    values: 'Design values',
    valuesDesc: 'Certainty, Meaningfulness, Growth, Naturalness',
    guide: 'Design guide',
    guideDesc: 'Global style and design pattern',
    lib: 'Components Libraries',
    libDesc: 'Antdv Next of Vue 3',
  },
}

const appStore = useAppStore()
const { locale, darkMode } = storeToRefs(appStore)

const currentLocale = computed(() => locales[locale.value])

const { token } = theme.useToken()

// 主要列表项
const mainlyList = computed(() => [
  {
    img: 'https://gw.alipayobjects.com/zos/bmw-prod/36a89a46-4224-46e2-b838-00817f5eb364.svg',
    key: 'values',
    title: currentLocale.value.values,
    desc: currentLocale.value.valuesDesc,
    // 跳转到 Ant Design 的设计价值观页面
    path: locale.value === 'zh-CN'
      ? 'https://ant-design.antgroup.com/docs/spec/values-cn'
      : 'https://ant-design.antgroup.com/docs/spec/values',
    external: true,
  },
  {
    img: 'https://gw.alipayobjects.com/zos/bmw-prod/8379430b-e328-428e-8a67-666d1dd47f7d.svg',
    key: 'guide',
    title: currentLocale.value.guide,
    desc: currentLocale.value.guideDesc,
    // 跳转到 Ant Design 的设计指引页面
    path: locale.value === 'zh-CN'
      ? 'https://ant-design.antgroup.com/docs/spec/colors-cn'
      : 'https://ant-design.antgroup.com/docs/spec/colors',
    external: true,
  },
  {
    img: 'https://gw.alipayobjects.com/zos/bmw-prod/1c363c0b-17c6-4b00-881a-bc774df1ebeb.svg',
    key: 'lib',
    title: currentLocale.value.lib,
    desc: currentLocale.value.libDesc,
    // 跳转到自己的 introduce 页面
    path: '/docs/vue/introduce',
    external: false,
  },
])

const gutter = computed(() => token.value?.marginXL || 24)
</script>

<template>
  <a-row :gutter="[gutter, gutter]">
    <a-col
      v-for="item in mainlyList"
      :key="item.key"
      :span="8"
    >
      <a
        v-if="item.external"
        :href="item.path"
        target="_blank"
        rel="noopener noreferrer"
        class="antdv-design-framework-card"
        :class="{ 'antdv-design-framework-card-dark': darkMode }"
      >
        <img draggable="false" :alt="item.title" :src="item.img">
        <a-typography-title
          :level="4"
          :style="{ marginTop: `${token?.margin}px`, marginBottom: `${token?.marginXS}px` }"
        >
          {{ item.title }}
        </a-typography-title>
        <a-typography-paragraph type="secondary" style="margin: 0;">
          {{ item.desc }}
        </a-typography-paragraph>
      </a>
      <router-link
        v-else
        :to="item.path"
        class="antdv-design-framework-card"
        :class="{ 'antdv-design-framework-card-dark': darkMode }"
      >
        <img draggable="false" :alt="item.title" :src="item.img">
        <a-typography-title
          :level="4"
          :style="{ marginTop: `${token?.margin}px`, marginBottom: `${token?.marginXS}px` }"
        >
          {{ item.title }}
        </a-typography-title>
        <a-typography-paragraph type="secondary" style="margin: 0;">
          {{ item.desc }}
        </a-typography-paragraph>
      </router-link>
    </a-col>
  </a-row>
</template>

<style>
.antdv-design-framework-card {
  display: block;
  padding: var(--ant-padding-sm);
  border-radius: calc(var(--ant-border-radius) * 2);
  background: var(--ant-color-bg-elevated);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.03),
    0 1px 6px -1px rgba(0, 0, 0, 0.02),
    0 2px 4px rgba(0, 0, 0, 0.02);
  text-decoration: none;
  color: inherit;
  transition: all var(--ant-motion-duration-mid);
}

.antdv-design-framework-card:hover {
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.08),
    0 3px 12px -2px rgba(0, 0, 0, 0.05),
    0 4px 8px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

.antdv-design-framework-card-dark {
  background: rgba(0, 0, 0, 0.45);
}

.antdv-design-framework-card img {
  width: 100%;
  vertical-align: top;
  border-radius: var(--ant-border-radius);
}
</style>
