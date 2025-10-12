import type { CalcFactory } from '../interface'

export function unit(num: number | string): string {
  return typeof num === 'number' ? `${num}px` : num
}

export const hasCalc = (factory?: CalcFactory): factory is CalcFactory => typeof factory === 'function'

export function calcValue(
  calcFactory: CalcFactory | undefined,
  value: number | string,
  runner: (calc: ReturnType<CalcFactory>) => string | number,
  fallback: () => string,
): string {
  if (hasCalc(calcFactory)) {
    try {
      const calc = calcFactory(value)
      const result = runner(calc)
      return typeof result === 'number' ? `${result}px` : result
    }
    catch {
      // ignore and fallback
    }
  }

  return fallback()
}
