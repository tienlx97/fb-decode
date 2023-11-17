import React from 'react'

import { makeStyles } from '@griffel/react'

type ChannelGeminiUIChannelHideableAreaProps = {
  children?: any
  show?: boolean
}

const useStyles = makeStyles({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
})

export function ChannelGeminiUIChannelHideableArea({
  children,
  show = true,
}: ChannelGeminiUIChannelHideableAreaProps) {
  const classes = useStyles()

  return (
    <div hidden={!show} className={show ? classes.container : undefined}>
      {children}
    </div>
  )
}
