import { makeStyles } from '@griffel/react'

export const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    listStyleType: 'none',
    maxWidth: '100%',
  },
  root: {
    bottom: 0,
    display: 'flex',
    right: 0,
    pointerEvents: 'none',
    position: 'fixed',
    left: 'var(--global-panel-width)',
    zIndex: 4,
  },
  rootBlue: {
    zIndex: 402,
  },
  rootWorkplaceLegacy: {
    zIndex: 502,
  },
  toast: {
    paddingTop: '16px',
    paddingRight: '16px',
    paddingBottom: '16px',
    paddingLeft: '16px',
    pointerEvents: 'all',
    '@media (max-width: 899px)': {
      maxWidth: '100%',
    },
  },

  dummy: {
    display: 'flex',
    flexDirection: 'column',
    listStyleType: 'none',
    maxWidth: '100%',
  },
})

export const useAlignStyles = makeStyles({
  center: {
    justifyContent: 'center',
  },
  end: {
    justifyContent: 'flex-end',
  },
  start: {
    justifyContent: 'flex-start',
  },
})

export const useWidthStyles = makeStyles({
  full: {
    maxWidth: '100%',
  },
  regular: {
    maxWidth: '328px',
  },
})
