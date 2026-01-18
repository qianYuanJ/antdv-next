<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { defineAsyncComponent } from 'vue'
import { useAppStore } from '@/stores/app.ts'

const ComponentsBlock = defineAsyncComponent(() => import('./components/preview-banner/components-block.vue'))

const locales = {
  'zh-CN': {
    slogan: '助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～',
    start: '开始使用',
    designLanguage: '仓库地址',
  },
  'en-US': {
    slogan:
        'Help designers/developers building beautiful products more flexible and working with happiness',
    start: 'Getting Started',
    designLanguage: 'GitHub Repo',
  },
}

const appStore = useAppStore()
const { locale } = storeToRefs(appStore)
</script>

<template>
  <div class="min-h-100vh">
    <section>
      <div class="z-1 relative">
        <!-- Background Images -->
        <img
          alt="bg"
          draggable="false"
          src="https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg"
          class="absolute top-0 left-0 w-240px"
        >
        <img
          alt="bg"
          draggable="false"
          src="https://gw.alipayobjects.com/zos/bmw-prod/e152223c-bcae-4913-8938-54fda9efe330.svg"
          class="absolute bottom-120px right-40% w-240px"
        >

        <!-- Main Holder -->
        <div class="preview-banner-holder group">
          <!-- Components Block - 绝对定位在右上角 -->
          <Suspense>
            <div class="preview-banner-block">
              <ComponentsBlock />
            </div>
            <template #fallback>
              <div class="preview-banner-block" />
            </template>
          </Suspense>

          <!-- Mask Layer -->
          <div class="preview-banner-mask" />

          <!-- Typography -->
          <a-typography component="article" class="text-center relative z-1 px-xl" style="text-shadow: 0 0 4px var(--ant-color-bg-container),0 0 4px var(--ant-color-bg-container),0 0 4px var(--ant-color-bg-container),0 0 4px var(--ant-color-bg-container),0 0 4px var(--ant-color-bg-container)">
            <h1 class="font-900" style="font-size: calc(var(--ant-font-size-heading-2) * 2)!important; line-height: var(--ant-line-height-heading-2)!important;">
              Antdv Next
            </h1>
            <p class="text-lg! font-normal! mb-0!">
              {{ locales[locale].slogan }}
            </p>
          </a-typography>

          <!-- Buttons -->
          <a-flex gap="middle" style="margin-bottom: var(--ant-margin-xl)">
            <a-button type="primary" href="/components/overview" size="large">
              {{ locales[locale].start }}
            </a-button>
            <a-button href="https://github.com/antdv-next/antdv-next" target="_blank" rel="noopener noreferrer" size="large">
              {{ locales[locale].designLanguage }}
            </a-button>
          </a-flex>

          <!-- Children Container -->
          <div class="relative w-full mx-auto my-0 z-1 max-w-1200px">
            <div class="flex w-full max-w-full box-border items-stretch text-align-start min-h-178px mx-auto" style="column-gap: calc(var(--ant-padding-md) * 2);" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.preview-banner-holder {
  height: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  perspective: 800px;
  transform: translateZ(1000px);
  row-gap: var(--ant-margin-xl);
}

.preview-banner-block {
  position: absolute;
  inset-inline-end: -60px;
  top: -24px;
  transition: all 1s cubic-bezier(0.03, 0.98, 0.52, 0.99);
}

.preview-banner-mask {
  position: absolute;
  inset: 0;
  backdrop-filter: blur(2px);
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 1s ease;
  pointer-events: none;
}

:global([data-prefers-color='dark']) .preview-banner-mask {
  background-color: rgba(0, 0, 0, 0.2);
}

.preview-banner-holder:hover .preview-banner-mask {
  opacity: 0;
}

.preview-banner-holder:hover .preview-banner-block {
  transform: scale(0.96);
}
</style>
