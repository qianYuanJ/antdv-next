import type { PropType, VNodeChild } from 'vue'
import type { CSSInterpolation, CSSObject, LayerConfig } from '../../hooks/useStyleRegister'
import type { TokenType } from '../../theme'
import type { UseCSP } from '../hooks/useCSP'
import type { UsePrefix } from '../hooks/usePrefix'
import type { UseToken } from '../hooks/useToken'
import type {
  ComponentTokenKey,
  GlobalTokenWithComponent,
  TokenMap,
  TokenMapKey,
} from '../interface'
import { computed, defineComponent, Fragment, h } from 'vue'
import useCSSVarRegister from '../../hooks/useCSSVarRegister'
import useStyleRegister from '../../hooks/useStyleRegister'
import genCalc from '../../theme/calc'
import { token2CSSVar } from '../../util'

import useUniqueMemo from '../_util/hooks/useUniqueMemo'
import useDefaultCSP from '../hooks/useCSP'
import getComponentToken from './getComponentToken'
import getCompVarPrefix from './getCompVarPrefix'
import getDefaultComponentToken from './getDefaultComponentToken'
import genMaxMin from './maxmin'
import statisticToken, { merge as mergeToken } from './statistic'

export interface StyleInfo {
  hashId: string
  prefixCls: string
  rootPrefixCls: string
  iconPrefixCls: string
}

export interface CSSUtil {
  calc: (value: any) => any
  max: (...values: (number | string)[]) => number | string
  min: (...values: (number | string)[]) => number | string
}

export type TokenWithCommonCls<T> = T & {
  componentCls: string
  prefixCls: string
  iconCls: string
  antCls: string
} & CSSUtil

export type FullToken<
  CompTokenMap extends TokenMap,
  AliasToken extends TokenType,
  C extends TokenMapKey<CompTokenMap>,
> = TokenWithCommonCls<GlobalTokenWithComponent<CompTokenMap, AliasToken, C>>

export type GenStyleFn<
  CompTokenMap extends TokenMap,
  AliasToken extends TokenType,
  C extends TokenMapKey<CompTokenMap>,
> = (token: FullToken<CompTokenMap, AliasToken, C>, info: StyleInfo) => CSSInterpolation

export type GetDefaultTokenFn<
  CompTokenMap extends TokenMap,
  AliasToken extends TokenType,
  C extends TokenMapKey<CompTokenMap>,
> = (token: AliasToken & Partial<CompTokenMap[C]>) => CompTokenMap[C]

export type GetDefaultToken<
  CompTokenMap extends TokenMap,
  AliasToken extends TokenType,
  C extends TokenMapKey<CompTokenMap>,
> = null | CompTokenMap[C] | GetDefaultTokenFn<CompTokenMap, AliasToken, C>

export interface SubStyleComponentProps {
  prefixCls: string
  rootCls?: string
}

export interface CSSVarRegisterProps {
  rootCls: string
  component: string
  cssVar: {
    prefix?: string
    key?: string
  }
}

interface GetResetStylesConfig {
  prefix: ReturnType<UsePrefix>
  csp: ReturnType<UseCSP>
}

export type GetResetStyles<AliasToken extends TokenType> = (
  token: AliasToken,
  config?: GetResetStylesConfig,
) => CSSInterpolation

export type GetCompUnitless<CompTokenMap extends TokenMap, AliasToken extends TokenType> = <
  C extends TokenMapKey<CompTokenMap>,
>(component: C | [C, string]
) => Partial<Record<ComponentTokenKey<CompTokenMap, AliasToken, C>, boolean>>

// type UseTokenResult<
//   CompTokenMap extends TokenMap,
//   AliasToken extends TokenType,
//   DesignToken extends TokenType,
// > = UseTokenReturn<CompTokenMap, AliasToken, DesignToken>

function genStyleUtils<
  CompTokenMap extends TokenMap,
  AliasToken extends TokenType,
  DesignToken extends TokenType,
