'use client'

import React, { forwardRef, useContext } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import BaseContextualLayerAvailableHeightContext from '@fb/context/base-contextual-layer-available-height-context'

import { BaseMultiPageView } from './base-multi-page-view'

// const BaseMultiPageView = dynamic(
//   // @ts-ignore
//   () => import('./base-multi-page-view').then(r => r.BaseMultiPageView),
//   {
//     ssr: false,
//   },
// )

import { CometMenuBase } from './comet-menu-base'
import { CometPopover } from './comet-popover'

// const CometPopover = dynamic(
//   // @ts-ignore
//   () => import('./comet-popover').then(r => r.CometPopover),
//   {
//     ssr: false,
//   },
// )

// const CometMenuBase = dynamic(
//   // @ts-ignore
//   () => import('./comet-menu-base').then(r => r.CometMenuBase),
//   {
//     ssr: false,
//   },
// )

import { CometPopoverLoadingStateContent } from './comet-popover-loading-state-content'

const DEFAULT_HEIGHT = 15

type CometMenuBaseWithPopoverProps = {
  children?: React.ReactNode
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
      baseContextualLayerAvailableHeightValue -= DEFAULT_HEIGHT
    }

    if (React.Children.count(children) > 0) {
      return (
        <CometPopover
          arrowAlignment={arrowAlignment}
          id={id}
          label={label}
          labelledby={al ?? void 0}
          ref={ref as any}
          role={role}
          testid={undefined}
          withArrow={withArrow}
        >
          <BaseMultiPageView
            disableAutoFocus={true}
            disableFocusContainment={true}
            fallback={
              fallback ? fallback : jsx(CometPopoverLoadingStateContent, {})
            }
          >
            <CometMenuBase
              {...rest}
              role={role as any}
              maxHeight={
                truncate
                  ? baseContextualLayerAvailableHeightValue ?? 0
                  : undefined
              }
            >
              {children}
            </CometMenuBase>
          </BaseMultiPageView>
        </CometPopover>
      )
    }

    return undefined

    // return React.Children.count(children) > 0
    //   ? jsx(CometPopover, {
    //       arrowAlignment,
    //       id,
    //       label,
    //       labelledby: al ?? void 0,
    //       ref,
    //       role,
    //       testid: void 0,
    //       withArrow,
    //       children: jsx(BaseMultiPageView, {
    //         disableAutoFocus: !0,
    //         disableFocusContainment: !0,
    //         fallback: fallback ?? jsx(CometPopoverLoadingStateContent, {}),
    //         children: jsx(
    //           CometMenuBase,
    //           Object.assign({}, rest, {
    //             children,
    //             maxHeight: truncate
    //               ? baseContextualLayerAvailableHeightValue ?? 0
    //               : void 0,
    //             role,
    //           }),
    //         ),
    //       }),
    //     })
    //   : null
  },
)

export default CometMenuBaseWithPopover
