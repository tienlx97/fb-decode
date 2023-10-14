import React, { ReactNode } from 'react'
import {
  HeroCurrentInteractionForLoggingContext,
  HeroCurrentInteractionForLoggingContextProps,
  RelayProfilerContext,
} from '@metamon/context'

import {
  HERO_INTERACTION_DEFAULT_CONTEXT_VALUE,
  HeroInteractionContext,
  HeroInteractionIDContext,
} from '../context'

type HeroInteractionContextPassthroughProps = {
  children?: ReactNode
  clear?: boolean
}

const heroCurrentInteractionForLoggingContextValue: HeroCurrentInteractionForLoggingContextProps =
  {
    current: null,
  }

const heroInteractionIDContextValue = {
  consumeBootload: function () {},
  retainQuery: function () {},
  wrapPrepareQueryResource: function (a: any) {
    return a()
  },
}

function HeroInteractionContextPassthrough({
  children,
  clear = true,
}: HeroInteractionContextPassthroughProps) {
  return clear ? (
    children
  ) : (
    <HeroInteractionContext.Provider
      value={HERO_INTERACTION_DEFAULT_CONTEXT_VALUE}
    >
      <HeroCurrentInteractionForLoggingContext.Provider
        value={heroCurrentInteractionForLoggingContextValue}
      >
        <HeroInteractionIDContext.Provider value={null}>
          <RelayProfilerContext.Provider value={heroInteractionIDContextValue}>
            {children}
          </RelayProfilerContext.Provider>
        </HeroInteractionIDContext.Provider>
      </HeroCurrentInteractionForLoggingContext.Provider>
    </HeroInteractionContext.Provider>
  )
}

HeroInteractionContextPassthrough.displayName =
  'HeroInteractionContextPassthrough'

export default HeroInteractionContextPassthrough
