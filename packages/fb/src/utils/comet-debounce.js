export function CometDebounce(a, b) {
  b = b === void 0 ? {} : b
  var d = b.leading,
    e = b.wait,
    f = !0,
    g
  function h() {
    for (var b = arguments.length, i = new Array(b), j = 0; j < b; j++)
      i[j] = arguments[j]
    var k
    if (d === !0) {
      k = function () {
        ;(f = !0), (g = null)
      }
      if (!f) {
        clearTimeout(g)
        g = setTimeout(k, e)
        return
      }
      f = !1
      a.apply(void 0, i)
    } else
      h.reset(),
        (k = function () {
          ;(g = null), a.apply(void 0, i)
        })
    g = setTimeout(k, e)
  }
  h.isPending = function () {
    return g != null
  }
  h.reset = function () {
    clearTimeout(g), (g = null), (f = !0)
  }
  return h
}
