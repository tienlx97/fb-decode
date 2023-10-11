import React, { createContext } from 'react'

type CometErrorProjectContextProps = any

const CometErrorProjectContext = createContext<
  CometErrorProjectContextProps | undefined
>(undefined)

export default CometErrorProjectContext
