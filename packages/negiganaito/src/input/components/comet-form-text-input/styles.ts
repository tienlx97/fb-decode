import { makeStyles, shorthands } from '@griffel/react'

export const useStyles = makeStyles({
  disabled: {
    backgroundColor: 'var(--input-background-disabled)',
    color: 'var(--disabled-text)',
    cursor: 'not-allowed',
  },
  emoji: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '12px',
    pointerEvents: 'none',
  },
  icon: {
    paddingLeft: '16px',
    paddingTop: '18px',
    pointerEvents: 'none',
  },
  imageIcon: {
    ...shorthands.borderRadius('8px'),
    boxShadow: 'inset 0 0 0 1px var(--media-inner-border)',
  },
  input: {
    backgroundColor: 'transparent',
    ...shorthands.borderStyle('none'),
    boxSizing: 'border-box',
    color: 'var(--primary-text)',
    fontSize: '1rem!important',
    fontWeight: 'normal',
    lineHeight: 1.25,
    ...shorthands.padding('26px', '16px', '10px', '16px'),
    width: '100%',
    // TODO
    '::-ms-clear': {
      display: 'none',
    },
    '::-ms-reveal': {
      display: 'none',
    },
  },
  largeImageIcon: {
    alignItems: 'center',
    display: 'flex',
    paddingTop: 0,
  },
  readOnly: {
    backgroundColor: 'var(--input-background-disabled)',
  },
  //

  dummy1: {
    display: 'flex',
  },

  dummy2: {
    paddingRight: '16px',
    paddingTop: '18px',
  },
})
