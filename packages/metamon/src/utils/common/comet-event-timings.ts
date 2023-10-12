import performanceNavigationStart from './performance-navigation-start'
import performanceNow from './performance-now'

function getCurrentQueueTime(a?: any) {
  let b = performanceNow(),
    d = null,
    e =
      document.createEvent('MouseEvent').timeStamp <
      performanceNavigationStart()

  e && a != null && a < b && ((d = b - a), (b = a))
  return [b, d]
}
