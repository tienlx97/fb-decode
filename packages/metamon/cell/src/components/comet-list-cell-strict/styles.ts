import { makeStyles, shorthands } from '@fluentui/react-components'

export const useStyles = makeStyles({
  addOn: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  addOnWithExpander: {
    marginRight: '8px',
  },
  addOnWithIcon: {
    display: 'flex',
  },
  addOnWithText: {
    marginLeft: '4px',
  },
  bottomAddOn: {
    display: 'flex',
    flexDirection: 'column',
    marginEnd: '-12px',
    marginStart: '-12px',
  },
  bottomAddOnInner: {
    maxWidth: '100%',
  },
  bottomAddOnOverrideRow: {
    flexDirection: 'row',
    marginRight: '0',
    marginLeft: '0',
    paddingTop: '6px',
  },
  bottomAddOnWithFacepile: {
    marginLeft: '-16px',
  },
  bottomDivider: {
    backgroundColor: 'var(--divider)',
    bottom: '0',
    right: '0',
    height: '1px',
    position: 'absolute',
    left: '0',
  },
  content: {
    alignItems: 'stretch',
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('0'),
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: '0px',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'space-between',
    ...shorthands.margin('0'),

    minHeight: '0',
    minWidth: '0',
    ...shorthands.padding('12px', '0'),

    position: 'relative',
    zIndex: '0',
  },
  contentContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('0'),
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: '1',
    flexShrink: '1',
    justifyContent: 'space-between',
    marginBottom: '0',
    marginRight: '0',
    marginLeft: '0',
    marginTop: '0',
    minHeight: '0',
    minWidth: '0',
    paddingBottom: '0',
    paddingRight: '0',
    paddingLeft: '0',
    paddingTop: '0',
    position: 'relative',
    zIndex: '0',
  },
  contentDense: {
    paddingTop: '8px',
    paddingBottom: '8px',
  },
  contentWithMoreSpacing: {
    paddingTop: '16px',
    paddingBottom: '16px',
  },
  contentWithMoreSpacingDense: {
    paddingTop: '12px',
    paddingBottom: '12px',
  },
  disabled: {
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
  endAddOn: {
    marginBottom: '12px',
    marginLeft: '12px',
    marginTop: '12px',
    position: 'relative',
  },
  endAddOnCenter: {
    marginBottom: '8px',
    marginTop: '8px',
  },
  endAddOnSmall: {
    marginBottom: '8px',
    marginLeft: '12px',
    marginTop: '8px',
    position: 'relative',
  },
  listCellMinHeight: {
    minHeight: '44px',
  },
  pressable: {
    ...shorthands.borderRadius('8px'),

    display: 'block',
  },
  responsiveButtons: {
    flexGrow: '1',
    paddingBottom: '6px',
    paddingTop: '6px',
  },
  responsiveContent: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: '-6px',
    marginTop: '-6px',
  },
  responsiveText: {
    boxSizing: 'border-box',
    flexBasis: '50%',
    flexGrow: '1',
    flexShrink: '1',
    maxWidth: '100%',
    minWidth: '50%',
    paddingBottom: '6px',
    paddingRight: '16px',
    paddingTop: '6px',
  },
  root: {
    alignItems: 'center',
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('0'),
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'space-between',
    marginBottom: '0',
    marginRight: '0',
    marginLeft: '0',
    marginTop: '0',
    minHeight: '0',
    minWidth: '0',
    paddingBottom: '0',
    paddingRight: '8px',
    paddingLeft: '8px',
    paddingTop: '0',
    position: 'relative',
    zIndex: '0',
  },
  rootWithIncreasedHeight: {
    minHeight: '52px',
  },
  selected: {
    backgroundColor: 'var(--hosted-view-selected-state)',
  },
  selectedWashBackground: {
    backgroundColor: 'var(--background-deemphasized)',
  },
  startAddOn: {
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    marginRight: '12px',
    marginTop: '8px',
    marginBottom: '8px',
    position: 'relative',
  },
  startAddOnDense: {
    marginTop: '6px',
    marginBottom: '6px',
  },
  startAddOnDensityAware: {
    '@media (max-height: 700px)': {
      marginRight: '6px',
      marginLeft: '-4px',
      marginTop: '4px',
      marginBottom: '4px',
      transform: 'scale(.77777777)',
    },
  },
  textRight: {
    flexShrink: '0',
  },
  visualSwitch: {
    pointerEvents: 'none',
  },
})

export const useDummyStyles = makeStyles({
  dummy1: {
    alignItems: 'center',
    alignSelf: 'stretch',
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('0'),
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'space-between',
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    marginTop: 0,
    minHeight: 0,
    minWidth: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: 0,
    position: 'relative',
    zIndex: 0,
  },

  dummy2: {
    maxWidth: '100%',
  },

  dummy3: {
    backgroundColor: 'var(--divider)',
    bottom: 0,
    right: 0,
    height: '1px',
    position: 'absolute',
    left: 0,
  },

  dummy4: {
    flexShrink: 0,
  },
})

export const useStartVerticalAlignStyles = makeStyles({
  center: {
    alignSelf: 'center',
  },
  top: {
    alignSelf: 'flex-start',
  },
})

export const useEndVerticalAlignStyles = makeStyles({
  center: {
    alignSelf: 'center',
  },
  top: {
    alignSelf: 'flex-start',
  },
})
