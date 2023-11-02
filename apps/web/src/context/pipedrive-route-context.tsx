'use client'

import { usePathname } from 'next/navigation'
import React, { createContext, ReactNode, useContext, useMemo } from 'react'

import {
  defaultRoute,
  SubMenu,
  uiConfiguration,
} from '@/config/ui-configuration'

const useMatchesHandler = () => {
  const pathName = usePathname()

  // todo: potential bug here
  const view = useMemo(() => {
    const [empty, tabkey, channelGeminiKey, ...rest] = pathName.split('/')

    if (!channelGeminiKey) {
      // @ts-ignore
      return defaultRoute[tabkey]
    }

    return channelGeminiKey
  }, [pathName])

  return {
    view,
    path: pathName,
  }
}

const findDeepMenuEntry = (
  view: string | undefined,
  mainMenu?: SubMenu[],
  path?: string,
): SubMenu | undefined => {
  if (view) {
    return mainMenu?.find(menu => {
      switch (menu.type) {
        case 'menu':
          return menu.children
            ? findDeepMenuEntry(view, menu.children)
            : menu.key === view || menu.extraKeys?.includes(view)
        default:
          return undefined
      }
    })
  } else {
    return undefined
  }
}

function usePipedriveMenuHandler(uiConfig: typeof uiConfiguration) {
  const { mainMenu } = uiConfig
  const { path, view } = useMatchesHandler()

  const main = useMemo(
    () => findDeepMenuEntry(view, mainMenu, path),
    [mainMenu, view, path],
  )

  return view
    ? {
        main: main!,
        path,
        view,
      }
    : { main: undefined, path: undefined, view: undefined }
}

type PipedriveRouteContextProps = {
  subMenu?: SubMenu
  view?: string
  path?: string
}

const Context = createContext<PipedriveRouteContextProps | undefined>(undefined)

export const PipedriveRouteContext = ({
  children,
}: {
  children?: ReactNode
}) => {
  const matches = usePipedriveMenuHandler(uiConfiguration)

  return (
    <Context.Provider
      value={{ subMenu: matches.main, path: matches.path, view: matches.view }}
    >
      {children}
    </Context.Provider>
  )
}

export const usePipedriveRoute = () => {
  const context = useContext(Context)

  if (context === undefined) {
    throw ''
  }

  return context
}
