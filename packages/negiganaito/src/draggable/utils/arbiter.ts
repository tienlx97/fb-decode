// Replace with the actual import path

import ErrorGuard from '@negiganaito/error/errorguard/error-guard'
import ArbiterToken from './arbiter-token'
import { EventHolder } from './event-holder'
import { EventEmitter } from './event-emitter'
import { EventEmitterWithHolding } from './event-emitter-with-holding'
import { CallbackDependencyManager } from './callback-dependency-manager'

function ensureArray(a: any) {
  return Array.isArray(a) ? a : [a]
}

function getArbiterInstance(a: _Arbiter | typeof _Arbiter) {
  return a instanceof _Arbiter || a === _Arbiter ? a : _Arbiter
}

class _Arbiter {
  private $1: any
  private $2: any
  private $3: any
  private $4: any[]

  constructor() {
    var a = new EventEmitter()
    this.$3 = new EventHolderWithHolding()
    this.$2 = new EventEmitterWithHolding(a, this.$3)
    this.$1 = new CallbackDependencyManager()
    this.$4 = []
  }

  subscribe(a: any, b: any, d?: any) {
    var e = this
    a = ensureArray(a)
    a.forEach(function (a: any) {
      // ;(a && typeof a === 'string') || h(0, 1966, a)
    })
    // typeof b === 'function' || h(0, 1967, b)
    d = d || 'all'
    // d === 'new' || d === 'all' || h(0, 1968, d)
    a = a.map(function (a: any) {
      var c = function (c: any) {
        return e.$5(b, a, c)
      }
      // @ts-ignore
      c.__SMmeta = b.__SMmeta
      if (d === 'new') return e.$2.addListener(a, c)
      e.$4.push({})
      c = e.$2.addRetroactiveListener(a, c)
      e.$4.pop()
      return c
    })
    return new ArbiterToken(this, a)
  }

  $5(a: any, b: any, d: any) {
    var e = this.$4[this.$4.length - 1]
    if (e[b] === !1) return
    a = ErrorGuard.applyWithGuard(a, null, [b, d])
    a === !1 && this.$2.releaseCurrentEvent()
    e[b] = a
  }
  unsubscribeCurrentSubscription() {
    this.$2.removeCurrentListener()
  }
  releaseCurrentPersistentEvent() {
    this.$2.releaseCurrentEvent()
  }
  subscribeOnce(a: any, b: any, c: any) {
    var d = this
    a = this.subscribe(
      a,
      function (a: any, c: any) {
        d.unsubscribeCurrentSubscription()
        return b(a, c)
      },
      c,
    )
    return a
  }
  unsubscribe(a: any) {
    // a.isForArbiterInstance(this) || h(0, 1969),
    a.unsubscribe()
  }
  inform(a: any, b: any, c?: any) {
    var d = Array.isArray(a)
    a = ensureArray(a)
    c = c || 'event'
    var e = c === 'state' || c === 'persistent'
    this.$4.push({})
    for (var f = 0; f < a.length; f++) {
      var g = a[f]
      // g || h(0, 1970, g);
      this.$3.setHoldingBehavior(g, c)
      this.$2.emitAndHold(g, b)
      this.$6(g, b, e)
    }
    g = this.$4.pop()
    return d ? g : g[a[0]]
  }
  query(a: any) {
    var b = this.$3.getHoldingBehavior(a)
    // !b || b === "state" || h(0, 1971, a);
    b = null
    this.$3.emitToListener(a, function (a: any) {
      b = a
    })
    return b
  }

  registerCallback(a: any, b: any) {
    if (typeof a === 'function') return this.$1.registerCallback(a, b)
    else return this.$1.addDependenciesToExistingCallback(a, b)
  }

  $6(a: any, b: any, c: any) {
    if (b === null) return
    c
      ? this.$1.satisfyPersistentDependency(a)
      : this.$1.satisfyNonPersistentDependency(a)
  }

  static subscribe(b: any, c: any, d: any) {
    return _Arbiter.prototype.subscribe.apply(
      getArbiterInstance(this),
      // @ts-ignore
      arguments,
    )
  }

  static unsubscribeCurrentSubscription() {
    return _Arbiter.prototype.unsubscribeCurrentSubscription.apply(
      getArbiterInstance(this),
    )
  }

  static releaseCurrentPersistentEvent() {
    return _Arbiter.prototype.releaseCurrentPersistentEvent.apply(
      getArbiterInstance(this),
    )
  }

  static subscribeOnce(b: any, c: any, d: any) {
    return _Arbiter.prototype.subscribeOnce.apply(
      getArbiterInstance(this),
      // @ts-ignore
      arguments,
    )
  }

  static unsubscribe(b: any) {
    return _Arbiter.prototype.unsubscribe.apply(
      getArbiterInstance(this),
      // @ts-ignore
      arguments,
    )
  }

  static inform(b: any, c: any, d: any) {
    return _Arbiter.prototype.inform.apply(
      getArbiterInstance(this),
      // @ts-ignore
      arguments,
    )
  }

  static informSingle(b: any, c: any, d: any) {
    return _Arbiter.prototype.inform.apply(
      getArbiterInstance(this),
      // @ts-ignore
      arguments,
    )
  }

  static query(b: any) {
    return _Arbiter.prototype.query.apply(
      getArbiterInstance(this),
      // @ts-ignore
      arguments,
    )
  }

  static registerCallback(b: any, c: any) {
    return _Arbiter.prototype.registerCallback.apply(
      getArbiterInstance(this),
      // @ts-ignore
      arguments,
    )
  }

  static $6(b: any, c: any, d: any) {
    return _Arbiter.prototype.$6.apply(
      getArbiterInstance(this),
      // @ts-ignore
      arguments,
    )
  }

  static $5(b: any, c: any, d: any) {
    return _Arbiter.prototype.$5.apply(
      getArbiterInstance(this),
      // @ts-ignore
      arguments,
    )
  }
}

class EventHolderWithHolding extends EventHolder {
  private $ArbiterEventHolder1: any

  constructor() {
    super()
    this.$ArbiterEventHolder1 = {}
  }

  setHoldingBehavior(event: string, behavior: string): void {
    this.$ArbiterEventHolder1[event] = behavior
  }

  getHoldingBehavior(event: string): string {
    return this.$ArbiterEventHolder1[event]
  }

  holdEvent(event: string, ...args: any[]): any {
    const holdingBehavior = this.$ArbiterEventHolder1[event]

    if (holdingBehavior !== 'persistent') {
      this.$ArbiterEventHolder2(event)
    }

    if (holdingBehavior !== 'event') {
      return super.holdEvent(event, ...args)
    }

    return undefined
  }

  $ArbiterEventHolder2(event: string): void {
    this.emitToListener(event, this.releaseCurrentEvent, this)
  }

  releaseEvent(event: any): void {
    if (event) {
      super.releaseEvent(event)
    }
  }
}

export const Arbiter = new _Arbiter()
