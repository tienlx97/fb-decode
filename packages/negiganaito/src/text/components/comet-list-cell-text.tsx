/*
__d("CometListCellText.react", 
["CometListCellContext", 
"TetraTextPairing.react", "react"], (function(a, b, c, d, e, f, g) {
*/

import { CometListCellContext } from '@negiganaito/context'
import React, { useContext } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { TetraTextPairing } from './tetra-text-pairing'

type CometListCellTextProps = {
  body?: any
  bodyColor?: string
  bodyLineLimit?: any
  emphasized?: boolean
  headline?: any
  headlineAddOn?: any
  headlineColor?: string
  headlineLineLimit?: any
  meta?: any
  metaColor?: any
  metaLineLimit?: any
  metaLocation?: any
}

export function CometListCellText({
  body,
  bodyColor = 'secondary',
  bodyLineLimit,
  emphasized = false,
  headline,
  headlineAddOn,
  headlineColor = 'primary',
  headlineLineLimit,
  meta,
  metaColor = 'tertiary',
  metaLineLimit,
  metaLocation,
}: CometListCellTextProps) {
  const { disabled = false, level = 3 } = useContext(CometListCellContext)

  return jsx(TetraTextPairing, {
    body,
    bodyColor: disabled ? 'disabled' : bodyColor,
    bodyLineLimit,
    headline,
    headlineAddOn,
    headlineColor: disabled ? 'disabled' : headlineColor,
    headlineLineLimit,
    level,
    meta,
    metaColor: disabled ? 'disabled' : metaColor,
    metaLineLimit,
    metaLocation,
    reduceEmphasis: emphasized === false,
  })
}
