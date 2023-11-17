/* eslint-disable camelcase */
import {
  canElementTab,
  focusCell,
  focusCellByColumnIndex,
  focusElement,
  focusNextContained,
  focusPreviousContained,
  getCellSingleInteractiveContentNode,
  getLength,
  getRowCellsWithIndexes,
  getRowsWithIndex,
  handleOnNavigateBehavior,
  hasFocusKeyboardEventPropagationStopped,
  hasModifierKey,
  isArrowKeyLessOperationElement,
  isPrintableCharacter,
  setElementCanTab,
} from '@negiganaito/focus/util'
import { useKeyboard } from '@negiganaito/keyboards'
import { useFocusWithin } from '@negiganaito/keyboards/hooks/react-focus-event'
import React, {
  createContext,
  useContext,
  useMemo,
  useRef,
  // @ts-ignore
  unstable_Scope,
} from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type FocusTableProps = {
  children?: any
}

const m = 5

type HProps = {
  children?: any
  wrapX?: boolean
  wrapY?: boolean
  wrapXToNextLine?: boolean
  tabScopeQuery?: any
  allowModifiers?: any
  pageJumpSize?: any
  onNavigate?: any
  disabled?: boolean
  withinCellTabScopeQuery?: any
  focusStaticCells?: any
}

type OProps = {
  children?: any
}

type QProps = {
  children?: any
  colSpan?: any
  tag?: any
}

const isRTL = false

function n(a: any, b: any) {
  if (hasModifierKey(a) && b) {
    a = b.allowModifiers
    if (a !== !0) return !0
  }
}

