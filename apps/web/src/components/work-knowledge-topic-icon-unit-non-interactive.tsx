import React from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import nullthrows from 'fbjs/lib/nullthrows'

import { WorkKnowledgeUtils } from './work-knowledge-utils'
import { makeStyles, shorthands } from '@griffel/react'
import {
  CometIcon,
  CometTooltip,
  IconSource,
} from '@negiganaito/react-components'

type WorkKnowledgeTopicIconUnitNonInteractiveProps = {
  children?: any
  color?: string
  disabled?: any
  disabledTooltipLabel?: any
  unitStyle?: any
}

const useStyles = makeStyles({
  root: {
    ...shorthands.borderRadius('6px'),
    boxSizing: 'content-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tooltipWrapper: {
    position: 'absolute',
    right: 0,
    height: '14px',
    width: '14px',
    display: 'flex',
    justifyContent: 'center',
    top: '-2px',
    backgroundColor: 'var(--always-white)',
    ...shorthands.borderRadius('50%'),
    ...shorthands.borderWidth('1px'),
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderColor('var(--always-black)'),
    paddingTop: '2px',
    paddingRight: '2px',
    paddingBottom: '2px',
    paddingLeft: '2px',
  },
})

export function WorkKnowledgeTopicIconUnitNonInteractive({
  children,
  color,
  disabled,
  disabledTooltipLabel,
  unitStyle,
}: WorkKnowledgeTopicIconUnitNonInteractiveProps) {
  const classes = useStyles()

  const _color = color ?? WorkKnowledgeUtils.DEFAULT_COLOR
  const colorStyle = unitStyle.getColorStyle(nullthrows(_color))

  const style = Object.assign({}, colorStyle, unitStyle.getSizeStyle())
  const e = jsx('div', {
    className: classes.root,
    style,
    children,
  })

  const icon = new IconSource(
    'FB',
    {
      sprited: 2,
      spi: '/assets/workplace/gpyFOO4YgEx.png',
      _spi: '/assets/workplace/gpyFOO4YgEx.png',
      w: 12,
      h: 12,
      p: '-17px -156px',
      sz: 'auto',
    },
    12,
  )

  return jsx('div', {
    style: Object.assign({}, unitStyle.getOuterPaddingStyle(), {
      position: 'relative',
    }),
    children: disabled
      ? jsxs(CometTooltip, {
          tooltip: disabledTooltipLabel,
          children: [
            jsx('div', {
              className: classes.tooltipWrapper,
              children: jsx(CometIcon, {
                color: 'primary',
                icon: icon,
                size: 8,
              }),
            }),
            e,
          ],
        })
      : e,
  })
}
