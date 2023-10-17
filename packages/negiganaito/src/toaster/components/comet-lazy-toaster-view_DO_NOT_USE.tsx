/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { useToasterStateManager } from '../hooks'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometPlaceholder } from '@negiganaito/placeholder'
import {
  CometToasterView_DO_NOT_USE,
  CometToasterView_DO_NOT_USEProps,
} from './comet-toaster-view_DO_NOT_USE'

function m(a: any) {
  a = a.getState()
  return Object.keys(a).length > 0
}

export const CometLazyToasterView_DO_NOT_USE = (
  props: CometToasterView_DO_NOT_USEProps,
) => {
  const stateManager = useToasterStateManager()
  const [e, f] = useState(() => {
    return m(stateManager)
  })

  useEffect(() => {
    if (e) {
      return
    }
    const a = m(stateManager)
    if (a) {
      f(!0)
      return
    }
    const c = stateManager.addListener(function () {
      c.remove()
      f(!0)
    })
    return c.remove
  }, [stateManager, e])

  return e
    ? jsx(CometPlaceholder, {
        fallback: null,
        children: jsx(
          CometToasterView_DO_NOT_USE,
          Object.assign(
            {
              loadImmediately: !0,
            },
            props,
          ),
        ),
      })
    : null
}
