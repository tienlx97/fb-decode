import { makeStyles, mergeClasses } from '@griffel/react'
import {
  BaseScrollableAreaProps,
  CometScrollableArea,
} from '@negiganaito/popover'
import React, { useState } from 'react'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'

const useStyles = makeStyles({
  shadow: {
    backgroundColor: 'var(--divider)',
    height: '1px',
    opacity: 0,
    transitionProperty: 'opacity',
    transitionDuration: '.3s',
    marginLeft: '24px',
    marginRight: '16px',
  },
  shadowShown: {
    opacity: 1,
  },
})

type ChannelGeminiUIChannelScrollableAreaProps = {
  children?: any
  expanding?: boolean
  forceBrowserDefault?: boolean
  scrollRef?: any
  scrollTracePolicy: any
  withTopShadow?: boolean
}

export function ChannelGeminiUIChannelScrollableArea({
  scrollTracePolicy,
  children,
  expanding,
  forceBrowserDefault,
  scrollRef,
  withTopShadow,
}: ChannelGeminiUIChannelScrollableAreaProps) {
  const classes = useStyles()

  const [canScroll, setCanScroll] = useState(false)

  return jsxs(React.Fragment, {
    children: [
      withTopShadow &&
        jsx('div', {
          className: mergeClasses(
            classes.shadow,
            canScroll && classes.shadowShown,
          ),
        }),
      jsx(CometScrollableArea, {
        expanding,
        ref: scrollRef,
        onScroll: function () {
          withTopShadow && !canScroll && setCanScroll(true)
        },
        onScrollTop: function () {
          withTopShadow && canScroll && setCanScroll(false)
        },
        scrollTracePolicy,
        forceBrowserDefault,
        horizontal: false,
        children,
      }),
    ],
  })
}
