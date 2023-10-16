import { makeStyles, mergeClasses } from '@fluentui/react-components'
import { useCurrentDisplayMode } from '@metamon/hooks'

import React from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { BaseGlimmer, BaseGlimmerProps } from './base-glimmer'

const useStyles = makeStyles({
  dark: {
    backgroundColor: 'xhzw6zf',
  },
  light: {
    backgroundColor: 'x1vtvx1t',
  },
})

type CometGlimmerProps = BaseGlimmerProps

export function CometGlimmer({ className, ...rest }: CometGlimmerProps) {
  const classes = useStyles()

  const mode = useCurrentDisplayMode()

  return jsx(
    BaseGlimmer,
    Object.assign(
      {
        className: mergeClasses(
          mode === 'dark' ? classes.dark : classes.light,
          className,
        ),
      },
      rest,
    ),
  )
}
