import type {
  ContainerType,
  Prepend,
} from '@v-c/util/dist/Dom/dynamicCSS'
import type { DerivativeFunc, MapToken, SeedToken } from '../interface'

import { updateCSS } from '@v-c/util/dist/Dom/dynamicCSS'
import defaultDerivative from '../themes/default'
import defaultSeedToken from '../themes/seed'

export const DEFAULT_PREFIX = 'ant'
export const DEFAULT_SELECTOR = ':root'
export const DEFAULT_STYLE_KEY = 'antdv-theme'

type BooleanConfig = Record<string, boolean | undefined>

export const DEFAULT_UNITLESS_KEYS: BooleanConfig = {
  lineHeight: true,
  lineHeightSM: true,
  lineHeightLG: true,
  lineHeightHeading1: true,
  lineHeightHeading2: true,
  lineHeightHeading3: true,
  lineHeightHeading4: true,
  lineHeightHeading5: true,
  opacityLoading: true,
  fontWeightStrong: true,
  zIndexPopupBase: true,
  zIndexBase: true,
  opacityImage: true,
}

export const DEFAULT_IGNORE_KEYS: BooleanConfig = {
  motionBase: true,
  motionUnit: true,
}

export const DEFAULT_PRESERVE_KEYS: BooleanConfig = {
  screenXS: true,
  screenXSMin: true,
  screenXSMax: true,
  screenSM: true,
  screenSMMin: true,
  screenSMMax: true,
  screenMD: true,
  screenMDMin: true,
  screenMDMax: true,
  screenLG: true,
  screenLGMin: true,
  screenLGMax: true,
  screenXL: true,
  screenXLMin: true,
  screenXLMax: true,
  screenXXL: true,
  screenXXLMin: true,
}

export function token2CSSVar(token: string, prefix = DEFAULT_PREFIX) {
  return `--${prefix ? `${prefix}-` : ''}${token}`
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2')
    .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
    .toLowerCase()
}

export function serializeCSSVars(cssVars: Record<string, string>, selector = DEFAULT_SELECTOR) {
  if (!Object.keys(cssVars).length)
    return ''
  const body = Object.entries(cssVars)
    .map(([key, value]) => `${key}:${value};`)
    .join('')
  return `${selector}{${body}}`
}

export type TokenWithCSSVar<T extends Record<string, any>> = {
  [K in keyof T]: string | T[K]
}

export interface TransformTokenConfig {
  prefix?: string
  ignore?: BooleanConfig
  unitless?: BooleanConfig
  preserve?: BooleanConfig
}

interface TransformResult<T extends Record<string, any>> {
  token: TokenWithCSSVar<T>
  cssVars: Record<string, string>
}

function pickFlag(key: string, config: BooleanConfig | undefined, defaults: BooleanConfig) {
  if (config && key in config)
    return Boolean(config[key])
  return Boolean(defaults[key])
}

export function transformToken<T extends Record<string, any>>(token: T, config: TransformTokenConfig = {}): TransformResult<T> {
  const cssVars: Record<string, string> = {}
  const result = {} as TokenWithCSSVar<T>

  Object.entries(token).forEach(([rawKey, rawValue]) => {
    const key = rawKey as keyof T
    const value = rawValue as T[keyof T]

    if (pickFlag(rawKey, config.preserve, DEFAULT_PRESERVE_KEYS)) {
      result[key] = value
      return
    }

    if (pickFlag(rawKey, config.ignore, DEFAULT_IGNORE_KEYS)) {
      return
    }

    if (typeof value === 'string' || typeof value === 'number') {
      const cssVarName = token2CSSVar(rawKey, config.prefix ?? DEFAULT_PREFIX)
      const needUnit = typeof value === 'number' && !pickFlag(rawKey, config.unitless, DEFAULT_UNITLESS_KEYS)

      cssVars[cssVarName] = needUnit ? `${value}px` : String(value)
      result[key] = `var(${cssVarName})` as TokenWithCSSVar<T>[keyof T]
      return
    }

    result[key] = value
  })

  return { token: result, cssVars }
}

export interface UpdateThemeCssVarsOptions {
  seed?: Partial<SeedToken>
  overrides?: Partial<MapToken>
  derivatives?: DerivativeFunc<SeedToken, MapToken> | DerivativeFunc<SeedToken, MapToken>[]
  prefix?: string
  selector?: string
  key?: string
  ignore?: BooleanConfig
  unitless?: BooleanConfig
  preserve?: BooleanConfig
  attachTo?: ContainerType
  csp?: {
    nonce?: string
  }
  prepend?: Prepend
  priority?: number
  mark?: string
}

export interface UpdateThemeCssVarsResult {
  token: TokenWithCSSVar<MapToken>
  cssVars: Record<string, string>
  cssText: string
  originalToken: MapToken
  styleKey: string
  styleElement: HTMLStyleElement | null
}

function normalizeDerivatives(derivatives?: UpdateThemeCssVarsOptions['derivatives']) {
  if (!derivatives)
    return [defaultDerivative]
  return Array.isArray(derivatives) ? derivatives : [derivatives]
}

function mergeSeedToken(seed?: Partial<SeedToken>): SeedToken {
  return {
    ...defaultSeedToken,
    ...seed,
  }
}

function runDerivatives(seed: SeedToken, derivatives: DerivativeFunc<SeedToken, MapToken>[]): MapToken {
  let mapToken: MapToken | undefined
  derivatives.forEach((derivative) => {
    mapToken = derivative(seed, mapToken)
  })
  return mapToken as MapToken
}

export function updateThemeCssVars(options: UpdateThemeCssVarsOptions = {}): UpdateThemeCssVarsResult {
  const {
    seed,
    overrides,
    prefix,
    selector = DEFAULT_SELECTOR,
    key = DEFAULT_STYLE_KEY,
    ignore,
    unitless,
    preserve,
    attachTo,
    csp,
    prepend,
    priority,
    mark,
  } = options

  const mergedSeed = mergeSeedToken(seed)
  const derivatives = normalizeDerivatives(options.derivatives)
  let mapToken = runDerivatives(mergedSeed, derivatives)

  if (overrides)
    mapToken = { ...mapToken, ...overrides }

  const { token, cssVars } = transformToken(mapToken, {
    prefix,
    ignore,
    unitless,
    preserve,
  })
  const cssText = serializeCSSVars(cssVars, selector)

  const styleElement = updateCSS(cssText, key, {
    attachTo,
    csp,
    prepend,
    priority,
    mark: mark ?? key,
  }) as HTMLStyleElement | null

  return {
    token,
    cssVars,
    cssText,
    originalToken: mapToken,
    styleKey: key,
    styleElement,
  }
}
