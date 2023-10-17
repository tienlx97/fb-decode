import { ErrorPubSub } from '@negiganaito/error'
import { CircularBuffer } from './circular-buffer'

export class IntervalTrackingBoundedBuffer<T> {
  private $4: number
  private $1: CircularBuffer<T>
  private $2: {
    id: number
    startIdx: number
    hasOverflown: () => boolean
    getOverflowSize: () => number
    close: () => T[]
  }[]
  private $3: number
  private $5: number
  private $6: number

  constructor(size?: number) {
    this.$6 = 0
    if (size != null) {
      if (size <= 0) {
        throw new Error('Size for a buffer must be greater than zero.')
      }
    } else {
      size = 5000 // Default size
    }
    this.$4 = size
    this.$1 = new CircularBuffer<T>(size)
    this.$1.onEvict(() => {
      this.$6++
    })
    this.$2 = []
    this.$3 = 1
    this.$5 = 0
  }

  open() {
    const b = this.$3++
    let c = false
    let d: number | null = null
    const e = this.$5
    const f = {
      id: b,
      startIdx: e,
      hasOverflown: () => {
        return f.getOverflowSize() > 0
      },
      getOverflowSize: () => {
        return d != null ? d : Math.max(this.$6 - e, 0)
      },
      close: () => {
        if (c) {
          return []
        } else {
          c = true
          d = this.$6 - e
          return this.$7(b)
        }
      },
    }
    this.$2.push(f)
    return f
  }

  pushElement(a: T) {
    if (this.$2.length > 0) {
      this.$1.write(a)
      this.$5++
    }
    return this
  }

  isActive() {
    return this.$2.length > 0
  }

  private $8(a: number) {
    return Math.max(a - this.$6, 0)
  }

  private $7(a: number) {
    let b: number | null = null
    let d: number | null = null
    let e: number | null = null
    let f: number | null = null
    for (let g = 0; g < this.$2.length; g++) {
      const i = this.$2[g]
      const j = i.startIdx
      const id = i.id
      if (id === a) {
        e = g
        f = j
      } else if (d == null || j < d) {
        d = j
      }
      if (b == null || j < b) {
        b = j
      }
    }
    if (e == null || b == null || f == null) {
      // Handle the error case.
      ErrorPubSub.reportError(
        new Error('messed up state inside IntervalTrackingBoundedBuffer'),
      )
      return []
    }

    this.$2.splice(e, 1)
    const i = this.$8(f)
    const j = this.$1.read().slice(i)
    const g = this.$8(d == null ? this.$5 : d) - this.$8(b)
    if (g > 0) {
      this.$1.dropFirst(g)
      this.$6 += g
    }
    return j
  }
}
