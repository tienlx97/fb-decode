import { makeStyles } from '@griffel/react'
import React from 'react'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  wrapper: {
    height: '16px',
    marginLeft: '8px',
    width: '160px',
  },
})

type WorkGalahadKnowledgeDraggablePlaceholderProps = {
  height: number
  className?: string
}

export function WorkGalahadKnowledgeDraggablePlaceholder({
  height,
  className,
}: WorkGalahadKnowledgeDraggablePlaceholderProps) {
  const classes = useStyles()

  return (
    <div
      className={classes.root}
      style={{
        height,
      }}
    >
      <div className={className} />
      <div className={classes.wrapper} />
    </div>
  )
}
