import React, { createContext } from 'react'

type CometColumnContextProps = {
  align: any
  hasDividers: boolean
  paddingHorizontal: any
  spacing: any
}

export const CometColumnContext = createContext<
  CometColumnContextProps | undefined
>(undefined)
