export type { AliasToken } from './alias'
export type { ComponentTokenMap } from './components'
export type { CalcFactory, CalcUtil, CSSUtil, TokenWithCommonCls } from './cssUtil'
export type {
  ColorMapToken,
  ColorNeutralMapToken,
  CommonMapToken,
  FontMapToken,
  HeightMapToken,
  MapToken,
  SizeMapToken,
  StyleMapToken,
} from './maps'
export { PresetColors } from './presetColors'
export type {
  ColorPalettes,
  LegacyColorPalettes,
  PresetColorKey,
  PresetColorType,
} from './presetColors'

export type { SeedToken } from './seeds'

export type TokenType = object
export type DerivativeFunc<
  DesignToken extends TokenType,
  DerivativeToken extends TokenType,
> = (
  designToken: DesignToken,
  derivativeToken?: DerivativeToken,
) => DerivativeToken
