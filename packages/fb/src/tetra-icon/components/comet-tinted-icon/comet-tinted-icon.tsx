/* eslint-disable camelcase */
import React, { forwardRef } from 'react'
//@ts-ignore
import { jsx } from 'react/jsx-runtime'
import { TintableIconSource } from '@fb/tetra-icon/utils/tintable-icon-source'
import BaseImage_DEPRECATED from '../base-image_DEPRECATED'
import { mergeClasses } from '@griffel/react'
import { useFilterStyles, useImageStyles } from './styles'

type CometTintedIconProps = {
  alt?: string
  color?:
    | 'white'
    | 'blueLink'
    | 'disabled'
    | 'negative'
    | 'positive'
    | 'primary'
    | 'primaryAccent'
    | 'secondary'
    | 'warning'
    | 'accent'
    | 'placeholder'
    | 'black'
  draggable?: boolean
  icon?: any
  testid?: string
  className?: string
}

const CometTintedIcon = forwardRef<HTMLElement, CometTintedIconProps>(
  ({ alt = '', color = 'black', draggable, icon, testid, className }, ref) => {
    const filterClasses = useFilterStyles()
    const classes = useImageStyles()

    const tintableIconSource = icon instanceof TintableIconSource

    return jsx(BaseImage_DEPRECATED, {
      alt,
      className: mergeClasses(
        classes.image,
        tintableIconSource && color !== 'black' && filterClasses[color],
        className,
      ),
      draggable,
      ref,
      src: icon.src,
      testid: undefined,
    })
  },
)

// @ts-ignore
CometTintedIcon.name = 'CometTintedIcon'

export default CometTintedIcon
