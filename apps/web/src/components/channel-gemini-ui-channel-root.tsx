import { mergeClasses } from '@griffel/react'
import { useFocusState, useHover } from '@negiganaito/hooks'
import { fbicon } from '@negiganaito/image'
import {
  CometCircleButton,
  WorkGalahadChannelFocusableTableCell,
} from '@negiganaito/index'
import React, { forwardRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { ChannelGeminiUIChannelScrollableArea } from './channel-gemini-ui-channel-scrollable-area'

type ChannelGeminiUIChannelRootProps = {
  children?: any
  footer?: any
  forceBrowserDefaultScrollbar?: any
  hasTopShadow?: boolean
  scrollRef?: any
  testid?: any
}

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
    return jsx('div', {
      'data-testid': void 0,
      ref,
      children: [
        jsx('ChannelGeminiUIChannelHeader', Object.assign({}, rest)),
        jsx(ChannelGeminiUIChannelScrollableArea, {
          expading: true,
          forceBrowserDefault: forceBrowserDefaultScrollbar,
          scrollRef,
          scrollTracePolicy: 'gemini.UIChannelRoot.scroll',
          withTopShadow: hasTopShadow,
          children,
        }),
        jsx('div', {
          className: 'x2lah0s',
          children: footer,
        }),
      ],
    })
  },
)
