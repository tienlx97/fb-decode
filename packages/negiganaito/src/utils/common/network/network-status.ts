// a =
//   c('gkx')('708253') && c('gkx')('1263340')
//     ? d('NetworkStatusImpl')
//     : d('NetworkStatusSham')
// b = a

import {
  isOnline,
  onChange,
  reportError,
  reportSuccess,
  wasOffline,
} from './network-status-impl'

export const NetworkStatus = {
  isOnline,
  onChange,
  reportError,
  reportSuccess,
  wasOffline,
}
