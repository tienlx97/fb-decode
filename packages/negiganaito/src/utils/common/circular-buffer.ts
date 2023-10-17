import { unrecoverableViolation } from '@negiganaito/error'

export class CircularBuffer<T> {
  private size: number
  private buffer: T[]
  private evictCallbacks: ((element: T) => void)[]

  constructor(size: number) {
    if (size <= 0) {
      throw unrecoverableViolation(
        'Buffer size should be a positive integer',
        'comet_infra',
      )
    }
    this.size = size
    this.buffer = []
    this.evictCallbacks = []
  }

  write(element: T): this {
    if (this.buffer.length < this.size) {
      this.buffer.push(element)
    } else {
      this.evictCallbacks.forEach(callback => {
        callback(this.buffer[0])
      })
      this.buffer.shift()
      this.buffer.push(element)
    }
    return this
  }

  onEvict(callback: (element: T) => void): this {
    this.evictCallbacks.push(callback)
    return this
  }

  read(): T[] {
    return this.buffer
  }

  expand(newSize: number): this {
    if (newSize > this.size) {
      const currentBuffer = this.read()
      this.size = newSize
      this.buffer = currentBuffer
    }
    return this
  }

  dropFirst(count: number): this {
    if (count <= this.size) {
      const currentBuffer = this.read()
      currentBuffer.splice(0, count)
      this.buffer = currentBuffer
    }
    return this
  }

  clear(): this {
    this.buffer = []
    return this
  }

  currentSize(): number {
    return this.buffer.length
  }
}
