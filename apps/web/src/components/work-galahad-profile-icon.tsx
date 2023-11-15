import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import { CometGlimmer, CometPlaceholder } from '@negiganaito/react-components'
import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type WorkGalahadProfileIconProps = {
  size?: number
  disableAltText?: boolean
}

const useSytyles = makeStyles({
  icon: {
    ...shorthands.borderRadius('50%'),
    position: 'relative',
  },
  icon32: {
    height: '32px',
    width: '32px',
  },
  icon36: {
    height: '36px',
    width: '36px',
  },
  icon40: {
    height: '40px',
    width: '40px',
  },
})

export function WorkGalahadProfileIcon({
  size = 36,
  disableAltText = false,
}: WorkGalahadProfileIconProps) {
  const classes = useSytyles()

  return jsx(CometPlaceholder, {
    fallback: jsx(CometGlimmer, {
      index: 0,
      className: mergeClasses(
        classes.icon,
        size === 32 && classes.icon32,
        size === 36 && classes.icon36,
        size === 40 && classes.icon40,
      ),
    }),
    children: jsx('WorkGalahadProfileIconImpl', {
      size,
      disableAltText,
    }),
  })
}
