function Collection(a: any, b: any) {
  if (!a.__collection__) {
    var c = new Function()
    for (var d in a.prototype) c.prototype[d] = Collection._call.bind(null, d)
    a.__collection__ = c
  }
  d = new a.__collection__()
  // @ts-ignore
  d._elements = b
  return d
}

Collection._call = function (a: any) {
  var b = Array.prototype.slice.call(arguments, 1)
  // @ts-ignore
  this._elements.forEach(function (c) {
    c[a].apply(c, b)
  })
  return this
}
