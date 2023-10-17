import { err, unrecoverableViolation } from '@negiganaito/error'
import executionEnvironment from '../execution-environment'

export function getSameOriginTransport() {
  if (!executionEnvironment.canUseDOM && !executionEnvironment.isInWorker)
    throw unrecoverableViolation(
      'getSameOriginTransport: Same origin transport unavailable in the server environment.',
      'comet_infra',
      {},
      {
        blameToPreviousFrame: 1,
      },
    )
  try {
    return new window.XMLHttpRequest()
  } catch (e: any) {
    throw err('getSameOriginTransport: %s', e.message)
  }
}
