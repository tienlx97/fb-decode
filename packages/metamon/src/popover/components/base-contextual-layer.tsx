/* eslint-disable react/no-children-prop */
'use-client'

import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import {
  BaseContextualLayerAnchorRootContext,
  BaseContextualLayerAvailableHeightContext,
  BaseContextualLayerContextSizeContext,
  BaseContextualLayerLayerAdjustmentContext,
  BaseContextualLayerOrientationContext,
  BaseLinkNestedPressableContext,
  BaseScrollableAreaContext,
  BaseViewportMarginsContext,
  HiddenSubtreeContext,
  LayoutAnimationBoundaryContext,
} from '@metamon/context'

import calculateBaseContextualLayerPosition from '@metamon/utils/common/calculate-base-contextual-layer-position'
import { isElementFixedOrSticky } from '@metamon/utils/common/is-element-fixed-or-sticky'
import { LayoutAnimationEventType } from '@metamon/utils/common/layout-animation-events'
import { makeStyles, mergeClasses } from '@fluentui/react-components'

import { useResizeObserver } from '../hooks/use-resize-observer'
import { CometTextContext } from '@metamon/text'
import {
  FocusRegion,
  headerFirstTabbableSecondScopeQuery,
  tabbableScopeQuery,
} from '@metamon/focus'
import { mergeRefs, useLayoutAnimationEvents } from '@metamon/hooks'
import BaseContextualLayerDefaultContainer from './base-contextual-layer-default-container'
import { BasePortal } from '@metamon/portal'
import BaseContextualLayerAnchorRoot from './base-contextual-layer-anchor-root'

type BaseContextualLayerProps = {
  align?: any
  disableAutoAlign?: any
  children?: any
  containFocus?: any
  customContainer?: any
  disableAutoFlip?: any
  hidden?: any
  imperativeRef?: any
  onEscapeFocusRegion?: any
  onIndeterminatePosition?: any
  presencePayload?: any
  position?: any
  stopClickPropagation?: any
  className?: string
  //
  context_DEPRECATED?: any
  contextRef?: any
}

const useStyles = makeStyles({
  root: {
    left: '0',
    marginRight: '-9999px',
    position: 'absolute',
    top: '0',
  },
})

const w = false // d('Locale').isRTL()

const u = 8

