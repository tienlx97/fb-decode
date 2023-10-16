/* eslint-disable camelcase */
import React, { forwardRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometPressable } from '../comet-pressable'
import {
  useOverLayPressStyles,
  iconRatioLarge,
  iconRatioNormal,
  useSizeStyles,
  useColorTypeStyles,
  useDisableStyles,
} from './styles'
import { mergeClasses } from '@griffel/react'
import { CometIcon, CometSVGIconColor } from '@fb/tetra-icon'

type CometCircleButtonProps = {
  icon?: any
  label?: string
  color?: CometSVGIconColor
  dataAttributes?: any
  disabled?: boolean
  focusable?: boolean
  iconRatio?: 'large'
  linkProps?: any
  onFocusIn?: (props: any) => any
  onFocusOut?: (props: any) => any
  onHoverIn?: (props: any) => any
  onHoverOut?: (props: any) => any
  onPress?: (props: any) => any
  onPressIn?: (props: any) => any
  onPressOut?: (props: any) => any
  overlayHoveredStyle?: any
  size: 24 | 28 | 32 | 36 | 40 | 48
  testid?: string
  testOnly_pressed?: boolean
  type?:
    | 'normal'
    | 'dark-overlay'
    | 'deemphasized'
    | 'deemphasized-overlay'
    | 'overlay'
    | 'overlay-floating'
    | 'overlay-raised'
    | 'primary-background-overlay'

  'aria-hidden'?: string
  'aria-pressed'?: string
}

const CometCircleButton = forwardRef<HTMLElement, CometCircleButtonProps>(
  (
    {
      'aria-hidden': ariaHidden,
      'aria-pressed': ariaPressed,
      color,
      dataAttributes,
      disabled = false,
      focusable,
      icon,
      iconRatio,
      label,
      linkProps,
      onFocusIn,
      onFocusOut,
      onHoverIn,
      onHoverOut,
      onPress,
      onPressIn,
      onPressOut,
      overlayHoveredStyle,
      size,
      testid,
      testOnly_pressed,
      type = 'normal',
      ...rest
    },
    ref,
  ) => {
    const overLayPressStyles = useOverLayPressStyles()
    const sizeClasses = useSizeStyles()
    const colorTypeClasses = useColorTypeStyles()
    const disableClasses = useDisableStyles()

    const dataArr = dataAttributes
      ? Object.keys(dataAttributes).reduce((arr: any, key: any) => {
          if (arr && key) {
            arr['data' + key] = dataAttributes[key]
          }
          return arr
        }, {})
      : null
    const pressableChildren = jsx(CometPressable, {
      'aria-hidden': ariaHidden,
      'aria-label': label,
      'aria-pressed': ariaPressed,
      disabled,
      display: 'inline',
      focusable,
      linkProps,
      onFocusIn,
      onFocusOut,
      onHoverIn,
      onHoverOut,
      onPress,
      onPressIn,
      onPressOut,
      overlayHoveredStyle,
      overlayPressedStyle: overLayPressStyles.pressableOverlayPressed,
      overlayRadius: '50%',
      ref,
      testOnly_pressed,
      testid: undefined,
      className: (classProps: any) => {
        const { pressed } = classProps

        return mergeClasses(
          overLayPressStyles.root,
          sizeClasses[size],
          colorTypeClasses[type],
          disabled &&
            disableClasses[
              type === 'overlay-raised' || type === 'overlay-floating'
                ? 'overlay'
                : type
            ],
          pressed && overLayPressStyles.pressed,
        )
      },
      children: jsx(CometIcon, {
        color: disabled ? 'disabled' : color ? color : getColorByType(type),
        size:
          iconRatio === 'large' ? iconRatioLarge[size] : iconRatioNormal[size],
        icon,
      }),
    })

    return dataArr ? (
      <div {...dataArr}>{pressableChildren}</div>
    ) : (
      pressableChildren
    )
  },
)

function getColorByType(
  type:
    | 'normal'
    | 'dark-overlay'
    | 'deemphasized'
    | 'deemphasized-overlay'
    | 'overlay'
    | 'overlay-floating'
    | 'overlay-raised'
    | 'primary-background-overlay',
) {
  switch (type) {
    case 'dark-overlay':
      return 'white'
    case 'deemphasized-overlay':
      return 'highlight'
    default:
      return 'primary'
  }
}

export default CometCircleButton
