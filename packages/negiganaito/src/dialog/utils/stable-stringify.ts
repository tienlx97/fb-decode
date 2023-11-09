function g(a: any) {
  return a !== null && Object.prototype.toString.call(a) === '[object Object]'
}

export function stableStringify(a: any, b?: any): any {
  b === void 0 && (b = !1)
  var c = Array.isArray(a),
    d = g(a)
  if (c || d) {
    var e = Object.keys(a)
    if (e.length) {
      e = e.sort()
      var f = []
      for (var i = 0; i < e.length; i++) {
        var j = e[i],
          k = a[j]
        if (b && k == null && d) continue
        var l
        g(k) || Array.isArray(k)
          ? (l = stableStringify(k, b))
          : (l = JSON.stringify(k))
        f.push(j + ':' + l)
      }
      if (c) return '[' + f.join(',') + ']'
      else return '{' + f.join(',') + '}'
    }
  }
  return JSON.stringify(a)
}
