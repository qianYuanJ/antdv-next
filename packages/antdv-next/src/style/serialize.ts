import type { CSSInterpolation, CSSObject } from './types'

const hyphenateRegex = /[A-Z]/g

const hyphenate = (property: string) => property.replace(hyphenateRegex, match => `-${match.toLowerCase()}`)

const normalizeValue = (value: string | number): string => (typeof value === 'number' ? `${value}` : value)

const isPlainObject = (value: unknown): value is Record<string, any> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const unwrapSpecialValue = (value: any): any => {
  if (value && typeof value === 'object') {
    if ('value' in value) {
      return unwrapSpecialValue(value.value)
    }
  }
  return value
}

const serializeStyleObject = (selector: string, style: CSSObject): string => {
  const declarations: string[] = []
  const nestedBlocks: string[] = []

  Object.keys(style).forEach((key) => {
    const rawValue = style[key as keyof CSSObject]
    if (rawValue === null || rawValue === undefined) {
      return
    }

    const value = unwrapSpecialValue(rawValue)

    if (Array.isArray(value)) {
      if (value.every(item => typeof item === 'string' || typeof item === 'number')) {
        const prop = hyphenate(key)
        declarations.push(`${prop}:${value.map(normalizeValue).join(' ')};`)
      } else {
        value.forEach((item) => {
          if (isPlainObject(item)) {
            nestedBlocks.push(serializeNestedBlock(selector, key, item as CSSObject))
          }
        })
      }
      return
    }

    if (isPlainObject(value)) {
      nestedBlocks.push(serializeNestedBlock(selector, key, value as CSSObject))
      return
    }

    const property = hyphenate(key)
    declarations.push(`${property}:${normalizeValue(value)};`)
  })

  const declarationBlock = declarations.length ? `${selector}{${declarations.join('')}}` : ''
  return `${declarationBlock}${nestedBlocks.join('')}`
}

const serializeNestedBlock = (selector: string, key: string, value: CSSObject): string => {
  if (key.startsWith('@')) {
    return `${key}{${serializeStyleObject(selector, value)}}`
  }

  const resolvedSelector = key.includes('&') ? key.replace(/&/g, selector) : `${selector} ${key}`.trim()
  return serializeStyleObject(resolvedSelector, value)
}

const serializeInterpolation = (styles: CSSInterpolation): string => {
  if (!styles) {
    return ''
  }

  if (Array.isArray(styles)) {
    return styles.map(serializeInterpolation).join('')
  }

  if (typeof styles === 'string') {
    return styles
  }

  if (typeof styles === 'number') {
    return `${styles}`
  }

  return Object.keys(styles).map(selector => serializeStyleObject(selector, styles[selector] as CSSObject)).join('')
}

export const serializeStyles = (...styles: CSSInterpolation[]): string =>
  styles.map(serializeInterpolation).join('')
