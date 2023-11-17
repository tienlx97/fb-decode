import React from 'react'
import { makeStyles, shorthands } from '@griffel/react'

type CometPressableChildrenWithOverlayProps = {
  children?: any
  overlay?: any
}

const useStyles = makeStyles({
  root: {
    //             className: "           ",
    alignContent: 'inherit',
    alignItems: 'inherit',
    ...shorthands.borderRadius('inherit'),
    display: 'inherit',
    flexDirection: 'inherit',
    height: 'inherit',
    justifyContent: 'inherit',
    position: 'relative',
    width: 'inherit',
  },
})

export function CometPressableChildrenWithOverlay({
  children,
  overlay,
}: CometPressableChildrenWithOverlayProps) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {children}
      {overlay}
    </div>
  )
}
