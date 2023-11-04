import { FBLogger } from '@negiganaito/error'
import ErrorGuard from '@negiganaito/error/errorguard/error-guard'
/* eslint-disable camelcase */
import TAAL from '@negiganaito/error/errorguard/taal'
import { _Core, parent } from '@negiganaito/styles'
import executionEnvironment from '@negiganaito/utils/common/execution-environment'
import { getDocumentScrollElement } from '@negiganaito/utils/common/get-document-scroll-element'
import { TimeSlice } from '@negiganaito/utils/common/time-slice'
import { isBrowser, isPlatform } from '@negiganaito/utils/user-agent'

import { Arbiter } from './arbiter'
import { DataStore } from './data-store'
import { dedupString } from './dedup-string'
import DOMEvent from './dom-event'
import { DOMEventListener } from './DOM-event-listener'
import { DOMQuery } from './DOM-query'
import { EventProfiler } from './event-profiler'
import { getObjectValues } from './get-object-values'
import { Scroll } from './scroll'

var g: any,
  h: any,
  i = TAAL,
  j = 'Event.listeners',
  f: any

// @ts-ignore
Event.prototype || (Event.prototype = {})

function k(a: any) {
  ;(a.type === 'click' || a.type === 'mouseover' || a.type === 'keydown') &&
    Arbiter.inform('Event/stop', {
      event: a,
    })
}

class l {
  private cancelBubble: any
  private target: any
  private type: any
  private data: any

  constructor(a: any, b: any, c: any) {
    this.cancelBubble = !1
    this.target = a
    this.type = b
    this.data = c
  }

  getData() {
    this.data = this.data || {}
    return this.data
  }

  stop() {
    // @ts-ignore
    return Event.stop(this)
  }

  prevent() {
    // @ts-ignore
    return Event.prevent(this)
  }

  isDefaultPrevented() {
    // @ts-ignore
    return Event.isDefaultPrevented(this)
  }

  kill() {
    // @ts-ignore
    return Event.kill(this)
  }

  getTarget() {
    return new DOMEvent(this).target || null
  }
}

function m(a: any) {
  if (a instanceof l) return a
  a ||
    // @ts-ignore
    (!window.addEventListener && document.createEventObject
      ? // @ts-ignore
        (a = window.event ? document.createEventObject(window.event) : {})
      : (a = {}))
  if (!a._inherits_from_prototype)
    for (var b in Event.prototype)
      try {
        // @ts-ignore
        a[b] = Event.prototype[b]
      } catch (a) {
        //
      }
  return a
}

Object.assign(
  Event.prototype,
  {
    _inherits_from_prototype: !0,
    getRelatedTarget: function () {
      var a: any =
        // @ts-ignore
        this.relatedTarget ||
        // @ts-ignore
        (this.fromElement === this.srcElement
          ? // @ts-ignore
            this.toElement
          : // @ts-ignore
            this.fromElement)
      return a && a.nodeType ? a : null
    },
    // @ts-ignore
    getModifiers: function () {
      var a: any = {
        // @ts-ignore
        control: !!this.ctrlKey,
        // @ts-ignore
        shift: !!this.shiftKey,
        // @ts-ignore
        alt: !!this.altKey,
        // @ts-ignore
        meta: !!this.metaKey,
      }
      a.access = isPlatform('Mac OS X') ? a.control : a.alt
      a.any = a.control || a.shift || a.alt || a.meta
      return a
    },
    // @ts-ignore
    isRightClick: function () {
      // @ts-ignore
      return this.which ? this.which === 3 : this.button && this.button === 2
    },
    // @ts-ignore
    isMiddleClick: function () {
      // @ts-ignore
      return this.which ? this.which === 2 : this.button && this.button === 4
    },
    // @ts-ignore
    isDefaultRequested: function () {
      return (
        this.getModifiers().any || this.isMiddleClick() || this.isRightClick()
      )
    },
  },
  l.prototype,
)

