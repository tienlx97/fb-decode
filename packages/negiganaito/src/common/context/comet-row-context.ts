import React, { createContext } from 'react'

type CometRowContextProps = {
  spacingHorizontal: any
  spacingVertical: any
}

export const CometRowContext = createContext<CometRowContextProps | undefined>(
  undefined,
)
