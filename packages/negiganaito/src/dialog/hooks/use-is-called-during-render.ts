import { FBLogger } from '@negiganaito/error'
import { useCallback, useRef } from 'react'

export function useIsCalledDuringRender() {
  const a = useRef(void 0)
  return useCallback(function () {
    FBLogger('comet_ui')
      .blameToPreviousFrame()
      .warn(
        'useIsCalledDuringRender should only be used for development purpose. It is implemented in a way that will not work correctly in production.',
      )
    return !1
  }, [])
}