let c = {
  listen: function (a: any, c: any, d: any, e: any, f: any) {
    typeof d === 'function' &&
      (d = TimeSlice.guard(d, dedupString('Event.js ' + c + ' handler')))
    !f || typeof f === 'boolean'
      ? (f = {
          passive: !1,
        })
      : (f = {
          passive: f.passive || !1,
        })
    if (!(g || (g = executionEnvironment)).canUseDOM)
      return new u(a, d, null, c, e, null, f)
    typeof a === 'string' && (a = _Core(a))
    // @ts-ignore
    typeof e === 'undefined' && (e = Event.Priority.NORMAL)
    if (typeof c === 'object') {
      var h = {}
      // @ts-ignore
      for (var k in c) h[k] = Event.listen(a, k, c[k], e, f)
      return h
    }
    if (c.match(/^on/i))
      throw new TypeError(
        'Bad event name `' + c + "': use `click', not `onclick'.",
      )
    if (!a) {
      k = i.blameToPreviousFrame(
        new Error('Cannot listen to an undefined element.'),
      ) as any
      FBLogger('event')
        .catching(k as any)
        .mustfix('Tried to listen to element of type %s', c)
      throw k
    }
    if (a.nodeName == 'LABEL' && c == 'click') {
      h = a.getElementsByTagName('input')
      // @ts-ignore
      a = h.length == 1 ? h[0] : a
    } else if (a === window && c === 'scroll') {
      k = getDocumentScrollElement()
      // @ts-ignore
      k !== document.documentElement && k !== document.body && (a = k)
    }
    h = DataStore.get(a, j, {})
    k = o[c]
    // @ts-ignore
    k && ((c = k.base), k.wrap && (d = k.wrap(d)))
    q(a, h, c, f)
    // @ts-ignore
    k = h[c]
    // @ts-ignore
    e in k || (k[e] = [])
    var l = k[e].length
    d = new u(a, d, h, c, e, l, f)
    // @ts-ignore
    k[e][l] = d
    // @ts-ignore
    k.numHandlers++
    // @ts-ignore
    f.passive || (k.numNonPassiveHandlers++, p(a, h[c], c))
    return d
  },
  stop: function (a: any) {
    var c = new DOMEvent(a).stopPropagation()
    k(c.event)
    return a
  },
  prevent: function (a: any) {
    new DOMEvent(a).preventDefault()
    return a
  },
  isDefaultPrevented: function (a: any) {
    return new DOMEvent(a).isDefaultPrevented(a)
  },
  kill: function (a: any) {
    a = new DOMEvent(a).kill()
    k(a.event)
    return !1
  },
  getKeyCode: function (a: any) {
    a = new DOMEvent(a).event
    if (!a) return !1
    switch (a.keyCode) {
      case 63232:
        return 38
      case 63233:
        return 40
      case 63234:
        return 37
      case 63235:
        return 39
      case 63272:
      case 63273:
      case 63275:
        return null
      case 63276:
        return 33
      case 63277:
        return 34
    }
    if (a.shiftKey)
      switch (a.keyCode) {
        case 33:
        case 34:
        case 37:
        case 38:
        case 39:
        case 40:
          return null
      }
    return a.keyCode
  },
  getPriorities: function () {
    if (!n) {
      // @ts-ignore
      var a = getObjectValues(Event.Priority)
      a.sort(function (a, b) {
        return a - b
      })
      n = a
    }
    return n
  },
  fire: function (a: any, b: any, c: any) {
    c = new l(a, b, c)
    var d
    do {
      // @ts-ignore
      var e = Event.__getHandler(a, b)
      e && (d = e(c))
      a = a.parentNode
    } while (a && d !== !1 && !c.cancelBubble)
    return d !== !1
  },
  __fire: function (a: any, b: any, c: any) {
    // @ts-ignore
    a = Event.__getHandler(a, b)
    if (a) return a(m(c))
  },
  __getHandler: function (a: any, c: any) {
    var d = DataStore.get(a, j)
    return d && d[c] ? d[c].domHandler : a['on' + c]
  },
  getPosition: function (a: any) {
    a = new DOMEvent(a).event
    var c = getDocumentScrollElement(),
      d = a.clientX + Scroll.getLeft(c)
    a = a.clientY + Scroll.getTop(c)
    return {
      x: d,
      y: a,
    }
  },
}

Object.assign(Event, c)

var n: any = null

var d = function (a: any) {
  return function (c: any) {
    // @ts-ignore
    if (!DOMQuery.contains(this, c.getRelatedTarget())) return a.call(this, c)
  }
}

var o: any

// @ts-ignore
!window.navigator.msPointerEnabled
  ? (o = {
      mouseenter: {
        base: 'mouseover',
        wrap: d,
      },
      mouseleave: {
        base: 'mouseout',
        wrap: d,
      },
    })
  : (o = {
      mousedown: {
        base: 'MSPointerDown',
      },
      mousemove: {
        base: 'MSPointerMove',
      },
      mouseup: {
        base: 'MSPointerUp',
      },
      mouseover: {
        base: 'MSPointerOver',
      },
      mouseout: {
        base: 'MSPointerOut',
      },
      mouseenter: {
        base: 'MSPointerOver',
        wrap: d,
      },
      mouseleave: {
        base: 'MSPointerOut',
        wrap: d,
      },
    })

