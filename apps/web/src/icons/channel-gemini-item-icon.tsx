import React from 'react'

import { makeStyles } from '@griffel/react'
import { CometImage } from '@negiganaito/image'

type BookmarkIconProps = {
  image?: any
}

const useStyles = makeStyles({
  bookmark: {
    display: 'block',
    height: '36px',
    width: '36px',
  },
})

export const BookmarkIcon = ({ image }: BookmarkIconProps) => {
  const classes = useStyles()

  // @ts-ignore
  return <CometImage className={classes.bookmark} src={image} />
}
