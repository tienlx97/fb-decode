/* eslint-disable no-self-assign */
/* eslint-disable no-redeclare */
import { createCancelableFunction } from './create-cancelable-function'
import { emptyFunction } from './empty-function'
import executionEnvironment from './execution-environment'

//

function l(a: any, b: any) {
  h.unload == null &&
    ((h.unload = []),
    (h.afterunload = []),
    executionEnvironment.canUseEventListeners &&
      window.addEventListener('unload', function () {
        o('unload'), o('afterunload')
      })),
    h[a] == null
      ? // c('recoverableViolation')(
        //   'EVENT_LISTENERS.' + a + " wasn't initialized but should have been!",
        //   'comet_infra',
        // )
        // @ts-ignore
        ("wasn't initialized but should have been", (h[a] = [b]))
      : h[a].push(b)
}

function m(a: any) {
  a || new Error('Undefined event listener handler is not allowed')
  // c('recoverableViolation')(
  //   'Undefined event listener handler is not allowed',
  //   'comet_infra',
  // )
  // eslint-disable-next-line no-self-assign
  return createCancelableFunction((a = a) != null ? a : emptyFunction)
}

function n(a: any) {
  return {
    remove: function () {
      a.cancel()
    },
  }
}

var h: any = {},
  i = !1,
  j = !1,
  k = {
    remove: emptyFunction,
  }

function o(a: any) {
  var b = h[a] || []
  for (var d = 0; d < b.length; d++) {
    var e = b[d]
    try {
      e()
    } catch (b) {
      // c('FBLogger')('comet_infra')
      //   .catching(b)
      //   .mustfix("Hit an error while executing '" + a + "' event listeners.")
    }
  }
  h[a] = []
}

export function onLoad(a: any) {
  if (i) {
    a()
    return n(m(emptyFunction))
  }
  a = m(a)
  h.domcontentloaded == null
    ? ((h.domcontentloaded = [a]),
      executionEnvironment.canUseEventListeners &&
        window.addEventListener(
          'DOMContentLoaded',
          function () {
            o('domcontentloaded')
          },
          !0,
        ))
    : h.domcontentloaded.push(a)
  return n(a)
}

export function onAfterLoad(a: any) {
  a = m(a)
  h.load == null
    ? ((h.load = [a]),
      executionEnvironment.canUseEventListeners &&
        window.addEventListener('load', function () {
          o('domcontentloaded'), o('load')
        }))
    : h.load.push(a)
  j &&
    setTimeout(function () {
      o('domcontentloaded'), o('load')
    }, 0)
  return n(a)
}

export function onAfterUnload(a: any) {
  a = m(a)
  l('afterunload', a)
  return n(a)
}

export function onUnload(a: any) {
  a = m(a)
  l('unload', a)
  return n(a)
}

