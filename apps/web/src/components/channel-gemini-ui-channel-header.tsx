import React from 'react'
import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import { TetraText } from '@negiganaito/text'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

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

  dummy1: {
    paddingTop: '8px',
  },

  dummy2: {
    paddingTop: '8px',
    paddingBottom: '12px',
  },

  dummy3: {
    ...shorthands.borderWidth(0),
    ...shorthands.margin(0),
    backgroundColor: 'var(--divider)',
    boxSizing: 'border-box',
    height: '1px',
  },

  dummy4: {
    paddingTop: '4px',
  },

  dummy5: {
    ...shorthands.margin(0),
    paddingTop: '4px',
    paddingBottom: '8px',
    paddingLeft: '4px',
  },

  dummy0: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth(0),
    boxSizing: 'border-box',
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'space-between',
    ...shorthands.margin(0),
    minWidth: 0,
    ...shorthands.padding(0),
    position: 'relative',
    zIndex: 'unset',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: '36px',
  },

  dummy6: {
    display: 'flex',
  },

  dummy7: {
    display: 'flex',
    marginLeft: '6px',
  },

  dummy8: {
    marginRight: '8px',
  },

  dummy9: {
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingBottom: '4px',
  },
})

export type ChannelGeminiUIChannelHeaderProps = {
  backAction?: any
  'data-testid'?: string
  hasMoreNewContentBadge?: any
  isNotificationHeader?: boolean
  managePriorityDialog?: any
  maxActionsNumber?: any
  pivotActionDescription?: any
  pivotActions?: any
  pivotActionsExtra?: any
  pivotActionsLabel?: any
  primaryAction?: any
  secondaryAction?: any
  showThreeFolders?: boolean
  smartSettingsPanel?: any
  tertiaryAction?: any
  title?: any
}

export function ChannelGeminiUIChannelHeader({
  backAction,
  'data-testid': dt,
  hasMoreNewContentBadge,
  isNotificationHeader = false,
  managePriorityDialog,
  maxActionsNumber,
  pivotActionDescription,
  pivotActions,
  pivotActionsExtra,
  pivotActionsLabel,
  primaryAction,
  secondaryAction,
  showThreeFolders = false,
  smartSettingsPanel,
  tertiaryAction,
  title,
}: ChannelGeminiUIChannelHeaderProps) {
  const classes = useStyles()

  const Header = (
    <div className={classes.dummy0}>
      <span className={classes.dummy6}>
        {Boolean(backAction) && backAction}
        <div className={mergeClasses(Boolean(backAction) && classes.title)}>
          <TetraText isPrimaryHeading type="headlineEmphasized1">
            {title}
          </TetraText>
        </div>
      </span>
      <span className={classes.dummy7}>
        {tertiaryAction && (
          <span className={classes.dummy8}>{tertiaryAction}</span>
        )}
        {secondaryAction && (
          <span className={classes.dummy8}>{secondaryAction}</span>
        )}
        {primaryAction}
      </span>
    </div>
  )

  return (
    <div className={classes.dummy9}>
      {Header}
      {pivotActions && (
        <div className="x1xmf6yo x12nagc">
          {jsx('ChannelGeminiUIPivotLinkGroup', {
            hasMoreNewContentBadge,
            isNotificationHeader,
            maxActionsNumber,
            pivotActions,
            pivotActionsLabel,
            showThreeFolders,
          })}
        </div>
      )}
      {managePriorityDialog && (
        <React.Fragment>
          <div className={classes.dummy1}>{managePriorityDialog}</div>
          <div className={classes.dummy2}>
            <hr className={classes.dummy3} />
          </div>
        </React.Fragment>
      )}
      {pivotActionsExtra && (
        <div className={classes.dummy4}>{pivotActionsExtra}</div>
      )}
      {pivotActionDescription && (
        <p className={classes.dummy5}>
          <TetraText color="secondary" type="meta4">
            {pivotActionDescription}
          </TetraText>
        </p>
      )}
      {smartSettingsPanel && (
        <div className={classes.dummy4}>{smartSettingsPanel}</div>
      )}
    </div>
  )
}
