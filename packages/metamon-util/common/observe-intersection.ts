var i = typeof WeakMap === 'function',
  j = {
    __noRoot: !0,
  },
  k = i ? new WeakMap() : new Map()

function l(option: any) {
  let { threshold } = option
  if (Array.isArray(threshold)) {
    const thresholdObj: any = {}

    threshold.forEach(function (a) {
      thresholdObj[String(a)] = !0
    })
    threshold = Object.keys(thresholdObj).sort()
  }

  const _options = Object.assign({}, option, {
      threshold: threshold,
    }),
    e: any = {}
  Object.keys(_options)
    .sort()
    .forEach(function (a) {
      e[a] = _options[a]
    })
  return JSON.stringify(e)
}

export function observeIntersection(a: any, b: any, options?: any) {
  if (!options) {
    options = {}
  }

  var e = l({
      rootMargin: options.rootMargin,
      threshold: options.threshold,
    }),
    f = options.root || j,
    g = k.get(f)
  g == null && ((g = {}), k.set(f, g))
  var m = g[e]
  if (m == null) {
    options = new IntersectionObserver(function (a) {
      a.forEach(function (a) {
        // m != null || h(0, 2439)
        var b = m.targetToCallbacksMap.get(a.target)
        b &&
          b.length > 0 &&
          b.forEach(function (b: any) {
            // c('ErrorGuard').applyWithGuard(b, null, [a], {
            //   name: 'observeIntersection',
            // })
          })
      })
    }, options)
    m = {
      intersectionObserver: options,
      referenceCount: 0,
      targetToCallbacksMap: i ? new WeakMap() : new Map(),
    }
    g[e] = m
  }
  options = m.targetToCallbacksMap.get(a)
  options == null &&
    (m.intersectionObserver.observe(a),
    (m.referenceCount += 1),
    (options = []),
    m.targetToCallbacksMap.set(a, options))
  options.push(b)
  var n = !1,
    o: any = function () {
      if (n) return
      var c = m.targetToCallbacksMap.get(a)
      // c != null || h(0, 2440)
      if (c.length === 1)
        m.intersectionObserver.unobserve(a),
          m.targetToCallbacksMap['delete'](a),
          (m.referenceCount -= 1),
          (a = null)
      else {
        var d = c.indexOf(b)
        // d !== -1 || h(0, 2441)
        c.splice(d, 1)
      }
      m.referenceCount === 0 /*g  != null || h(0, 2442) , */ &&
        (delete g[e], f && Object.keys(g).length === 0 && k['delete'](f))
      b = null
      a = null
      f = null
      n = !0
    }
  return {
    remove: function () {
      o && (o(), (o = null))
    },
  }
}

/*

__d(
  'observeIntersection',
  ['invariant', 'ErrorGuard', 'IntersectionObserver'],
  function (a, b, c, d, e, f, g, h) {
    'use strict'
    var i = typeof WeakMap === 'function',
      j = {
        __noRoot: !0,
      },
      k = i ? new WeakMap() : new Map()
    function l(a) {
      var b = a.threshold
      if (Array.isArray(b)) {
        var c = {}
        b.forEach(function (a) {
          c[String(a)] = !0
        })
        b = Object.keys(c).sort()
      }
      var d = babelHelpers['extends']({}, a, {
          threshold: b,
        }),
        e = {}
      Object.keys(d)
        .sort()
        .forEach(function (a) {
          e[a] = d[a]
        })
      return JSON.stringify(e)
    }
    function a(a, b, d) {
      d === void 0 && (d = {})
      var e = l({
          rootMargin: d.rootMargin,
          threshold: d.threshold,
        }),
        f = d.root || j,
        g = k.get(f)
      g == null && ((g = {}), k.set(f, g))
      var m = g[e]
      if (m == null) {
        d = new (c('IntersectionObserver'))(function (a) {
          a.forEach(function (a) {
            m != null || h(0, 2439)
            var b = m.targetToCallbacksMap.get(a.target)
            b &&
              b.length > 0 &&
              b.forEach(function (b) {
                c('ErrorGuard').applyWithGuard(b, null, [a], {
                  name: 'observeIntersection',
                })
              })
          })
        }, d)
        m = {
          intersectionObserver: d,
          referenceCount: 0,
          targetToCallbacksMap: i ? new WeakMap() : new Map(),
        }
        g[e] = m
      }
      d = m.targetToCallbacksMap.get(a)
      d == null &&
        (m.intersectionObserver.observe(a),
        (m.referenceCount += 1),
        (d = []),
        m.targetToCallbacksMap.set(a, d))
      d.push(b)
      var n = !1,
        o = function () {
          if (n) return
          var c = m.targetToCallbacksMap.get(a)
          c != null || h(0, 2440)
          if (c.length === 1)
            m.intersectionObserver.unobserve(a),
              m.targetToCallbacksMap['delete'](a),
              (m.referenceCount -= 1),
              (a = null)
          else {
            var d = c.indexOf(b)
            d !== -1 || h(0, 2441)
            c.splice(d, 1)
          }
          m.referenceCount === 0 &&
            (g != null || h(0, 2442),
            delete g[e],
            f && Object.keys(g).length === 0 && k['delete'](f))
          b = null
          a = null
          f = null
          n = !0
        }
      return {
        remove: function () {
          o && (o(), (o = null))
        },
      }
    }
    f.exports = a
  },
  34,
)


*/
