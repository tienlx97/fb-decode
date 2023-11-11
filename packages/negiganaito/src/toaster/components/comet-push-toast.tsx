import { CometIcon, fbicon } from '@negiganaito/image'
import { BaseToasterStateManager } from '../utils/base-toaster-state-manager'
import { CometToast } from './comet-toast'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

let internalStore = BaseToasterStateManager.getInstance()

export function cometPushToast(props: any, duration: any, externalStore?: any) {
  !duration && (duration = 2750)
  const store = externalStore ?? internalStore
  const toast = store.push(
    jsx(
      CometToast,
      Object.assign({}, props, {
        loadImmediately: !0,
        onDismiss: function () {
          return store.expire(toast)
        },
      }),
    ),
    duration,
  )
  return toast
}

export function cometPushSimpleToast(message: any, b: any) {
  return cometPushToast(
    {
      message: message,
    },
    b,
  )
}

export function cometPushErrorToast(a: any, b?: any, e?: any) {
  b === void 0 && (b = 2750)
  return cometPushToast(
    Object.assign({}, a, {
      icon: jsx(CometIcon, {
        color: 'warning',
        icon: fbicon(
          {
            sprited: 2,
            spi: '/assets/workplace/HuPTUqOhf0o.png',
            _spi: '/assets/workplace/HuPTUqOhf0o.png',
            w: 20,
            h: 20,
            p: '-167px -59px',
            sz: 'auto',
          },
          20,
        ),
      }),
    }),
    b,
    e,
  )
}

export const CometPushToast = {
  cometPushToast,
  cometPushSimpleToast,
  cometPushErrorToast,
}
