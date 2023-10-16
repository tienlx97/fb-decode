import { makeStyles, shorthands } from '@griffel/react'

export const useOStyles = makeStyles({
  baseScroller: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    position: 'relative',
  },
  baseScrollerHorizontal: {
    flexDirection: 'row',
  },
  baseScrollerWithBottomShadow: {
    marginBottom: '-66px',
  },
  baseScrollerWithTopShadow: {
    marginTop: '-50px',
  },
  default: {
    WebkitOverflowScrolling: 'touch',
    //
    MsOverflowStyle: 'x2atdfe',
    MsScrollChaining: 'xb57i2i',
    MsScrollRails: 'x1q594ok',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'relative',
    zIndex: 0,
  },
  expanding: {
    flexBasis: '100%',
    flexGrow: 1,
    flexShrink: 1,
    minHeight: 0,
  },
  expandingIE11: {
    flexBasis: 'auto',
    flexGrow: 1,
    flexShrink: 1,
    minHeight: 0,
  },
  hideScrollbar: {
    MsOverflowStyle: 'x1pq812k',
    scrollbarWidth: 'none',
    '::-webkit-scrollbar': {
      display: 'none',
      height: 0,
      width: 0,
    },
  },
  horizontalAuto: {
    overflowX: 'auto',
    overscrollBehaviorX: 'contain',
  },
  perspective: {
    perspective: '1px',
    perspectiveOrigin: 'right top',
    position: 'relative',
    transformStyle: 'preserve-3d',
  },
  perspectiveRTL: {
    perspectiveOrigin: 'left top',
  },
  verticalAuto: {
    overflowY: 'auto',
    overscrollBehaviorY: 'contain',
  },
})

export const usePStyles = makeStyles({
  base: {
    boxSizing: 'border-box',
    display: 'none',
    right: 0,
    opacity: 0,
    paddingTop: 0,
    paddingRight: '4px',
    paddingBottom: 0,
    paddingLeft: '4px',
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    transformOrigin: 'right top',
    transitionDuration: '.3s',
    transitionProperty: 'opacity',
    transitionTimingFunction: 'ease',
    width: '16px',
  },
  hovered: {
    opacity: 1,
    transitionDuration: '0',
  },
  inner: {
    backgroundColor: 'var(--scroll-thumb)',
    ...shorthands.borderRadius('4px'),
    height: '100%',
    width: '100%',
  },
  rtl: {
    transformOrigin: 'left top',
  },
})

export const useTStyles = makeStyles({
  bottom: {
    bottom: '0',
  },
  main: {
    height: '1px',
    opacity: 0,
    pointerEvents: 'none',
    position: 'absolute',
    width: '1px',
  },
  top: {
    top: 0,
  },
})

export const useDummyStyles = makeStyles({
  dummy1: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    height: '50px',
    right: 0,
    left: 0,
    pointerEvents: 'none',
    position: 'sticky',
    zIndex: 1,
    WebkitClipPath: 'inset(16px 0 0 0)',
    clipPath: 'inset(16px 0 0 0)',
    justifyContent: 'flex-start',
    top: '-34px',
  },

  dummy2: {
    flexShrink: 0,
    height: '16px',
    position: 'sticky',
    top: '0px',

    ':after': {
      height: '16px',
      boxShadow: 'var(--scroll-shadow)',
      content: '""',
      position: 'absolute',
      top: '-16px',
      width: '100%',
    },
  },

  dummy3: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    height: '50px',
    right: 0,
    left: 0,
    pointerEvents: 'none',
    position: 'sticky',
    zIndex: 1,
    bottom: '-34px',
    WebkitClipPath: 'inset(0 0 16px 0)',
    clipPath: 'inset(0 0 16px 0)',
    justifyContent: 'flex-end',
    marginBottom: '16px',
  },

  dummy4: {
    flexShrink: 0,
    height: '16px',
    // position: '-webkit-sticky',
    position: 'sticky',

    ':after': {
      boxShadow: 'var(--scroll-shadow)',
      content: "''",
      height: '16px',
      position: 'absolute',
      top: '-16px',
      width: '100%',
      bottom: 0,
      transform: 'scaleY(-1)',
    },
  },

  dummy5: {
    backgroundColor: 'var(--divider)',
    display: 'none',
    height: '100%',
    right: 0,
    opacity: 0,
    position: 'absolute',
    top: 0,
    transitionDuration: '.5s',
    transitionProperty: 'opacity',
    transitionTimingFunction: 'ease',
    width: '16px',

    ':hover': {
      opacity: 0.3,
    },
  },

  dummy6: {
    backgroundColor: 'var(--scroll-thumb)',
    ...shorthands.borderRadius('4px'),
    height: '100%',
    width: '100%',
  },
})
