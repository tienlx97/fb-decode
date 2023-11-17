import { makeStyles, shorthands } from '@griffel/react'

export const useStyles = makeStyles({
  card: {
    boxSizing: 'border-box',
  },
  cardBackground: {
    backgroundColor: 'var(--card-background)',
  },
  cardBorderRadius: {
    ...shorthands.borderRadius('var(--card-corner-radius)'),
  },
  cardOverflow: {
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  cardShadow: {
    boxShadow: 'var(--card-box-shadow)',
  },
  popoverWithArrow: {
    filter: 'drop-shadow(0 0 6px var(--shadow-2))',
    WebkitFilter: 'drop-shadow(0 0 6px var(--shadow-2))',
  },
})
export const useAboveStyles = makeStyles({
  end: {
    borderBottomRightRadius: 0,
  },
  middle: {},
  start: {
    borderBottomLeftRadius: 0,
  },
  stretch: {},
})
export const useBelowStyles = makeStyles({
  end: {
    borderTopRightRadius: 0,
  },
  middle: {},
  start: {
    borderTopLeftRadius: 0,
  },
  stretch: {},
})
export const useStartStyles = makeStyles({
  end: {
    borderBottomRightRadius: 0,
  },
  middle: {},
  start: {
    borderTopRightRadius: 0,
  },
  stretch: {},
})
export const useEndStyles = makeStyles({
  end: {
    borderBottomLeftRadius: 0,
  },
  middle: {},
  start: {
    borderTopLeftRadius: 0,
  },
  stretch: {},
})
