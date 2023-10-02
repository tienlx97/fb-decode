/* eslint-disable camelcase */
import React, {
  ReactNode,
  // @ts-ignore
  unstable_Scope,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

/* eslint-disable camelcase */
import ActiveFocusRegionUtilsContext from '@fb/context/active-focus-region-utils-context'
import {
  focusElement,
  focusFirst,
  focusNextContained,
  focusPreviousContained,
  getAllNodesFromOneOrManyQueries,
  getFirstNodeFromOneOrManyQueries,
} from '@fb/focus/utils/focus-manager'
import { RecoverFocusStrategy } from '@fb/focus/utils/focus-region-type'
import { setElementCanTab } from '@fb/focus/utils/set-element-can-tab'
import { useFocusWithin } from '@fb/hooks/react-focus-event'
import { useKeyboard } from '@fb/hooks/react-keyboard-event'
import useUnsafeRef_DEPRECATED from '@fb/hooks/useUnsafeRef_DEPRECATED'
import { stopEventHookPropagation } from '@fb/utils/react-event-hook-propagation'

type FocusRegionProps = {
  autoFocusQuery?: any
  autoRestoreFocus: boolean
  children?: ReactNode
  containFocusQuery?: any
  forwardRef?: any
  id?: string
  onEscapeFocusRegion?: any
  recoverFocusStrategy?: any
  stopOnFocusWithinPropagation?: any
  recoverFocusQuery?: boolean
}

const _map = new Map()

export function FocusRegion({
  autoRestoreFocus,
  autoFocusQuery,
  children,
  containFocusQuery,
  forwardRef,
  id,
  onEscapeFocusRegion,
  recoverFocusStrategy,
  stopOnFocusWithinPropagation,
  recoverFocusQuery,
}: FocusRegionProps) {
  const w =
    recoverFocusStrategy === void 0
      ? RecoverFocusStrategy.Nearest
      : recoverFocusStrategy

  var y =
    stopOnFocusWithinPropagation === void 0 ? !0 : stopOnFocusWithinPropagation
  const z = useRef<any>(null)
  const A = useRef<any>(null)
  const B = useContext(ActiveFocusRegionUtilsContext)

  const a =
    B === null && (autoRestoreFocus || onEscapeFocusRegion)
      ? document.activeElement
      : null
  var C = useUnsafeRef_DEPRECATED(a)
  var D = C.current ?? a

  const E = useMemo(() => {
    return {
      lastFocused: null,
      scope: null,
      restorationFocusRegionItem: null,
      triggeredFocusRegionItems: new Set(),
    }
  }, [])

  const F = useCallback(
    function () {
      if (B != null) {
        var a = B.getActiveFocusRegion()
        if (a !== E) {
          if (E.restorationFocusRegionItem !== a) {
            var b
            if (
              (a == null ? void 0 : a.lastFocused) != null &&
              !((b = z.current) == null
                ? void 0
                : b.containsNode(a.lastFocused))
            )
              a != null && a.triggeredFocusRegionItems.add(E),
                (E.restorationFocusRegionItem = a)
            else if (E.restorationFocusRegionItem == null) {
              b = a == null ? void 0 : a.restorationFocusRegionItem
              E.restorationFocusRegionItem = b
              a != null &&
                (b == null ? void 0 : b.triggeredFocusRegionItems['delete'](a))
              b == null ? void 0 : b.triggeredFocusRegionItems.add(E)
              B.setActiveFocusRegion(E)
              return
            }
          }
          ;(a === null ||
            (a != null && E != null && a.lastFocused !== E.lastFocused)) &&
            B.setActiveFocusRegion(E)
        }
      }
    },
    [B, E],
  )

  const G = useRef<any>(null)

  const forcusTarget = useCallback(
    (a: any) => {
      z.current = a
      E.scope = a
      var b = G.current
      forwardRef && (forwardRef.current = a)
      b !== null && b !== id && _map.get(b) === null && _map['delete'](b)
      id != null &&
        (a !== null
          ? ((G.current = id), _map.set(id, a))
          : _map.get(id) === null && _map['delete'](id))
    },
    [forwardRef, id, E],
  )

  const ref = useFocusWithin(
    forcusTarget,
    useMemo(() => {
      return {
        onBeforeBlurWithin: (a: any) => {
          var b = z.current
          if (b !== null && recoverFocusQuery !== void 0) {
            a.stopPropagation()
            if (recoverFocusQuery === null) return
            a = a.target
            b = getAllNodesFromOneOrManyQueries(recoverFocusQuery, b)
            if (b === null) return
            var c = b.indexOf(a)
            a = a._tabIndexState
            A.current = {
              detachedCanTab: a != null && a.canTab,
              recoveryIndex: c,
              recovery: b,
            }
          }
        },
        onAfterBlurWithin: function () {
          var a = z.current,
            b = A.current
          A.current = null
          var c: any = document.activeElement
          if (
            a !== null &&
            recoverFocusQuery != null &&
            b !== null &&
            (c == null || c === document.body || !a.containsNode(c))
          ) {
            c = !0
            var e = !0,
              f = b.recovery,
              g = b.recoveryIndex,
              h = getAllNodesFromOneOrManyQueries(recoverFocusQuery, a)
            if (h !== null && f !== null) {
              var i = new Set(h),
                j: any = new Set(f)
              for (var k = g - 1; k >= 0; k--) {
                var l = f[k]
                if (i.has(l)) {
                  var m = h.indexOf(l)
                  m = m + 1
                  if (m < h.length) {
                    m = h[m]
                    if (!j.has(m)) {
                      b.detachedCanTab && setElementCanTab(m, !0)
                      o(m, c, e)
                      return
                    }
                  }
                  b.detachedCanTab && setElementCanTab(l, !0)
                  o(l, c, e)
                  return
                }
              }
              if (w === RecoverFocusStrategy.Nearest)
                for (m = g + 1; m < f.length; m++) {
                  l = f[m]
                  if (i.has(l)) {
                    j = h.indexOf(l)
                    k = j - 1
                    if (k >= 0) {
                      g = h[k]
                      b.detachedCanTab && setElementCanTab(g, !0)
                      o(g, c, e)
                      return
                    }
                  }
                }
              l = getFirstNodeFromOneOrManyQueries(recoverFocusQuery, a)
              l && (b.detachedCanTab && setElementCanTab(l, !0), o(l, c, e))
            }
          }
        },
        onFocusWithin: function (a) {
          y && stopEventHookPropagation(a, 'useFocusWithin'),
            (E.lastFocused = a.target as any),
            F()
        },
      }
    }, [recoverFocusQuery, w, y, E, F]),
  )

  const cb = useCallback(() => {
    var a = z.current,
      b = document.activeElement
    if (autoFocusQuery != null && a !== null && (!b || !a.containsNode(b))) {
      b = E.lastFocused
      b != null && a.containsNode(b) && !p(b)
        ? focusElement(b, {
            focusWithAutoFocus: !0,
            focusWithoutUserIntent: !0,
            preventScroll: !0,
          })
        : focusFirst(autoFocusQuery, a, {
            focusWithAutoFocus: !0,
            focusWithoutUserIntent: !0,
            preventScroll: !0,
          })
    }
  }, [autoFocusQuery, E])

  useLayoutEffect(cb, [cb])
  useEffect(cb, [cb])

  var H = useCallback(
    (a: any, c?: any) => {
      c === void 0 && (c = !1)
      var e = z.current,
        f = document.activeElement,
        g = C.current
      C.current = null
      var h = a == null ? void 0 : a.triggeredFocusRegionItems,
        i = a == null ? void 0 : a.restorationFocusRegionItem
      ;(h == null ? void 0 : h.size) &&
        h.forEach((a: any) => {
          return (a.restorationFocusRegionItem = i)
        })
      a != null &&
        i != null &&
        (i.triggeredFocusRegionItems['delete'](a),
        (h == null ? void 0 : h.size) &&
          h.forEach((a: any) => {
            i.triggeredFocusRegionItems.add(a)
          }))
      E.lastFocused = null
      h = B == null ? void 0 : B.getActiveFocusRegion()
      var j =
        h != null
          ? h.restorationFocusRegionItem
          : {
              lastFocused: g,
            }
      h === a && (B == null ? void 0 : B.setActiveFocusRegion(i))
      g =
        (e !== null && f !== null && e.containsNode(f)) ||
        f == null ||
        f === document.body
      if ((autoRestoreFocus === !0 || onEscapeFocusRegion != null) && g) {
        var k = (a?: any) => {
          a === void 0 && (a = !1)
          if ((j == null ? void 0 : j.lastFocused) != null) {
            var b = !0,
              c = !0,
              e = document.activeElement
            ;(a || e === null || e === document.body) &&
              focusElement(j.lastFocused, {
                preventScroll: b,
                focusWithoutUserIntent: c,
              })
          }
        }
        c
          ? k(c)
          : window.requestAnimationFrame(function () {
              return k()
            })
      }
    },
    [B, autoRestoreFocus, onEscapeFocusRegion, E],
  )

  var I = useCallback(() => {
    H(E, !0), onEscapeFocusRegion && onEscapeFocusRegion()
  }, [H, onEscapeFocusRegion, E])

  useKeyboard(
    z,
    useMemo(() => {
      return {
        onKeyDown: (a: any) => {
          if (
            containFocusQuery == null ||
            a.key !== 'Tab' ||
            a.isDefaultPrevented()
          )
            return
          var b = z.current
          b !== null &&
            (a.shiftKey
              ? focusPreviousContained(
                  containFocusQuery,
                  b,
                  a,
                  !0,
                  onEscapeFocusRegion != null ? I : void 0,
                )
              : focusNextContained(
                  containFocusQuery,
                  b,
                  a,
                  !0,
                  onEscapeFocusRegion != null ? I : void 0,
                ))
        },
      }
    }, [containFocusQuery, I, onEscapeFocusRegion]),
  )

  useLayoutEffect(() => {
    C.current = D
    var a = E
    return function () {
      H(a)
    }
  }, [B, autoRestoreFocus, H, E, D])

  return jsx(unstable_Scope, {
    ref,
    id: id,
    children: children,
  })
}

function o(a: any, preventScroll: any, focusWithoutUserIntent: any) {
  var e = document.activeElement
  window.requestAnimationFrame(function () {
    document.activeElement === e &&
      focusElement(a, {
        preventScroll: preventScroll,
        focusWithoutUserIntent: focusWithoutUserIntent,
      })
  })
}

function p(a: any) {
  return a.offsetWidth === 0 && a.offsetHeight === 0
}

export function focusRegionById(a: any, b: any, c: any) {
  a = _map.get(a)
  if (a) {
    a = a.DO_NOT_USE_queryFirstNode(b)
    if (a !== null) {
      focusElement(a, {
        preventScroll: c,
      })
      return a
    }
  }
  return null
}

/*

__d(
  'FocusRegion.react',
  [
    'ActiveFocusRegionUtilsContext',
    'FocusManager',
    'FocusRegionType',
    'ReactEventHookPropagation',
    'ReactFocusEvent.react',
    'ReactKeyboardEvent.react',
    'react',
    'setElementCanTab',
    'useUnsafeRef_DEPRECATED',
  ],
  function (a, b, c, d, e, f, g) {
    var h = d('react')
    e = d('react')
    var useCallback = e.useCallback,
      useContext = e.useContext,
      useEffect = e.useEffect,
      useLayoutEffect = e.useLayoutEffect,
      useMemo = e.useMemo,
      useRef = e.useRef
    function o(a, b, c) {
      var e = document.activeElement
      window.requestAnimationFrame(function () {
        document.activeElement === e &&
          d('FocusManager').focusElement(a, {
            preventScroll: b,
            focusWithoutUserIntent: c,
          })
      })
    }
    function p(a) {
      return a.offsetWidth === 0 && a.offsetHeight === 0
    }
    var unstable_Scope = h.unstable_Scope,
      _map = new Map()
    function FocusRegion(a) {
      var autoRestoreFocus = a.autoRestoreFocus,
        autoFocusQuery = a.autoFocusQuery,
        children = a.children,
        containFocusQuery = a.containFocusQuery,
        forwardRef = a.forwardRef,
        id = a.id,
        onEscapeFocusRegion = a.onEscapeFocusRegion,
        stopOnFocusWithinPropagation = a.recoverFocusStrategy,
        w =
          stopOnFocusWithinPropagation === void 0
            ? d('FocusRegionType').RecoverFocusStrategy.Nearest
            : stopOnFocusWithinPropagation,
        recoverFocusQuery = a.recoverFocusQuery
      stopOnFocusWithinPropagation = a.stopOnFocusWithinPropagation
      var y =
          stopOnFocusWithinPropagation === void 0
            ? !0
            : stopOnFocusWithinPropagation,
        z = useRef(null),
        A = useRef(null),
        B = useContext(c('ActiveFocusRegionUtilsContext'))
      a =
        B === null && (autoRestoreFocus === !0 || onEscapeFocusRegion != null)
          ? document.activeElement
          : null
      var C = c('useUnsafeRef_DEPRECATED')(a),
        D =
          (stopOnFocusWithinPropagation = C.current) != null
            ? stopOnFocusWithinPropagation
            : a,
        E = useMemo(function () {
          return {
            lastFocused: null,
            scope: null,
            restorationFocusRegionItem: null,
            triggeredFocusRegionItems: new Set(),
          }
        }, []),
        F = useCallback(
          function () {
            if (B != null) {
              var a = B.getActiveFocusRegion()
              if (a !== E) {
                if (E.restorationFocusRegionItem !== a) {
                  var b
                  if (
                    (a == null ? void 0 : a.lastFocused) != null &&
                    !((b = z.current) == null
                      ? void 0
                      : b.containsNode(a.lastFocused))
                  )
                    a != null && a.triggeredFocusRegionItems.add(E),
                      (E.restorationFocusRegionItem = a)
                  else if (E.restorationFocusRegionItem == null) {
                    b = a == null ? void 0 : a.restorationFocusRegionItem
                    E.restorationFocusRegionItem = b
                    a != null &&
                      (b == null
                        ? void 0
                        : b.triggeredFocusRegionItems['delete'](a))
                    b == null ? void 0 : b.triggeredFocusRegionItems.add(E)
                    B.setActiveFocusRegion(E)
                    return
                  }
                }
                ;(a === null ||
                  (a != null &&
                    E != null &&
                    a.lastFocused !== E.lastFocused)) &&
                  B.setActiveFocusRegion(E)
              }
            }
          },
          [B, E],
        ),
        G = useRef(null)
      stopOnFocusWithinPropagation = useCallback(
        function (a) {
          z.current = a
          E.scope = a
          var b = G.current
          forwardRef && (forwardRef.current = a)
          b !== null && b !== id && _map.get(b) === null && _map['delete'](b)
          id != null &&
            (a !== null
              ? ((G.current = id), _map.set(id, a))
              : _map.get(id) === null && _map['delete'](id))
        },
        [forwardRef, id, E],
      )
      stopOnFocusWithinPropagation = d('ReactFocusEvent.react').useFocusWithin(
        stopOnFocusWithinPropagation,
        useMemo(
          function () {
            return {
              onBeforeBlurWithin: function (a) {
                var b = z.current
                if (b !== null && recoverFocusQuery !== void 0) {
                  a.stopPropagation()
                  if (recoverFocusQuery === null) return
                  a = a.target
                  b = d('FocusManager').getAllNodesFromOneOrManyQueries(
                    recoverFocusQuery,
                    b,
                  )
                  if (b === null) return
                  var c = b.indexOf(a)
                  a = a._tabIndexState
                  A.current = {
                    detachedCanTab: a != null && a.canTab,
                    recoveryIndex: c,
                    recovery: b,
                  }
                }
              },
              onAfterBlurWithin: function () {
                var a = z.current,
                  b = A.current
                A.current = null
                var c = document.activeElement
                if (
                  a !== null &&
                  recoverFocusQuery != null &&
                  b !== null &&
                  (c == null || c === document.body || !a.containsNode(c))
                ) {
                  c = !0
                  var e = !0,
                    f = b.recovery,
                    g = b.recoveryIndex,
                    h = d('FocusManager').getAllNodesFromOneOrManyQueries(
                      recoverFocusQuery,
                      a,
                    )
                  if (h !== null && f !== null) {
                    var i = new Set(h),
                      j = new Set(f)
                    for (var k = g - 1; k >= 0; k--) {
                      var l = f[k]
                      if (i.has(l)) {
                        var m = h.indexOf(l)
                        m = m + 1
                        if (m < h.length) {
                          m = h[m]
                          if (!j.has(m)) {
                            b.detachedCanTab &&
                              d('setElementCanTab').setElementCanTab(m, !0)
                            o(m, c, e)
                            return
                          }
                        }
                        b.detachedCanTab &&
                          d('setElementCanTab').setElementCanTab(l, !0)
                        o(l, c, e)
                        return
                      }
                    }
                    if (w === d('FocusRegionType').RecoverFocusStrategy.Nearest)
                      for (m = g + 1; m < f.length; m++) {
                        l = f[m]
                        if (i.has(l)) {
                          j = h.indexOf(l)
                          k = j - 1
                          if (k >= 0) {
                            g = h[k]
                            b.detachedCanTab &&
                              d('setElementCanTab').setElementCanTab(g, !0)
                            o(g, c, e)
                            return
                          }
                        }
                      }
                    l = d('FocusManager').getFirstNodeFromOneOrManyQueries(
                      recoverFocusQuery,
                      a,
                    )
                    l &&
                      (b.detachedCanTab &&
                        d('setElementCanTab').setElementCanTab(l, !0),
                      o(l, c, e))
                  }
                }
              },
              onFocusWithin: function (a) {
                y &&
                  d('ReactEventHookPropagation').stopEventHookPropagation(
                    a,
                    'useFocusWithin',
                  ),
                  (E.lastFocused = a.target),
                  F()
              },
            }
          },
          [recoverFocusQuery, w, y, E, F],
        ),
      )
      a = useCallback(
        function () {
          var a = z.current,
            b = document.activeElement
          if (
            autoFocusQuery != null &&
            a !== null &&
            (!b || !a.containsNode(b))
          ) {
            b = E.lastFocused
            b != null && a.containsNode(b) && !p(b)
              ? d('FocusManager').focusElement(b, {
                  focusWithAutoFocus: !0,
                  focusWithoutUserIntent: !0,
                  preventScroll: !0,
                })
              : d('FocusManager').focusFirst(autoFocusQuery, a, {
                  focusWithAutoFocus: !0,
                  focusWithoutUserIntent: !0,
                  preventScroll: !0,
                })
          }
        },
        [autoFocusQuery, E],
      )
      useLayoutEffect(a, [a])
      useEffect(a, [a])
      var H = useCallback(
          function (a, c) {
            c === void 0 && (c = !1)
            var e = z.current,
              f = document.activeElement,
              g = C.current
            C.current = null
            var h = a == null ? void 0 : a.triggeredFocusRegionItems,
              i = a == null ? void 0 : a.restorationFocusRegionItem
            ;(h == null ? void 0 : h.size) &&
              h.forEach(function (a) {
                return (a.restorationFocusRegionItem = i)
              })
            a != null &&
              i != null &&
              (i.triggeredFocusRegionItems['delete'](a),
              (h == null ? void 0 : h.size) &&
                h.forEach(function (a) {
                  i.triggeredFocusRegionItems.add(a)
                }))
            E.lastFocused = null
            h = B == null ? void 0 : B.getActiveFocusRegion()
            var j =
              h != null
                ? h.restorationFocusRegionItem
                : {
                    lastFocused: g,
                  }
            h === a && (B == null ? void 0 : B.setActiveFocusRegion(i))
            g =
              (e !== null && f !== null && e.containsNode(f)) ||
              f == null ||
              f === document.body
            if ((autoRestoreFocus === !0 || onEscapeFocusRegion != null) && g) {
              var k = function (a) {
                a === void 0 && (a = !1)
                if ((j == null ? void 0 : j.lastFocused) != null) {
                  var b = !0,
                    c = !0,
                    e = document.activeElement
                  ;(a || e === null || e === document.body) &&
                    d('FocusManager').focusElement(j.lastFocused, {
                      preventScroll: b,
                      focusWithoutUserIntent: c,
                    })
                }
              }
              c
                ? k(c)
                : window.requestAnimationFrame(function () {
                    return k()
                  })
            }
          },
          [B, autoRestoreFocus, onEscapeFocusRegion, E],
        ),
        I = useCallback(
          function () {
            H(E, !0), onEscapeFocusRegion && onEscapeFocusRegion()
          },
          [H, onEscapeFocusRegion, E],
        )
      d('ReactKeyboardEvent.react').useKeyboard(
        z,
        useMemo(
          function () {
            return {
              onKeyDown: function (a) {
                if (
                  containFocusQuery == null ||
                  a.key !== 'Tab' ||
                  a.isDefaultPrevented()
                )
                  return
                var b = z.current
                b !== null &&
                  (a.shiftKey
                    ? d('FocusManager').focusPreviousContained(
                        containFocusQuery,
                        b,
                        a,
                        !0,
                        onEscapeFocusRegion != null ? I : void 0,
                      )
                    : d('FocusManager').focusNextContained(
                        containFocusQuery,
                        b,
                        a,
                        !0,
                        onEscapeFocusRegion != null ? I : void 0,
                      ))
              },
            }
          },
          [containFocusQuery, I, onEscapeFocusRegion],
        ),
      )
      useLayoutEffect(
        function () {
          C.current = D
          var a = E
          return function () {
            H(a)
          }
        },
        [B, autoRestoreFocus, H, E, D],
      )
      return h.jsx(unstable_Scope, {
        ref: stopOnFocusWithinPropagation,
        id: id,
        children: children,
      })
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    function focusRegionById(a, b, c) {
      a = _map.get(a)
      if (a) {
        a = a.DO_NOT_USE_queryFirstNode(b)
        if (a !== null) {
          d('FocusManager').focusElement(a, {
            preventScroll: c,
          })
          return a
        }
      }
      return null
    }
    g.FocusRegion = a
    g.focusRegionById = b
  },
  98,
)


*/
