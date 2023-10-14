import React, { createContext } from 'react'

type BaseRowContextProps = {
  columns: number
  wrap: string
}

export const BaseRowContext = createContext<BaseRowContextProps>({
  columns: 1,
  wrap: 'none',
})
