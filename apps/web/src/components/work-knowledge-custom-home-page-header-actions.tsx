import React from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import {
  CometDeferredPopoverTrigger,
  CometIcon,
  CometMenu,
  CometMenuItem,
  fbicon,
  TetraButton,
} from '@negiganaito/react-components'

export function WorkKnowledgeCustomHomePageHeaderActions() {
  const menuItem = [
    jsx(
      CometMenuItem,
      {
        bodyColor: 'disabled',
        icon: fbicon(
          {
            sprited: 2,
            spi: '/assets/workplace/zovbdSrnfTg.png',
            _spi: '/assets/workplace/zovbdSrnfTg.png',
            w: 20,
            h: 20,
            p: '-96px -258px',
            sz: 'auto',
            loggingID: '492708',
          },
          20,
        ),
        onClick: () => {},
        primaryText: 'Category ideas',
      },
      'recommended_content',
    ),
    jsx(
      CometMenuItem,
      {
        bodyColor: 'disabled',
        icon: fbicon(
          {
            sprited: 2,
            spi: '/assets/workplace/tPd7_fOIW3S.png',
            _spi: '/assets/workplace/tPd7_fOIW3S.png',
            w: 20,
            h: 20,
            p: '-146px -161px',
            sz: 'auto',
            loggingID: '728248',
          },
          20,
        ),
        onClick: () => {},
        primaryText: 'Create category',
        testid: void 0,
      },
      'new_category',
    ),
    jsx(
      CometMenuItem,
      {
        bodyColor: 'disabled',
        icon: fbicon(
          {
            sprited: 2,
            spi: '/assets/workplace/zovbdSrnfTg.png',
            _spi: '/assets/workplace/zovbdSrnfTg.png',
            w: 20,
            h: 20,
            p: '-75px -258px',
            sz: 'auto',
            loggingID: '495628',
          },
          20,
        ),
        onClick: () => {},
        primaryText: 'Create collection',
        // ref: e,
        testid: void 0,
      },
      'new_collection',
    ),
  ]

  const f = jsx(CometDeferredPopoverTrigger, {
    align: 'end',
    popoverProps: {
      children: menuItem,
      withArrow: true,
    },
    popoverResource: CometMenu,
    popoverType: 'menu',
    position: 'below',
    children: (ref: any, onPress: any) => {
      return jsx(TetraButton, {
        addOnSecondary: jsx(CometIcon, {
          color: 'highlight',
          icon: fbicon(
            {
              sprited: 2,
              spi: '/assets/workplace/b9Few9B5yUo.png',
              _spi: '/assets/workplace/b9Few9B5yUo.png',
              w: 16,
              h: 16,
              p: '0 -1192px',
              sz: 'auto',
              loggingID: '481882',
            },
            16,
          ),
        }),
        label: 'Create',
        onPress,
        reduceEmphasis: true,
        ref,
        testid: void 0,
      })
    },
  })

  return f
}
