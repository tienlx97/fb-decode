import { CometIcon, fbicon } from '@negiganaito/image'
import {
  CometMenuItemBase,
  CometMenuItemBaseProps,
  CometMenuItemIcon,
} from '@negiganaito/popover'
import { CometSwitch } from '@negiganaito/switch'
import { forwardRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type CometMenuItemCheckboxProps = {
  asSwitch?: any
  icon?: any
  iconColor?: any
  iconSize?: any
  iconStyle?: any
  isSelected?: any
  radioStyle?: any
} & CometMenuItemBaseProps

export const CometMenuItemCheckbox = forwardRef<
  any,
  CometMenuItemCheckboxProps
>(
  (
    {
      asSwitch,
      disabled,
      icon,
      iconColor,
      iconSize,
      iconStyle,
      isSelected,
      radioStyle = 'default',
      ...rest
    },
    ref,
  ) => {
    const auxComp = asSwitch
      ? jsx(CometSwitch, {
          size: 'small',
          value: isSelected,
          children: rest.primaryText,
        })
      : isSelected
        ? jsx(CometIcon, {
            color: disabled ? 'disabled' : 'hightlight',
            icon: fbicon(
              {
                sprited: 2,
                spi: '/assets/workplace/OMcfOb0hl-U.png',
                _spi: '/assets/workplace/OMcfOb0hl-U.png',
                w: 24,
                h: 24,
                p: '0 -58px',
                sz: 'auto',
                loggingID: '531032',
              },
              24,
            ),
          })
        : jsx(CometIcon, {
            color: disabled ? 'disabled' : 'secondary',
            icon: fbicon(
              {
                sprited: 2,
                spi: '/assets/workplace/OMcfOb0hl-U.png',
                _spi: '/assets/workplace/OMcfOb0hl-U.png',
                w: 24,
                h: 24,
                p: '0 -83px',
                sz: 'auto',
                loggingID: '659289',
              },
              24,
            ),
          })

    return jsx(
      CometMenuItemBase,
      Object.assign({}, rest, {
        'aria-checked': isSelected,
        aux: auxComp,
        disabled,
        iconNode: icon
          ? jsx(CometMenuItemIcon, {
              icon,
              iconColor,
              iconSize,
              use: iconStyle,
            })
          : void 0,
        ref,
        role: 'menuitemcheckbox',
      }),
    )
  },
)
