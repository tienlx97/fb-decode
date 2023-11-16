import { CometPlaceholder } from '@negiganaito/placeholder'
import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometSSRSuspendOnServer } from './comet-ssr-suspend-on-server'

type CometSSRReplaceContentOnHydrationAndBreakEventReplayingProps = {
  children?: any
  useSuspenseDirectlyForSVG?: boolean
}

export function CometSSRReplaceContentOnHydrationAndBreakEventReplaying({
  children,
  useSuspenseDirectlyForSVG,
}: CometSSRReplaceContentOnHydrationAndBreakEventReplayingProps) {
  const Suspend = useSuspenseDirectlyForSVG ? React.Suspense : CometPlaceholder

  return jsx(Suspend, {
    fallback: children,
    children: jsx(CometSSRSuspendOnServer, {
      children,
    }),
  })
}
