import { CometIcon, fbicon } from '@fb/tetra-icon'
import React, { useMemo } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

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
  const k = useMemo(() => {
    let Comp = null

    if (isSelected) {
      Comp = jsx(CometIcon, {
        color: 'highlight',
        icon: fbicon(
          {
            sprited: 2,
            spi: 'yTUMQJovBsj.png',
            _spi: 'yTUMQJovBsj.png',
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
                icon: d('fbicon')._(h('621400'), 24),
              })
            : jsx(CometIcon, {
                color: 'primary',
                icon: d('fbicon')._(h('545519'), 24),
              })
          break
      }
    }

    return Comp
  }, [auxItemType, isSelected])

  // return jsx(CometMenuItem)
}
