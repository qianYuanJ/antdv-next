export type CSSValue = string | number

export type CSSObject = Record<string, any>

export type CSSInterpolation
  = | CSSObject
    | CSSObject[]
    | CSSValue
    | CSSValue[]
    | boolean
    | null
    | undefined

export type Keyframes = Record<string, any>