const BaseContextualLayer = forwardRef<HTMLElement, BaseContextualLayerProps>(
  (
    {
      align = 'start',
      disableAutoAlign = false,
      children,
      containFocus = false,
      customContainer = BaseContextualLayerDefaultContainer,
      disableAutoFlip = false,
      hidden = false,
      imperativeRef,
      onEscapeFocusRegion,
      onIndeterminatePosition,
      presencePayload,
      position = 'below',
      stopClickPropagation = false,
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()

    const [
      {
        adjustment: baseContextualLayerLayerAdjustmentValue,
        availableHeight: baseContextualLayerAvailableHeightValue,
        contextSize: baseContextualLayerContextSizeValue,
        isPositionIndeterminate: H,
        position: I,
      },
      J,
    ] = useReducer(ca, position, ba)

    const baseContextualLayerAnchorRootValue = useContext(
      BaseContextualLayerAnchorRootContext,
    )

    const L = useContext(BaseScrollableAreaContext)
    const M = useContext(BaseViewportMarginsContext)
    const N = useContext(LayoutAnimationBoundaryContext)

    const [a, O] = useState(!1)

    const { hidden: G } = useContext(HiddenSubtreeContext)

    const P = G || hidden

    const Q = useRef(null)
    const R = useRef<any>(null)

    const S = useCallback(
      function () {
        return rest.context_DEPRECATED == null && rest.contextRef != null
          ? rest.contextRef.current
          : rest.context_DEPRECATED
      },
      [rest.contextRef, rest.context_DEPRECATED],
    )

    const T = useCallback(() => {
      const a = document.documentElement
      if (a == null) {
        return
      }
      return {
        bottom: a.clientHeight - M.bottom - u,
        left: M.left + u,
        right: a.clientWidth - M.right - u,
        top: M.top + u,
      }
    }, [M.bottom, M.left, M.right, M.top])

    const U = useCallback(
      function () {
        let a: any = Q.current,
          b = S(),
          c = T()
        if (a == null || b == null || c == null) return
        b = r(b)
        a = r(a)
        const d = a.bottom - a.top
        a = a.right - a.left
        let e = w ? 'start' : 'end',
          f = w ? 'end' : 'start',
          g = I,
          h = null
        disableAutoFlip ||
          (I === 'above' || I === 'below'
            ? I === 'above' && b.top - d < c.top && b.bottom + d < c.bottom
              ? (g = 'below')
              : I === 'above' && s(L) + b.top < d
              ? (g = 'below')
              : I === 'below' &&
                b.bottom + d > c.bottom &&
                b.top - d > c.top &&
                (g = 'above')
            : (I === 'start' || I === 'end') &&
              (I === f && b.left - a < c.left && b.right + a < c.right
                ? (g = e)
                : I === e &&
                  b.right + a > c.right &&
                  b.left - a > c.left &&
                  (g = f)))
        g === 'above' || g === 'below'
          ? (h = g === 'above' ? b.top - c.top : c.bottom - b.bottom)
          : (g === 'start' || g === 'end') &&
            (h = Math.max(c.bottom, b.bottom) - Math.min(b.top, c.top))

        R.current = {
          height: d,
          width: a,
        }
        J({
          availableHeight: h,
          position: g,
          type: 'determine_direction',
        })
      },
      [S, T, disableAutoFlip, I],
    )

    const V = useCallback(
      function () {
        let a: any = document.documentElement,
          b: any = baseContextualLayerAnchorRootValue.current,
          d: any = T(),
          e = S()
        if (!a || !b || !d || !e) {
          return
        }
        const h = t(b)
        if (!h) {
          return
        }
        b = isElementFixedOrSticky(b)

        b = !b && e.nodeType === 1 && isElementFixedOrSticky(e)

        e = L.map(function (a: any) {
          return a.getDOMNode()
        })
          .filter(Boolean)
          .filter(function (a: any) {
            return h.contains(a)
          })
          .reduce(function (a: any, b: any) {
            return a != null ? v(a, r(b)) : null
          }, r(e))
        if (e == null || (e.left === 0 && e.right === 0)) {
          J({
            type: 'position_indeterminate',
          })
          onIndeterminatePosition && onIndeterminatePosition()
          return
        }
        a = b
          ? {
              bottom: a.clientHeight,
              left: 0,
              right: a.clientWidth,
              top: 0,
            }
          : r(h)
        b = calculateBaseContextualLayerPosition({
          align,
          contextRect: e,
          contextualLayerSize: disableAutoAlign ? null : R.current,
          fixed: b,
          offsetRect: a,
          position: I,
          screenRect: d,
        })
        a = b.adjustment
        d = b.style
        b = Q.current
        if (b) {
          const i = Object.keys(d)
          for (let j = 0; j < i.length; j++) {
            const k = i[j],
              l = d[k]
            l ? b.style.setProperty(k, l) : b.style.removeProperty(k)
          }
        }
        J({
          adjustment: a,
          contextSize: {
            height: e.bottom - e.top,
            width: e.right - e.left,
          },
          type: 'reposition',
        })
      },
      [
        baseContextualLayerAnchorRootValue,
        T,
        S,
        L,
        disableAutoAlign,
        align,
        I,
        onIndeterminatePosition,
      ],
    )

    const W = useCallback(
      function (a: any) {
        a === LayoutAnimationEventType.Start && O(!0),
          a === LayoutAnimationEventType.Stop && (O(!1), V())
      },
      [V, O],
    )

    useLayoutEffect(
      function () {
        N != null && N.getIsAnimating() && W(LayoutAnimationEventType.Start)
      },
      [N, W],
    )

    useLayoutAnimationEvents(W)

    useImperativeHandle(
      imperativeRef,
      function () {
        return {
          reposition: function (a: any) {
            if (!P) {
              a = a || {}
              a = a.autoflip
              a = a === void 0 ? !1 : a
              a && U()
              V()
            }
          },
        }
      },
      [P, V, U],
    )

    const X = useResizeObserver(function (a: any) {
      const b = a.height
      a = a.width
      R.current = {
        height: b,
        width: a,
      }
      V()
    })

    const Y = useRef(position)

    useLayoutEffect(function () {
      position !== Y.current &&
        (J({
          position,
          type: 'position_changed',
        }),
        P || (U(), V()),
        (Y.current = position))
    })

    const Z = useCallback(
      function (a: any) {
        Q.current = a
        a != null && !P && (U(), V())
      },
      [P, V, U],
    )

    useEffect(() => {
      if (P) return
      const a = function () {
        U(), V()
      }
      window.addEventListener('resize', a)
      return function () {
        window.removeEventListener('resize', a)
      }
    }, [P, V, U])

    useEffect(() => {
      if (P) return
      const a = L.map(function (a: any) {
        return a.getDOMNode()
      }).filter(Boolean)
      if (a.length > 0) {
        a.forEach(function (a: any) {
          return a.addEventListener('scroll', V, {
            passive: !0,
          })
        })
        return function () {
          a.forEach(function (a: any) {
            return a.removeEventListener('scroll', V, {
              passive: !0,
            })
          })
        }
      }
    }, [P, V, L])

    useEffect(
      function () {
        if (window.addEventListener == null || P) return
        window.addEventListener('scroll', V, {
          passive: !0,
        })
        return function () {
          window.removeEventListener('scroll', V, {
            // @ts-ignore
            passive: !0,
          })
        }
      },
      [P, V],
    )

    const _ref = useMemo(
      function () {
        return mergeRefs(Z, X, ref)
      },
      [Z, X, ref],
    )

    const baseContextualLayerOrientationValue = useMemo(
      function () {
        return {
          align: align,
          position: I,
        }
      },
      [align, I],
    )

    const $ = hidden || H

    return (
      <BasePortal
        target={baseContextualLayerAnchorRootValue.current}
        children={jsx(customContainer, {
          hidden: hidden || H || a,
          presencePayload: presencePayload,
          ref: _ref,
          stopClickPropagation: stopClickPropagation,
          testid: void 0,
          className: mergeClasses(classes.root, className),
          children: jsx(FocusRegion, {
            autoFocusQuery:
              !$ && containFocus ? headerFirstTabbableSecondScopeQuery : null,
            autoRestoreFocus: !$,
            containFocusQuery: !$ && containFocus ? tabbableScopeQuery : null,
            onEscapeFocusRegion: onEscapeFocusRegion,
            recoverFocusQuery: $ ? null : headerFirstTabbableSecondScopeQuery,
            children: jsx(BaseContextualLayerAnchorRoot, {
              children: jsx(BaseContextualLayerContextSizeContext.Provider, {
                value: baseContextualLayerContextSizeValue,
                children: jsx(
                  BaseContextualLayerLayerAdjustmentContext.Provider,
                  {
                    value: baseContextualLayerLayerAdjustmentValue,
                    children: jsx(
                      BaseContextualLayerAvailableHeightContext.Provider,
                      {
                        value: baseContextualLayerAvailableHeightValue,
                        children: jsx(
                          BaseContextualLayerOrientationContext.Provider,
                          {
                            value: baseContextualLayerOrientationValue,
                            children: jsx(
                              BaseLinkNestedPressableContext.Provider,
                              {
                                value: !1,
                                children: jsx(CometTextContext.Provider, {
                                  value: null,
                                  children: children,
                                }),
                              },
                            ),
                          },
                        ),
                      },
                    ),
                  },
                ),
              }),
            }),
          }),
        })}
      />
    )
  },
)

function ca(state: any, option: any) {
  let c
  switch (option.type) {
    case 'determine_direction':
      if (
        state.position !== option.position ||
        state.availableHeight !== option.availableHeight
      )
        return Object.assign({}, state, {
          availableHeight: option.availableHeight,
          position: option.position,
        })
      break
    case 'reposition':
      if (
        state.adjustment !== option.adjustment ||
        ((c = state.contextSize) == null ? void 0 : c.height) !==
          ((c = option.contextSize) == null ? void 0 : c.height) ||
        ((c = state.contextSize) == null ? void 0 : c.width) !==
          ((c = option.contextSize) == null ? void 0 : c.width)
      )
        return Object.assign({}, state, {
          adjustment: option.adjustment,
          contextSize: option.contextSize,
          isPositionIndeterminate: !1,
        })
      break
    case 'position_indeterminate':
      return Object.assign({}, state, {
        isPositionIndeterminate: !0,
      })
    case 'position_changed':
      if (state.position !== option.position)
        return Object.assign({}, state, {
          position: option.position,
        })
      break
  }
  return state
}

function ba(position: any) {
  return {
    adjustment: null,
    availableHeight: null,
    contextSize: null,
    isPositionIndeterminate: !1,
    position,
  }
}

function r(a: any) {
  a = a.getBoundingClientRect()
  return {
    bottom: a.bottom,
    left: a.left,
    right: a.right,
    top: a.top,
  }
}

function s(a: any) {
  return (a = !(a = a[a.length - 1])
    ? void 0
    : !(a = a.getDOMNode())
    ? void 0
    : a.scrollTop) != null
    ? a
    : window.pageYOffset
}

function t(a: any) {
  const b = getComputedStyle(a)
  return b && b.getPropertyValue('position') !== 'static'
    ? a
    : (a instanceof HTMLElement && a.offsetParent) ||
        a.ownerDocument.documentElement
}

function v(a: any, b: any) {
  return a.bottom < b.top ||
    b.bottom < a.top ||
    a.right < b.left ||
    b.right < b.left
    ? null
    : {
        bottom: Math.min(a.bottom, b.bottom),
        left: Math.max(a.left, b.left),
        right: Math.min(a.right, b.right),
        top: Math.max(a.top, b.top),
      }
}

export default BaseContextualLayer
