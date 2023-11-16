/*

__d("CometProfilePhotoNotificationBadge.react", ["CometBadge.react", "TetraText.react", "react"],

__d("CometBadge.react", ["BaseStyledBadge.react", "getCometBadgeColorStyle", "react"], 

__d("BaseStyledBadge.react", ["BaseBadge.react", "react"], 

__d("BaseBadge.react", ["CometVisualCompletionAttributes", "react", "stylex", "testID"], 

__d("getCometBadgeColorStyle", ["unrecoverableViolation"], 

*/

import { makeStyles, mergeClasses, shorthands } from '@griffel/react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometBadge } from './comet-badge'
import { TetraText } from '@negiganaito/text'

type CometProfilePhotoNotificationBadgeProps = {
  number: number
}

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    width: '100%',
  },
})

export const CometProfilePhotoNotificationBadge = ({
  number,
}: CometProfilePhotoNotificationBadgeProps) => {
  const classes = useStyles()

  return jsx(CometBadge, {
    color: 'red',
    isProfileBadge: true,
    size: 18,
    wide: number > 9 ? 'wide' : 'normal',
    children: jsx('div', {
      className: classes.root,
      children: jsx(TetraText, {
        color: 'primaryOnMedia',
        type: 'body4',
        children: number > 9 ? '9+' : number,
      }),
    }),
  })
}
