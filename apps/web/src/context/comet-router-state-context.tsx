/* eslint-disable camelcase */
'use client'

import { usePathname } from 'next/navigation'
import React, { createContext, useContext, useMemo } from 'react'

const entityKeyConfig = {
  '/home': {
    entity_key: 'feed',
    tabKey: 'home',
  },
  '/home/important-news': {
    entity_key: 'importantNews',
    tabKey: 'home',
  },
  '/knowledge': {
    entity_key: 'knowledge',
    tabKey: 'knowledge_library',
  },
  '/home/orgsearch': {
    entity_key: 'directory',
    tabKey: 'home',
  },
  '/home/org': {
    entity_key: 'org',
    tabKey: 'home',
  },
}

type CometRouterStateContextProps = {
  url: string
  routePath?: string
  entityKeyConfig?: {
    entity_key: string
    tabKey?: string
  }
}

const CometRouterStateContext = createContext<
  CometRouterStateContextProps | undefined
>(undefined)

export const CometRouterStateContextProvider = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  const pathname = usePathname()

  const cometRouterStateContextValue = useMemo(() => {
    // @ts-ignore
    const key = entityKeyConfig[`${pathname}`]

    return Object.assign(
      {},
      {
        url: pathname,
        entityKeyConfig: key
          ? {
              entity_key: key.entity_key,
              tabKey: key.tabKey,
            }
          : undefined,
      },
    )
  }, [pathname])

  return (
    <CometRouterStateContext.Provider value={cometRouterStateContextValue}>
      {children}
    </CometRouterStateContext.Provider>
  )
}

export const useCometRouterState = () => {
  const context = useContext(CometRouterStateContext)

  if (context === undefined) {
    throw ''
  }

  return context
}
