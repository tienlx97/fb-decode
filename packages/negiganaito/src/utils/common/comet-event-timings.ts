import performanceNavigationStart from './performance-navigation-start'
// import performanceNow from './performance-now'

// @ts-ignore
import performanceNow from 'fbjs/lib/performanceNow'

export function getCurrentQueueTime(a?: any) {
  let b = performanceNow(),
    d = null,
    e =
      document.createEvent('MouseEvent').timeStamp <
      performanceNavigationStart()

  e && a != null && a < b && ((d = b - a), (b = a))
  return [b, d]
}
