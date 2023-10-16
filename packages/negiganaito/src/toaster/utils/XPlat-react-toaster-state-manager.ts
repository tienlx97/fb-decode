/* eslint-disable camelcase */
// @ts-nocheck

import { unrecoverableViolation } from '@negiganaito/error'
import { removeFromArray } from '@negiganaito/utils/common/remove-from-array'

let h = {}

interface Toast {
  duration: number | null
  expired: boolean
  id: string
  shown: boolean
  timer: any | null
  value: any // You can replace 'any' with the appropriate type for your toast data.
}

function i(a) {
  var b = !1
  return function () {
    b || (a(), (b = !0))
  }
}

type ListenerCallback = () => void

type ToastType =
  | 'PUSH'
  | 'REPLACE'
  | 'SHOWN'
  | 'EXPIRE'
  | 'HIDDEN'
  | 'DELETE'
  | 'STOP_TIMER'
  | 'RESET_TIMER'

interface ToastAction {
  id?: string
  type: ToastType
  value?: any // You can replace 'any' with the appropriate type for your toast data.
}

class XPlatReactToasterStateManager {
  private $1: number = 0
  private $2: Map<string, Toast> = new Map()
  private $3: ListenerCallback[] = []
  private $4: {
    handler: (state: Record<string, Toast>) => void
    priority: number
  }[] = []
  private $5: {
    handler: (state: Record<string, Toast>) => void
    priority: number
  } | null = null
  private $6: number
  private $7: (callback: () => void) => void

  constructor({
    callbackScheduler,
    maxQueuedToasts,
  }: {
    callbackScheduler: (callback: () => void) => void
    maxQueuedToasts: number
  }) {
    this.$6 = maxQueuedToasts
    this.$7 = callbackScheduler
  }

  push(a: any, b: number): string {
    const c = 'toast-' + this.$1++
    const toast: Toast = {
      duration: b,
      expired: false,
      id: c,
      shown: false,
      timer: null,
      value: a,
    }
    this.$8({
      node: toast,
      type: 'PUSH',
    })
    return c
  }

  replace(a: string, b: any): void {
    this.$8({
      id: a,
      type: 'REPLACE',
      value: b,
    })
  }

  shown(a: string): void {
    this.$8({
      id: a,
      type: 'SHOWN',
    })
  }

  delete(a: string): void {
    this.$8({
      id: a,
      type: 'DELETE',
    })
  }

  expire(a: string): void {
    this.$8({
      id: a,
      type: 'EXPIRE',
    })
  }

  hidden(a: string): void {
    this.$8({
      id: a,
      type: 'HIDDEN',
    })
  }

  stopTimer(a: string): void {
    this.$8({
      id: a,
      type: 'STOP_TIMER',
    })
  }

  resetTimer(a: string): void {
    this.$8({
      id: a,
      type: 'RESET_TIMER',
    })
  }

  getState(): Record<string, Toast> {
    return Object.fromEntries(this.$2)
  }

  getEmptyState(): Record<string, Toast> {
    return h
  }

  addListener(a: ListenerCallback): { remove: () => void } {
    this.$3.push(a)
    return {
      remove: i(() => {
        removeFromArray(this.$3, a)
      }),
    }
  }

  $9(a: {
    handler: (state: Record<string, Toast>) => void
    priority: number
  }): void {
    if (this.$5 == null || a.priority > this.$5.priority) {
      this.$5 = a
    }
  }

  registerView(
    a: (state: Record<string, Toast>) => void,
    b: number = 1,
  ): { remove: () => void } {
    const e = {
      handler: a,
      priority: b,
    }
    this.$4.push(e)
    this.$9(e)
    this.$10()

    return {
      remove: i(() => {
        removeFromArray(this.$4, e)
        if (this.$5 === e) {
          this.$5 = null
          this.$4.forEach(a => this.$9(a))
        }
      }),
    }
  }

