import { makeStyles, mergeClasses } from '@griffel/react'
import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

const k = {
  color: function (color: any) {
    return {
      '--color': color ?? 'initial',
    }
  },
}

const useStyles = makeStyles({
  root: {
    color: 'var(--color,revert)',
  },
})

type BaseSVGIconProps = {
  alt?: string
  color?: any
  icon?: any
  size?: any
  className?: string
}

export function BaseSVGIcon({
  alt,
  className,
  color,
  icon,
  size = 8,
}: BaseSVGIconProps) {
  const classes = useStyles()

  return jsx(
    icon,
    Object.assign(
      {
        height: size,
        title: !alt || alt === '' ? void 0 : alt,
        width: size,
      },
      {
        style: color ? k.color(color) : undefined,
        className: mergeClasses(classes.root, className),
      },
    ),
  )
}
