import { makeStyles, shorthands } from '@griffel/react'

const useStyles = makeStyles({
  titleArea: {
    display: 'flex',
  },
  title: {
    paddingLeft: '12px',
    paddingTop: '8px',
  },
  body: {
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingBottom: '4px',
  },
  header: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('0'),
    boxSizing: 'border-box',
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'space-between',
    marginTop: '0',
    marginRight: 0,
    marginBottom: '0',
    marginLeft: '0',
    minWidth: '0',
    paddingTop: '0',
    paddingRight: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    position: 'relative',
    zIndex: 'unset',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: '36px',
  },
  secondaryAction: {
    marginRight: '8px',
  },
  primaryActions: {
    display: 'flex',
    marginLeft: '6px',
  },
  pivotLinkGroupWrapper: {
    marginTop: '8px',
    marginBottom: '4px',
  },
  pivotActionsExtraWrapper: {
    paddingTop: '4px',
  },
  smartSettingsWrapper: {
    paddingTop: '4px',
  },
  managePriorityDialogWrapper: {
    paddingTop: '8px',
  },
  dividerSection: {
    paddingTop: '8px',
    paddingBottom: '12px',
  },
  divider: {
    backgroundColor: 'var(--divider)',
    boxSizing: 'border-box',
    height: '1px',
  },
  reset: {
    backgroundColor: 'transparent',
    ...shorthands.borderWidth('0'),
    marginTop: '0',
    marginRight: '0',
    marginBottom: '0',
    marginLeft: '0',
  },
  description: {
    marginTop: '0',
    marginRight: '0',
    marginBottom: '0',
    marginLeft: '0',
    paddingTop: '4px',
    paddingBottom: '8px',
    paddingStart: '4px',
  },
})
