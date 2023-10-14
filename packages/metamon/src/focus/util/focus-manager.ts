import getTabbableNodes from './get-tabbable-nodes'

var h = !1,
  i = !1,
  j = !1,
  k = 500

function l() {
  try {
    var divElement = document.createElement('div')
    divElement.addEventListener(
      'focus',
      event => {
        event.preventDefault()
        event.stopPropagation()
      },
      !0,
    )
    divElement.focus(
      Object.defineProperty({}, 'preventScroll', {
        // eslint-disable-next-line getter-return
        get: () => {
          i = true
        },
      }),
    )
  } catch (error) {
    //
  }
}

function m(a: any) {
  a = a.parentElement
  var b = [],
    c = document.scrollingElement || document.documentElement
  while (a && a !== c) {
    var d = a,
      e = d.offsetHeight
    d = d.offsetWidth
    ;(e < a.scrollHeight || d < a.scrollWidth) &&
      b.push([a, a.scrollTop, a.scrollLeft])
    a = a.parentElement
  }
  c && b.push([c, c.scrollTop, c.scrollLeft])
  return b
}

function n(a: any) {
  for (var b = 0; b < a.length; b++) {
    var c = a[b],
      d = c[0],
      e = c[1]
    c = c[2]
    d.scrollTop = e
    d.scrollLeft = c
  }
}

export function getAllNodesFromOneOrManyQueries(a: any, b: any) {
  a = Array.isArray(a) ? a : [a]
  for (var c = 0; c < a.length; c++) {
    var d = b.DO_NOT_USE_queryAllNodes(a[c])
    if (d) return d
  }
  return null
}

export function getFirstNodeFromOneOrManyQueries(a: any, b: any) {
  a = Array.isArray(a) ? a : [a]
  for (var c = 0; c < a.length; c++) {
    var d = b.DO_NOT_USE_queryFirstNode(a[c])
    if (d) return d
  }
  return null
}

export function focusFirst(a: any, b: any, c: any) {
  c = c || {}
  var d = c.preventScroll,
    e = c.focusWithoutUserIntent
  c = c.focusWithAutoFocus
  a = getFirstNodeFromOneOrManyQueries(a, b)
  a != null &&
    focusElement(a, {
      preventScroll: d,
      focusWithoutUserIntent: e,
      focusWithAutoFocus: c,
    })
}

export function isFocusingWithoutUserIntent() {
  return h
}

export function wasElementAutoFocused(a: any) {
  return a._focusWithAutoFocus === !0
}

export function focusElement(a: any, b?: any) {
  b = b || {}
  var c = b.preventScroll,
    d = b.focusWithoutUserIntent
  b = b.focusWithAutoFocus
  if (a !== null) {
    j || ((j = !0), l())
    var e = a._tabIndexState
    if (e && e.canTab === !1) return
    e = e ? e.value : a.tabIndex
    a.tabIndex = -1
    var f = h
    c = c || !1
    b === !0 &&
      ((a._focusWithAutoFocus = !0),
      window.setTimeout(function () {
        a._focusWithAutoFocus = !1
      }, k))
    try {
      h = d || !1
      b = a.__lexicalEditor
      if (b !== void 0) b.focus()
      else if (!c) t(a)
      else if (i)
        t(a, {
          preventScroll: !0,
        })
      else {
        d = m(a)
        t(a)
        n(d)
      }
    } catch (a) {
      //
    } finally {
      h = f
    }
    a.tabIndex = e
  }
}

export function focusNext(a: any, b: any, d: any) {
  a = getTabbableNodes(a, b)
  b = a[0]
  var e = a[2],
    f = a[3]
  a = a[4]
  a !== null &&
    a !== e &&
    b &&
    focusElement(b[f + 1], {
      preventScroll: d,
    })
}

export function focusPrevious(a: any, b: any, d: any) {
  a = getTabbableNodes(a, b)
  b = a[0]
  var e = a[1],
    f = a[3]
  a = a[4]
  a !== null &&
    a !== e &&
    b &&
    focusElement(b[f - 1], {
      preventScroll: d,
    })
}

export function focusNextContained(a: any, b: any, d: any, e: any, f?: any) {
  a = getTabbableNodes(a, b)
  b = a[0]
  var g = a[1],
    h = a[2],
    i = a[3]
  a = a[4]
  if (a === null || b === null) return
  a === h
    ? f != null
      ? f()
      : e === !0 && (focusElement(g), d.preventDefault(), d.stopPropagation())
    : (focusElement(b[i + 1]), d.preventDefault(), d.stopPropagation())
}

export function focusPreviousContained(
  a: any,
  b: any,
  d: any,
  e: any,
  f?: any,
) {
  a = getTabbableNodes(a, b)
  b = a[0]
  var g = a[1],
    h = a[2],
    i = a[3]
  a = a[4]
  if (a === null || b === null) return
  a === g
    ? f != null
      ? f()
      : e === !0 && (focusElement(h), d.preventDefault(), d.stopPropagation())
    : (focusElement(b[i - 1]), d.preventDefault(), d.stopPropagation())
}

var t = function (a: any, b?: any) {
  ;(a.focus || HTMLElement.prototype.focus).call(a, b)
}
