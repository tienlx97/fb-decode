import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import {
  CometPressableChildrenWithOverlay,
  CometPressableOverlay,
} from '@negiganaito/pressable'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

const useStyles = makeStyles({
  badge: {
    backgroundColor: 'var(--positive-background)',
    ...shorthands.borderRadius('14px'),
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('2px'),

    boxSizing: 'border-box',
    display: 'flex',
    fontWeight: 'bold',
    justifyContent: 'center',
    marginTop: '-2px',
    marginRight: '-2px',
    marginBottom: '-2px',
    marginLeft: '-2px',
    paddingLeft: '2px',
    paddingRight: '2px',
  },
  badgeContainer: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
  },
  inner: {
    color: 'var(--positive)',
    fontSize: '.625rem',
    lineHeight: '1.25',
    whiteSpace: 'nowrap',
  },

  dummy1: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
  },

  dummy2: {
    color: 'var(--positive)',
    fontSize: '.625rem',
    lineHeight: '1.25',
    whiteSpace: 'nowrap',
  },
})
const useBorderStyles = makeStyles({
  'card-background': {
    ...shorthands.borderColor('var(--card-background)'),
  },
  'secondary-button-background-floating': {
    ...shorthands.borderColor('var(--secondary-button-background-floating)'),
  },
  'web-wash': {
    ...shorthands.borderColor('var(--web-wash)'),
  },
})

type MWChatActivePillProps = {
  border?: string
  children?: any
  pressed?: any
}

export function MWChatActivePill({
  border,
  children,
  pressed,
}: MWChatActivePillProps) {
  const classes = useStyles()
  const borderClasses = useBorderStyles()

  return jsx('div', {
    className: classes.dummy1,
    children: jsx(CometPressableChildrenWithOverlay, {
      overlay: jsx(CometPressableOverlay, {
        pressed,
        radius: 7,
      }),
      children: jsx('div', {
        // @ts-ignore
        className: mergeClasses(classes.badge, borderClasses[border]),
        children: jsx('span', {
          className: classes.dummy2,
          children,
        }),
      }),
    }),
  })
}
