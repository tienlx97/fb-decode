import ErrorGuard from '@negiganaito/error/errorguard/error-guard'
import { unrecoverableViolation } from '..'
import { thatReturnsTrue } from '../utils/common/empty-function'
import { EmitterSubscription } from './emitter-subscription'
import { EventSubscriptionVendor } from './event-subscription-vendor'

export class BaseEventEmitter {
  private $2: EventSubscriptionVendor
  private $1: any | null

  constructor() {
    this.$2 = new EventSubscriptionVendor()
    this.$1 = null
  }

  addListener(a: any, c: any, d?: any) {
    // return this.$2.addSubscription(a, new EmitterSubscription(this.$2, c, d))
    return this.$2.addSubscription(a, new EmitterSubscription(this.$2, c, d))
  }

  removeListener(a: any) {
    this.$2.removeSubscription(a)
  }

  once(a: any, b: any, c: any) {
    let d = this
    return this.addListener(a, function () {
      d.removeCurrentListener()
      b.apply(c, arguments)
    })
  }

  removeAllListeners(a: any) {
    this.$2.removeAllSubscriptions(a)
  }

  removeCurrentListener() {
    if (!this.$1)
      // throw b('unrecoverableViolation')(
      //   'Not in an emitting cycle; there is no current subscription',
      //   'emitter',
      // )
      throw unrecoverableViolation(
        'Not in an emitting cycle; there is no current subscription',
        'emitter',
      )
    this.$2.removeSubscription(this.$1)
  }

  listeners(a: any) {
    a = this.$2.getSubscriptionsForType(a)
    return a
      ? a.filter(thatReturnsTrue).map(function (a: any) {
          return a.listener
        })
      : []
  }

  emit(a: any) {
    let b = this.$2.getSubscriptionsForType(a)
    if (b) {
      let c = Object.keys(b),
        d: any
      for (let e = 0; e < c.length; e++) {
        let f: any = c[e],
          g = b[f]
        if (g) {
          this.$1 = g
          if (d == null) {
            d = [g, a]
            for (
              let h = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1;
              h < i;
              h++
            )
              d[h + 2] =
                h + 1 < 1 || arguments.length <= h + 1
                  ? void 0
                  : arguments[h + 1]
          } else d[0] = g
          this.__emitToSubscription.apply(this, d)
        }
      }
      this.$1 = null
    }
  }

  __emitToSubscription(a: any, c: any) {
    for (
      var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2;
      f < d;
      f++
    )
      e[f - 2] = arguments[f]
    ErrorGuard.applyWithGuard(a.listener, a.context, e, {
      name: 'EventEmitter ' + c + ' event',
    } as any)
  }
}
