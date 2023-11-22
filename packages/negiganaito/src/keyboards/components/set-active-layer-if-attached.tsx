import { HiddenSubtreeContext } from '@negiganaito/context'
import React, { useContext, useEffect } from 'react'
import { CometKeyCommandUtilsContext } from '../context'
import { CometLayerKeyCommandWidget } from './comet-layer-key-command-widget'
import { recoverableViolation } from '@negiganaito/error'

export function SetActiveLayerIfAttached(a: any) {
  let b = useContext(HiddenSubtreeContext)
  a = useContext(CometKeyCommandUtilsContext)
  let d = a && a.setActiveLayer,
    e = useContext(CometLayerKeyCommandWidget.Context)
  useEffect(
    function () {
      if (!d) {
        recoverableViolation(
          'The current layer is not wrapped in a *KeyCommandListener',
          'comet_ax',
        )
        return
      }
      if (!e) {
        recoverableViolation(
          'setActiveLayer not wrapped in CometLayerKeyCommandWidget.Wrapper',
          'comet_ax',
        )
        return
      }
      b.hiddenOrBackgrounded || d(e)
    },
    [e, b, d],
  )
  return null
}
