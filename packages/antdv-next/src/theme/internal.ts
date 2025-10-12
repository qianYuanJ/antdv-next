import type { CSSInterpolation } from '../style/types'
import type { AliasToken, CalcFactory, TokenWithCommonCls } from './interface'
import { serializeStyles } from '../style/serialize'
import {
  DEFAULT_PREFIX,
  DEFAULT_UNITLESS_KEYS,
  token2CSSVar,
  transformToken,
} from './cssvar'
import { ensureStyle } from './styleRegistry'
import defaultDerivative from './themes/default'
import defaultSeedToken from './themes/seed'
import genCalc from './utils/calc'

const baseMapToken = defaultDerivative(defaultSeedToken)

const componentNameCache = new Map<string, string>()

function normalizeComponentName(name: string): string {
  if (!componentNameCache.has(name)) {
    const normalized = name
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase()
    componentNameCache.set(name, normalized)
  }
  return componentNameCache.get(name) as string
}

interface AliasTokenCacheEntry {
  token: AliasToken
  calc: CalcFactory
}

const aliasTokenCache = new Map<string, AliasTokenCacheEntry>()

function createAliasToken(prefix: string): AliasTokenCacheEntry {
  const { token, cssVars } = transformToken(baseMapToken, { prefix })
  const aliasToken: Record<string, any> = {}

  Object.keys(token).forEach((key) => {
    const value = token[key as keyof typeof token]
    if (typeof value === 'string' && value.startsWith('var(')) {
      const cssVarName = token2CSSVar(key, prefix)
      const fallbackValue = cssVars[cssVarName]
      aliasToken[key] = fallbackValue ? `var(${cssVarName}, ${fallbackValue})` : `var(${cssVarName})`
    }
    else {
      aliasToken[key] = value
    }
  })

  const unitlessVars = new Set<string>()
  Object.entries(DEFAULT_UNITLESS_KEYS).forEach(([key, flag]) => {
    if (flag)
      unitlessVars.add(token2CSSVar(key, prefix))
  })

  const calc = genCalc('css', unitlessVars)

  return {
    token: aliasToken as AliasToken,
    calc,
  }
}

function getAliasToken(prefix: string): AliasTokenCacheEntry {
  let cache = aliasTokenCache.get(prefix)
  if (!cache) {
    cache = createAliasToken(prefix)
    aliasTokenCache.set(prefix, cache)
  }
  return cache
}

let globalCssVarId = 0

function createCssVarHashCls(baseCls: string, provided?: string): string {
  if (provided) {
    if (provided.startsWith(baseCls))
      return provided
    return `${baseCls}-${provided}`
  }
  globalCssVarId += 1
  return `${baseCls}-${globalCssVarId}`
}

export interface StyleInfo<ComponentToken extends Record<string, any>> {
  prefixCls: string
  componentCls: string
  hashId: string
  cssVarCls: string
  cssVarBaseCls: string
  cssVarHashCls: string
  rootCls?: string
  antCls: string
  cssVarPrefix: string
  styleKey: string
  componentToken: ComponentToken
}

export type FullToken<ComponentToken extends Record<string, any>>
  = TokenWithCommonCls<AliasToken> & ComponentToken

export type GenerateStyle<ComponentToken extends Record<string, any> = Record<string, any>> = (
  token: FullToken<ComponentToken>,
  info: StyleInfo<ComponentToken>,
) => CSSInterpolation | CSSInterpolation[]

export type GetDefaultToken<ComponentToken extends Record<string, any> = Record<string, any>> = (
  token: TokenWithCommonCls<AliasToken>,
  info: StyleInfo<ComponentToken>,
) => ComponentToken

export interface UseComponentStyleOptions<ComponentToken extends Record<string, any> = Record<string, any>> {
  prefixCls?: string
  componentCls?: string
  hashId?: string
  rootCls?: string
  antCls?: string
  cssVarPrefix?: string
  componentToken?: Partial<ComponentToken>
  overrideComponentToken?: Partial<ComponentToken>
  styleKey?: string
  attachTo?: HTMLElement
}

export interface UseComponentStyleReturn<ComponentToken extends Record<string, any> = Record<string, any>> {
  cssVarCls: string
  hashId: string
  token: FullToken<ComponentToken>
  info: StyleInfo<ComponentToken>
  cssText: string
  registerCss: () => void
}

