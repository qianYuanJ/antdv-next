import type { AliasToken, CSSUtil } from '../theme/interface'
import type { CSSInterpolation, CSSObject } from './types'
import { calcValue, unit } from '../theme/utils/utils'

interface CompactItemToken extends AliasToken, CSSUtil {
  componentCls: string
  [key: string]: any
}

interface CompactItemOptions {
  focus?: boolean
  borderElCls?: string
  focusElCls?: string
}

function compactItemBorder(
  token: CompactItemToken,
  parentCls: string,
  options: CompactItemOptions,
  prefixCls: string,
): CSSObject {
  const { focusElCls, focus, borderElCls } = options
  const childCombinator = borderElCls ? '> *' : ''
  const hoverEffects = ['hover', focus ? 'focus' : null, 'active']
    .filter(Boolean)
    .map(n => `&:${n} ${childCombinator}`)
    .join(',')

  const marginValue = calcValue(
    token.calc,
    token.lineWidth,
    calc => calc.mul(-1).equal(),
    () => `-${unit(token.lineWidth)}`,
  )

  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: marginValue,
    },

    [`&-item:not(${prefixCls}-status-success)`]: {
      zIndex: 2,
    },

    '&-item': {
      [hoverEffects]: {
        zIndex: 3,
      },

      ...(focusElCls
        ? {
            [`&${focusElCls}`]: {
              zIndex: 3,
            },
          }
        : {}),

      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0,
      },
    },
  }
}

function compactItemBorderRadius(
  prefixCls: string,
  parentCls: string,
  options: CompactItemOptions,
): CSSObject {
  const { borderElCls } = options
  const childCombinator = borderElCls ? `> ${borderElCls}` : ''

  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0,
    },

    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]:
        {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        },
    },

    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]:
        {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
    },
  }
}

export function genCompactItemStyle(
  token: CompactItemToken,
  options: CompactItemOptions = { focus: true },
): CSSInterpolation {
  const { componentCls } = token
  const compactCls = `${componentCls}-compact`

  return {
    [compactCls]: {
      ...compactItemBorder(token, compactCls, options, componentCls),
      ...compactItemBorderRadius(componentCls, compactCls, options),
    },
  }
}
