import { useEffect, useState } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { parent } from '@negiganaito/styles'

import { tabbableScopeQuery } from '../util'
import { FocusRegion } from './focus-region'

const c = function (a: any, b: any, c: any) {
  if (parent.bySelector(c, '[hidden]') != null) return !1
  return a === 'h2' || b['aria-busy'] === !0 ? !0 : !1
}
const e = function (a: any, b: any, c: any) {
  if (parent.bySelector(c, '[hidden]') != null) return !1
  return a === 'input' ? !1 : tabbableScopeQuery(a, b)
}
var recoverFocusQuery = [c, e],
  m = function () {
    return document.readyState === 'complete'
  },
  n = function () {
    var a
    return ((a = document.activeElement) == null
      ? void 0
      : a.tagName.toLowerCase()) === 'input'
      ? !1
      : document.activeElement !== document.body || m()
  }

type ChannelGeminiAutoFocusRegionProps = {
  children?: any
  inert?: boolean
  navigationKey?: any
}

export function ChannelGeminiAutoFocusRegion({
  children,
  inert = false,
  navigationKey,
}: ChannelGeminiAutoFocusRegionProps) {
  const [f, g] = useState(!1)
  const [h, m] = useState(!1)

  useEffect(
    function () {
      !inert && n() && (g(!1), m(!0))
    },
    [navigationKey, inert],
  )

  useEffect(
    function () {
      h === !0 && (g(!0), m(!1))
    },
    [h],
  )

  return jsx(FocusRegion, {
    autoFocusQuery: f ? recoverFocusQuery : null,
    recoverFocusQuery: recoverFocusQuery,
    children: children,
  })
}
