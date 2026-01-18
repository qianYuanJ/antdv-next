<script setup lang="ts">
import { AntDesignOutlined, CheckOutlined, CloseOutlined, DownOutlined } from '@antdv-next/icons'
import { message, Modal, theme, Tooltip } from 'antdv-next'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useAppStore } from '@/stores/app.ts'
import Tilt from './tilt.vue'

const { _InternalPanelDoNotUseOrYouWillBeFired: ModalPanel } = Modal as any
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTooltip } = Tooltip
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalMessage } = message

const appStore = useAppStore()

const { locale } = storeToRefs(appStore)

const { token } = theme.useToken()

const locales = computed(() => {
  return {
    'zh-CN': {
      range: '设置范围',
      text: 'Ant Design 使用 CSS-in-JS 技术以提供动态与混合主题的能力。与此同时,我们使用组件级别的 CSS-in-JS 解决方案,让你的应用获得更好的性能。',
      infoText: '信息内容展示',
      dropdown: '下拉菜单',
      finished: '已完成',
      inProgress: '进行中',
      waiting: '等待中',
      option: '选项',
      apple: '苹果',
      banana: '香蕉',
      orange: '橘子',
      watermelon: '西瓜',
      primary: '主要按钮',
      danger: '危险按钮',
      default: '默认按钮',
      dashed: '虚线按钮',
      icon: '图标按钮',
      hello: '你好,Ant Design!',
      release: 'Ant Design 6.0 正式发布!',
    },
    'en-US': {
      range: 'Set Range',
      text: 'Ant Design use CSS-in-JS technology to provide dynamic & mix theme ability. And which use component level CSS-in-JS solution get your application a better performance.',
      infoText: 'Info Text',
      dropdown: 'Dropdown',
      finished: 'Finished',
      inProgress: 'In Progress',
      waiting: 'Waiting',
      option: 'Option',
      apple: 'Apple',
      banana: 'Banana',
      orange: 'Orange',
      watermelon: 'Watermelon',
      primary: 'Primary',
      danger: 'Danger',
      default: 'Default',
      dashed: 'Dashed',
      icon: 'Icon',
      hello: 'Hello, Ant Design!',
      release: 'Ant Design 6.0 is released!',
    },
  }[locale.value]
})

const dropdownItems = computed(() =>
  Array.from({ length: 5 }).map((_, index) => ({
    key: `opt${index}`,
    label: `${locales.value.option} ${index}`,
  })))

const selectOptions = computed(() => [
  { value: 'apple', label: locales.value.apple },
  { value: 'banana', label: locales.value.banana },
  { value: 'orange', label: locales.value.orange },
  { value: 'watermelon', label: locales.value.watermelon },
])

const stepsItems = computed(() => [
  { title: locales.value.finished },
  { title: locales.value.inProgress },
  { title: locales.value.waiting },
])

const checkboxOptions = computed(() => [
  locales.value.apple,
  locales.value.banana,
  locales.value.orange,
])
</script>

<template>
  <Tilt :options="{ max: 4, glare: false, scale: 0.98 }" class="holder">
    <ModalPanel title="Ant Design" width="100%">
      {{ locales.text }}
    </ModalPanel>
    <a-alert :title="locales.infoText" type="info" />
    <!-- Line -->
    <div class="flex">
      <a-color-picker style="flex: none;" />
      <div style="flex: none;">
        <a-space-compact>
          <a-button>{{ locales.dropdown }}</a-button>
          <a-dropdown :menu="{ items: dropdownItems }">
            <a-button>
              <template #icon>
                <DownOutlined />
              </template>
            </a-button>
          </a-dropdown>
        </a-space-compact>
      </div>
      <a-select
        style="flex: auto;"
        mode="multiple"
        max-tag-count="responsive"
        :default-value="['apple', 'banana']"
        :options="selectOptions"
      />
      <a-input style="flex: none; width: 120px;" />
    </div>
    <a-progress
      style="margin: 0;"
      :percent="100"
      :stroke-color="{ '0%': '#108ee9', '100%': '#87d068' }"
    />
    <a-progress style="margin: 0;" :percent="33" status="exception" />
    <a-steps :current="1" :items="stepsItems" />
    <!-- Line -->
    <div class="block">
      <a-slider
        style="margin-inline: 20px;"
        range
        :marks="{
          0: '0°C',
          26: '26°C',
          37: '37°C',
          100: { label: '100°C', style: { color: '#f50' } },
        }"
        :default-value="[26, 37]"
      />
    </div>
    <!-- Line -->
    <div class="flex">
      <a-button class="ptg_20" type="primary">
        {{ locales.primary }}
      </a-button>
      <a-button class="ptg_20" type="primary" danger>
        {{ locales.danger }}
      </a-button>
      <a-button class="ptg_20">
        {{ locales.default }}
      </a-button>
      <a-button class="ptg_20" type="dashed">
        {{ locales.dashed }}
      </a-button>
      <a-button class="ptg_20">
        <template #icon>
          <AntDesignOutlined />
        </template>
        {{ locales.icon }}
      </a-button>
    </div>
    <!-- Line -->
    <div class="block">
      <div class="flex">
        <a-switch
          class="ptg_none"
          default-checked
        >
          <template #checkedChildren>
            <CheckOutlined />
          </template>
          <template #unCheckedChildren>
            <CloseOutlined />
          </template>
        </a-switch>
        <a-checkbox-group
          class="ptg_none"
          :options="checkboxOptions"
          :default-value="[locales.apple]"
        />
      </div>
    </div>
    <div>
      <InternalMessage :content="locales.release" type="success" />
    </div>
    <InternalTooltip :title="locales.hello" placement="topLeft" class="noMargin" />
    <a-alert title="Ant Design love you!" type="success" />
  </Tilt>
</template>

<style scoped>
.holder {
  width: 500px;
  display: flex;
  flex-direction: column;
  row-gap: v-bind('`${token.padding}px`');
  opacity: 0.8;
}

.flex {
  display: flex;
  flex-wrap: nowrap;
  column-gap: v-bind('`${token.padding}px`');
}

.ptg_20 {
  flex: 0 1 20%;
}

.ptg_none {
  flex: none;
}

.block {
  background-color: v-bind('token.colorBgContainer');
  padding: v-bind('`${token.paddingXS}px`') v-bind('`${token.paddingSM}px`');
  border-radius: v-bind('`${token.borderRadius}px`');
  border: 1px solid v-bind('token.colorBorder');
}

.noMargin {
  margin: 0;
}
</style>
