/* eslint-disable camelcase */
import {
  useLayoutEffect,
  useRef,
  // @ts-ignore
  unstable_Scope,
} from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { setElementCanTab } from '../utils/set-element-can-tab'

export default function FocusInertRegion(a: any) {
  let b = a.children,
    c = a.disabled,
    e = c === void 0 ? !1 : c,
    f = a.focusQuery,
    g = useRef(null)
  useLayoutEffect(
    function () {
      let a: any = g.current
      if (f && a != null) {
        a = a.DO_NOT_USE_queryAllNodes(f)
        if (a !== null)
          for (let b = 0; b < a.length; b++) {
            let c = a[b]
            setElementCanTab(c, e)
          }
      }
    },
    [e, f],
  )
  return jsx(unstable_Scope, {
    ref: g,
    children: b,
  })
}
