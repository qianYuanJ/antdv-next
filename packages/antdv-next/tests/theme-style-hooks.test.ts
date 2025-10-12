import { afterEach, describe, expect, it } from 'vitest'

import {
  genComponentStyleHook,
  genStyleHooks,
  genSubStyleComponent,
} from '../src/theme/internal'

describe('theme style hooks', () => {
  afterEach(() => {
    document.head.querySelectorAll('style').forEach((style) => {
      style.remove()
    })
  })

  it('generates and caches component styles with default token values', () => {
    const useStyle = genComponentStyleHook('ButtonTest', token => ({
      [token.componentCls]: {
        color: token.colorPrimary,
      },
    }))

    const result = useStyle('ant-button-test')
    const { cssVarCls, hashId, token, info, cssText, registerCss } = result

    const classes = cssVarCls.split(' ')
    expect(classes[0]).toBe('ant-button-test-css-var')
    expect(classes[1]).toBe(hashId)
    expect(cssText).toContain('.ant-button-test{color:var(--ant-color-primary, #1677ff);}')
    expect(token.componentCls).toBe('.ant-button-test')
    expect(token.colorPrimary).toBe('var(--ant-color-primary, #1677ff)')

    registerCss()

    const styleSelector = `style[data-${info.styleKey}]`
    const styleEl = document.head.querySelector<HTMLStyleElement>(styleSelector)
    expect(styleEl).not.toBeNull()
    expect(styleEl?.textContent).toBe(cssText)

    // ensure subsequent calls do not duplicate style nodes
    registerCss()
    expect(document.head.querySelectorAll(styleSelector)).toHaveLength(1)
  })

  it('respects css variable prefix and component token overrides', () => {
    const useBoxStyle = genComponentStyleHook<{ spacing: string }>(
      'Box',
      token => ({
        [token.componentCls]: {
          padding: token.spacing,
          color: token.colorPrimary,
        },
      }),
      () => ({ spacing: '4px' }),
    )

    const result = useBoxStyle('custom-box', {
      cssVarPrefix: 'custom',
      componentToken: {
        spacing: '12px',
      },
    })

    expect(result.token.spacing).toBe('12px')
    expect(result.token.colorPrimary).toBe('var(--custom-color-primary, #1677ff)')

    result.registerCss()

    const styleEl = document.head.querySelector<HTMLStyleElement>(`style[data-${result.info.styleKey}]`)
    expect(styleEl).not.toBeNull()
    expect(styleEl?.textContent).toContain('.custom-box{padding:12px;color:var(--custom-color-primary, #1677ff);}')
  })

  it('supports multiple style generators and sub component helpers', () => {
    const useMultiStyle = genStyleHooks('Multi', [
      token => ({
        [token.componentCls]: {
          background: token.colorBgContainer,
        },
      }),
      token => ({
        [`${token.componentCls}-extra`]: {
          color: token.colorWarning,
        },
      }),
    ])

    const multiResult = useMultiStyle('ant-multi')
    multiResult.registerCss()

    const multiStyle = document.head.querySelector<HTMLStyleElement>('style[data-antdv-Multi-ant-multi-ant]')
    expect(multiStyle).not.toBeNull()
    expect(multiStyle?.textContent).toContain('.ant-multi{background:var(--ant-color-bg-container, #ffffff);}')
    expect(multiStyle?.textContent).toContain('.ant-multi-extra{color:var(--ant-color-warning, #faad14);}')

    const useSubStyle = genSubStyleComponent('Panel', 'Item', token => ({
      [token.componentCls]: {
        color: token.colorSuccess,
      },
    }))

    const subResult = useSubStyle()
    subResult.registerCss()

    const subStyle = document.head.querySelector<HTMLStyleElement>('style[data-antdv-Panel-Item-ant-panel-item-ant]')
    expect(subStyle).not.toBeNull()
    expect(subStyle?.textContent).toContain('.ant-panel-item{color:var(--ant-color-success, #52c41a);}')
  })
})
