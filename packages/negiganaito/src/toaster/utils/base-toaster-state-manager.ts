/* eslint-disable camelcase */
import JSScheduler from '@negiganaito/utils/common/jss-scheduler'
import XPlatReactToasterStateManager from './XPlat-react-toaster-state-manager'

function callbackScheduler(fn: any) {
  JSScheduler.scheduleNormalPriCallback(function () {
    fn()
  })
}

const CometMaxEnqueuedToastsSitevarConfig = {
  max: 2,
}

export const BaseToasterStateManager = {
  getInstance: function () {
    return XPlatReactToasterStateManager.getInstance({
      callbackScheduler: callbackScheduler,
      maxQueuedToasts: CometMaxEnqueuedToastsSitevarConfig.max,
    })
  },
  resetInstance_DO_NOT_USE: function () {
    XPlatReactToasterStateManager.resetInstance_DO_NOT_USE()
  },
}
