import React, { useMemo } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { CometIcon, fbicon } from '@metamon/image'
import { CometMenuItemBase, CometMenuItemIcon } from '@metamon/popover'

type CometFormComboboxMenuItemProps = {
  'aria-disabled'?: string
  'aria-setsize'?: string
  auxItemType?: any
  bodyColor?: any
  bodyText?: any
  disabled?: boolean
  icon?: any
  iconType?: any
  id?: string
  isSelected?: boolean
}

export default function CometFormComboboxMenuItem({
  auxItemType,
  icon,
  iconType,
  isSelected,
  ...rest
}: CometFormComboboxMenuItemProps) {
  const aux = useMemo(() => {
    let Comp = null

    if (isSelected) {
      Comp = jsx(CometIcon, {
        color: 'highlight',
        icon: fbicon(
          {
            sprited: 2,
            spi: '/assets/fb/yTUMQJovBsj.png',
            _spi: '/assets/fb/yTUMQJovBsj.png',
            w: 20,
            h: 20,
            p: '-21px -84px',
            sz: 'auto',
          },
          20,
        ),
      })
    }

    if (auxItemType) {
      switch (auxItemType) {
        case 'radio':
          Comp = isSelected
            ? jsx(CometIcon, {
                color: 'highlight',
                icon: fbicon(
                  {
                    sprited: 2,
                    spi: '/assets/fb/0XBuIwVU_TA.png',
                    _spi: '/assets/fb/0XBuIwVU_TA.png',
                    w: 24,
                    h: 24,
                    p: '0 -50px',
                    sz: 'auto',
                  },
                  24,
                ),
              })
            : jsx(CometIcon, {
                color: 'primary',
                icon: fbicon(
                  {
                    sprited: 2,
                    spi: '/assets/fb/0XBuIwVU_TA.png',
                    _spi: '/assets/fb/0XBuIwVU_TA.png',
                    w: 24,
                    h: 24,
                    p: '0 -75px',
                    sz: 'auto',
                    loggingID: '545519',
                  },
                  24,
                ),
              })
          break
      }
    }

    return Comp
  }, [auxItemType, isSelected])

  return jsx(
    CometMenuItemBase,
    Object.assign({}, rest, {
      'aria-selected': isSelected,
      aux,
      iconNode: icon
        ? jsx(CometMenuItemIcon, {
            icon: icon,
            use:
              iconType === 'profile-picture'
                ? 'contained'
                : 'contained_small_icon',
          })
        : null,
      role: 'option',
    }),
  )
}
