import {
  CometPressableChildrenWithOverlay,
  CometPressableOverlay,
} from '@negiganaito/pressable'
import React from 'react'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'
import { CometBadge } from './comet-badge'
import { makeStyles, shorthands } from '@griffel/react'
import { CometScreenReaderText } from '@negiganaito/text'

/*

__d("CometProfilePhotoAvailabilityBadge.react", 
["fbt", "CometBadge.react", 
"CometPressableChildrenWithOverlay.react", 
"CometPressableOverlay.react", 
"CometScreenReaderText.react", "react"], (function(a, b, c, d, e, f, g, h) {


*/

type CometProfilePhotoAvailabilityBadgeProps = {
  pressed?: any
  size?: number
}

const useStyles = makeStyles({
  root: {
    ...shorthands.borderRadius('50%'),
    display: 'flex',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'relative',
  },
})

export function CometProfilePhotoAvailabilityBadge({
  pressed,
  size,
}: CometProfilePhotoAvailabilityBadgeProps) {
  const classes = useStyles()
  return jsxs('div', {
    className: classes.root,
    children: [
      jsx(CometPressableChildrenWithOverlay, {
        overlay: jsx(CometPressableOverlay, {
          pressed,
          radius: '50%',
        }),
        children: jsx(CometBadge, {
          color: 'green',
          isProfileBadge: !0,
          size,
        }),
      }),
      jsx(CometScreenReaderText, {
        text: 'Active',
      }),
    ],
  })
}
