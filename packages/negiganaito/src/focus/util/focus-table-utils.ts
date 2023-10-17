/* eslint-disable no-self-assign */
import { filterNulls } from '@negiganaito/utils/common/filter-nulls'
import { tableCellScopeQuery } from './focus-scope-queries'
import { setElementCanTab } from './set-element-can-tab'
import { focusElement } from './focus-manager'
import { stopFocusKeyboardEventPropagation } from './focus-keyboard-event-propagation'

let j = new Set(['button', 'checkbox', 'radio', 'reset', 'submit'])
let k = new Set(['checkbox', 'link', 'switch', 'radio', 'button'])
let l = new Set(['a', 'button'])

export function isPrintableCharacter(a: any) {
  return a.length === 1
}

function h(a: any) {
  return a instanceof HTMLElement || a instanceof SVGElement
}

export function hasUnassociatedLeafNodes(a: any, b: any) {
  let d: any,
    e = b instanceof HTMLElement && b.id !== '' ? b.id : null,
    f = new Set(
      b instanceof HTMLElement
        ? filterNulls(
            [].concat(
              ((d = b.getAttribute('aria-labelledby')) != null ? d : '').split(
                ' ',
              ),
              ((d = b.getAttribute('aria-describedby')) != null ? d : '').split(
                ' ',
              ),
              ((d = b.getAttribute('aria-owns')) != null ? d : '').split(' '),
              //@ts-ignore
              [b.getAttribute('aria-errormessage')],
            ),
          ).filter(function (a) {
            return a !== ''
          })
        : [],
    )
  d = document.createTreeWalker(
    a,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
    {
      acceptNode: function (a: any) {
        if (a === b) return NodeFilter.FILTER_REJECT
        if (a.nodeType === Node.TEXT_NODE && a.textContent.trim() === '')
          return NodeFilter.FILTER_REJECT
        if (h(a) && f.has(a.id)) return NodeFilter.FILTER_REJECT
        if (h(a) && a.getAttribute('aria-hidden') === 'true')
          return NodeFilter.FILTER_REJECT
        if (a instanceof HTMLLabelElement && (a.htmlFor === e || a.contains(b)))
          return NodeFilter.FILTER_REJECT
        if (a.hasChildNodes()) return NodeFilter.FILTER_SKIP
        return h(a) &&
          a.getAttribute('aria-label') == null &&
          a.getAttribute('aria-labelledby') == null &&
          a.getAttribute('aria-describedby') == null &&
          a.getAttribute('alt') == null &&
          a.getAttribute('title') == null
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT
      },
    },
  )

  let g = d.currentNode
  while (g === a) g = d.nextNode()
  return g != null
}

export function isArrowKeyLessOperationElement(a: any) {
  let b = a.getAttribute('role'),
    c = a.tagName.toLowerCase(),
    d: any = a instanceof HTMLInputElement ? a.type : null
  if (a instanceof HTMLInputElement && j.has(d)) return !0
  return k.has(b) || l.has(c) ? !0 : !1
}

function n(a: any) {
  var b = []
  a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: function (a) {
      return a instanceof HTMLElement && isArrowKeyLessOperationElement(a)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP
    },
  })
  var c = a.nextNode()
  while (c) b.push(c), (c = a.nextNode())
  return b
}

export function getCellSingleInteractiveContentNode(a: any, b: any) {
  if (!b) return null
  b = a.DO_NOT_USE_queryFirstNode(tableCellScopeQuery)
  if (b == null) return null
  a = n(b)
  // eslint-disable-next-line no-self-assign
  a = (a = a) != null ? a : []
  var c = a[0]
  a = a.slice(1)
  if (c != null && a.length === 0 && !hasUnassociatedLeafNodes(b, c)) return c
}

export function focusCell(a: any, b: any, c?: any) {
  if (b) {
    var e = b.scopeRef.current
    if (e !== null) {
      var f
      f = getCellSingleInteractiveContentNode(
        e,
        (f = b.allowWithinCellNavigation) != null ? f : !1,
      )
      a =
        (f = (f = f) != null ? f : e.DO_NOT_USE_queryFirstNode(a)) != null
          ? f
          : b.focusStaticCells === !0
          ? e.DO_NOT_USE_queryFirstNode(tableCellScopeQuery)
          : null
      a !== null &&
        (document.activeElement != null &&
          setElementCanTab(document.activeElement, !1, b.focusStaticCells),
        setElementCanTab(a, !0, b.focusStaticCells),
        focusElement(a),
        c != null && (c.preventDefault(), stopFocusKeyboardEventPropagation(c)))
    }
  }
}

export function focusRow(a: any, b: any, c: any) {
  if (b != null) {
    b = b.DO_NOT_USE_queryFirstNode(a)
    b !== null &&
      (setElementCanTab(b, !0),
      focusElement(b),
      c.preventDefault(),
      stopFocusKeyboardEventPropagation(c))
  }
}

