import { CometIcon, fbicon } from '@negiganaito/image'
import {
  CometMenuItemBase,
  CometMenuItemBaseProps,
  CometMenuItemIcon,
} from '@negiganaito/popover'
import React, { forwardRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type CometMenuItemRadioProps = {
  disabled?: boolean
  icon?: any
  iconColor?: any
  iconStyle?: any
  isSelected?: any
  radioStyle?: any
} & CometMenuItemBaseProps

export const CometMenuItemRadio = forwardRef<any, CometMenuItemRadioProps>(
  (
    {
      disabled,
      icon,
      iconColor,
      iconStyle,
      isSelected,
      radioStyle = 'default',
      ...rest
    },
    ref,
  ) => {
    let auxComp: any

    radioStyle === 'checkmark'
      ? (auxComp = isSelected
          ? jsx(CometIcon, {
              color: disabled ? 'disabled' : 'highlight',
              icon: fbicon(
                {
                  sprited: 2,
                  spi: '/assets/workplace/WByxatfI71E.png',
                  _spi: '/assets/workplace/WByxatfI71E.png',
                  w: 20,
                  h: 20,
                  p: '0 -305px',
                  sz: 'auto',
                  loggingID: '477814',
                },
                20,
              ),
            })
          : void 0)
      : (auxComp = isSelected
          ? jsx(CometIcon, {
              color: disabled ? 'disabled' : 'highlight',
              icon: fbicon(
                {
                  sprited: 2,
                  spi: '/assets/workplace/WByxatfI71E.png',
                  _spi: '/assets/workplace/WByxatfI71E.png',
                  w: 20,
                  h: 20,
                  p: '0 -431px',
                  sz: 'auto',
                  loggingID: '621399',
                },
                20,
              ),
            })
          : jsx(CometIcon, {
              color: disabled ? 'disabled' : 'secondary',
              icon: fbicon(
                {
                  sprited: 2,
                  spi: '/assets/workplace/WByxatfI71E.png',
                  _spi: '/assets/workplace/WByxatfI71E.png',
                  w: 20,
                  h: 20,
                  p: '0 -452px',
                  sz: 'auto',
                  loggingID: '545517',
                },
                20,
              ),
            }))

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
              use: iconStyle,
            })
          : void 0,
        ref,
        role: 'menuitemradio',
      }),
    )
  },
)
