export function Collection(a: any, b: any) {
  if (!a.__collection__) {
    let c = new Function()
    for (let d in a.prototype) c.prototype[d] = Collection._call.bind(null, d)
    a.__collection__ = c
  }
  const coll = new a.__collection__()
  // @ts-ignore
  coll._elements = b
  return coll
}

Collection._call = function (a: any) {
  const b = Array.prototype.slice.call(arguments, 1)
  // @ts-ignore
  this._elements.forEach(function (c) {
    c[a].apply(c, b)
  })
  return this
}
