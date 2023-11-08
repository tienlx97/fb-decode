import { makeStyles, mergeClasses } from '@griffel/react'
import { BaseView } from '@negiganaito/common'
import { useMergeRefs } from '@negiganaito/hooks'
import { CometHideLayerOnEscape } from '@negiganaito/keyboards'
import { BaseThemeProvider } from '@negiganaito/styles'
import { isWithinThreshold } from '@negiganaito/utils/common/pointer-event-distance'
import React, { forwardRef, useEffect, useRef } from 'react'

//@ts-ignore
import { jsx } from 'react/jsx-runtime'

const useStyles = makeStyles({
  anchor: {
    alignItems: 'flex-start',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    minHeight: 0,
    minWidth: 0,
    pointerEvents: 'none',
  },
  dialog: {
    boxSizing: 'content-box',
    display: 'flex',
    flexDirection: 'column',
    outlineStyle: 'none',
    overflowX: 'hidden',
    overflowY: 'hidden',
    pointerEvents: 'all',
  },
  root: {
    alignItems: 'stretch',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
  },
  rootWithDeprecatedStyles: {
    flexGrow: 0,
    minHeight: '100vh',
  },
})

type BaseDialogProps = {
  anchorXStyle: any
  children: React.ReactNode
  disableClosingWithEscape?: boolean
  disableClosingWithMask?: boolean
  onClose: () => void
  rootXStyle: any
  testid?: string
  themeConfig: any
  withDeprecatedStyles?: boolean
  className?: any
}

export const BaseDialog = forwardRef<any, BaseDialogProps>(
  (
    {
      anchorXStyle,
      children,
      disableClosingWithEscape = false,
      disableClosingWithMask = false,
      onClose,
      rootXStyle,
      testid,
      themeConfig,
      withDeprecatedStyles = false,
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()

    const u = useRef<any>(null),
      v = useRef<any>(null),
      w = useRef<any>(null)

    useEffect(
      function () {
        let a = u.current,
          b = v.current
        if (a == null || b == null || disableClosingWithMask) {
          return
        }
        function c(c: any) {
          return c instanceof Node && !b.contains(c) && a.contains(c)
        }
        let e = 'PointerEvent' in window
        if (!e) {
          let f = function (a: any) {
            c(a.target) && onClose()
          }
          a.addEventListener('click', f)
          return function () {
            a.removeEventListener('click', f)
          }
        }
        let g = !1
        function h(a: any) {
          if (a.isPrimary) {
            let b = c(a.target)
            g = b
            w.current = a
          }
        }
        function i(a: any) {
          let b = c(a.target)
          if (g && b && w.current != null && a.isPrimary) {
            b = isWithinThreshold(w.current, a)
            b && onClose()
          }
          g = !1
          w.current = null
        }
        a.addEventListener('pointerup', i)
        a.addEventListener('pointerdown', h)
        return function () {
          a.removeEventListener('pointerup', i),
            a.removeEventListener('pointerdown', h)
        }
      },
      [disableClosingWithMask, onClose],
    )

    const x = useMergeRefs(v, ref)

    const q = jsx(BaseThemeProvider, {
      config: themeConfig,
      children: (a: any, b: any) => {
        return jsx('div', {
          className: mergeClasses(
            a,
            classes.root,
            withDeprecatedStyles && classes.rootWithDeprecatedStyles,
            rootXStyle,
          ),
          ref: u,
          style: b,
          children: jsx('div', {
            className: mergeClasses(classes.anchor, anchorXStyle),
            children: jsx(
              BaseView,
              Object.assign({}, rest, {
                ref: x,
                role: 'dialog',
                testid: void 0,
                className: mergeClasses(classes.dialog, className),
                children,
              }),
            ),
          }),
        })
      },
    })

    return disableClosingWithEscape
      ? q
      : jsx(CometHideLayerOnEscape, {
          onHide: onClose,
          children: q,
        })
  },
)
