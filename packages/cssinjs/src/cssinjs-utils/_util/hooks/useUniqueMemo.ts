const BEAT_LIMIT = 1000 * 60 * 10

class ArrayKeyMap<T> {
  private map = new Map<string, T>()
  private objectIDMap = new WeakMap<object, number>()
  private lastAccessBeat = new Map<string, number>()
  private nextID = 0
  private accessBeat = 0

  set(keys: unknown[], value: T) {
    this.clear()
    const compositeKey = this.getCompositeKey(keys)
    this.map.set(compositeKey, value)
    this.lastAccessBeat.set(compositeKey, Date.now())
  }

  get(keys: unknown[]) {
    const compositeKey = this.getCompositeKey(keys)
    const cache = this.map.get(compositeKey)
    if (cache !== undefined) {
      this.lastAccessBeat.set(compositeKey, Date.now())
    }
    this.accessBeat += 1
    return cache
  }

  private getCompositeKey(keys: unknown[]) {
    return keys
      .map((key) => {
        if (key && typeof key === 'object') {
          return `obj_${this.getObjectID(key as object)}`
        }
        return `${typeof key}_${String(key)}`
      })
      .join('|')
  }

  private getObjectID(obj: object) {
    if (this.objectIDMap.has(obj)) {
      return this.objectIDMap.get(obj) as number
    }
    const id = this.nextID
    this.objectIDMap.set(obj, id)
    this.nextID += 1
    return id
  }

  private clear() {
    if (this.accessBeat > 10000) {
      const now = Date.now()
      this.lastAccessBeat.forEach((beat, key) => {
        if (now - beat > BEAT_LIMIT) {
          this.map.delete(key)
          this.lastAccessBeat.delete(key)
        }
      })
      this.accessBeat = 0
    }
  }
}

const uniqueMap = new ArrayKeyMap<unknown>()

/**
 * Shared memoization helper across component instances.
 */
function useUniqueMemo<T>(memoFn: () => T, deps: unknown[]): T {
  const cachedValue = uniqueMap.get(deps)
  if (cachedValue !== undefined) {
    return cachedValue as T
  }
  const newValue = memoFn()
  uniqueMap.set(deps, newValue)
  return newValue
}

export default useUniqueMemo
