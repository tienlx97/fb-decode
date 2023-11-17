/* eslint-disable camelcase */
import { mergeClasses } from '@griffel/react'
import { BasePortal } from '@negiganaito/portal'
import React, { useEffect, useState } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import XPlatReactToasterView from '../xplat-react-toaster-view'
import { BaseToastAnimationInternal } from '../base-toast-animation-internal'
import { BaseContextualLayerAnchorRoot } from '@negiganaito/popover'
import { useToasterStateManager } from '@negiganaito/toaster/hooks'
import { useAlignStyles, useStyles, useWidthStyles } from './styles'

export type CometToasterView_DO_NOT_USEProps = {
  align?: 'center' | 'end' | 'start'
  filterToasts?: any
  maxVisible?: number
  maxWidth?: string
}

const _708253 = true // c("gkx")("708253")
const _1341692 = true
const _1196 = true

const CometToasterView_DO_NOT_USE = ({
  align = 'start',
  filterToasts,
  maxVisible = 1,
  maxWidth = 'full',
}: CometToasterView_DO_NOT_USEProps) => {
  const classes = useStyles()
  const alignClasses = useAlignStyles()
  const widthClasses = useWidthStyles()

  const stateManager = useToasterStateManager()

  const [toastState, setToastState] = useState(() => {
    return stateManager.getEmptyState()
  })

  useEffect(() => {
    const a = stateManager.registerView(setToastState, 0)
    return a.remove
  }, [stateManager])

  return jsx(BasePortal, {
    target: document.body,
    className: mergeClasses(
      classes.root,
      _708253
        ? undefined
        : _1341692
        ? classes.rootWorkplaceLegacy
        : classes.rootBlue,
      alignClasses[align],
    ),
    children: jsx('ul', {
      className: classes.dummy, // 'x78zum5 xdt5ytf xe8uvvx x193iq5w',
      children: jsx(XPlatReactToasterView, {
        filterToasts: filterToasts,
        maxVisible: maxVisible,
        onExpireToast: (a: any) => {
          stateManager.expire(a)
        },
        toasterState: toastState,
        children: (children: any, id: any, expired: any, position: any) => {
          return jsx(
            BaseToastAnimationInternal,
            {
              expired: expired,
              id: id,
              position: position,
              className: mergeClasses(
                classes.toast,
                // @ts-ignore
                widthClasses[_1196 ? 'regular' : maxWidth],
              ),
              children: jsx(BaseContextualLayerAnchorRoot, {
                children: children,
              }),
            },
            position,
          )
        },
      }),
    }),
  })
}

export default CometToasterView_DO_NOT_USE
