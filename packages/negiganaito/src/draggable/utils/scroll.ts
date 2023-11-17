function g(a: any, b: any) {
  return !!b && (a === b.documentElement || a === b.body)
}

export function getTop(a: any) {
  let b
  if (a == null) return 0
  let c = a.ownerDocument
  return g(a, c)
    ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollTop) ||
        (c == null
          ? void 0
          : (b = c.documentElement) == null
          ? void 0
          : b.scrollTop) ||
        0
    : a.scrollTop || 0
}

export function setTop(a: any, b: any) {
  if (a == null) return
  let c = a.ownerDocument
  g(a, c)
    ? ((c == null ? void 0 : c.body) && (c.body.scrollTop = b || 0),
      (c == null ? void 0 : c.documentElement) &&
        (c.documentElement.scrollTop = b || 0))
    : (a.scrollTop = b || 0)
}

export function getLeft(a: any) {
  let b,
    c = a.ownerDocument
  return g(a, c)
    ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollLeft) ||
        (c == null
          ? void 0
          : (b = c.documentElement) == null
          ? void 0
          : b.scrollLeft) ||
        0
    : a.scrollLeft || 0
}

export function setLeft(a: any, b: any) {
  let c = a.ownerDocument
  g(a, c)
    ? ((c == null ? void 0 : c.body) && (c.body.scrollLeft = b || 0),
      (c == null ? void 0 : c.documentElement) &&
        (c.documentElement.scrollLeft = b || 0))
    : (a.scrollLeft = b || 0)
}

export const Scroll = {
  getTop,
  setTop,
  getLeft,
  setLeft,
}