  $8(a: ToastAction): void {
    const b = this.$2
    switch (a.type) {
      case 'PUSH':
        // eslint-disable-next-line no-case-declarations
        const c = a.node
        this.$2 = new Map([...Array.from(this.$2), [c.id, c]])
        if (this.$6 !== 0) {
          const c = Array.from(this.$2.values()).filter(
            a => !a.shown && !a.expired,
          )
          if (c.length > this.$6) {
            const c = c[0]
            this.delete(c.id)
          }
        }
        break
      case 'SHOWN':
        if (this.$2.has(a.id) && !this.$11(a.id).shown) {
          const c = { ...this.$11(a.id), shown: true }
          this.$2 = new Map([...Array.from(this.$2), [a.id, this.$12(c)]])
        }
        break
      case 'EXPIRE':
        if (this.$2.has(a.id)) {
          const c = { ...this.$11(a.id), expired: true }
          this.$2 = new Map([...Array.from(this.$2), [a.id, this.$13(c)]])
          this.$14(c)
        }
        break
      case 'HIDDEN':
        if (this.$2.has(a.id)) {
          const c = this.$11(a.id)
          if (c.shown || c.expired) {
            this.$2 = new Map(this.$2)
            this.$2.delete(a.id)
            this.$13(c)
          }
        }
        break
      case 'DELETE':
        if (this.$2.has(a.id)) {
          const c = this.$11(a.id)
          this.$2 = new Map(this.$2)
          this.$2.delete(a.id)
          this.$13(c)
        }
        break
      case 'REPLACE':
        if (this.$2.has(a.id)) {
          const c = this.$11(a.id)
          this.$2 = new Map([
            ...Array.from(this.$2),
            [a.id, { ...c, value: a.value }],
          ])
        }
        break
      case 'STOP_TIMER':
        if (this.$2.has(a.id) && this.$15(this.$11(a.id))) {
          const c = { ...this.$11(a.id) }
          this.$2 = new Map([...Array.from(this.$2), [a.id, this.$13(c)]])
        }
        break
      case 'RESET_TIMER':
        if (this.$2.has(a.id) && !this.$15(this.$11(a.id))) {
          const c = { ...this.$11(a.id) }
          this.$2 = new Map([...Array.from(this.$2), [a.id, this.$12(c)]])
        }
        break
      default:
        a.type
    }
    b !== this.$2 && this.$10()
  }

  $10(): void {
    this.$3.forEach(b => this.$7(() => b()))
    this.$4.forEach(b =>
      this.$7(() =>
        b.handler(b === this.$5 ? this.getState() : this.getEmptyState()),
      ),
    )
  }

  $12(a: Toast): Toast {
    if (a.duration !== null && a.timer == null) {
      a.timer = setTimeout(() => {
        this.expire(a.id)
      }, a.duration)
    }
    return a
  }

  $13(a: Toast): Toast {
    if (a.timer != null) {
      clearTimeout(a.timer)
      a.timer = null
    }
    return a
  }

  $14(a: Toast): void {
    this.$13(a)
    const d = a.id
    setTimeout(() => {
      this.delete(d)
    }, 1000)
  }

  $15(a: Toast): boolean {
    return a.timer != null
  }

  $11(a: string): Toast {
    const toast = this.$2.get(a)
    if (toast == null) {
      throw unrecoverableViolation(
        'Toast with given identifier was not found',
        'comet_ui',
      )
    }
    return toast
  }

  private static $16: XPlatReactToasterStateManager | null = null

  static getInstance({
    callbackScheduler,
    maxQueuedToasts,
  }: {
    callbackScheduler: (callback: () => void) => void
    maxQueuedToasts: number
  }): XPlatReactToasterStateManager {
    if (XPlatReactToasterStateManager.$16 == null) {
      XPlatReactToasterStateManager.$16 = new XPlatReactToasterStateManager({
        callbackScheduler,
        maxQueuedToasts,
      })
    }
    return XPlatReactToasterStateManager.$16
  }

  static resetInstance_DO_NOT_USE(): void {
    XPlatReactToasterStateManager.$16 = null
  }
}

export default XPlatReactToasterStateManager
