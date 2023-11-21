// import performance from './performance'

// @ts-ignore
import performance from 'fbjs/lib/performance'

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

// const h = typeof window !== 'undefined' ? window : self

// export let _performanceNavigationStart: any

// if (performance.now)
//   if (performance.timing && performance.timing.navigationStart)
//     _performanceNavigationStart = function () {
//       return performance.timing.navigationStart
//     }
//   else {
//     // @ts-ignore
//     if (typeof h._cstart === 'number')
//       _performanceNavigationStart = function () {
//         // @ts-ignore
//         return h._cstart
//       }
//     else {
//       var i = Date.now()
//       _performanceNavigationStart = function () {
//         return i
//       }
//     }
//     _performanceNavigationStart.isPolyfilled = !0
//   }
// else
//   (_performanceNavigationStart = function () {
//     return 0
//   }),
//     (_performanceNavigationStart.isPolyfilled = !0)