function s(a: any, b: any) {
  b = (a = a.getChildContextValues(b).filter(Boolean)) != null ? a : []
  a = 0
  for (var c = 0; c < b.length; c++) {
    var d = b[c]
    d = d && ((d = d.colSpan) != null ? d : 1)
    a += d
  }
  return a
}

export function checkRowForMatch(a: any, b: any, c: any, d: any, e: any) {
  d = d[c]
  c = s(d, e)
  var f = 0,
    g,
    h,
    i
  do {
    g = b - f
    if (g >= 0) {
      i = getCellByColumnIndex(d, g, e, a)
      if (i) return i
    }
    h = b + f
    if (h <= c) {
      i = getCellByColumnIndex(d, h, e, a)
      if (i) return i
    }
    f++
  } while (g >= 0 && h <= c)
  return null
}

export function handleOnNavigateBehavior(
  a: any,
  b: any,
  c: any,
  d: any,
  e: any,
  f: any,
  g: any,
  h: any,
) {
  var i = b.onNavigate
  if (i) {
    var j = !1
    e = getRowCellsWithIndexes(e, d, h)
    var k = e[1]
    e = getRowsWithIndex(b, d, g)
    var l = e[0],
      m = e[1]
    if (l === null) return !1
    b = {
      currentCellIndex: k,
      currentRowIndex: m,
      event: c,
      focusCell: function (a: any, b: any) {
        focusCell(b || f, a, c)
      },
      getCell: function (a: any, b: any) {
        a = l[a]
        return a != null ? getCellByColumnIndex(a, b, h) : null
      },
      getCellByTag: function (a: any) {
        var b = checkRowForMatch(a, k, m, l, h)
        if (b) return b
        var c = l.length,
          d = m + 1
        // eslint-disable-next-line no-constant-condition
        while (!0) {
          if (d === m) return null
          if (d > c - 1) {
            d = 0
            continue
          }
          b = checkRowForMatch(a, k, d, l, h)
          if (b) return b
          d++
        }
        return null
      },
      preventDefault: function () {
        j = !0
      },
      type: a,
    }
    i(b)
    if (j) return !0
  }
  return !1
}

export function getCellByColumnIndex(a: any, b: any, c: any, d?: any) {
  a = a.getChildContextValues(c).filter(function (a: any) {
    return a != null && (d === void 0 || a.tag === d)
  })
  c = 0
  for (var e = 0; e < a.length; e++) {
    var f = a[e]
    if (f) {
      c += (f && f.colSpan) || 1
      if (c > b) return f
    }
  }
  return null
}

export function focusCellByColumnIndex(a: any, b: any, c: any, d: any, e: any) {
  c = getCellByColumnIndex(b, c, d)
  if (c !== null) {
    focusCell(a, c, e)
    return
  }
  c = b.getChildContextValues(d).filter(Boolean)
  c.length > 0 && focusCell(a, c[c.length - 1], e)
}

export function getLength(a: any, b: any) {
  b = (a = a.getChildContextValues(b).filter(Boolean)) != null ? a : []
  a = 0
  for (var c = 0; c < b.length; c++) {
    var d = b[c]
    d = d && ((d = d.colSpan) != null ? d : 1)
    a += d
  }
  return a
}

export function getCellIndexes(a: any, b: any) {
  var c = 0
  for (var d = 0; d < a.length; d++) {
    var e = a[d]
    if (e === null) continue
    if (e.scopeRef.current === b) return [d, d + c]
    e = e.colSpan
    typeof e === 'number' && (c += e - 1)
  }
  return [-1, -1]
}

export function getRowCells(a: any, b: any) {
  return a.getChildContextValues(b).filter(Boolean)
}

export function getRowCellsWithIndexes(a: any, b: any, c: any) {
  b = getRowCells(b, c)
  if (b.length > 0) {
    c = getCellIndexes(b, a)
    a = c[0]
    c = c[1]
    return [b, a, c]
  }
  return [null, -1, -1]
}

export function getRows(a: any, b: any, c: any) {
  if (a) {
    a = a.scopeRef.current
    if (a !== null) {
      a = a.getChildContextValues(b)
      b = []
      for (var d = 0; d < a.length; d++) {
        var e = a[d]
        if (e) {
          var f
          f = (f = e.scopeRef) == null ? void 0 : f.current
          e = (e = c == null ? void 0 : c(e)) != null ? e : !0
          f && e && b.push(f)
        }
      }
      return b
    }
  }
  return null
}

export function getRowsWithIndex(a: any, b: any, c: any, d?: any) {
  a = getRows(a, c, d)
  if (b && a && a.length > 0) {
    c = a.indexOf(b)
    return [a, c]
  }
  return [null, -1]
}

export function hasModifierKey(a: any) {
  var b = a.altKey,
    c = a.ctrlKey,
    d = a.metaKey
  a = a.shiftKey
  return b === !0 || c === !0 || d === !0 || a === !0
}
