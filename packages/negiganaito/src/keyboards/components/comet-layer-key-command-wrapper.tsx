/*

__d("CometLayerKeyCommandWrapper.react", 
  ["CometLayerKeyCommandWidget", 
  "SetActiveLayerIfAttached.react", "react"], (function(a, b, c, d, e, f, g) {
*/

import React from 'react'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'
import { CometLayerKeyCommandWidget } from './comet-layer-key-command-widget'
import { SetActiveLayerIfAttached } from './set-active-layer-if-attached'

type CometLayerKeyCommandWrapperProps = {
  children?: any
  debugName?: string
}

export function CometLayerKeyCommandWrapper({
  children,
  debugName,
}: CometLayerKeyCommandWrapperProps) {
  return jsxs(CometLayerKeyCommandWidget.Wrapper, {
    debugName,
    children: [
      jsx(SetActiveLayerIfAttached, {
        debugName,
      }),
      children,
    ],
  })
}