if (isBrowser('Firefox < 52')) {
  f = function (a: any, b: any) {
    b = m(b)
    var c = b.getTarget()
    // @ts-ignore
    while (c) Event.__fire(c, a, b), (c = c.parentNode)
  }
  document.documentElement.addEventListener(
    'focus',
    f.bind(null, 'focusin'),
    !0,
  )
  document.documentElement.addEventListener(
    'blur',
    f.bind(null, 'focusout'),
    !0,
  )
}

var p = function (a: any, c: any, d: any) {
    var e = c.numNonPassiveHandlers == 0
    e != c.options.passive &&
      (c.domHandlerRemover.remove(),
      (c.options.passive = e),
      (c.domHandlerRemover = DOMEventListener.add(a, d, c.domHandler, {
        passive: e,
      })))
  },
  q = function (a: any, c: any, d: any, e: any) {
    if (d in c) return
    var f = TimeSlice.guard(
      t.bind(a, d),
      dedupString('Event listenHandler ' + d),
    )
    c[d] = {
      numHandlers: 0,
      numNonPassiveHandlers: 0,
      domHandlerRemover: DOMEventListener.add(a, d, f, e),
      domHandler: f,
      options: e,
    }
    c = 'on' + d
    if (a[c]) {
      f =
        a === document.documentElement
          ? // @ts-ignore
            Event.Priority._BUBBLE
          : // @ts-ignore
            Event.Priority.TRADITIONAL
      var g = a[c]
      a[c] = null
      // @ts-ignore
      Event.listen(a, d, g, f, e)
    }
  }

function r(a: any) {
  return !a.href.endsWith('#')
    ? !1
    : a.href === document.location.href ||
        a.href === document.location.href + '#'
}

function s(a: any, b: any) {
  return a.nodeName === 'INPUT' && a.type === b
}

var t = EventProfiler.__wrapEventListenHandler(function (a: any, c: any) {
  c = m(c)
  // @ts-ignore
  if (!DataStore.get(this, j)) throw new Error('Bad listenHandler context.')
  // @ts-ignore
  var d = DataStore.get(this, j)[a]
  if (!d) throw new Error('No registered handlers for `' + a + "'.")
  if (
    a == 'click' ||
    a == 'contextmenu' ||
    (a == 'mousedown' && c.which == 2)
  ) {
    a = c.getTarget()
    var e = parent.byTag(a, 'a')
    e instanceof HTMLAnchorElement &&
      e.href &&
      r(e) &&
      !s(a, 'file') &&
      !s(a, 'submit') &&
      c.prevent()
  }
  // @ts-ignore
  e = Event.getPriorities()
  // @ts-ignore
  for (a = 0; a < e.length; a++) {
    // @ts-ignore
    var f = e[a]
    if (f in d) {
      f = d[f]
      for (var g = 0; g < f.length; g++) {
        if (!f[g]) continue
        // @ts-ignore
        var h = f[g].fire(this, c)
        if (h === !1) return c.kill()
        else c.cancelBubble && c.stop()
      }
    }
  }
  return c.returnValue
})

// @ts-ignore
Event.Priority = {
  URGENT: -20,
  TRADITIONAL: -10,
  NORMAL: 0,
  _BUBBLE: 1e3,
}

class u {
  private $1: any
  private $2: any
  private $3: any
  private $4: any
  private $5: any
  private $6: any
  private $7: any

  constructor(a: any, b: any, c: any, d: any, e: any, f: any, g: any) {
    this.$1 = a
    this.$2 = b
    this.$3 = c
    this.$7 = d
    this.$6 = e
    this.$4 = f
    this.$5 = g
  }

  isRemoved() {
    return !this.$3
  }

  remove() {
    return !this.$3
  }

  fire(a: any, c: any) {
    return (g || (g = executionEnvironment)).canUseDOM
      ? (h || (h = ErrorGuard)).applyWithGuard(this.$2, a, [c], {
          name:
            'eventhandler:' +
            c.type +
            ':' +
            (typeof a.name == 'string' ? a.name : a.id),
        })
      : !0
  }
}

// @ts-ignore
window.$E = Event.$E = m

export default Event
