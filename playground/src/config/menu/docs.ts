import type { AntdvMenuItem } from './interface'
import { components } from './components'

export const docsMenuLocales = {
  '/docs/vue/introduce': {
    'zh-CN': 'Ant Design of Vue',
    'en-US': 'Ant Design of Vue',
  },
  '/docs/vue/use': {
    'zh-CN': '如何使用',
    'en-US': 'How to Use',
  },
  '/docs/vue/getting-started': {
    'zh-CN': '快速上手',
    'en-US': 'Getting Started',
  },
  '/blog/antdv-next-release': {
    'en-US': 'Antdv Next Release v1',
    'zh-CN': 'Antdv Next v1 发布啦！',
  },
  '/docs/vue/ai': {
    'zh-CN': 'AI',
    'en-US': 'AI',
  },
  '/docs/vue/llms': {
    'zh-CN': 'LLMs.txt',
    'en-US': 'LLMs.txt',
  },
  '/docs/vue/skills': {
    'zh-CN': '技能',
    'en-US': 'Skills',
  },
  '/docs/vue/advanced/use': {
    'zh-CN': '进阶使用',
    'en-US': 'Advanced Usage',
  },
  '/docs/vue/customize-theme': {
    'zh-CN': '定制主题',
    'en-US': 'Customize Theme',
  },
  '/docs/vue/compatible-style': {
    'zh-CN': '样式兼容',
    'en-US': 'Compatible Style',
  },
  '/docs/vue/i18n': {
    'zh-CN': '国际化',
    'en-US': 'I18n',
  },
  '/docs/vue/common-props': {
    'zh-CN': '通用属性',
    'en-US': 'Common Props',
  },
}

export const docsMenus: Record<string, AntdvMenuItem[]> = {
  '/docs/vue': [
    {
      key: '/docs/vue/introduce',
      label: '介绍',
    },
    {
      key: '/docs/vue/use',
      label: '如何使用',
      type: 'group',
      children: [
        {
          key: '/docs/vue/getting-started',
          label: '快速上手',
        },
      ],
    },
    {
      key: '/docs/vue/ai',
      label: 'AI',
      type: 'group',
      children: [
        {
          key: '/docs/vue/llms',
          label: 'LLMs.txt',
        },
        {
          key: '/docs/vue/skills',
          label: 'Skills',
        },
      ],
    },
    {
      key: '/docs/vue/advanced/use',
      label: '进阶使用',
      type: 'group',
      children: [
        {
          key: '/docs/vue/customize-theme',
          label: '定制主题',
        },
        {
          key: '/docs/vue/compatible-style',
          label: '样式兼容',
        },
        {
          key: '/docs/vue/i18n',
          label: '国际化',
        },
        {
          key: '/docs/vue/common-props',
          label: '通用属性',
        },
      ],
    },
  ],
  '/components': components,
  '/blog': [
    // {
    //   key: '/blog/antdv-next-release',
    //   label: 'Antdv Next Release v1',
    // },
  ],
}
