import { makeStyles, shorthands } from '@griffel/react'

export const useStyles = makeStyles({
  icon: {
    lineHeight: '0',
  },
  iconEnd: {
    marginLeft: '4px',
  },
  iconEnd8: {
    marginLeft: '8px',
  },
  iconStart: {
    marginRight: '4px',
  },
  iconStart8: {
    marginRight: '8px',
  },
  pressable: {
    appearance: 'none',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('0'),
    boxSizing: 'border-box',
    color: 'inherit',
    cursor: 'pointer',
    display: 'flex',
    ...shorthands.margin('0'),
    ...shorthands.padding('0'),
    position: 'relative',
    textAlign: 'inherit',
    textDecorationLine: 'none',
    zIndex: 1,
  },
  selected: {
    borderTopRightRadius: '1px',
    borderTopLeftRadius: '1px',
    bottom: '0',
    right: '0',
    height: '3px',
    position: 'absolute',
    left: '0',
  },
  tab: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexShrink: '0',
    minHeight: '16px',
    position: 'relative',
  },
})
