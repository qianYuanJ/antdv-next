import type Theme from '../theme/Theme'
import type { ExtractStyle } from './useGlobalCache'
import hash from '@emotion/hash'
import { updateCSS } from '@v-c/util/dist/Dom/dynamicCSS'
import { computed, unref } from 'vue'
import { ATTR_MARK, ATTR_TOKEN, CSS_IN_JS_INSTANCE, useStyleContext } from '../StyleContext'
import {
  flattenToken,
  memoResult,
  token2key,
  toStyleStr,
} from '../util'
import { transformToken } from '../util/css-variables'
import { useGlobalCache } from './useGlobalCache'

const EMPTY_OVERRIDE = {}

// @ts-expect-error fix this
const hashPrefix = process.env.NODE_ENV !== 'production'
  ? 'css-dev-only-do-not-override'
  : 'css'

export interface Option<DerivativeToken, DesignToken> {
  salt?: string
  override?: object
  formatToken?: (mergedToken: any) => DerivativeToken
  getComputedToken?: (
    origin: DesignToken,
    override: object,
    theme: Theme<any, any>,
  ) => DerivativeToken
  cssVar?: {
    prefix?: string
    unitless?: Record<string, boolean>
    ignore?: Record<string, boolean>
    preserve?: Record<string, boolean>
    key?: string
  }
}

const tokenKeys = new Map<string, number>()

function recordCleanToken(tokenKey: string) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1)
}

function removeStyleTags(key: string, instanceId: string) {
  if (typeof document !== 'undefined') {
    const styles = document.querySelectorAll(`style[${ATTR_TOKEN}="${key}"]`)
    styles.forEach((style) => {
      if ((style as any)[CSS_IN_JS_INSTANCE] === instanceId) {
        style.parentNode?.removeChild(style)
      }
    })
  }
}

const TOKEN_THRESHOLD = 0

function cleanTokenStyle(tokenKey: string, instanceId: string) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1)

  const cleanableKeyList = new Set<string>()
  tokenKeys.forEach((value, key) => {
    if (value <= 0) {
      cleanableKeyList.add(key)
    }
  })

  if (tokenKeys.size - cleanableKeyList.size > TOKEN_THRESHOLD) {
    cleanableKeyList.forEach((key) => {
      removeStyleTags(key, instanceId)
      tokenKeys.delete(key)
    })
  }
}

export function getComputedToken<
  DerivativeToken = object,
  DesignToken = DerivativeToken,
>(originToken: DesignToken, overrideToken: object, theme: Theme<any, any>, format?: (token: DesignToken) => DerivativeToken) {
  const derivativeToken = theme.getDerivativeToken(originToken)

  let mergedDerivativeToken = {
    ...derivativeToken,
    ...overrideToken,
  }

  if (format) {
    mergedDerivativeToken = format(mergedDerivativeToken)
  }

  return mergedDerivativeToken
}

export const TOKEN_PREFIX = 'token'

type TokenCacheValue<DerivativeToken> = [
  token: DerivativeToken & { _tokenKey: string, _themeKey: string },
  hashId: string,
  realToken: DerivativeToken & { _tokenKey: string },
  cssVarStr: string,
  cssVarKey: string,
]

export default function useCacheToken<
  DerivativeToken = Record<string, any>,
  DesignToken = DerivativeToken,
>(
  theme: Theme<any, any>,
  tokens: (Partial<DesignToken> | (() => Partial<DesignToken>))[],
  option: Option<DerivativeToken, DesignToken> = {},
) {
  const styleContext = useStyleContext()

  const salt = option.salt ?? ''
  const override = option.override ? unref(option.override) : EMPTY_OVERRIDE
  const formatToken = option.formatToken
  const compute = option.getComputedToken
  const cssVar = option.cssVar ? unref(option.cssVar) : undefined

  const resolvedTokens = computed(() => tokens.map(token => (typeof token === 'function' ? token() : unref(token))))

  const mergedToken = computed(() => memoResult(
    () => Object.assign({}, ...resolvedTokens.value),
    resolvedTokens.value,
  ))

  const tokenStr = computed(() => flattenToken(mergedToken.value))
  const overrideTokenStr = computed(() => flattenToken(override))
  const cssVarStr = computed(() => (cssVar ? flattenToken(cssVar) : ''))

  const cacheValue = useGlobalCache<TokenCacheValue<DerivativeToken>>(
    computed(() => TOKEN_PREFIX),
    computed(() => [salt, theme.id, tokenStr.value, overrideTokenStr.value, cssVarStr.value]),
    () => {
      let mergedDerivativeToken = compute
        ? compute(mergedToken.value as DesignToken, override, theme)
        : getComputedToken(mergedToken.value as DesignToken, override, theme, formatToken)

      const actualToken = { ...mergedDerivativeToken }
      let cssVarsStr = ''

      if (cssVar) {
        [mergedDerivativeToken, cssVarsStr] = transformToken(
          mergedDerivativeToken,
          cssVar.key!,
          {
            prefix: cssVar.prefix,
            ignore: cssVar.ignore,
            unitless: cssVar.unitless,
            preserve: cssVar.preserve,
          },
        )
      }

      const tokenKey = token2key(mergedDerivativeToken, salt)
      ;(mergedDerivativeToken as any)._tokenKey = tokenKey
      ;(actualToken as any)._tokenKey = token2key(actualToken, salt)

      const themeKey = cssVar?.key ?? tokenKey
      ;(mergedDerivativeToken as any)._themeKey = themeKey
      recordCleanToken(themeKey)

      const hashId = `${hashPrefix}-${hash(tokenKey)}`
      ;(mergedDerivativeToken as any)._hashId = hashId

      return [
        mergedDerivativeToken as TokenCacheValue<DerivativeToken>[0],
        hashId,
        actualToken as TokenCacheValue<DerivativeToken>[2],
        cssVarsStr,
        cssVar?.key || '',
      ]
    },
    (cache) => {
      cleanTokenStyle(cache[0]._themeKey, styleContext.value.cache.instanceId)
    },
    ([token, , , cssVarsStr]) => {
      if (cssVar && cssVarsStr) {
        const style = updateCSS(
          cssVarsStr,
          hash(`css-variables-${token._themeKey}`),
          {
            mark: ATTR_MARK,
            prepend: 'queue',
            attachTo: styleContext.value.container,
            priority: -999,
          },
        )

        ;(style as any)[CSS_IN_JS_INSTANCE] = styleContext.value.cache.instanceId
        style.setAttribute(ATTR_TOKEN, token._themeKey)
      }
    },
  )

  return cacheValue
}

export const extract: ExtractStyle<TokenCacheValue<any>> = (
  cache,
  _effectStyles,
  options,
) => {
  const [, , realToken, styleStr, cssVarKey] = cache
  const { plain } = options || {}

  if (!styleStr) {
    return null
  }

  const styleId = realToken._tokenKey
  const order = -999

  const sharedAttrs = {
    'data-rc-order': 'prependQueue',
    'data-rc-priority': `${order}`,
  }

  const styleText = toStyleStr(
    styleStr,
    cssVarKey,
    styleId,
    sharedAttrs,
    plain,
  )

  return [order, styleId, styleText]
}
