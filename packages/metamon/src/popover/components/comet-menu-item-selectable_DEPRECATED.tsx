/* eslint-disable camelcase */
import React, { forwardRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import CometMenuItemBase from './comet-menu-item-base'
import { CometIcon, fbicon } from '@negiganaito/image'
import CometMenuItemIcon from './comet-menu-item-icon'
import { makeStyles } from '@griffel/react'

type CometMenuItemSelectable_DEPRECATEDProps = {
  aux?: any
  icon?: any
  disabled?: any
  iconColor?: string
  iconStyle?: any
  isSelected?: boolean
}

const useStyles = makeStyles({
  root: {
    marginBottom: '-5px',
    marginTop: '-5px',
  },
})

export const CometMenuItemSelectable_DEPRECATED = forwardRef<
  any,
  CometMenuItemSelectable_DEPRECATEDProps
>(({ disabled, icon, iconColor, iconStyle, isSelected, ...rest }, ref) => {
  const classes = useStyles()

  if (icon) {
    return jsx(
      CometMenuItemBase,
      Object.assign({}, rest, {
        'aria-checked': isSelected,
        aux: rest.aux
          ? rest.aux(isSelected, disabled)
          : selectedIcon(isSelected),
        disabled: disabled,
        iconNode: jsx(CometMenuItemIcon, {
          icon,
          iconColor,
          use: iconStyle,
        }),
        ref,
      }),
    )
  } else {
    const e = rest.aux
      ? rest.aux(isSelected, disabled)
      : selectedIcon(isSelected)
    return jsx(
      CometMenuItemBase,
      Object.assign({}, rest, {
        'aria-checked': isSelected,
        aux: e
          ? jsx('div', {
              className: classes.root, // 'xz62fqu x16ldp7u',
              children: e,
            })
          : void 0,
        disabled: disabled,
        ref,
      }),
    )
  }
})

function selectedIcon(isSelected?: boolean) {
  return !isSelected
    ? null
    : jsx(CometIcon, {
        color: 'highlight',
        icon: fbicon(
          {
            sprited: 2,
            spi: '/assets/fb/mQZHZtmvvJO.png',
            _spi: '/assets/fb/mQZHZtmvvJO.png',
            w: 20,
            h: 20,
            p: '-21px -84px',
            sz: 'auto',
            loggingID: '477820',
          },
          20,
        ),
      })
}
