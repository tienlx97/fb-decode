import { CrossFilled24 } from '@negiganaito/icons'
import React from 'react'
// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'
import { BaseDivider } from './base-divider'
import { CometCircleButton } from '@negiganaito/button'
import { makeStyles } from '@griffel/react'

type CometDialogLoadingStateHeaderProps = {
  id?: string
  onClose?: any
}

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'flex-end',
    marginLeft: '16px',
    marginRight: '16px',
    minHeight: '60px',
  },

  d1: {
    width: '100%',
  },
})

export function CometDialogLoadingStateHeader({
  id,
  onClose,
}: CometDialogLoadingStateHeaderProps) {
  const classes = useStyles()

  return jsxs('div', {
    className: classes.d1,
    children: [
      jsx('div', {
        className: classes.root,
        id,
        children: jsx(CometCircleButton, {
          icon: CrossFilled24,
          label: 'Close',
          onPress: onClose,
          size: 36,
          testid: void 0,
        }),
      }),
      jsx(BaseDivider, {}),
    ],
  })
}
