import type AbstractCalculator from '../utils/calc/calculator'

export interface CalcUtil {
  add: (num: number | string | CalcUtil) => CalcUtil
  sub: (num: number | string | CalcUtil) => CalcUtil
  mul: (num: number | string | CalcUtil) => CalcUtil
  div: (num: number | string | CalcUtil) => CalcUtil
  equal: (options?: { unit?: boolean }) => string
}

export type CalcFactory = (value: number | string) => AbstractCalculator

export interface CSSUtil {
  calc?: CalcFactory
}

export type TokenWithCommonCls<T> = T & CSSUtil & {
  componentCls: string
  antCls: string
  prefixCls?: string
  hashId?: string
  rootCls?: string
  [key: string]: any
}
