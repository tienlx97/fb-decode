import { makeStyles, shorthands } from '@fluentui/react-components'

export const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    position: 'relative',
    flexGrow: 1,
    flexShrink: 1,
    minHeight: 0,
    minWidth: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    // borderTop: 'x76ihet',
    // borderEnd: 'xwmqs3e',
    // borderBottom: 'x112ta8',
    // borderStart: 'xxxdfa6',
    ...shorthands.borderStyle('none'),
    paddingRight: '16px',
  },
  selected: {
    backgroundColor: 'var(--wig-selected-background)',
  },
  contentContainer: {
    ...shorthands.borderWidth(0),
    ...shorthands.borderStyle('solid'),
    boxSizing: 'border-box',
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    ...shorthands.margin(0),
    minHeight: 0,
    minWidth: 0,
    ...shorthands.padding(0),
    position: 'relative',
    zIndex: 'unset',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    ...shorthands.borderWidth(0),
    ...shorthands.borderStyle('solid'),
    boxSizing: 'border-box',
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    ...shorthands.margin(0),
    minHeight: 0,
    minWidth: 0,
    ...shorthands.padding(0),
    position: 'relative',
    zIndex: 'unset',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    outlineStyle: 'none',
    ':hover': {
      textDecorationLine: 'none',
    },
  },
  textPairing: {
    flexGrow: 1,
    flexBasis: 0,
    minWidth: 0,
    paddingTop: '8px',
    paddingBottom: '8px',
    overflowX: 'hidden',
    overflowY: 'hidden',
    textOverflow: 'ellipsis',
  },
  addOnPrimary: {
    ...shorthands.borderWidth(0),
    ...shorthands.borderStyle('solid'),
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1,
    justifyContent: 'space-between',
    ...shorthands.margin('4px', '12px', '4px', 0),

    minHeight: '0',
    minWidth: '0',

    ...shorthands.padding(0),

    zIndex: 'unset',
    alignItems: 'center',
    flexGrow: 0,
    position: 'relative',
  },
  addOnPrimaryDrawer: {
    marginBottom: '8px',
    marginTop: '8px',
  },
  addOnSecondary: {
    ...shorthands.borderWidth(0),
    ...shorthands.borderStyle('solid'),
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1,
    ...shorthands.margin(0),
    ...shorthands.padding(0),

    minHeight: 0,
    minWidth: 0,
    zIndex: 'unset',
    position: 'absolute',
    left: '13px',
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
  },
  addOnSecondaryOffset: {
    transform: 'translateX(-50%)',
  },
  addOnSecondaryOffsetRTL: {
    transform: 'translateX(50%)',
  },
  indentationLevel1: {
    paddingLeft: '16px',
  },
  indentationLevel2: {
    paddingLeft: '26px',
  },
  indentationLevel3: {
    paddingLeft: '60px',
  },
  addOnTertiary: {
    ...shorthands.borderWidth(0),
    ...shorthands.borderStyle('solid'),
    ...shorthands.margin(0, 0, 0, '8px'),
    ...shorthands.padding(0),

    boxSizing: 'border-box',
    display: 'flex',
    minHeight: '0',

    position: 'relative',
    zIndex: 'unset',
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
})

export const useDummyStyles = makeStyles({
  dummy1: {
    flexGrow: 1,
    flexBasis: 0,
    minWidth: 0,
    paddingTop: '8px',
    paddingBottom: '8px',
    overflowX: 'hidden',
    overflowY: 'hidden',
    textOverflow: 'ellipsis',
  },

  dummy2: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth(0),
    boxSizing: 'border-box',
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    ...shorthands.margin(0),
    minHeight: 0,
    minWidth: 0,
    ...shorthands.padding(0),
    position: 'relative',
    zIndex: 'unset',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },

  dummy3: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth(0),
    boxSizing: 'border-box',
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    ...shorthands.margin(0),
    minHeight: 0,
    minWidth: 0,
    ...shorthands.padding(0),
    position: 'relative',
    zIndex: 'unset',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    outlineStyle: 'none',

    ':hover': {
      textDecorationLine: 'none',
    },
  },

  dummy4: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth(0),
    boxSizing: 'border-box',
    display: 'flex',
    ...shorthands.margin(0),
    minHeight: 0,
    ...shorthands.padding(0),
    position: 'relative',
    zIndex: 'unset',
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginLeft: '8px',
  },
})