export function onBeforeUnload(a: any, b: any) {
  if (b !== !1) {
    b =
      'Run.onBeforeUnload was called with include_quickling_events as true or undefined, but this is not valid in Comet.'
    // c('FBLogger')('comet_infra').blameToPreviousFrame().mustfix(b)
  }
  b = m(a)
  h.beforeunload == null &&
    ((h.beforeunload = []),
    executionEnvironment.canUseEventListeners &&
      window.addEventListener('beforeunload', function (a) {
        var b = h.beforeunload || []
        for (
          var b = b,
            d = Array.isArray(b),
            e: any = 0,
            b = d
              ? b
              : b[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var f
          if (d) {
            if (e >= b.length) break
            f = b[e++]
          } else {
            e = b.next()
            if (e.done) break
            f = e.value
          }
          f = f
          var g: any = void 0
          try {
            g = f()
          } catch (a) {
            // c('FBLogger')('comet_infra')
            //   .catching(a)
            //   .mustfix(
            //     'Hit an error while executing onBeforeUnload event listeners.',
            //   )
          }
          if (g !== void 0) {
            g != null && g.body != null && (g = g.body)
            a.preventDefault()
            a.returnValue = g
            return g
          }
        }
      }))
  h.beforeunload.push(b)
  return n(b)
}

function onLeave(a: any) {
  // c('unexpectedUseInComet')('Run.onLeave')
  return k
}

function onCleanupOrLeave(a: any, b: any) {
  // c('unexpectedUseInComet')('Run.onCleanupOrLeave')
  return k
}

export var maybeOnBeforeUnload = onBeforeUnload

export function __removeHook(a: any) {
  // c('unexpectedUseInComet')('Run.removeHook')
}

// function __domContentCallback() {
//   document.readyState === 'loading'
//     ? onLoad(function () {
//         i = !0
//       })
//     : (i = !0)
//   if (document.readyState === 'complete') j = !0
//   else {
//     var a: any = window.onload
//     window.onload = function () {
//       a && a(), (j = !0)
//     }
//   }
// }

export var __domContentCallback = null
export var __onloadCallback = null

/*

__d(
  'RunComet',
  [
    'ExecutionEnvironment',
    'FBLogger',
    'createCancelableFunction',
    'emptyFunction',
    'recoverableViolation',
    'setTimeout',
    'unexpectedUseInComet',
  ],
  function (
    onAfterUnload,
    onAfterLoad,
    c,
    onUnload,
    onBeforeUnload,
    onLeave,
    g,
  ) {
    'use strict'
    var h = {},
      i = !1,
      j = !1,
      k = {
        remove: c('emptyFunction'),
      }
    function l(a, b) {
      h.unload == null &&
        ((h.unload = []),
        (h.afterunload = []),
        c('ExecutionEnvironment').canUseEventListeners &&
          window.addEventListener('unload', function () {
            o('unload'), o('afterunload')
          })),
        h[a] == null
          ? (c('recoverableViolation')(
              'EVENT_LISTENERS.' +
                a +
                " wasn't initialized but should have been!",
              'comet_infra',
            ),
            (h[a] = [b]))
          : h[a].push(b)
    }
    function m(a) {
      a ||
        c('recoverableViolation')(
          'Undefined event listener handler is not allowed',
          'comet_infra',
        )
      return c('createCancelableFunction')(
        (a = a) != null ? a : c('emptyFunction'),
      )
    }
    function n(a) {
      return {
        remove: function () {
          a.cancel()
        },
      }
    }
    function o(a) {
      var b = h[a] || []
      for (var d = 0; d < b.length; d++) {
        var e = b[d]
        try {
          e()
        } catch (b) {
          c('FBLogger')('comet_infra')
            .catching(b)
            .mustfix(
              "Hit an error while executing '" + a + "' event listeners.",
            )
        }
      }
      h[a] = []
    }
    function onLoad(a) {
      if (i) {
        a()
        return n(m(c('emptyFunction')))
      }
      a = m(a)
      h.domcontentloaded == null
        ? ((h.domcontentloaded = [a]),
          c('ExecutionEnvironment').canUseEventListeners &&
            window.addEventListener(
              'DOMContentLoaded',
              function () {
                o('domcontentloaded')
              },
              !0,
            ))
        : h.domcontentloaded.push(a)
      return n(a)
    }
    function onAfterUnload(a) {
      a = m(a)
      l('afterunload', a)
      return n(a)
    }
    function onAfterLoad(a) {
      a = m(a)
      h.load == null
        ? ((h.load = [a]),
          c('ExecutionEnvironment').canUseEventListeners &&
            window.addEventListener('load', function () {
              o('domcontentloaded'), o('load')
            }))
        : h.load.push(a)
      j &&
        c('setTimeout')(function () {
          o('domcontentloaded'), o('load')
        }, 0)
      return n(a)
    }
    function onUnload(a) {
      a = m(a)
      l('unload', a)
      return n(a)
    }
    function onBeforeUnload(a, b) {
      if (b !== !1) {
        b =
          'Run.onBeforeUnload was called with include_quickling_events as true or undefined, but this is not valid in Comet.'
        c('FBLogger')('comet_infra').blameToPreviousFrame().mustfix(b)
      }
      b = m(a)
      h.beforeunload == null &&
        ((h.beforeunload = []),
        c('ExecutionEnvironment').canUseEventListeners &&
          window.addEventListener('beforeunload', function (a) {
            var b = h.beforeunload || []
            for (
              var b = b,
                d = Array.isArray(b),
                e = 0,
                b = d
                  ? b
                  : b[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var f
              if (d) {
                if (e >= b.length) break
                f = b[e++]
              } else {
                e = b.next()
                if (e.done) break
                f = e.value
              }
              f = f
              var g = void 0
              try {
                g = f()
              } catch (a) {
                c('FBLogger')('comet_infra')
                  .catching(a)
                  .mustfix(
                    'Hit an error while executing onBeforeUnload event listeners.',
                  )
              }
              if (g !== void 0) {
                g != null && g.body != null && (g = g.body)
                a.preventDefault()
                a.returnValue = g
                return g
              }
            }
          }))
      h.beforeunload.push(b)
      return n(b)
    }
    var maybeOnBeforeUnload = onBeforeUnload
    function onLeave(a) {
      c('unexpectedUseInComet')('Run.onLeave')
      return k
    }
    function onCleanupOrLeave(a, b) {
      c('unexpectedUseInComet')('Run.onCleanupOrLeave')
      return k
    }
    function s(a) {
      c('unexpectedUseInComet')('Run.removeHook')
    }
    function t() {
      document.readyState === 'loading'
        ? onLoad(function () {
            i = !0
          })
        : (i = !0)
      if (document.readyState === 'complete') j = !0
      else {
        var a = window.onload
        window.onload = function () {
          a && a(), (j = !0)
        }
      }
    }
    c('ExecutionEnvironment').canUseDOM && t()
    t = null
    var __onloadCallback = null
    g.onLoad = onLoad
    g.onAfterUnload = onAfterUnload
    g.onAfterLoad = onAfterLoad
    g.onUnload = onUnload
    g.onBeforeUnload = onBeforeUnload
    g.maybeOnBeforeUnload = maybeOnBeforeUnload
    g.onLeave = onLeave
    g.onCleanupOrLeave = onCleanupOrLeave
    g.__removeHook = s
    g.__domContentCallback = t
    g.__onloadCallback = __onloadCallback
  },
  98,
)

*/
