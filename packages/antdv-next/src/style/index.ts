import type { AliasToken } from '../theme/interface'
import type { CSSObject } from './types'
import { unit } from '../theme/utils/utils'

export const textEllipsis: CSSObject = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}

export function resetComponent(token: AliasToken, needInheritFontFamily = false): CSSObject {
  return {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    color: token.colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    listStyle: 'none',
    fontFamily: needInheritFontFamily ? 'inherit' : token.fontFamily,
  }
}

export function resetIcon(): CSSObject {
  return {
    'display': 'inline-flex',
    'alignItems': 'center',
    'color': 'inherit',
    'fontStyle': 'normal',
    'lineHeight': 0,
    'textAlign': 'center',
    'textTransform': 'none',
    'verticalAlign': '-0.125em',
    'textRendering': 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',

    '> *': {
      lineHeight: 1,
    },

    'svg': {
      display: 'inline-block',
    },
  }
}

export function clearFix(): CSSObject {
  return {
    '&::before': {
      display: 'table',
      content: '""',
    },

    '&::after': {
      display: 'table',
      clear: 'both',
      content: '""',
    },
  }
}

export function genLinkStyle(token: AliasToken): CSSObject {
  return {
    a: {
      'color': token.colorLink,
      'textDecoration': token.linkDecoration,
      'backgroundColor': 'transparent',
      'outline': 'none',
      'cursor': 'pointer',
      'transition': `color ${token.motionDurationSlow}`,
      '-webkit-text-decoration-skip': 'objects',

      '&:hover': {
        color: token.colorLinkHover,
      },

      '&:active': {
        color: token.colorLinkActive,
      },

      '&:active, &:hover': {
        textDecoration: token.linkHoverDecoration,
        outline: 0,
      },

      '&:focus': {
        textDecoration: token.linkFocusDecoration,
        outline: 0,
      },

      '&[disabled]': {
        color: token.colorTextDisabled,
        cursor: 'not-allowed',
      },
    },
  }
}

export function genCommonStyle(token: AliasToken, componentPrefixCls: string, rootCls?: string, resetFont?: boolean): CSSObject {
  const prefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`
  const rootPrefixSelector = rootCls ? `.${rootCls}` : prefixSelector

  const resetStyle: CSSObject = {
    'boxSizing': 'border-box',

    '&::before, &::after': {
      boxSizing: 'border-box',
    },
  }

  let resetFontStyle: CSSObject = {}

  if (resetFont !== false) {
    resetFontStyle = {
      fontFamily: token.fontFamily,
      fontSize: token.fontSize,
    }
  }

  return {
    [rootPrefixSelector]: {
      ...resetFontStyle,
      ...resetStyle,

      [prefixSelector]: resetStyle,
    },
  }
}

export function genFocusOutline(token: AliasToken, offset?: number): CSSObject {
  return {
    outline: `${unit(token.lineWidthFocus)} solid ${token.colorPrimaryBorder}`,
    outlineOffset: offset ?? 1,
    transition: 'outline-offset 0s, outline 0s',
  }
}

export function genFocusStyle(token: AliasToken, offset?: number): CSSObject {
  return {
    '&:focus-visible': genFocusOutline(token, offset),
  }
}

export function genIconStyle(iconPrefixCls: string): CSSObject {
  return {
    [`.${iconPrefixCls}`]: {
      ...resetIcon(),
      [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
        display: 'block',
      },
    },
  }
}

export function operationUnit(token: AliasToken): CSSObject {
  return {
    'color': token.colorLink,
    'textDecoration': token.linkDecoration,
    'outline': 'none',
    'cursor': 'pointer',
    'transition': `all ${token.motionDurationSlow}`,
    'border': 0,
    'padding': 0,
    'background': 'none',
    'userSelect': 'none',

    ...genFocusStyle(token),

    '&:hover': {
      color: token.colorLinkHover,
      textDecoration: token.linkHoverDecoration,
    },

    '&:focus': {
      color: token.colorLinkHover,
      textDecoration: token.linkFocusDecoration,
    },

    '&:active': {
      color: token.colorLinkActive,
      textDecoration: token.linkHoverDecoration,
    },
  }
}

export { genCompactItemStyle } from './compact-item'
export { genCompactItemVerticalStyle } from './compact-item-vertical'
export * from './motion'
export { getArrowOffsetToken, default as getArrowStyle, MAX_VERTICAL_CONTENT_RADIUS } from './placementArrow'
export type { ArrowOffsetToken } from './placementArrow'
export { genRoundedArrow, getArrowToken } from './roundedArrow'
export type { ArrowToken } from './roundedArrow'
