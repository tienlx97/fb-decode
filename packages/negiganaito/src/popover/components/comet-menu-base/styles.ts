import { makeStyles, shorthands } from '@griffel/react'

export const useStyles = makeStyles({
  listItem: {
    ...shorthands.borderRadius('4px'),
    display: 'flex',
    flexDirection: 'row',
    marginTop: 0,
    marginRight: '8px',
    marginBottom: 0,
    marginLeft: '8px',
    paddingTop: '12px',
    paddingRight: '8px',
    paddingBottom: '12px',
    paddingLeft: '8px',
  },
  root: {
    alignItems: 'stretch',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 'var(--menu-base-padding-vertical,8px)',
    paddingBottom: 'var(--menu-base-padding-vertical,8px)',
  },
  sizeFull: {
    marginRight: '48px',
    width: '100%',
  },
  sizeNormal: {
    width: '344px',
  },
  sizeSmall: {
    width: '328px',
  },
})

export const usedummyStyles = makeStyles({
  dummy1: {
    ...shorthands.borderRadius('4px'),
    display: 'flex',
    flexDirection: 'row',
    marginTop: 0,
    marginRight: '8px',
    marginBottom: 0,
    marginLeft: '8px',
    paddingTop: '12px',
    paddingRight: '8px',
    paddingBottom: '12px',
    paddingLeft: '8px',
  },
})
