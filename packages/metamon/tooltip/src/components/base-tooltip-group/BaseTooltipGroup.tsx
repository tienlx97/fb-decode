import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useDelayedState, useStable } from '@metamon/hooks'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import { recoverableViolation } from '@metamon/error'
import { BaseTooltipTargetWrapper } from '../base-tooltip-target-wrapper'

type ContainerProps = {
  children?: ReactNode
  tooltipImpl?: any
}

type InternalContextProps = {
  activeContentKey: any
  isVisible: any
  onHide: (hideDelayMs: any, onVisibilityChange: any) => void
  onShow: (
    option: any,
    showDelayMs: any,
    onVisibilityChange: (param: any) => any,
  ) => void
  tooltipIdentifier: string
}

const InternalContext = createContext<InternalContextProps | undefined>(
  undefined,
)

function Container({ children, tooltipImpl }: ContainerProps) {
  const [isVisible, setVisible] = useDelayedState(false)
  const [tooltipImplProps, setTooltipImplProps] = useState<any>(null)

  const tooltipIdentifier = useId()

  const activeContentKey =
    tooltipImplProps && tooltipImplProps.contentKey
      ? tooltipImplProps.contentKey
      : null

  const internalContextValue = useMemo(() => {
    return {
      activeContentKey: activeContentKey,
      isVisible: isVisible,
      onHide: function (hideDelayMs: any, onVisibilityChange: any) {
        setVisible(!1, hideDelayMs, onVisibilityChange)
      },
      onShow: function (
        option: any,
        showDelayMs: any,
        onVisibilityChange: any,
      ) {
        setTooltipImplProps(option)
        setVisible(!0, showDelayMs, onVisibilityChange)
      },
      tooltipIdentifier,
    }
  }, [activeContentKey, isVisible, tooltipIdentifier, setVisible])

  return jsxs(React.Fragment, {
    children: [
      jsx(InternalContext.Provider, {
        value: internalContextValue,
        children,
      }),
      tooltipImplProps
        ? jsx(
            tooltipImpl,
            Object.assign({}, tooltipImplProps, {
              id: isVisible ? tooltipIdentifier : void 0,
              isVisible: isVisible,
            }),
          )
        : null,
    ],
  })
}

const Context = InternalContext

type ChildProps = {
  children?: ReactNode
  disabled?: boolean
  forceInlineDisplay?: any
  hideDelayMs?: number
  showDelayMs?: number
  onVisibilityChange?: any
  //
  tooltip?: any
  headline?: any
  align?: any
}

let count = 0

function countTooltip() {
  return 'tooltip-' + count++
}

function Child({
  children,
  disabled = false,
  forceInlineDisplay,
  hideDelayMs,
  showDelayMs,
  onVisibilityChange,
  ...rest
}: ChildProps) {
  const contentKey = useStable(countTooltip)
  const contextRef = useRef(null)

  const internalContextValue = useContext(InternalContext)

  const {
    activeContentKey,
    isVisible = false,
    onHide,
    onShow,
    tooltipIdentifier,
  } = internalContextValue ?? {}

  const onShowCb = useCallback(() => {
    !disabled &&
      onShow &&
      onShow(
        Object.assign(
          {
            contentKey: contentKey,
            contextRef: contextRef,
          },
          rest,
        ),
        showDelayMs,
        onVisibilityChange,
      )
  }, [disabled, onShow, contentKey, rest, showDelayMs, onVisibilityChange])

  const onHideCb = useCallback(() => {
    onHide && onHide(hideDelayMs, onVisibilityChange)
  }, [hideDelayMs, onHide, onVisibilityChange])

  if (!internalContextValue) {
    recoverableViolation(
      'BaseTooltipGroup: Cannot render a BaseTooltipGroupChild component outside of a BaseTooltipGroup component. ',
      'comet_ui',
    )
  }

  return jsx(BaseTooltipTargetWrapper, {
    forceInlineDisplay,
    onHide: onHideCb,
    onShow: onShowCb,
    ref: contextRef,
    tooltipIdentifier:
      isVisible && activeContentKey === contentKey
        ? tooltipIdentifier
        : undefined,
    children,
  })
}

export const BaseTooltipGroup = {
  Child,
  Context,
  Container,
}

/*

__d(
  'BaseTooltipGroup.react',
  [
    'BaseTooltipTargetWrapper.react',
    'react',
    'recoverableViolation',
    'useDelayedState',
    'useStable',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = d('react')
    e = d('react')
    var i = e.useCallback,
      j = e.useContext,
      k = e.useId,
      l = e.useMemo,
      m = e.useRef,
      n = e.useState,
      o = h.createContext(null)
    function a(a) {
      var b = a.children
      a = a.tooltipImpl
      var d = c('useDelayedState')(!1),
        e = d[0],
        f = d[1]
      d = n(null)
      var g = d[0],
        i = d[1],
        j = k(),
        m = g != null && g.contentKey != null ? g.contentKey : null
      d = l(
        function () {
          return {
            activeContentKey: m,
            isVisible: e,
            onHide: function (a, b) {
              f(!1, a, b)
            },
            onShow: function (a, b, c) {
              i(a), f(!0, b, c)
            },
            tooltipIdentifier: j,
          }
        },
        [m, e, j, f],
      )
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(o.Provider, {
            value: d,
            children: b,
          }),
          g != null
            ? h.jsx(
                a,
                babelHelpers['extends']({}, g, {
                  id: e ? j : void 0,
                  isVisible: e,
                }),
              )
            : null,
        ],
      })
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    var p = 0
    function q() {
      return 'tooltip-' + p++
    }
    function b(a) {
      var b = a.children,
        d = a.disabled,
        e = d === void 0 ? !1 : d
      d = a.forceInlineDisplay
      var f = a.hideDelayMs,
        g = a.onVisibilityChange,
        k = a.showDelayMs,
        l = babelHelpers.objectWithoutPropertiesLoose(a, [
          'children',
          'disabled',
          'forceInlineDisplay',
          'hideDelayMs',
          'onVisibilityChange',
          'showDelayMs',
        ]),
        n = c('useStable')(q),
        p = m(null)
      a = j(o)
      var r = a || {},
        s = r.activeContentKey,
        t = r.isVisible
      t = t === void 0 ? !1 : t
      var u = r.onHide,
        v = r.onShow
      r = r.tooltipIdentifier
      var w = i(
          function () {
            !e &&
              v &&
              v(
                babelHelpers['extends'](
                  {
                    contentKey: n,
                    contextRef: p,
                  },
                  l,
                ),
                k,
                g,
              )
          },
          [e, v, n, l, k, g],
        ),
        x = i(
          function () {
            u && u(f, g)
          },
          [f, u, g],
        )
      a == null &&
        c('recoverableViolation')(
          'BaseTooltipGroup: Cannot render a BaseTooltipGroupChild component outside of a BaseTooltipGroup component. ',
          'comet_ui',
        )
      return h.jsx(c('BaseTooltipTargetWrapper.react'), {
        forceInlineDisplay: d,
        onHide: x,
        onShow: w,
        ref: p,
        tooltipIdentifier: t && s === n ? r : void 0,
        children: b,
      })
    }
    b.displayName = b.name + ' [from ' + f.id + ']'
    g.Context = o
    g.Container = a
    g.Child = b
  },
  98,
)


*/