export function createFocusTable(a: any) {
  const c = createContext<any>(null)
  const e = createContext<any>(null)
  const g = createContext(null)

  function p(a: any, b: any, c: any) {
    a = a.DO_NOT_USE_queryAllNodes(b)
    if (a != null)
      for (b = 0; b < a.length; b++) {
        const e = a[b]
        setElementCanTab(e, c)
      }
  }

  function h({
    children,
    wrapX,
    wrapY,
    wrapXToNextLine,
    tabScopeQuery,
    allowModifiers,
    pageJumpSize = m,
    onNavigate,
    disabled,
    withinCellTabScopeQuery,
    focusStaticCells = false,
  }: HProps) {
    const w = useRef(null)
    const e = useMemo(() => {
      return {
        scopeRef: w,
        wrapXToNextLine,
        wrapX,
        wrapY,
        tabScopeQuery,
        allowModifiers,
        pageJumpSize,
        onNavigate,
        disabled,
        withinCellTabScopeQuery,
        focusStaticCells,
      }
    }, [
      wrapXToNextLine,
      wrapX,
      wrapY,
      tabScopeQuery,
      allowModifiers,
      pageJumpSize,
      onNavigate,
      disabled,
      withinCellTabScopeQuery,
      focusStaticCells,
    ])

    const x = useRef(!1)

    const q = useFocusWithin(
      w,
      useMemo(
        function () {
          return {
            onFocusWithin: function (b) {
              x.current ||
                ((x.current = !0),
                w.current &&
                  a &&
                  (p(w.current, a, !1),
                  setElementCanTab(b.target, !0, focusStaticCells)))
            },
          }
        },
        [x, focusStaticCells],
      ),
    )

    return jsx(c.Provider, {
      value: e,
      children: jsx(unstable_Scope, {
        ref: q,
        children,
      }),
    })
  }

  function o({ children }: OProps) {
    const c = useRef(null)
    const d = useMemo(function () {
      return {
        scopeRef: c,
      }
    }, [])
    return jsx(e.Provider, {
      value: d,
      children: jsx(unstable_Scope, {
        ref: c,
        children,
      }),
    })
  }

  function q({ children, colSpan, tag }: QProps) {
    const q = useContext(c)
    const f = useContext(e)
    const r = f == null ? void 0 : f.scopeRef
    const s = useRef(null)
    const t = useRef(!1)
    const u = (q == null ? void 0 : q.withinCellTabScopeQuery) != null
    const v = q == null ? void 0 : q.focusStaticCells

    useKeyboard(
      s,
      useMemo(
        function () {
          return {
            onKeyDown: function (b: any) {
              if (q && q.disabled === !0) return
              if (hasFocusKeyboardEventPropagationStopped(b)) return
              var c: any = s.current
              if (c === null || q === null) return
              if (r == null) return
              var f = r.current
              if (f === null) return
              var h = b.key,
                i = u && getCellSingleInteractiveContentNode(c, u) == null,
                j = t.current
              if (h === 'Tab' && q) {
                var k = q.tabScopeQuery,
                  l = q.scopeRef.current
                if (k && l) {
                  if (handleOnNavigateBehavior('TAB', q, b, f, c, k, e, g))
                    return
                  var m = q.withinCellTabScopeQuery
                  j && m != null
                    ? b.shiftKey
                      ? focusPreviousContained(m, c, b, !0)
                      : focusNextContained(m, c, b, !0)
                    : (p(l, k, !1),
                      document.activeElement != null &&
                        setElementCanTab(document.activeElement, !0, v))
                }
                return
              }
              m = b.ctrlKey || b.metaKey
              l = h
              isRTL &&
                (h === 'ArrowRight'
                  ? (l = 'ArrowLeft')
                  : h === 'ArrowLeft' && (l = 'ArrowRight'))
              switch (l) {
                case 'Home':
                  if (handleOnNavigateBehavior('HOME', q, b, f, c, a, e, g))
                    return
                  if (j) return
                  k = getRowCellsWithIndexes(c, f, g)
                  l = k[0]
                  k = k[1]
                  var o: any = getRowsWithIndex(q, f, e),
                    w = o[0]
                  o = o[1]
                  if (l !== null && w !== null)
                    if (m) {
                      if (o !== 0 || k !== 0) {
                        l = w[0]
                        focusCellByColumnIndex(a, l, 0, g, b)
                      }
                    } else if (k !== 0) {
                      l = w[o]
                      focusCellByColumnIndex(a, l, 0, g, b)
                    }
                  return
                case 'End':
                  if (handleOnNavigateBehavior('END', q, b, f, c, a, e, g))
                    return
                  if (j) return
                  k = getRowCellsWithIndexes(c, f, g)
                  w = k[0]
                  o = k[1]
                  l = getRowsWithIndex(q, f, e)
                  k = l[0]
                  l = l[1]
                  if (w !== null && k !== null)
                    if (m) {
                      if (l !== k.length - 1 || o !== w.length - 1) {
                        l = k[k.length - 1]
                        k = l.getChildContextValues(g).filter(Boolean)
                        k.length > 0 && focusCell(a, k[k.length - 1], b)
                      }
                    } else
                      o !== w[w.length - 1] && focusCell(a, w[w.length - 1], b)
                  return
                case 'ArrowUp':
                  if (n(b, q)) return
                  if (handleOnNavigateBehavior('PREV_ROW', q, b, f, c, a, e, g))
                    return
                  if (j) return
                  l = getRowCellsWithIndexes(c, f, g)
                  k = l[0]
                  o = l[2]
                  if (k !== null && q) {
                    w = getRowsWithIndex(q, f, e)
                    l = w[0]
                    k = w[1]
                    if (l !== null)
                      if (k === 0) {
                        w = q.wrapY
                        if (w === !0 && !m) {
                          w = l[l.length - 1]
                          focusCellByColumnIndex(a, w, o, g, b)
                        }
                      } else if (m) {
                        w = l[0]
                        focusCellByColumnIndex(a, w, o, g, b)
                      } else {
                        w = l[k - 1]
                        focusCellByColumnIndex(a, w, o, g, b)
                      }
                  }
                  return
                case 'PageUp':
                  if (handleOnNavigateBehavior('PAGE_UP', q, b, f, c, a, e, g))
                    return
                  if (j) return
                  l = getRowCellsWithIndexes(c, f, g)
                  k = l[0]
                  w = l[2]
                  o = getRowsWithIndex(q, f, e)
                  l = o[0]
                  o = o[1]
                  if (k !== null && l !== null && q && o !== 0) {
                    k = q.pageJumpSize
                    l = l[Math.max(0, o - k)]
                    focusCellByColumnIndex(a, l, w, g, b)
                  }
                  return
                case 'ArrowDown':
                  if (n(b, q)) return
                  if (handleOnNavigateBehavior('NEXT_ROW', q, b, f, c, a, e, g))
                    return
                  if (j) return
                  o = getRowCellsWithIndexes(c, f, g)
                  k = o[0]
                  l = o[2]
                  w = getRowsWithIndex(q, f, e)
                  o = w[0]
                  w = w[1]
                  if (k !== null && o !== null && q && w !== -1)
                    if (w === o.length - 1) {
                      k = q.wrapY
                      if (k === !0 && !m) {
                        k = o[0]
                        focusCellByColumnIndex(a, k, l, g, b)
                      }
                    } else if (m) {
                      k = o[o.length - 1]
                      focusCellByColumnIndex(a, k, l, g, b)
                    } else {
                      m = o[w + 1]
                      focusCellByColumnIndex(a, m, l, g, b)
                    }
                  return
                case 'PageDown':
                  if (
                    handleOnNavigateBehavior('PAGE_DOWN', q, b, f, c, a, e, g)
                  )
                    return
                  if (j) return
                  k = getRowCellsWithIndexes(c, f, g)
                  o = k[0]
                  w = k[2]
                  m = getRowsWithIndex(q, f, e)
                  l = m[0]
                  k = m[1]
                  if (o !== null && l !== null && q && k !== l.length - 1) {
                    m = q.pageJumpSize
                    o = l[Math.min(l.length - 1, k + m)]
                    focusCellByColumnIndex(a, o, w, g, b)
                  }
                  return
                case 'ArrowLeft':
                  if (n(b, q)) return
                  if (
                    handleOnNavigateBehavior('PREV_CELL', q, b, f, c, a, e, g)
                  )
                    return
                  if (j) return
                  l = getRowCellsWithIndexes(c, f, g)
                  k = l[0]
                  m = l[1]
                  o = getRowsWithIndex(q, f, e)
                  w = o[0]
                  l = o[1]
                  if (k !== null && w !== null && q)
                    if (m > 0) focusCell(a, k[m - 1], b)
                    else if (m === 0) {
                      o = q.wrapX
                      m = q.wrapXToNextLine
                      o === !0
                        ? focusCell(a, k[k.length - 1], b)
                        : m === !0 &&
                          w[l - 1] &&
                          focusCellByColumnIndex(
                            a,
                            w[l - 1],
                            getLength(w[l - 1], g),
                            g,
                            b,
                          )
                    }
                  return
                case 'ArrowRight':
                  if (n(b, q)) return
                  if (
                    handleOnNavigateBehavior('NEXT_CELL', q, b, f, c, a, e, g)
                  )
                    return
                  if (j) return
                  o = getRowCellsWithIndexes(c, f, g)
                  k = o[0]
                  m = o[1]
                  w = getRowsWithIndex(q, f, e)
                  l = w[0]
                  o = w[1]
                  if (k !== null && l !== null && q && m !== -1)
                    if (m === k.length - 1) {
                      w = q.wrapX
                      var x = q.wrapXToNextLine
                      w === !0
                        ? focusCell(a, k[0], b)
                        : x === !0 &&
                          l[o + 1] &&
                          focusCellByColumnIndex(a, l[o + 1], 0, g, b)
                    } else focusCell(a, k[m + 1], b)
                  return
                case 'Enter':
                  if (!i || j) return
                  if (handleOnNavigateBehavior('ENTER', q, b, f, c, a, e, g))
                    return
                  w = q == null ? void 0 : q.withinCellTabScopeQuery
                  if (w) {
                    x = c.DO_NOT_USE_queryFirstNode(w)
                    x != null &&
                      ((t.current = !0), p(c, w, !0), focusElement(x))
                  }
                  return
                case 'Escape':
                  if (!i || !j) return
                  if (handleOnNavigateBehavior('ESC', q, b, f, c, a, e, g))
                    return
                  l = q == null ? void 0 : q.tabScopeQuery
                  if (l) {
                    t.current = !1
                    o = c.DO_NOT_USE_queryAllNodes(l)
                    if (o !== null)
                      for (k = 0; k < o.length; k++) {
                        m = o[k]
                        setElementCanTab(m, !1, v)
                      }
                    focusCell(
                      l,
                      {
                        scopeRef: s,
                      },
                      b,
                    )
                  }
                  return
                default:
                  isPrintableCharacter(h) &&
                    handleOnNavigateBehavior('PRINT_CHAR', q, b, f, c, a, e, g)
              }
            },
          }
        },
        [r, q, u],
      ),
    )

    const w = useMemo(
      function () {
        return {
          scopeRef: s,
          colSpan,
          tag,
          allowWithinCellNavigation: u,
          focusStaticCells: v,
        }
      },
      [colSpan, u, tag, v],
    )

    const x = q == null ? void 0 : q.tabScopeQuery

    const reff = useFocusWithin(
      s,
      useMemo(
        function () {
          return {
            onFocusWithin: function (b) {
              if (a != null) {
                var c: any
                c =
                  (c = s.current) == null
                    ? void 0
                    : c.DO_NOT_USE_queryFirstNode(a)
                var e: any = b.target === c
                if (e && c && !canElementTab(c)) {
                  e = q == null ? void 0 : q.scopeRef.current
                  e && p(e, a, !1)
                  setElementCanTab(c, !0, v)
                }
              }
              if (x != null) {
                c =
                  (e = s.current) == null
                    ? void 0
                    : e.DO_NOT_USE_queryFirstNode(x)
                e = b.target === c
                var f = w.allowWithinCellNavigation === !0
                e && f && focusCell(x, w)
                c != null &&
                  !e &&
                  f &&
                  b.target instanceof HTMLElement &&
                  !isArrowKeyLessOperationElement(b.target) &&
                  (t.current = !0)
              }
            },
            onBlurWithin: function () {
              t.current = !1
            },
          }
        },
        [x, w, q == null ? void 0 : q.scopeRef],
      ),
    )

    return jsx(g.Provider, {
      value: w,
      children: jsx(unstable_Scope, {
        ref: reff,
        children: children,
      }),
    })
  }

  return [h, o, q]
}
