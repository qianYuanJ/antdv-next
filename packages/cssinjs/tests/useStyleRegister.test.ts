import { beforeEach, describe, expect, it } from 'vitest'
import { defineComponent, h, nextTick, ref } from 'vue'
import useStyleRegister, { extract } from '../src/hooks/useStyleRegister'
import { ATTR_MARK, ATTR_TOKEN } from '../src/StyleContext'
import { mountWithStyleProvider } from './utils'

describe('useStyleRegister', () => {
  beforeEach(() => {
    document
      .querySelectorAll(`style[${ATTR_MARK}]`)
      .forEach(style => style.parentNode?.removeChild(style))
  })

  it('injects style into DOM when running on client', async () => {
    const theme = {} as any
    const token = { _tokenKey: 'test-token' }

    const TestComponent = defineComponent({
      setup() {
        const info = ref({
          theme,
          token,
          path: ['.box'],
        })
        const wrapSSR = useStyleRegister(info, () => ({
          '.box': {
            color: 'red',
          },
        }))

        return () => wrapSSR(h('div', { class: 'box' }, 'content'))
      },
    })

    const wrapper = mountWithStyleProvider(TestComponent)

    await nextTick()

    const styles = Array.from(document.querySelectorAll(`style[${ATTR_MARK}]`))
    const matched = styles.find(style => style.innerHTML.includes('.box') && style.innerHTML.includes('color:red'))

    expect(matched).toBeTruthy()
    expect(matched?.getAttribute(ATTR_TOKEN)).toBe('test-token')

    wrapper.unmount()
  })

  it('renders inline style when mocked as server with ssrInline', async () => {
    const theme = {} as any
    const token = { _tokenKey: 'server-token' }

    const TestComponent = defineComponent({
      setup() {
        const info = ref({
          theme,
          token,
          path: ['.server'],
        })
        const wrapSSR = useStyleRegister(info, () => ({
          '.server': {
            color: 'blue',
          },
        }))

        return () => wrapSSR(h('div', { class: 'server' }, 'content'))
      },
    })

    const wrapper = mountWithStyleProvider(TestComponent, {
      mock: 'server',
      ssrInline: true,
    })

    await nextTick()

    const inlineStyle = wrapper.find('style')
    expect(inlineStyle.exists()).toBe(true)
    expect(inlineStyle.attributes()[ATTR_TOKEN]).toBe('server-token')
    expect(inlineStyle.text()).toContain('.server')

    // No style should be injected to document head in server mode
    expect(document.querySelector(`style[${ATTR_MARK}]`)).toBeNull()

    wrapper.unmount()
  })

  it('extract returns serialized style string with effect cache tracking', () => {
    const cacheValue: any = [
      '.box{color:red;}',
      'token-key',
      'style-id',
      {
        'global': '.global{color:green;}',
        '@layer foo': '.layer{display:block;}',
      },
      false,
      10,
    ]

    const effectStyles: Record<string, boolean> = {}
    const result = extract(cacheValue, effectStyles)

    expect(result).toBeTruthy()
    expect(result?.[0]).toBe(10)
    expect(result?.[1]).toBe('style-id')
    expect(result?.[2]).toContain('.box{color:red;}')
    expect(result?.[2]).toContain('_effect-global')
    expect(result?.[2]).toContain('_effect-@layer foo')
    expect(effectStyles.global).toBe(true)
    expect(effectStyles['@layer foo']).toBe(true)
  })
})
