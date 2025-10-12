import type { AliasToken, TokenWithCommonCls } from '../../theme/interface'

function genCollapseMotion(token: TokenWithCommonCls<AliasToken>) {
  return {
    [token.componentCls]: {
      [`${token.antCls}-motion-collapse-legacy`]: {
        'overflow': 'hidden',

        '&-active': {
          transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`,
        },
      },

      [`${token.antCls}-motion-collapse`]: {
        overflow: 'hidden',
        transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`,
      },
    },
  }
}

export default genCollapseMotion
