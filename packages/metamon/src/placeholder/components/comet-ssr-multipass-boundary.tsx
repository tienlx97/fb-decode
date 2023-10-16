import React, { createContext, useContext } from 'react'
import CometBackupPlaceholder from './comet-backup-placeholder'
import { CometPlaceholder } from './placeholder'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import executionEnvironment from '@negiganaito/utils/common/execution-environment'
import { FBLogger, unrecoverableViolation } from '@negiganaito/error'
import {
  isEnabledBoundary,
  tryGetBoundaryPromise,
  updateDisabledBoundariesMap,
} from './comet-ssr-multipass-boundary-utils'

export function CometSSRMultipassBoundary(a: any) {
  let b = a.children,
    d = a.fallback
  d = d === void 0 ? null : d
  var e = a.id
  a = a.useCometPlaceholder
  a = a === !0 ? CometPlaceholder : CometBackupPlaceholder
  return jsx(p, {
    boundaryId: e,
    children: jsx(a, {
      fallback: jsx(n, {
        id: e,
        children: d,
      }),
      children: jsx(m, {
        id: e,
        children: jsx(React.Fragment, {
          children: b,
        }),
      }),
    }),
  })
}

function m(a: any) {
  // @ts-ignore
  var e = this,
    f = a.children
  a = a.id
  if (executionEnvironment.canUseDOM) {
    return f
  }
  if (!isEnabledBoundary(a)) {
    var g = tryGetBoundaryPromise(a)
    if (g) throw g
    g = function () {}
    var j = new Promise(function (a) {
      g = a.bind(e)
    })
    updateDisabledBoundariesMap(a, {
      promise: j,
      resolveFunc: g,
    })
    throw j
  }
  return f
}

function n(a: any) {
  let b = a.children
  a = a.id
  isEnabledBoundary(a) &&
    FBLogger('comet_ssr').mustfix('SSR boundary suspended unexpectedly: ' + a)
  return b
}

const o = createContext<any>(undefined)

function p(a: any) {
  var b = a.boundaryId
  a = a.children
  var d = useContext(o)
  if (executionEnvironment.canUseDOM) {
    return a
  }
  if (d && d !== 'root')
    throw unrecoverableViolation(
      'Nested SSR boundaries are unsupported. ' +
        ("Found boundary '" + b + "' nested underneath ") +
        ("boundary '" + d + "'."),
      'comet_ssr',
    )
  return jsx(o.Provider, {
    value: b,
    children: a,
  })
}
