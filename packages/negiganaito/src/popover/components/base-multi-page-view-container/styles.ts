import { makeStyles, shorthands } from '@griffel/react'

export const useStyles = makeStyles({
  page: {
    ...shorthands.border('inherit'),
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    transformOrigin: 'top left',
  },
  pageInactive: {
    display: 'none',
    left: 0,
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  root: {
    alignItems: 'stretch',
    clipPath: 'inset(0 0 0 0)',
    WebkitClipPath: 'inset(0 0 0 0)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transformOrigin: 'top left',
  },
})
