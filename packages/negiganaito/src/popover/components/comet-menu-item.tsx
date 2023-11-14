import { CometIcon, MWXSvgIcon } from '@negiganaito/image'
import { MWXIconStrict } from '@negiganaito/image/components/mwx-icon-strict'
import { TetraTextPairing } from '@negiganaito/text'
import React, { forwardRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import CometMenuItemBase from './comet-menu-item-base'
import CometMenuItemIcon from './comet-menu-item-icon'

type CometMenuItemProps = {
  auxItem?: any
  emojiSize?: any
  icon?: any
  iconColor?: any
  iconCssSelectorId?: any
  iconSize?: any
  iconStyle?: string
  image?: any
  overlayRadius?: number
  disabled?: boolean
}

export const CometMenuItem = forwardRef<any, CometMenuItemProps>(
  (
    {
      auxItem,
      emojiSize,
      icon,
      iconColor,
      iconCssSelectorId,
      iconSize,
      iconStyle = 'normal',
      image,
      overlayRadius = 4,
      ...rest
    },
    ref,
  ) => {
    let aux = null

    if (auxItem) {
      switch (auxItem.type) {
        case 'text':
          aux = jsx(TetraTextPairing, {
            level: 3,
            meta: auxItem.auxText,
          })
          break
        case 'badge':
          aux = jsx('CometBadge', {
            color: auxItem.color,
          })
          break
        case 'icon':
          aux =
            auxItem.icon instanceof MWXSvgIcon
              ? jsx(MWXIconStrict, {
                  color: auxItem.color,
                  icon: auxItem.icon,
                  size: 20,
                })
              : jsx(CometIcon, {
                  color: auxItem.color,
                  icon: auxItem.icon,
                })
          break
        case 'numberedBadge':
          aux = auxItem.badge
          break
        default:
          break
      }
    }

    return jsx(
      CometMenuItemBase,
      Object.assign({}, rest, {
        alignCenter: true,
        aux,
        iconNode: icon
          ? jsx(CometMenuItemIcon, {
              disabled: rest.disabled,
              emojiSize,
              icon,
              iconColor,
              iconCssSelectorId,
              iconSize,
              use: iconStyle,
            })
          : image
          ? jsx('CometProfilePhoto', {
              addOn: image.addOn,
              shape: image.shape,
              size: image.size,
              source: image.source,
            })
          : null,
        isIconAnImage: !icon && image,
        overlayRadius,
        ref,
      }),
    )
  },
)
