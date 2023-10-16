import { makeStyles } from '@griffel/react'

export const useStyles = makeStyles({
  expanding: {
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
  },
  expandingWithWrap: {
    flexBasis: '100%',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    maxWidth: '100%',
    minWidth: 0,
  },
  // eslint-disable-next-line camelcase
  item_DEPRECATED: {
    maxWidth: '100%',
    minWidth: 0,
  },
})

export const useColumnStyles = makeStyles({
  1: {
    flexBasis: '100%',
  },
  2: {
    flexBasis: '50%',
  },
  3: {
    flexBasis: 'calc(100% / 3)',
  },
  4: {
    flexBasis: '25%',
  },
  5: {
    flexBasis: '20%',
  },
  6: {
    flexBasis: 'calc(100% / 6)',
  },
  7: {
    flexBasis: 'calc(100% / 7)',
  },
  8: {
    flexBasis: '12.5%',
  },
  9: {
    flexBasis: 'calc(100% / 9)',
  },
  10: {
    flexBasis: '10%',
  },
})

export const useVerticalAlignStyles = makeStyles({
  bottom: {
    alignSelf: 'flex-end',
  },
  center: {
    alignSelf: 'center',
  },
  stretch: {
    alignSelf: 'stretch',
  },
  top: {
    alignSelf: 'flex-start',
  },
})
