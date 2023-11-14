import { makeStyles } from '@griffel/react'
import { useMDSIconColors } from '@negiganaito/hooks'
import React from 'react'
import { MWXThreadThemeColor } from './mwx-thread-theme-color'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { BaseSVGIcon } from './base-svg-icon'

type MWXIconStrictProps = {
  alt?: string
  color?: any
  icon?: any
  size?: any
}

const useStyles = makeStyles({
  root: {
    display: 'block',
  },
})

export function MWXIconStrict({
  alt,
  color = 'primary',
  icon,
  size,
}: MWXIconStrictProps) {
  const mdxIconColors = useMDSIconColors()

  const classes = useStyles()

  const _color =
    color instanceof MWXThreadThemeColor ? color.color : mdxIconColors[color]

  return jsx(BaseSVGIcon, {
    alt,
    color: _color,
    icon: icon.component.component,
    size,
    className: classes.root,
  })
}
