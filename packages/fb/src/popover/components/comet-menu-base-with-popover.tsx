import BaseContextualLayerAvailableHeightContext from '@fb/context/base-contextual-layer-available-height-context'
import React, { forwardRef, useContext } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometPopover } from './comet-popover'
import BaseMultiPageView from './base-multi-page-view'
import CometMenuBase from './comet-menu-base/comet-menu-base'
import { CometPopoverLoadingStateContent } from './comet-popover-loading-state-content'

const j = 15,
  k = 'menu'

type CometMenuBaseWithPopoverProps = {
  children?: any
  'aria-labelledby': any
  fallback?: any
  id?: string
  label?: string
  role?: string
  arrowAlignment?: any
  withArrow?: boolean
  testid?: string
  truncate?: boolean
}

const CometMenuBaseWithPopover = forwardRef<
  HTMLElement,
  CometMenuBaseWithPopoverProps
>(
  (
    {
      'aria-labelledby': al,
      children,
      fallback,
      id,
      label,
      role = 'menu',
      arrowAlignment,
      withArrow = false,
      testid = 'comet-menu',
      truncate = false,
      ...rest
    },
    ref,
  ) => {
    let baseContextualLayerAvailableHeightValue = useContext(
      BaseContextualLayerAvailableHeightContext,
    )

    if (withArrow && baseContextualLayerAvailableHeightValue) {
      baseContextualLayerAvailableHeightValue -= j
    }

    return React.Children.count(children) > 0
      ? jsx(CometPopover, {
          arrowAlignment,
          id,
          label,
          labelledby: al ?? void 0,
          ref,
          role,
          testid: void 0,
          withArrow,
          children: jsx(BaseMultiPageView, {
            disableAutoFocus: !0,
            disableFocusContainment: !0,
            fallback: fallback ?? jsx(CometPopoverLoadingStateContent, {}),
            children: jsx(
              CometMenuBase,
              Object.assign({}, rest, {
                children,
                maxHeight: truncate
                  ? baseContextualLayerAvailableHeightValue ?? 0
                  : void 0,
                role,
              }),
            ),
          }),
        })
      : null
  },
)

export default CometMenuBaseWithPopover
