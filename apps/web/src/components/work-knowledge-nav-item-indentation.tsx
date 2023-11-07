import React from 'react'
import { makeStyles, mergeClasses } from '@griffel/react'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  one: {
    paddingLeft: 0,
  },
  two: {
    paddingLeft: '12px',
  },
  three: {
    paddingLeft: '46px',
  },
  four: {
    paddingLeft: '72px',
  },
  five: {
    paddingLeft: '94px',
  },
  leftAligned: {
    marginLeft: '-24px',
    width: '24px',
  },

  d1: {
    display: 'flex',
    alignItems: 'center',
  },

  d2: {
    marginLeft: '-24px',
    width: '24px',
  },
})

type WorkKnowledgeNavItemIndentationProps = {
  indentLevel?: number
  indicator?: any
  children: any
}

export function WorkKnowledgeNavItemIndentation({
  indentLevel,
  indicator,
  children,
}: WorkKnowledgeNavItemIndentationProps) {
  const classes = useStyles()

  return (
    <div className={classes.d1}>
      <div className={classes.d2}>{indicator}</div>
      <div
        className={mergeClasses(
          indentLevel === 1 && classes.one,
          indentLevel === 2 && classes.two,
          indentLevel === 3 && classes.three,
          indentLevel === 4 && classes.four,
          indentLevel === 5 && classes.five,
        )}
      >
        {children}
      </div>
    </div>
  )
}
