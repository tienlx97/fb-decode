/* eslint-disable camelcase */
import {
  unstable_ImmediatePriority,
  unstable_UserBlockingPriority,
  unstable_NormalPriority,
  unstable_LowPriority,
  unstable_IdlePriority,
  unstable__scheduleCallback,
  unstable__cancelCallback,
  unstable_shouldYield,
  unstable_getCurrentPriorityLevel,
  unstable_runWithPriority,
  unstable_Profiling,
  unstable_forceFrameRate,
} from './scheduler-fb-internals_DO_NOT_USE'

const priorities = {
  unstable_Immediate: unstable_ImmediatePriority,
  unstable_UserBlocking: unstable_UserBlockingPriority,
  unstable_Normal: unstable_NormalPriority,
  unstable_Low: unstable_LowPriority,
  unstable_Idle: unstable_IdlePriority,
}

let h = !1

const JSScheduler = {
  priorities,
  shouldYield: unstable_shouldYield,
  getCurrentPriorityLevel: unstable_getCurrentPriorityLevel,
  runWithPriority: unstable_runWithPriority,
  runWithPriority_DO_NOT_USE: unstable_runWithPriority,

  defer: function (a: any) {
    const b = JSScheduler.getCurrentPriorityLevel()
    return unstable__scheduleCallback(b, a)
  },

  getCallbackScheduler: function () {
    var a = JSScheduler.getCurrentPriorityLevel()
    return function (b: any) {
      return unstable__scheduleCallback(a, b)
    }
  },

  getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE: function () {
    var a = JSScheduler.getCurrentPriorityLevel()
    return function (c: any) {
      return unstable__scheduleCallback(
        priorities.unstable_UserBlocking,
        function () {
          unstable_runWithPriority(a, c)
        },
      )
    }
  },

  deferUserBlockingRunAtCurrentPri_DO_NOT_USE: function (a: any) {
    var c = JSScheduler.getCurrentPriorityLevel()
    return unstable__scheduleCallback(
      priorities.unstable_UserBlocking,
      function () {
        unstable_runWithPriority(c, a)
      },
    )
  },

  scheduleImmediatePriCallback: function (a: any) {
    return unstable__scheduleCallback(priorities.unstable_Immediate, a)
  },
  scheduleUserBlockingPriCallback: function (a: any) {
    return unstable__scheduleCallback(priorities.unstable_UserBlocking, a)
  },
  scheduleNormalPriCallback: function (a: any) {
    return unstable__scheduleCallback(priorities.unstable_Normal, a)
  },
  scheduleLoggingPriCallback: function (a: any) {
    return unstable__scheduleCallback(priorities.unstable_Low, a)
  },
  scheduleSpeculativeCallback: function (a: any) {
    return unstable__scheduleCallback(priorities.unstable_Idle, a)
  },
  cancelCallback: function (a: any) {
    unstable__cancelCallback(a)
  },

  scheduleDelayedCallback_DO_NOT_USE: function (a: any, b: any, c: any) {
    a = unstable__scheduleCallback(a, c, {
      delay: b,
    })
    return a
  },
  cancelDelayedCallback_DO_NOT_USE: function (a: any) {
    // a = a
    return unstable__cancelCallback(a)
  },
  startEventProfiling: function () {
    var a
    a =
      (a = unstable_Profiling) == null ? void 0 : a.startLoggingProfilingEvents
    typeof a == 'function' && a()
  },
  stopEventProfiling: function () {
    var a
    a = (a = unstable_Profiling) == null ? void 0 : a.stopLoggingProfilingEvents
    return typeof a == 'function' ? a() : null
  },

  makeSchedulerGlobalEntry: function (c: any, d: any) {
    c === void 0 && (c = null),
      d === void 0 && (d = !1),
      c !== null && c !== void 0 && unstable_forceFrameRate(c),
      d && JSScheduler.startEventProfiling(),
      ((window as any).ScheduleJSWork = function (a: any) {
        return function () {
          for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++)
            c[d] = arguments[d]
          h
            ? a.apply(void 0, c)
            : JSScheduler.deferUserBlockingRunAtCurrentPri_DO_NOT_USE(
                function () {
                  h = !0
                  try {
                    a.apply(void 0, c)
                  } finally {
                    h = !1
                  }
                },
              )
        }
      })
  },
}

export default JSScheduler
