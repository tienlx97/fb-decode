/* eslint-disable camelcase */
import {
  //@ts-ignore
  unstable_ImmediatePriority,
  unstable_UserBlockingPriority,
  unstable_NormalPriority,
  unstable_LowPriority,
  unstable_IdlePriority,
  unstable_getCurrentPriorityLevel,
  unstable_runWithPriority,
  unstable_now,
  unstable_scheduleCallback,
  unstable_cancelCallback,
  unstable_wrapCallback,
  unstable_pauseExecution,
  unstable_continueExecution,
  //
  unstable_shouldYield,
  unstable_requestPaint,
  unstable_forceFrameRate,
  unstable_Profiling,
} from './scheduler.classic'
import { TimeSlice } from './time-slice'

export const unstable__scheduleCallback = function (a: any, c: any, d?: any) {
  // var e = b('ifRequireable')(
  //   'TimeSlice',
  //   function (a) {
  //     return a.guard(c, 'unstable_scheduleCallback', {
  //       propagationType: a.PropagationType.CONTINUATION,
  //       registerCallStack: !0,
  //     })
  //   },
  //   function () {
  //     return c
  //   },
  // )

  const e = () =>
    TimeSlice.guard(c, 'unstable_scheduleCallback', {
      propagationType: TimeSlice.PropagationType.CONTINUATION,
      registerCallStack: !0,
    })

  return unstable_scheduleCallback(a, e, d)
}

export {
  unstable_ImmediatePriority,
  unstable_UserBlockingPriority,
  unstable_NormalPriority,
  unstable_LowPriority,
  unstable_IdlePriority,
  unstable_getCurrentPriorityLevel,
  unstable_runWithPriority,
  unstable_now,
  unstable_pauseExecution,
  unstable_continueExecution,
  //
  unstable_shouldYield,
  unstable_requestPaint,
  unstable_forceFrameRate,
  unstable_Profiling,
}

export const unstable__cancelCallback = function (a: any) {
  return unstable_cancelCallback(a)
}

export const unstable__wrapCallback = (a: any) => {
  // var c = b('ifRequireable')(
  //   'TimeSlice',
  //   function (b) {
  //     return b.guard(a, 'unstable_wrapCallback', {
  //       propagationType: b.PropagationType.CONTINUATION,
  //       registerCallStack: !0,
  //     })
  //   },
  //   function () {
  //     return a
  //   },
  // )

  const c = () =>
    TimeSlice.guard(a, 'unstable_wrapCallback', {
      propagationType: TimeSlice.PropagationType.CONTINUATION,
      registerCallStack: !0,
    })

  return unstable_wrapCallback(c)
}
