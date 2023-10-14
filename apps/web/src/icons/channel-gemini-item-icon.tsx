import React from 'react'

import { makeStyles } from '@fluentui/react-components'
import { CometImage } from '@metamon/image'

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
