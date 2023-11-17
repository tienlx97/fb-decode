/* eslint-disable camelcase */
/*
__d("WorkKnowledgeNavItemContent.react", 
  ["CometTooltip.react", 
  "WorkGalahadUIChannelItem.react", //
  "WorkKnowledgeNavItemIndentation.react", "react", "stylex"], (function(a, b, c, d, e, f, g) { // 

*/

import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import { CometTooltip } from '@negiganaito/react-components'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { WorkGalahadUIChannelItem } from './work-galahad-ui-channel-item'
import { WorkKnowledgeNavItemIndentation } from './work-knowledge-nav-item-indentation'

const useStyles = makeStyles({
  unpublished: {
    opacity: '.5',
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
  },
  container: {
    alignItems: 'stretch',
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth(0),
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'space-between',
    marginTop: '0',
    marginRight: '0',
    marginBottom: '0',
    marginLeft: '0',
    minHeight: '0',
    minWidth: '0',
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    position: 'relative',
    zIndex: 'unset',
  },

  d1: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth(0),
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'space-between',
    ...shorthands.margin('0'),
    minHeight: 0,
    minWidth: 0,
    ...shorthands.padding('0'),
    position: 'relative',
    zIndex: 'unset',
  },

  d2: {
    textDecorationLine: 'line-through',
  },
})

type WorkKnowledgeNavItemContentProps = {
  body?: any
  canShowCategoryTitleTooltip?: boolean
  children?: any
  collection_title?: any
  collectionStatus?: any
  indentLevel?: number
  onPress?: any
  onPressIn?: any
  primaryIndicator?: any
  secondaryIndicator?: any
  selected?: any
  strikeThrough?: any
  tertiaryIndicator?: any
  testid?: string
  url?: string
  skipMarginStart?: any
}

export function WorkKnowledgeNavItemContent({
  body,
  canShowCategoryTitleTooltip = true,
  children,
  collection_title,
  collectionStatus,
  indentLevel = 1,
  onPress,
  onPressIn,
  primaryIndicator,
  secondaryIndicator,
  selected,
  skipMarginStart,
  strikeThrough,
  tertiaryIndicator,
  testid,
  url,
}: WorkKnowledgeNavItemContentProps) {
  const isPublish = collectionStatus === 'PUBLISHED'

  const classes = useStyles()

  return jsx('div', {
    className: classes.d1,
    children: jsx(CometTooltip, {
      position: 'end',
      tooltip: canShowCategoryTitleTooltip ? collection_title : null,
      children: jsx(WorkGalahadUIChannelItem, {
        addOnPrimary: jsx(WorkKnowledgeNavItemIndentation, {
          indentLevel,
          indicator: primaryIndicator,
          children: jsx('div', {
            className: mergeClasses(!isPublish && classes.unpublished),
            children,
          }),
        }),
        addOnSecondary: secondaryIndicator,
        addOnTertiary: tertiaryIndicator,
        body,
        bodyColor: 'tertiary',
        headline:
          strikeThrough === !0
            ? jsx('div', {
                className: classes.d2,
                children: collection_title,
              })
            : collection_title,
        headlineColor: isPublish ? 'primary' : 'tertiary',
        linkProps: url
          ? {
              url,
            }
          : void 0,
        onPress,
        onPressIn,
        selected,
        testid: void 0,
      }),
    }),
  })
}
