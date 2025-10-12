import { afterEach, describe, expect, it } from 'vitest'

import { token2CSSVar, updateThemeCssVars } from '../src/theme/cssvar'
import defaultSeedToken from '../src/theme/themes/seed'

describe('root css var', () => {
  afterEach(() => {
    document.head.querySelectorAll('style').forEach((style) => {
      style.remove()
    })
  })

  it('injects default theme variables into :root', () => {
    const result = updateThemeCssVars({ key: 'test-theme' })

    const primaryVar = token2CSSVar('colorPrimary')
    const fontSizeVar = token2CSSVar('fontSize')
    const lineHeightVar = token2CSSVar('lineHeight')

    expect(result.cssVars[primaryVar]).toBe(defaultSeedToken.colorPrimary)
    expect(result.cssVars[fontSizeVar]).toBe('14px')
    expect(result.cssVars[lineHeightVar]).toMatch(/^\d+(\.\d+)?$/)

    expect(result.token.colorPrimary).toBe(`var(${primaryVar})`)

    const styleEl = document.head.querySelector<HTMLStyleElement>('style[data-test-theme]')
    expect(styleEl).not.toBeNull()
    expect(styleEl?.textContent).toBe(result.cssText)
    expect(styleEl?.textContent).toContain(':root{')
    expect(styleEl?.textContent).toContain(`${primaryVar}:${defaultSeedToken.colorPrimary};`)
  })

  it('respects custom prefix, selector, and overrides', () => {
    const primaryVar = token2CSSVar('colorPrimary', 'custom')
    const { cssVars, cssText, styleElement } = updateThemeCssVars({
      key: 'custom-theme',
      prefix: 'custom',
      selector: '.custom-scope',
      seed: {
        colorPrimary: '#ff0000',
      },
      overrides: {
        fontSize: 20,
      },
    })

    expect(cssVars[primaryVar]).toBe('#ff0000')
    expect(cssVars[token2CSSVar('fontSize', 'custom')]).toBe('20px')
    expect(cssText.startsWith('.custom-scope{')).toBe(true)

    expect(styleElement?.getAttribute('data-custom-theme')).toBe('custom-theme')
    expect(styleElement?.textContent).toContain(`${primaryVar}:#ff0000;`)
  })
})
