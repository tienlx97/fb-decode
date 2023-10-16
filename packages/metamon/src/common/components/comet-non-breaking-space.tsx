import { makeStyles } from '@griffel/react'
import React from 'react'

type CometNonBreakingSpaceProps = {
  size?: 0.25 | 0.5 | 0.75 | 1
}

const useStyles = makeStyles({
  1: {
    marginRight: '1ch',
  },
  0.25: {
    marginRight: '.25ch',
  },
  0.5: {
    marginRight: '.5ch',
  },
  0.75: {
    marginRight: '.75ch',
  },
})

export default function CometNonBreakingSpace({
  size,
}: CometNonBreakingSpaceProps) {
  const classes = useStyles()

  if (size) {
    // eslint-disable-next-line react/no-children-prop
    return <span className={classes[size]} children="\ufeff" />
  } else {
    // eslint-disable-next-line react/no-children-prop
    return <React.Fragment children="\xa0" />
  }
}
