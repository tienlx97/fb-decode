import React, { createContext } from 'react'

type BaseMultiPageViewContextProps = {
  fallback?: React.ReactNode
  placeholderComponent?: React.ReactNode
  popPage: (...param: any) => any
  pushPage: (...param: any) => any
}

export const BaseMultiPageViewContext = createContext<
  BaseMultiPageViewContextProps | undefined
>(undefined)
