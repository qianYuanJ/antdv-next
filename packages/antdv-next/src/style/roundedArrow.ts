import type { AliasToken, CSSUtil } from '../theme/interface'
import type { CSSObject } from './types'
import { calcValue, unit } from '../theme/utils/utils'

export interface ArrowToken {
  arrowShadowWidth: number
  arrowPath: string
  arrowPolygon: string
}

export function getArrowToken(token: AliasToken): ArrowToken {
  const { sizePopupArrow, borderRadiusXS, borderRadiusOuter } = token

  const unitWidth = sizePopupArrow / 2

  const ax = 0
  const ay = unitWidth
  const bx = (borderRadiusOuter * 1) / Math.sqrt(2)
  const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2))
  const cx = unitWidth - borderRadiusXS * (1 / Math.sqrt(2))
  const cy = borderRadiusOuter * (Math.sqrt(2) - 1) + borderRadiusXS * (1 / Math.sqrt(2))
  const dx = 2 * unitWidth - cx
  const dy = cy
  const ex = 2 * unitWidth - bx
  const ey = by
  const fx = 2 * unitWidth - ax
  const fy = ay

  const shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2)
  const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1)

  const arrowPolygon = `polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${
    2 * unitWidth - polygonOffset
  }px 100%, ${polygonOffset}px 100%)`
  const arrowPath = `path('M ${ax} ${ay} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${borderRadiusXS} ${borderRadiusXS} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${fx} ${fy} Z')`

  return {
    arrowShadowWidth: shadowWidth,
    arrowPath,
    arrowPolygon,
  }
}

export function genRoundedArrow<T extends AliasToken & CSSUtil & ArrowToken>(token: T, bgColor: string, boxShadow: string): CSSObject {
  const { sizePopupArrow, arrowPolygon, arrowPath, arrowShadowWidth, borderRadiusXS, calc } = token

  const halfArrow = calcValue(
    calc,
    sizePopupArrow,
    current => current.div(2).equal(),
    () => unit(sizePopupArrow / 2),
  )

  return {
    'pointerEvents': 'none',
    'width': sizePopupArrow,
    'height': sizePopupArrow,
    'overflow': 'hidden',

    '&::before': {
      position: 'absolute',
      bottom: 0,
      insetInlineStart: 0,
      width: sizePopupArrow,
      height: halfArrow,
      background: bgColor,
      clipPath: {
        _multi_value_: true,
        value: [arrowPolygon, arrowPath],
      },
      content: '""',
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      width: arrowShadowWidth,
      height: arrowShadowWidth,
      bottom: 0,
      insetInline: 0,
      margin: 'auto',
      borderRadius: {
        _skip_check_: true,
        value: `0 0 ${unit(borderRadiusXS)} 0`,
      },
      transform: 'translateY(50%) rotate(-135deg)',
      boxShadow,
      zIndex: 0,
      background: 'transparent',
    },
  }
}
