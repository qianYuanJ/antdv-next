import type { AliasToken, CSSUtil } from '../theme/interface'
import type { CSSInterpolation, CSSObject } from './types'
import { calcValue, unit } from '../theme/utils/utils'

interface CompactVerticalToken extends AliasToken, CSSUtil {
  componentCls: string
  [key: string]: any
}

function compactItemVerticalBorder(
  token: CompactVerticalToken,
  parentCls: string,
  prefixCls: string,
): CSSObject {
  const marginValue = calcValue(
    token.calc,
    token.lineWidth,
    calc => calc.mul(-1).equal(),
    () => `-${unit(token.lineWidth)}`,
  )

  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginBottom: marginValue,
    },

    [`&-item:not(${prefixCls}-status-success)`]: {
      zIndex: 2,
    },

    '&-item': {
      '&:hover,&:focus,&:active': {
        zIndex: 3,
      },

      '&[disabled]': {
        zIndex: 0,
      },
    },
  }
}

function compactItemBorderVerticalRadius(prefixCls: string, parentCls: string): CSSObject {
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
      borderRadius: 0,
    },

    [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0,
      },
    },

    [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0,
      },
    },
  }
}

export function genCompactItemVerticalStyle(
  token: CompactVerticalToken,
): CSSInterpolation {
  const compactCls = `${token.componentCls}-compact-vertical`

  return {
    [compactCls]: {
      ...compactItemVerticalBorder(token, compactCls, token.componentCls),
      ...compactItemBorderVerticalRadius(token.componentCls, compactCls),
    },
  }
}
