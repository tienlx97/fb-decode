import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

/* eslint-disable camelcase */
import {
  HiddenSubtreeContext,
  HiddenSubtreePassiveContext,
} from '@negiganaito/context'
import { removeFromArray } from '@negiganaito/utils/common/remove-from-array'
import { useUnsafeRef_DEPRECATED } from '@negiganaito/hooks'

function o(a: any, b: any) {
  return a.backgrounded === b.backgrounded && a.hidden === b.hidden
}

function p(a: any, b: any) {
  const c = a.backgrounded || b.backgrounded
  a = a.hidden || b.hidden
  return {
    backgrounded: c,
    hidden: a,
    hiddenOrBackgrounded: c || a,
    hiddenOrBackgrounded_FIXME: c || a,
  }
}

type HiddenSubtreeContextProviderProps = {
  children: any
  ignoreParent?: boolean
  isBackgrounded?: boolean
  isHidden?: boolean
}

function HiddenSubtreeContextProvider({
  children,
  ignoreParent,
  isBackgrounded = false,
  isHidden,
}: HiddenSubtreeContextProviderProps) {
  // var b = a.children,
  //   d = a.ignoreParent,
  //   e = a.isBackgrounded,
  //   f = e === void 0 ? !1 : e,
  //   g = a.isHidden
  const e = useContext(HiddenSubtreeContext)
  const q = useContext(HiddenSubtreePassiveContext)
  const r = useMemo(() => {
    return {
      backgrounded: isBackgrounded,
      hidden: isHidden,
      hiddenOrBackgrounded: isBackgrounded || isHidden,
      hiddenOrBackgrounded_FIXME: isBackgrounded || isHidden,
    }
  }, [isBackgrounded, isHidden])

  const s = useUnsafeRef_DEPRECATED(r)
  const t = useRef<any>(null)
  const u = useRef<any>([])
  const v = useCallback(() => {
    const a = ignoreParent ? s.current : p(s.current, q.getCurrentState())
    if (t.current == null || !o(a, t.current)) {
      t.current = a
      const b = Array.from(u.current)
      b.forEach((bb: any) => {
        bb(a)
      })
    }
  }, [ignoreParent, q])

  useLayoutEffect(() => {
    s.current = r
    v()
  }, [r, v])

  useEffect(() => {
    if (ignoreParent !== !0) {
      const a = q.subscribeToChanges(v)
      return () => {
        return a.remove()
      }
    }
  }, [ignoreParent, v, q])

  const HiddenSubtreePassiveValue = useMemo(() => {
    return {
      getCurrentState: function () {
        return ignoreParent === !0
          ? s.current
          : p(s.current, q.getCurrentState())
      },
      subscribeToChanges: (a: any) => {
        const b = u.current
        b.push(a)
        return {
          remove: () => {
            removeFromArray(b, a)
          },
        }
      },
    }
  }, [q, ignoreParent])

  const w = ignoreParent === !0 ? r : p(r, e)

  const hiddenSubtreeValue = useMemo(
    function () {
      return {
        backgrounded: w.backgrounded,
        hidden: w.hidden,
        hiddenOrBackgrounded: w.backgrounded || w.hidden,
        hiddenOrBackgrounded_FIXME: w.backgrounded || w.hidden,
      }
    },
    [w.backgrounded, w.hidden],
  )

  return jsx(HiddenSubtreeContext.Provider, {
    value: hiddenSubtreeValue,
    children: jsx(HiddenSubtreePassiveContext.Provider, {
      value: HiddenSubtreePassiveValue,
      children,
    }),
  })
}

export default HiddenSubtreeContextProvider
