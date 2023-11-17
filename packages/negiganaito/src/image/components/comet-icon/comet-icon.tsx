/* eslint-disable camelcase */
import React, { createElement, forwardRef } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { CometPressable } from '@negiganaito/pressable'
import { mergeClasses } from '@griffel/react'

import {
  parseFlightIcon,
  IconSource,
  ImageIconSource,
  TintableIconSource,
} from '../../utils'
import BaseImage_DEPRECATED from '../base-image_DEPRECATED'
import {
  CometSvgIcon,
  CometSVGIconColor,
  CometSVGIconSize,
} from '../comet-svg-icon'
import { CometTintedIcon } from '../comet-tinted-icon'
import { useStyles } from './styles'
import { LegacySVGIcon, SVGIcon } from '@negiganaito/utils/common/svg-icon'

export type CometIconProps = {
  color: CometSVGIconColor
  icon: any
  size?: CometSVGIconSize
  //
  alt?: string
  disabled?: boolean
  disableOverlay_DEPRECATED?: boolean
  draggable?: boolean
  focusable?: boolean
  hideHoverOverlay?: boolean
  linkProps?: any
  onHoverIn?: (props: any) => any
  onHoverOut?: (props: any) => any
  onPress?: (props: any) => any
  onPressIn?: (props: any) => any
  onPressOut?: (props: any) => any
  testOnly_pressed?: boolean
  className?: string
  testid?: string
  'aria-label'?: string
  iconAria?: any
  iconBadgeAria?: any
}

const CometIcon = forwardRef<HTMLElement, CometIconProps>(
  (
    {
      color,
      icon,
      size = 8,
      alt = '',
      disabled = false,
      disableOverlay_DEPRECATED = false,
      focusable,
      hideHoverOverlay = false,
      linkProps,
      onHoverIn,
      onHoverOut,
      onPress,
      onPressIn,
      onPressOut,
      testOnly_pressed,
      testid,
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()

    const normalizeIcon = parseFlightIcon(icon)
    const _testid = !onPress ? testid : undefined
    const _color = disabled ? 'disabled' : color
    const pressableComp = onPress || linkProps
    const _alt = (!pressableComp && rest['aria-label']) || alt
    const _ref = pressableComp ? undefined : ref

    const Img =
      normalizeIcon instanceof TintableIconSource
        ? jsx(CometTintedIcon, {
            alt: _alt,
            color: getColor(_color),
            draggable: rest.draggable,
            icon: normalizeIcon,
            ref: _ref,
            testid: undefined,
            className,
          })
        : normalizeIcon instanceof ImageIconSource
        ? jsx(BaseImage_DEPRECATED, {
            alt: _alt,
            className: mergeClasses(
              classes.image,
              normalizeIcon.resizeStrategy === 'contain' &&
                classes.imageContain,
              normalizeIcon.resizeStrategy === 'cover' && classes.imageCover,
              className,
            ),
            draggable: rest.draggable,
            src: normalizeIcon.src,
            style: {
              height: normalizeIcon.height,
              width: normalizeIcon.width,
            },
            testid: undefined,
          })
        : normalizeIcon instanceof IconSource
        ? jsx(BaseImage_DEPRECATED, {
            alt: _alt,
            className: mergeClasses(classes.image, className),
            draggable: rest.draggable,
            height: normalizeIcon.size,
            ref: _ref,
            src: normalizeIcon.src,
            width: normalizeIcon.size,
          })
        : normalizeIcon instanceof LegacySVGIcon
        ? createElement(normalizeIcon.component, {
            alt: _alt,
            color: _color,
            'data-testid': _testid,
            size,
          })
        : normalizeIcon instanceof SVGIcon
        ? jsx(CometSvgIcon, {
            alt: _alt,
            color: _color,
            component: normalizeIcon.component,
            'data-testid': undefined,
            size,
          })
        : jsx(CometSvgIcon, {
            alt: _alt,
            color: _color,
            component: normalizeIcon.component ?? icon,
            size,
            'data-testid': void 0,
          })

    return pressableComp
      ? jsx(
          CometPressable,
          Object.assign({}, rest, {
            disabled,
            focusable,
            hideHoverOverlay,
            linkProps,
            onHoverIn,
            onHoverOut,
            onPress,
            onPressIn,
            onPressOut,
            overlayDisabled: disableOverlay_DEPRECATED,
            overlayOffset: 8,
            overlayRadius: '50%',
            ref,
            testOnly_pressed,
            testid: void 0,
            className: ({ pressed }: any) => {
              return [classes.button, pressed && classes.pressed]
            },
            children: Img,
          }),
        )
      : Img
  },
)

function getColor(color: CometSVGIconColor) {
  switch (color) {
    case 'positive':
      return 'positive'
    case 'negative':
      return 'negative'
    case 'disabled':
      return 'disabled'
    case 'highlight':
      return 'accent'
    case 'secondary':
      return 'secondary'
    case 'tertiary':
      return 'placeholder'
    case 'white':
      return 'white'
    case 'primary':
      return 'primary'
    case 'warning':
      return 'warning'
    case 'blueLink':
      return 'blueLink'
    case 'primaryAccent':
      return 'primaryAccent'
    default:
      return 'black'
  }
}

export default CometIcon
