import React, {
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { FocusWithinHandler } from '@negiganaito/focus'
import { mergeClasses } from '@griffel/react'
import { useStyles } from './styles'

type BaseTooltipTargetWrapperProps = {
  children?: ReactNode
  forceInlineDisplay?: any
  onHide?: any
  onShow?: any
  tooltipIdentifier?: any
}

const BaseTooltipTargetWrapper = forwardRef<any, BaseTooltipTargetWrapperProps>(
  (
    { children, forceInlineDisplay, onHide, onShow, tooltipIdentifier },
    ref,
  ) => {
    const classes = useStyles()

    const [isFocus, onFocusChange] = useState(false)
    const [isFocusVisible, onFocusVisibleChange] = useState(false)

    const focus = isFocus && isFocusVisible
    const focusRef = useRef(focus)

    useEffect(() => {
      if (focusRef.current !== focus) {
        if (focus) {
          onShow()
        } else {
          onHide()
        }
      }
      focusRef.current = focus
    }, [onHide, onShow, focus])

    const onKeyDown = useCallback(
      (a: any) => {
        const { key } = a
        if (key === 'Escape' && tooltipIdentifier) {
          onHide()
          a.stopPropagation()
        }
      },
      [onHide, tooltipIdentifier],
    )

    return (
      <span
        aria-describedby={tooltipIdentifier}
        className={mergeClasses(
          classes.inheritAll,
          forceInlineDisplay && classes.wrapperInline,
        )}
        data-testid={undefined}
        onKeyDown={onKeyDown}
        onPointerEnter={onShow}
        onPointerLeave={onHide}
        onPointerUp={onHide}
        ref={ref}
      >
        <FocusWithinHandler
          onFocusChange={onFocusChange}
          onFocusVisibleChange={onFocusVisibleChange}
        >
          {children}
        </FocusWithinHandler>
      </span>
    )
  },
)

export default BaseTooltipTargetWrapper

/*

__d(
  'BaseTooltipTargetWrapper.react',
  ['FocusWithinHandler.react', 'react', 'stylex'],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = d('react')
    b = d('react')
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useRef,
      l = b.useState,
      m = {
        inheritAll: {
          alignContent: 'x4k7w5x',
          alignItems: 'x1h91t0o',
          alignSelf: 'x1h9r5lt',
          display: 'x1jfb8zj',
          flexBasis: 'xv2umb2',
          flexDirection: 'x1beo9mf',
          flexGrow: 'xaigb6o',
          flexShrink: 'x12ejxvf',
          height: 'x3igimt',
          justifyContent: 'xarpa2k',
          maxHeight: 'xedcshv',
          maxWidth: 'x1lytzrv',
          minHeight: 'x1t2pt76',
          minWidth: 'x7ja8zs',
          width: 'x1qrby5j',
          $$css: !0,
        },
        wrapperInline: {
          display: 'x3nfvp2',
          $$css: !0,
        },
      }
    function a(a, b) {
      var d = a.children,
        e = a.forceInlineDisplay,
        f = a.onHide,
        g = a.onShow,
        n = a.tooltipIdentifier
      a = l(!1)
      var o = a[0]
      a = a[1]
      var p = l(!1),
        q = p[0]
      p = p[1]
      var r = o && q,
        s = k(r)
      j(
        function () {
          s.current !== r && (r ? g() : f()), (s.current = r)
        },
        [f, g, r],
      )
      o = i(
        function (a) {
          var b = a.key
          b === 'Escape' && n != null && (f(), a.stopPropagation())
        },
        [f, n],
      )
      return h.jsx('span', {
        'aria-describedby': n,
        className: c('stylex')(m.inheritAll, e === !0 && m.wrapperInline),
        'data-testid': void 0,
        onKeyDown: o,
        onPointerEnter: g,
        onPointerLeave: f,
        onPointerUp: f,
        ref: b,
        children: h.jsx(c('FocusWithinHandler.react'), {
          onFocusChange: a,
          onFocusVisibleChange: p,
          children: d,
        }),
      })
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    e = h.forwardRef(a)
    g['default'] = e
  },
  98,
)

*/
