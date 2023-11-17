import { makeStyles, mergeClasses } from '@griffel/react'
import React from 'react'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'
import { CometDivider } from './comet-divider'

const useStyles = makeStyles({
  container: {
    backgroundColor: 'var(--card-background)',
    width: '100%',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'space-between',
    minHeight: '60px',
    position: 'relative',
  },
  d1: {
    backgroundColor: 'var(--card-background)',
    width: '100%',
  },
})

type CometDialogHeaderContainerProps = {
  addOnBottom?: any
  children?: any
  id?: any
  withDivider?: boolean
  className?: string
}

export function CometDialogHeaderContainer({
  addOnBottom,
  children,
  id,
  withDivider = false,
  className,
}: CometDialogHeaderContainerProps) {
  const classes = useStyles()

  return jsxs('div', {
    className: classes.d1,
    children: [
      jsx('div', {
        className: mergeClasses(classes.content, className),
        id,
        children,
      }),
      withDivider && jsx(CometDivider, {}),
      addOnBottom,
    ],
  })
}
