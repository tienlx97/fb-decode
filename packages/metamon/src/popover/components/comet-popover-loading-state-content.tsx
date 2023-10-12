import { makeStyles, mergeClasses } from '@fluentui/react-components'
import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometProgressRingIndeterminate } from './comet-progress-ring-indeterminate'

type CometPopoverLoadingStateContentProps = {
  className?: string
}

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    display: 'flex',
    height: '56px',
    justifyContent: 'center',
    minWidth: '334px',
    width: '100%',
  },
})

export function CometPopoverLoadingStateContent({
  className,
}: CometPopoverLoadingStateContentProps) {
  const classes = useStyles()

  return jsx('div', {
    className: mergeClasses(classes.root, className),
    children: jsx(CometProgressRingIndeterminate, {
      color: 'disabled',
      size: 24,
    }),
  })
}
