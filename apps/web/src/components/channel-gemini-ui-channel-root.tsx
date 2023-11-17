import { makeStyles } from '@griffel/react'
import React, { forwardRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { ChannelGeminiUIChannelScrollableArea } from './channel-gemini-ui-channel-scrollable-area'
import {
  ChannelGeminiUIChannelHeader,
  ChannelGeminiUIChannelHeaderProps,
} from './channel-gemini-ui-channel-header'

type ChannelGeminiUIChannelRootProps = {
  children?: any
  footer?: any
  forceBrowserDefaultScrollbar?: any
  hasTopShadow?: boolean
  scrollRef?: any
  testid?: any
} & ChannelGeminiUIChannelHeaderProps

const useStyles = makeStyles({
  root: {
    flexShrink: 0,
  },
})

export const ChannelGeminiUIChannelRoot = forwardRef<
  any,
  ChannelGeminiUIChannelRootProps
>(
  (
    {
      children,
      footer,
      forceBrowserDefaultScrollbar,
      hasTopShadow = true,
      scrollRef,
      testid,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()

    return jsx('div', {
      'data-testid': void 0,
      ref,
      children: [
        jsx(ChannelGeminiUIChannelHeader, Object.assign({}, rest)),
        jsx(ChannelGeminiUIChannelScrollableArea, {
          expading: true,
          forceBrowserDefault: forceBrowserDefaultScrollbar,
          scrollRef,
          scrollTracePolicy: 'gemini.UIChannelRoot.scroll',
          withTopShadow: hasTopShadow,
          children,
        }),
        jsx('div', {
          className: classes.root,
          children: footer,
        }),
      ],
    })
  },
)
