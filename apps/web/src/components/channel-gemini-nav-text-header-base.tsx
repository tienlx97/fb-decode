import React from 'react'
import { makeStyles, mergeClasses } from '@griffel/react'
import { TetraText } from '@negiganaito/text'

const useStyles = makeStyles({
  title: {
    textTransform: 'uppercase',
  },

  subtitle: {
    marginBottom: '4px',
    marginTop: '6px',
    paddingTop: '4px',
    paddingBottom: '4px',
  },

  titleAndAction: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    paddingTop: '4px',
    paddingBottom: '8px',
    paddingRight: '16px',
    paddingLeft: '16px',
  },

  indented: {
    paddingLeft: '26px',
  },

  dummy1: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dummy2: {
    marginBottom: '4px',
    marginTop: '6px',
    paddingTop: '4px',
    paddingBottom: '4px',
  },

  dummy3: {
    textTransform: 'uppercase',
  },
})

type ChannelGeminiNavTextHeaderBaseProps = {
  action?: any
  intented?: boolean
  subtitle?: any
  title?: any
  className?: string
}

export function ChannelGeminiNavTextHeaderBase({
  action,
  className,
  intented,
  subtitle,
  title,
}: ChannelGeminiNavTextHeaderBaseProps) {
  const classes = useStyles()

  return (
    <div
      className={mergeClasses(
        classes.root,
        intented && classes.indented,
        className,
      )}
    >
      <div className={classes.dummy1}>
        {title}
        {action}
      </div>
      {subtitle && (
        <div className={classes.dummy2}>
          <TetraText color="secondary" type="body4">
            {subtitle}
          </TetraText>
        </div>
      )}
    </div>
  )
}

ChannelGeminiNavTextHeaderBase.SmallTitle = ({ title }: { title?: any }) => {
  const classes = useStyles()
  return (
    <span className={classes.dummy3}>
      <TetraText
        color="secondary"
        isSemanticHeading
        numberOfLines={1}
        type="bodyLink4"
      >
        {title}
      </TetraText>
    </span>
  )
}

ChannelGeminiNavTextHeaderBase.LargeTitle = ({ title }: { title?: any }) => {
  return (
    <TetraText isSemanticHeading numberOfLines={1} type="headlineEmphasized3">
      {title}
    </TetraText>
  )
}

ChannelGeminiNavTextHeaderBase.ExtraLargeTitle = ({
  title,
}: {
  title?: any
}) => {
  return (
    <TetraText isSemanticHeading numberOfLines={1} type="headlineEmphasized1">
      {title}
    </TetraText>
  )
}