>(config: {
  usePrefix: UsePrefix
  useToken: UseToken<CompTokenMap, DesignToken, AliasToken>
  useCSP?: UseCSP
  getResetStyles?: GetResetStyles<AliasToken>
  getCommonStyle?: (
    token: AliasToken,
    componentPrefixCls: string,
    rootCls?: string,
    resetFont?: boolean,
  ) => CSSObject
  getCompUnitless?: GetCompUnitless<CompTokenMap, AliasToken>
  layer?: LayerConfig
}) {
  const {
    usePrefix,
    useToken,
    getResetStyles,
    getCommonStyle,
    // getCompUnitless,
    useCSP = useDefaultCSP,
  } = config

  function genCSSVarRegister<C extends TokenMapKey<CompTokenMap>>(
    component: C,
    getDefaultToken: GetDefaultToken<CompTokenMap, AliasToken, C> | undefined,
    options: {
      unitless?: Partial<Record<ComponentTokenKey<CompTokenMap, AliasToken, C>, boolean>>
      ignore?: Partial<Record<keyof AliasToken, boolean>>
      deprecatedTokens?: [
        ComponentTokenKey<CompTokenMap, AliasToken, C>,
        ComponentTokenKey<CompTokenMap, AliasToken, C>,
      ][]
      injectStyle?: boolean
      prefixToken: (key: string) => string
    },
  ) {
    const { unitless: compUnitless, injectStyle = true, prefixToken, ignore } = options

    const CSSVarRegister = defineComponent({
      name: `CSSVarRegister_${String(component)}`,
      props: {
        rootCls: {
          type: String,
          required: true,
        },
        cssVar: {
          type: Object as PropType<CSSVarRegisterProps['cssVar']>,
          default: () => ({}),
        },
      },
      setup(props) {
        if (!injectStyle || !props.cssVar?.key) {
          return () => null
        }

        const tokenData = useToken()
        const realToken = tokenData.realToken ?? tokenData.token

        const registerConfig = computed(() => ({
          path: [component as string],
          prefix: props.cssVar?.prefix,
          key: props.cssVar?.key ?? '',
          unitless: compUnitless,
          ignore,
          token: realToken,
          scope: props.rootCls,
        }))

        useCSSVarRegister(registerConfig as any, () => {
          const defaultToken = getDefaultComponentToken<CompTokenMap, AliasToken, C>(
            component,
            realToken,
            getDefaultToken as any,
          )

          const componentToken = getComponentToken<CompTokenMap, AliasToken, C>(
            component,
            realToken,
            defaultToken as any,
            { deprecatedTokens: options.deprecatedTokens },
          )

          Object.keys(defaultToken).forEach((key) => {
            componentToken[prefixToken(key)] = componentToken[key]
            delete componentToken[key]
          })

          return componentToken
        })

        return () => null
      },
    })

    const useCSSVar = (rootCls: string) => {
      const tokenData = useToken()
      const cssVar = tokenData.cssVar

      const wrapNode = (node: VNodeChild): VNodeChild => {
        if (!injectStyle || !cssVar?.key) {
          return node
        }

        return h(Fragment, null, [
          h(CSSVarRegister, { rootCls, cssVar, component: component as string } as any),
          node,
        ])
      }

      return [wrapNode, cssVar?.key] as const
    }

    return useCSSVar
  }

  function genComponentStyleHook<C extends TokenMapKey<CompTokenMap>>(
    componentName: C | [C, string],
    styleFn: GenStyleFn<CompTokenMap, AliasToken, C>,
    getDefaultToken?: GetDefaultToken<CompTokenMap, AliasToken, C>,
    options: {
      resetStyle?: boolean
      resetFont?: boolean
      deprecatedTokens?: [
        ComponentTokenKey<CompTokenMap, AliasToken, C>,
        ComponentTokenKey<CompTokenMap, AliasToken, C>,
      ][]
      clientOnly?: boolean
      order?: number
      injectStyle?: boolean
      unitless?: Partial<Record<ComponentTokenKey<CompTokenMap, AliasToken, C>, boolean>>
      ignore?: Partial<Record<keyof AliasToken, boolean>>
    } = {},
  ) {
    const cells = (Array.isArray(componentName) ? componentName : [componentName, componentName]) as [C, string]
    const [component, componentAlias] = cells
    const concatComponent = cells.join('-')

    const mergedLayer = config.layer || { name: 'antd' }

    return (prefixCls: string, rootCls: string = prefixCls) => {
      const tokenData = useToken()
      const {
        theme,
        token,
        realToken = token,
        hashId = '',
        cssVar,
      } = tokenData

      const { rootPrefixCls, iconPrefixCls } = usePrefix()
      const csp = useCSP()

      const type: 'css' | 'js' = cssVar ? 'css' : 'js'

      const calc = useUniqueMemo(() => {
        const unitlessCssVar = new Set<string>()
        if (cssVar) {
          const unitlessMap = options.unitless || {}
          Object.keys(unitlessMap).forEach((key) => {
            unitlessCssVar.add(token2CSSVar(key, cssVar.prefix))
            unitlessCssVar.add(token2CSSVar(key, getCompVarPrefix(componentAlias, cssVar.prefix)))
          })
        }

        return genCalc(type, unitlessCssVar)
      }, [type, componentAlias, cssVar?.prefix])

      const { max, min } = genMaxMin(type)

      if (typeof getResetStyles === 'function') {
        useStyleRegister(
          computed(() => ({
            theme,
            token,
            hashId,
            nonce: csp?.nonce,
            clientOnly: false,
            layer: mergedLayer,
            order: options.order ?? -999,
            path: ['Shared', rootPrefixCls],
          } as any)),
          () => getResetStyles(token, { prefix: { rootPrefixCls, iconPrefixCls }, csp }),
        )
      }

      const wrapSSR = useStyleRegister(
        computed(() => ({
          theme,
          token,
          hashId,
          nonce: csp?.nonce,
          clientOnly: options.clientOnly,
          layer: mergedLayer,
          order: options.order ?? -999,
          path: [concatComponent, prefixCls, iconPrefixCls],
        } as any)),
        () => {
          if (options.injectStyle === false) {
            return []
          }

          const { token: proxyToken, flush } = statisticToken(token)

          const defaultComponentToken = getDefaultComponentToken<CompTokenMap, AliasToken, C>(
            component,
            realToken,
            getDefaultToken as any,
          ) as Record<string, any>

          const componentToken = getComponentToken<CompTokenMap, AliasToken, C>(
            component,
            realToken,
            defaultComponentToken as any,
            { deprecatedTokens: options.deprecatedTokens },
          )

          if (cssVar && defaultComponentToken && typeof defaultComponentToken === 'object') {
            Object.keys(defaultComponentToken).forEach((key) => {
              defaultComponentToken[key] = `var(${token2CSSVar(
                key,
                getCompVarPrefix(componentAlias, cssVar.prefix),
              )})`
            })
          }

          const mergedToken = mergeToken<any>(
            proxyToken,
            {
              componentCls: `.${prefixCls}`,
              prefixCls,
              iconCls: `.${iconPrefixCls}`,
              antCls: `.${rootPrefixCls}`,
              calc,
              max,
              min,
            },
            cssVar ? defaultComponentToken : componentToken,
          )

          const styleInterpolation = styleFn(mergedToken as FullToken<CompTokenMap, AliasToken, C>, {
            hashId,
            prefixCls,
            rootPrefixCls,
            iconPrefixCls,
          })

          flush(componentAlias, componentToken)

          const commonStyle
            = typeof getCommonStyle === 'function'
              ? getCommonStyle(mergedToken, prefixCls, rootCls, options.resetFont)
              : null

          return [options.resetStyle === false ? null : commonStyle, styleInterpolation].filter(Boolean)
        },
      )

      return [wrapSSR, hashId] as const
    }
  }

  function genStyleHooks<C extends TokenMapKey<CompTokenMap>>(
    component: C | [C, string],
    styleFn: GenStyleFn<CompTokenMap, AliasToken, C> | GenStyleFn<CompTokenMap, AliasToken, C>[],
    getDefaultToken?: GetDefaultToken<CompTokenMap, AliasToken, C>,
    options?: Parameters<typeof genComponentStyleHook<C>>[3],
  ) {
    const styleFns = Array.isArray(styleFn) ? styleFn : [styleFn]

    const useStyle = genComponentStyleHook<C>(
      component,
      (token, info) => styleFns.map(fn => fn(token, info)),
      getDefaultToken,
      options,
    )

    const useCSSVar = genCSSVarRegister<C>(
      Array.isArray(component) ? component[0] : component,
      getDefaultToken,
      {
        unitless: options?.unitless,
        ignore: options?.ignore,
        deprecatedTokens: options?.deprecatedTokens,
        injectStyle: options?.injectStyle,
        prefixToken: (key: string) => {
          const componentName = Array.isArray(component) ? component[0] : component
          return `${String(componentName)}${key.slice(0, 1).toUpperCase()}${key.slice(1)}`
        },
      },
    )

    return (prefixCls: string, rootCls: string = prefixCls) => {
      const [wrapSSR, hashId] = useStyle(prefixCls, rootCls)
      const [wrapCSSVar, cssVarCls] = useCSSVar(rootCls)

      const wrapAll = (node: VNodeChild) => wrapCSSVar(wrapSSR(node))

      return [wrapAll, hashId, cssVarCls] as const
    }
  }

  function genSubStyleComponent<C extends TokenMapKey<CompTokenMap>>(
    componentName: C | [C, string],
    styleFn: GenStyleFn<CompTokenMap, AliasToken, C>,
    getDefaultToken?: GetDefaultToken<CompTokenMap, AliasToken, C>,
    options?: Parameters<typeof genComponentStyleHook<C>>[3],
  ) {
    const useStyle = genComponentStyleHook(componentName, styleFn, getDefaultToken, {
      resetStyle: false,
      order: -998,
      ...options,
    })

    return defineComponent({
      name: `SubStyle_${String(Array.isArray(componentName) ? componentName.join('.') : componentName)}`,
      props: {
        prefixCls: {
          type: String,
          required: true,
        },
        rootCls: {
          type: String,
          default: undefined,
        },
      },
      setup(props) {
        useStyle(props.prefixCls, props.rootCls ?? props.prefixCls)
        return () => null
      },
    })
  }

  return { genStyleHooks, genSubStyleComponent, genComponentStyleHook }
}

export default genStyleUtils
