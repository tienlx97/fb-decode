import { makeStyles } from '@griffel/react'
import { BaseView } from '@negiganaito/common'
import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type CometScreenReaderTextProps = any

const useStyles = makeStyles({
  visuallyHidden: {
    clip: 'rect(0,0,0,0)',
    clipPath: 'inset(50%)',
    height: '1px',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'absolute',
    width: '1px',
  },
})

export function CometScreenReaderText({
  text,
  ...rest
}: CometScreenReaderTextProps) {
  const classes = useStyles()

  return jsx(
    BaseView,
    Object.assign({}, rest, {
      className: classes.visuallyHidden,
      children: text,
    }),
  )
}
