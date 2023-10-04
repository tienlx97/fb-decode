import { mergeClasses } from '@fluentui/react-components'
import React, { forwardRef } from 'react'
import { CometIcon } from '../comet-icon'
import { getBadgePosition } from '@fb/utils/profile-photo-utils'
import { CometSVGIconColor, CometSVGIconSize } from '../comet-svg-icon'
import {
  useColorStyles,
  useDymmyStyles,
  useShapeStyles,
  useSizeStyles,
} from './styles'

type CometskittleIconProsp = {
  color:
    | 'white'
    | 'gray'
    | 'lightblue'
    | 'blue'
    | 'green'
    | 'lime'
    | 'pink'
    | 'red'
    | 'teal'
    | 'tomato'
    | 'accent'
    | 'cherry'
    | 'grape'
    | 'lemon'
    | 'seafoam'
  disabled?: boolean
  icon?: any
  iconAria?: any
  iconBadge?: any
  iconBadgeAria?: any
  shape?: string
  size: 36 | 40 | 48 | 56 | 60 | 32
}

const convertSize = {
  24: 16,
  36: 20,
  40: 24,
  48: 24,
  56: 24,
  60: 24,
}

const CometskittleIcon = forwardRef<HTMLDivElement, CometskittleIconProsp>(
  (
    {
      color,
      disabled = false,
      icon,
      iconAria,
      iconBadge,
      iconBadgeAria,
      shape = 'circle',
      size,
    },
    ref,
  ) => {
    const shapeClasses = useShapeStyles()
    const colorClasses = useColorStyles()
    const sizeClasses = useSizeStyles()
    const dummyClasses = useDymmyStyles()

    return (
      <div
        className={mergeClasses(
          shape === 'circle' && shapeClasses.circle,
          shape === 'roundedRect' && shapeClasses.roundedRect,
          shapeClasses.skittle,
          colorClasses[color],
          sizeClasses[size],
        )}
        ref={ref}
      >
        <CometIcon
          iconAria={iconAria}
          color={disabled ? 'disabled' : convertColor(color)}
          icon={icon}
          // @ts-ignore
          size={convertSize[size]}
        />
        {iconBadge && (
          <div
            className={dummyClasses.dummy1}
            style={getBadgePosition(size / 2)}
          >
            <CometIcon
              iconBadgeAria={iconBadgeAria}
              color="white"
              icon={icon}
              size={8}
            />
          </div>
        )}
      </div>
    )
  },
)

function convertColor(color: string) {
  switch (color) {
    case 'gray':
      return 'primary'
    case 'white':
      return 'primary'
    case 'lightblue':
      return 'highlight'
    default:
      return 'white'
  }
}

export default CometskittleIcon
