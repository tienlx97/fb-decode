export function isPrimitive(obj: any) {
  switch (Object.prototype.toString.call(obj)) {
    case '[object String]':
    case '[object Number]':
    case '[object Boolean]':
    case '[object Null]':
    case '[object Undefined]':
      return !0
  }
  return !1
}
