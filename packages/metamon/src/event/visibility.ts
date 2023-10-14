import exec from '../utils/common/execution-environment'
import { BaseEventEmitter } from './base-event-emitter'

var h: any = undefined,
  i: any = undefined

if (exec.canUseDOM) {
  if (document.hidden) {
    h = 'hidden'
    i = 'visibilitychange'
  } else if ((document as any).mozHidden) {
    h = 'mozHidden'
    i = 'mozvisibilitychange'
  } else if ((document as any).msHidden) {
    h = 'msHidden'
    i = 'msvisibilitychange'
  } else if ((document as any).webkitHidden) {
    h = 'webkitHidden'
    i = 'webkitvisibilitychange'
  }
}

class Visibility extends BaseEventEmitter {
  HIDDEN: string
  VISIBLE: string
  hiddenKey: string
  hiddenEvent: string

  constructor() {
    super()
    this.HIDDEN = 'hidden'
    this.VISIBLE = 'visible'
    this.hiddenKey = h
    this.hiddenEvent = i
  }

  isHidden() {
    // @ts-ignore
    return h ? document[h] : !1
  }

  isSupported() {
    // @ts-ignore
    return exec.canUseDOM && document.addEventListener && i !== void 0
  }
}

const visibility = new Visibility()
visibility.isSupported() &&
  document.addEventListener(visibility.hiddenEvent, () => {
    /*

    c('TimeSlice').guard(function (a) {
      j.emit(j.isHidden() ? j.HIDDEN : j.VISIBLE, {
        changeTime: a.timeStamp,
      })
    }, 'visibility change')

*/
  })

export default visibility
