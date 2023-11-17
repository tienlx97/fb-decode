import performance from './performance'

export default function performanceNavigationStart() {
  var g: any,
    a: any,
    h = (typeof window !== 'undefined' ? window : self) as any

  if ((g || (g = performance)).now)
    if (
      (g || (g = performance)).timing &&
      (g || (g = performance)).timing.navigationStart
    )
      a = function () {
        return (g || (g = performance)).timing.navigationStart
      }
    else {
      if (typeof h._cstart === 'number')
        a = function () {
          return h._cstart
        }
      else {
        var i = Date.now()
        a = function () {
          return i
        }
      }
      a.isPolyfilled = !0
    }
  else
    (a = function () {
      return 0
    }),
      (a.isPolyfilled = !0)

  return a
}
