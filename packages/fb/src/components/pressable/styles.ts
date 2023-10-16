import { makeStyles, shorthands } from '@griffel/react'

export const useStyles = makeStyles({
  disabled: {
    cursor: 'not-allowed',
  },

  focusNotVisible: {
    outlineStyle: 'none',
  },

  root: {
    WebkitTapHighlightColor: 'transparent',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
    ...shorthands.border('0', 'solid', 'var(--always-dark-overlay)'),
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexShrink: 0,
    listStyleType: 'none',
    ...shorthands.margin(0),
    minHeight: 0,
    minWidth: 0,
    ...shorthands.padding(0),
    position: 'relative',
    textAlign: 'inherit',
    textDecorationLine: 'none',
    touchAction: 'manipulation',
    zIndex: 0,
  },

  rootInGroup: {
    touchAction: 'none',
  },
})
