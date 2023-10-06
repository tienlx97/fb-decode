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
    alignItems: 'x6s0dn4',
    display: 'x78zum5',
    height: 'xnnlda6',
    justifyContent: 'xl56j7k',
    minWidth: 'x53cq04',
    width: 'xh8yej3',
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
