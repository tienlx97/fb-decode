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
  'aria-label'?: string
  'aria-labelledby'?: string
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

    const u = useRef<any>(null)
    const v = useRef<any>(null)
    const w = useRef<any>(null)

    useEffect(() => {
      let a = u.current
      let b = v.current
      if (!a || !b || disableClosingWithMask) {
        return
      }

      const isNodeInContainer = (target: any) => {
        return (
          target instanceof Node && !b.contains(target) && a.contains(target)
        )
      }
      const hasPointerEvent = 'PointerEvent' in window
      if (!hasPointerEvent) {
        const clickEvent = (a: any) => {
          isNodeInContainer(a.target) && onClose()
        }
        a.addEventListener('click', clickEvent)
        return () => {
          a.removeEventListener('click', clickEvent)
        }
      }

      let g = false

      const pointerdown = (ev: any) => {
        if (ev.isPrimary) {
          let b = isNodeInContainer(ev.target)
          g = b
          w.current = ev
        }
      }

      const pointerup = (ev: any) => {
        let b = isNodeInContainer(ev.target)
        if (g && b && w.current && ev.isPrimary) {
          b = isWithinThreshold(w.current, ev)
          b && onClose()
        }
        g = !1
        w.current = null
      }
      a.addEventListener('pointerup', pointerup)
      a.addEventListener('pointerdown', pointerdown)
      return () => {
        a.removeEventListener('pointerup', pointerup)
        a.removeEventListener('pointerdown', pointerdown)
      }
    }, [disableClosingWithMask, onClose])

    const x = useMergeRefs(v, ref)

    const q = jsx(BaseThemeProvider, {
      config: themeConfig,
      children: (themeClass: any, themeStyle: any) => {
        return jsx('div', {
          className: mergeClasses(
            themeClass.theme,
            classes.root,
            withDeprecatedStyles && classes.rootWithDeprecatedStyles,
            rootXStyle,
          ),
          ref: u,
          style: themeStyle,
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