export function genComponentStyleHook<ComponentToken extends Record<string, any> = Record<string, any>>(
  component: string,
  styleFn: GenerateStyle<ComponentToken>,
  getDefaultToken?: GetDefaultToken<ComponentToken>,
) {
  return (
    prefixClsArg?: string,
    options?: UseComponentStyleOptions<ComponentToken>,
  ): UseComponentStyleReturn<ComponentToken> => {
    const {
      prefixCls: optionPrefixCls,
      componentCls: optionComponentCls,
      hashId: optionHashId,
      rootCls,
      antCls = '.ant',
      cssVarPrefix = DEFAULT_PREFIX,
      componentToken: componentTokenOverrides,
      overrideComponentToken,
      styleKey: optionStyleKey,
      attachTo,
    } = options || {}

    const normalizedName = normalizeComponentName(component)
    const mergedPrefixCls = optionPrefixCls ?? prefixClsArg ?? `ant-${normalizedName}`
    const componentCls = optionComponentCls ?? `.${mergedPrefixCls}`
    const cssVarBaseCls = `${mergedPrefixCls}-css-var`
    const cssVarHashCls = createCssVarHashCls(cssVarBaseCls, optionHashId)
    const cssVarCls = `${cssVarBaseCls} ${cssVarHashCls}`.trim()
    const hashId = cssVarHashCls

    const styleKey = optionStyleKey ?? `antdv-${component}-${mergedPrefixCls}-${cssVarPrefix}`

    const aliasCache = getAliasToken(cssVarPrefix)
    const aliasToken = {
      ...aliasCache.token,
      calc: aliasCache.calc,
      componentCls,
      prefixCls: mergedPrefixCls,
      antCls,
      hashId,
      cssVarPrefix,
      cssVarCls,
      cssVarBaseCls,
      cssVarHashCls,
    } as TokenWithCommonCls<AliasToken>

    if (rootCls)
      aliasToken.rootCls = rootCls

    const styleInfo: StyleInfo<ComponentToken> = {
      prefixCls: mergedPrefixCls,
      componentCls,
      hashId,
      cssVarCls,
      cssVarBaseCls,
      cssVarHashCls,
      rootCls,
      antCls,
      cssVarPrefix,
      styleKey,
      componentToken: {} as ComponentToken,
    }

    const defaultComponentToken = getDefaultToken
      ? getDefaultToken(aliasToken, styleInfo)
      : ({} as ComponentToken)

    const mergedComponentToken = {
      ...defaultComponentToken,
      ...componentTokenOverrides,
      ...overrideComponentToken,
    } as ComponentToken

    styleInfo.componentToken = mergedComponentToken

    const fullToken = Object.assign({}, aliasToken, mergedComponentToken) as FullToken<ComponentToken>

    const styleInterpolation = styleFn(fullToken, styleInfo)
    const cssText = serializeStyles(styleInterpolation)

    const registerCss = () => {
      if (!cssText)
        return
      ensureStyle(cssText, { key: styleKey, attachTo })
    }

    return {
      cssVarCls,
      hashId,
      token: fullToken,
      info: styleInfo,
      cssText,
      registerCss,
    }
  }
}

export function genStyleHooks<ComponentToken extends Record<string, any> = Record<string, any>>(
  component: string,
  styleFns: GenerateStyle<ComponentToken> | GenerateStyle<ComponentToken>[],
  getDefaultToken?: GetDefaultToken<ComponentToken>,
) {
  const generators = Array.isArray(styleFns) ? styleFns : [styleFns]
  return genComponentStyleHook<ComponentToken>(
    component,
    (token, info) => generators.map(generator => generator(token, info)),
    getDefaultToken,
  )
}

export function genSubStyleComponent<ComponentToken extends Record<string, any> = Record<string, any>>(
  component: string,
  styleFnOrSubComponent: GenerateStyle<ComponentToken> | string,
  maybeStyleFn?: GenerateStyle<ComponentToken>,
  getDefaultToken?: GetDefaultToken<ComponentToken>,
) {
  if (typeof styleFnOrSubComponent === 'string') {
    const subComponent = styleFnOrSubComponent
    const styleFn = maybeStyleFn ?? ((() => undefined) as GenerateStyle<ComponentToken>)
    return genComponentStyleHook<ComponentToken>(`${component}-${subComponent}`, styleFn, getDefaultToken)
  }

  return genComponentStyleHook<ComponentToken>(component, styleFnOrSubComponent, maybeStyleFn)
}

export type { PresetColorType } from './interface/presetColors'
export type { SeedToken } from './interface/seeds'
