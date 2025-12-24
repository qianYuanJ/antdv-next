<script setup lang="ts">
import { EditOutlined, LinkOutlined } from '@antdv-next/icons'
import demos from 'virtual:demos'
import { computed, defineAsyncComponent, shallowRef } from 'vue'
import ExpandIcon from '@/components/code-demo/expand-icon.vue'
import { getId } from '@/components/code-demo/utils/getId'
import ExternalLink from '@/components/icons/external-link.vue'
import { useAppStore } from '@/stores/app.ts'

defineOptions({
  name: 'Demo',
})
const { src } = defineProps<{
  src: string
}>()
const demo = computed(() => demos[src])
const appStore = useAppStore()
const description = computed(() => {
  const locales = demo.value?.locales ?? {}
  const localeData = locales[appStore.locale] || {}
  return localeData?.html ?? ''
})
const component = computed(() => typeof demo.value?.component === 'function' ? defineAsyncComponent(demo.value.component) : demo.value.component)
const id = computed(() => {
  if (!src)
    return ''
  return getId(src)
})
const showCode = shallowRef(false)

function handleShowCode() {
  showCode.value = !showCode.value
}
</script>

<template>
  <section :id="id" class="ant-doc-demo-box">
    <section class="vp-raw ant-doc-demo-box-demo">
      <Suspense>
        <component :is="component" v-if="demo?.component" />
        <template #fallback>
          <a-skeleton :paragraph="{ rows: 5 }" />
        </template>
      </Suspense>
    </section>
    <section class="ant-doc-demo-box-meta markdown">
      <div class="ant-doc-demo-box-title">
        <a :href="`#${id}`">
          <slot />
        </a>
        <a target="_blank" rel="noopener norreferrer" class="ml-xs">
          <EditOutlined class="color-text-tertiary" />
        </a>
      </div>
      <div v-if="description" class="pt-18px pb-24px px-12px">
        <div v-html="description" />
      </div>
      <a-flex class="ant-doc-demo-box-actions " wrap gap="middle">
        <a class="ant-doc-demo-box-code-action">
          <LinkOutlined />
        </a>
        <a class="ant-doc-demo-box-code-action">
          <ExternalLink />
        </a>
        <div class="ant-doc-demo-box-expand-icon ant-doc-demo-box-code-action" @click="handleShowCode">
          <ExpandIcon :expanded="showCode" />
        </div>
      </a-flex>
    </section>
    <div v-if="showCode" class="ant-doc-demo-box-code" v-html="demo?.html" />
  </section>
</template>

<style lang="less">
.ant-doc-demo-box {
  @apply bg-container;

  break-inside: avoid;
  display: flow-root;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  transition: 0.2s;
  box-sizing: border-box;
  position: relative;

  &-demo {
    @apply bg-container;
    padding: 42px 24px 50px;
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid rgba(5, 5, 5, 0.06);
  }

  &-meta.markdown {
    position: relative;
    width: 100%;
    font-size: 14px;
    border-radius: 0 0 6px 6px;
    transition: background-color 0.4s;

    h4,
    p {
      margin: 0;
    }
  }

  &-title {
    @apply ml-16px;
    background-color: var(--ant-color-bg-container);
    position: absolute;
    top: -16px;
    padding: 1px 8px;
    border-radius: 6px 6px 0 0;
    transition: background-color 0.4s;

    a {
      @apply color-text! decoration-none! font-500! text-16px!;
    }
  }

  &-actions {
    display: flex;
    justify-content: center;
    padding: 12px 0;
    border-top: 1px dashed rgba(5, 5, 5, 0.06);
    opacity: 0.7;
    transition: opacity 0.3s;

    .ant-doc-demo-box-code-action {
      position: relative;
      display: flex;
      align-items: center;
      width: 16px;
      height: 16px;
      @apply color-text-secondary;
      cursor: pointer;
      transition: 0.24s;
    }
  }
}
</style>
