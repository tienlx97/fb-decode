import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import React, { forwardRef, useContext, useMemo } from 'react'
import { CometDialogPageLoadingState } from './comet-dialog-page-loading-state'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import emptyFunction from 'fbjs/lib/emptyFunction'
import { CometDialogLoadingStateContext } from '../context/comet-dialog-loading-state-context'
import { BaseDialog } from './base-dialog'
import { BaseMultiPageView } from '@negiganaito/popover'

const useStyles = makeStyles({
  anchor: {
    alignItems: 'stretch',
    maxHeight: '100vh',
    paddingLeft: '4px',
    paddingRight: '4px',
    paddingTop: 'var(--dialog-anchor-vertical-padding)',
    paddingBottom: 'var(--dialog-anchor-vertical-padding)',
    '@supports (padding: env(safe-area-inset-bottom,0))': {
      paddingBottom:
        'calc(var(--dialog-anchor-vertical-padding) + env(safe-area-inset-bottom,0))',
      paddingTop:
        'calc(var(--dialog-anchor-vertical-padding) + env(safe-area-inset-top,0))',
    },
  },
  card: {
    backgroundColor: 'var(--card-background)',
    ...shorthands.borderRadius('var(--card-corner-radius)'),
    boxShadow:
      '0 12px 28px 0 var(--shadow-2),0 2px 4px 0 var(--shadow-1),inset 0 0 0 1px var(--shadow-inset)',
    clipPath: 'none',
    flexGrow: 1,
    overflowX: 'hidden',
    overflowY: 'hidden',
    '@media (max-width: 679px)': {
      boxShadow: 'none',
      clipPath: 'inset(0 0 0 0 round var(--card-corner-radius))',
      overflowX: 'visible',
      overflowY: 'visible',
    },
  },
  dialog: {
    alignItems: 'stretch',
    ...shorthands.borderRadius('var(--card-corner-radius)'),
    display: 'flex',
    overflowX: 'visible',
    overflowY: 'visible',
    '@media (max-width: 679px)': {
      boxShadow:
        '0 12px 28px 0 var(--shadow-2),0 2px 4px 0 var(--shadow-1),inset 0 0 0 1px var(--shadow-inset)',
    },
  },
  root: {
    '@media (max-width: 679px)': {
      justifyContent: 'center',
    },
  },
})
const useSizeStyles = makeStyles({
  medium: {
    maxWidth: '700px',
    width: '100%',
  },
  small: {
    maxWidth: '548px',
    width: '100%',
  },
})

export type CometDialogContainerProps = {
  anchorXStyle: any
  children: React.ReactNode
  disableClosingWithMask?: boolean
  label: string
  labelledBy: string
  onClose: () => void
  size?: 'small' | 'medium'
  testid?: string
}

export const CometDialogContainer = forwardRef<any, CometDialogContainerProps>(
  (
    {
      anchorXStyle,
      children,
      disableClosingWithMask = false,
      label,
      labelledBy,
      onClose,
      size = 'small',
      testid,
    },
    ref,
  ) => {
    const m = useSizeStyles()
    const l = useStyles()

    const BaseMultiPageViewFallBack = useMemo(() => {
      return jsx(CometDialogPageLoadingState, {
        onClose: onClose ?? emptyFunction,
      })
    }, [onClose])

    const disableAutoRestoreFocus = useContext(CometDialogLoadingStateContext)

    return jsx(BaseDialog, {
      anchorXStyle: mergeClasses(l.anchor, anchorXStyle),
      'aria-label': label,
      'aria-labelledby': labelledBy,
      disableClosingWithMask,
      onClose: onClose ?? emptyFunction,
      ref,
      rootXStyle: l.root,
      testid: void 0,
      className: mergeClasses(l.dialog, m[size]),
      children: jsx(BaseMultiPageView, {
        disableAutoRestoreFocus,
        fallback: BaseMultiPageViewFallBack,
        className: l.card,
        children,
      }),
    })
  },
)
