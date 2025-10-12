import { describe, expect, it } from 'vitest'
import Cache, { pathKey } from '../src/Cache'

describe('cache', () => {
  describe('pathKey', () => {
    it('should join keys with separator', () => {
      expect(pathKey(['a', 'b', 'c'])).toBe('a%b%c')
    })

    it('should handle single key', () => {
      expect(pathKey(['single'])).toBe('single')
    })

    it('should handle empty array', () => {
      expect(pathKey([])).toBe('')
    })

    it('should handle number keys', () => {
      expect(pathKey([1, 2, 3])).toBe('1%2%3')
    })

    it('should handle mixed types', () => {
      expect(pathKey(['str', 123, 'end'])).toBe('str%123%end')
    })
  })

  describe('cache Entity', () => {
    it('should create cache with instance ID', () => {
      const cache = new Cache('test-id')
      expect(cache.instanceId).toBe('test-id')
    })

    it('should start with empty cache', () => {
      const cache = new Cache('test')
      expect(cache.cache.size).toBe(0)
      expect(cache.extracted.size).toBe(0)
    })

    describe('get/set operations', () => {
      it('should set and get value', () => {
        const cache = new Cache('test')
        cache.update(['key'], () => [1, { value: 'test' }])

        const result = cache.get(['key'])
        expect(result).toEqual([1, { value: 'test' }])
      })

      it('should return null for non-existent key', () => {
        const cache = new Cache('test')
        const result = cache.get(['non-existent'])
        expect(result).toBeNull()
      })

      it('should update existing value', () => {
        const cache = new Cache('test')
        cache.update(['key'], () => [1, 'first'])
        cache.update(['key'], ([times, value]: any) => [times + 1, value])

        const result = cache.get(['key'])
        expect(result).toEqual([2, 'first'])
      })

      it('should handle null from update function', () => {
        const cache = new Cache('test')
        cache.update(['key'], () => [1, 'value'])
        cache.update(['key'], () => null)

        const result = cache.get(['key'])
        expect(result).toBeNull()
      })
    })

    describe('opGet/opUpdate operations', () => {
      it('should opGet with path string', () => {
        const cache = new Cache('test')
        const pathStr = pathKey(['a', 'b'])
        cache.opUpdate(pathStr, () => [1, 'value'])

        const result = cache.opGet(pathStr)
        expect(result).toEqual([1, 'value'])
      })

      it('should opUpdate with path string', () => {
        const cache = new Cache('test')
        const pathStr = pathKey(['key'])

        cache.opUpdate(pathStr, () => [1, 'initial'])
        cache.opUpdate(pathStr, ([times]: any) => [times + 1, 'updated'])

        const result = cache.opGet(pathStr)
        expect(result).toEqual([2, 'updated'])
      })

      it('should delete on null return', () => {
        const cache = new Cache('test')
        const pathStr = pathKey(['key'])

        cache.opUpdate(pathStr, () => [1, 'value'])
        cache.opUpdate(pathStr, () => null)

        expect(cache.opGet(pathStr)).toBeNull()
        expect(cache.cache.has(pathStr)).toBe(false)
      })
    })

    describe('reference counting pattern', () => {
      it('should increment reference count', () => {
        const cache = new Cache('test')
        const key = ['component', 'style']

        // First instance
        cache.update(key, (prev) => {
          const [times = 0, value] = prev || []
          return [times + 1, value || { data: 'style' }]
        })

        let result = cache.get(key)
        expect(result![0]).toBe(1)

        // Second instance
        cache.update(key, ([times, value]: any) => [times + 1, value])

        result = cache.get(key)
        expect(result![0]).toBe(2)
      })

      it('should decrement reference count', () => {
        const cache = new Cache('test')
        const key = ['component', 'style']

        // Add two references
        cache.update(key, () => [2, { data: 'style' }])

        // Remove one reference
        cache.update(key, ([times, value]: any) => {
          const newCount = times - 1
          return newCount > 0 ? [newCount, value] : null
        })

        const result = cache.get(key)
        expect(result).toEqual([1, { data: 'style' }])
      })

      it('should delete when count reaches zero', () => {
        const cache = new Cache('test')
        const key = ['component', 'style']

        cache.update(key, () => [1, { data: 'style' }])
        cache.update(key, ([times, value]: any) => {
          const newCount = times - 1
          return newCount > 0 ? [newCount, value] : null
        })

        expect(cache.get(key)).toBeNull()
      })
    })

    describe('multiple keys', () => {
      it('should handle multiple independent keys', () => {
        const cache = new Cache('test')

        cache.update(['key1'], () => [1, 'value1'])
        cache.update(['key2'], () => [1, 'value2'])
        cache.update(['key3'], () => [1, 'value3'])

        expect(cache.get(['key1'])).toEqual([1, 'value1'])
        expect(cache.get(['key2'])).toEqual([1, 'value2'])
        expect(cache.get(['key3'])).toEqual([1, 'value3'])
        expect(cache.cache.size).toBe(3)
      })

      it('should differentiate similar keys', () => {
        const cache = new Cache('test')

        cache.update(['a', 'b'], () => [1, 'ab'])
        cache.update(['a', 'b', 'c'], () => [1, 'abc'])
        cache.update(['a'], () => [1, 'a'])

        expect(cache.get(['a', 'b'])).toEqual([1, 'ab'])
        expect(cache.get(['a', 'b', 'c'])).toEqual([1, 'abc'])
        expect(cache.get(['a'])).toEqual([1, 'a'])
      })
    })

    describe('extracted set', () => {
      it('should have independent extracted set', () => {
        const cache = new Cache('test')

        cache.extracted.add('style1')
        cache.extracted.add('style2')

        expect(cache.extracted.has('style1')).toBe(true)
        expect(cache.extracted.has('style2')).toBe(true)
        expect(cache.extracted.size).toBe(2)
      })

      it('should not affect cache operations', () => {
        const cache = new Cache('test')

        cache.extracted.add('extracted-key')
        cache.update(['cache-key'], () => [1, 'value'])

        expect(cache.get(['cache-key'])).toEqual([1, 'value'])
        expect(cache.extracted.has('extracted-key')).toBe(true)
      })
    })

    describe('complex value types', () => {
      it('should handle object values', () => {
        const cache = new Cache('test')
        const value = { nested: { deep: 'value' }, array: [1, 2, 3] }

        cache.update(['key'], () => [1, value])

        const result = cache.get(['key'])
        expect(result![1]).toEqual(value)
      })

      it('should handle array values', () => {
        const cache = new Cache('test')
        const value = [1, 'two', { three: 3 }]

        cache.update(['key'], () => [1, value])

        const result = cache.get(['key'])
        expect(result![1]).toEqual(value)
      })

      it('should handle function values', () => {
        const cache = new Cache('test')
        const fn = () => 'result'

        cache.update(['key'], () => [1, fn])

        const result = cache.get(['key'])
        expect(typeof result![1]).toBe('function')
        expect(result![1]()).toBe('result')
      })
    })

    describe('update function behavior', () => {
      it('should receive null for first update', () => {
        const cache = new Cache('test')
        let receivedValue: any

        cache.update(['key'], (prev) => {
          receivedValue = prev
          return [1, 'value']
        })

        expect(receivedValue).toBeUndefined()
      })

      it('should receive previous value for updates', () => {
        const cache = new Cache('test')
        cache.update(['key'], () => [1, 'first'])

        let receivedPrev: any
        cache.update(['key'], (prev) => {
          receivedPrev = prev
          return [2, 'second']
        })

        expect(receivedPrev).toEqual([1, 'first'])
      })

      it('should allow conditional updates', () => {
        const cache = new Cache('test')
        cache.update(['key'], () => [5, 'value'])

        cache.update(['key'], ([times, value]: any) => {
          if (times > 3) {
            return [times - 1, value]
          }
          return null
        })

        expect(cache.get(['key'])).toEqual([4, 'value'])
      })
    })

    describe('instance ID behavior', () => {
      it('should allow different caches with same keys', () => {
        const cache1 = new Cache('instance-1')
        const cache2 = new Cache('instance-2')

        cache1.update(['key'], () => [1, 'cache1-value'])
        cache2.update(['key'], () => [1, 'cache2-value'])

        expect(cache1.get(['key'])).toEqual([1, 'cache1-value'])
        expect(cache2.get(['key'])).toEqual([1, 'cache2-value'])
      })

      it('should not share cache between instances', () => {
        const cache1 = new Cache('instance-1')
        const cache2 = new Cache('instance-2')

        cache1.update(['shared-key'], () => [1, 'from-cache1'])

        expect(cache2.get(['shared-key'])).toBeNull()
      })
    })
  })
})
