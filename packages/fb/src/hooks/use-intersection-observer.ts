import DOM from '../utils/dom-rect-read-only'

const k = {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
  l = DOM.fromRect(),
  m = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  }

function n(a: any) {
  var b
  if (a == null) {
    b = k
  } else if (typeof a === 'string') {
    return a
  } else
    typeof a === 'number'
      ? (b = {
          bottom: a,
          left: a,
          right: a,
          top: a,
        })
      : (b = Object.assign({}, k, a))
  a = b
  b = a.bottom
  var c = a.left,
    d = a.right
  a = a.top

  return a + 'px ' + d + 'px ' + b + 'px ' + c + 'px'
}

function o(a: any, b: any, d: any, e: any) {
  var f = b.root,
    g = b.rootMargin,
    h = b.threshold
  f = f === null ? null : f()
  var i =
    a == null ||
    a.element !== d ||
    a.onIntersect !== e ||
    a.observedRoot !== f ||
    a.rootMargin !== g ||
    a.threshold !== h
  if (i) {
    a && a.subscription.remove()
    i = c('observeIntersection')(d, e, {
      root: f,
      rootMargin: n(g),
      threshold: h,
    })
    return Object.assign({}, b, {
      element: d,
      observedRoot: f,
      onIntersect: e,
      subscription: i,
    })
  }
  return a
}
