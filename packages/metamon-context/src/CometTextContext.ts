import { TypeKeys } from '@metamon/style'
import { createContext, useContext } from 'react'

type CometTextContextProps = {
  color: string
  type: TypeKeys
}

export const CometTextContext = createContext<
  CometTextContextProps | undefined
>(undefined)

export const useCometTextContext = () => {
  const context = useContext(CometTextContext)
  if (context === undefined) {
    throw new Error('useCometTextContext was used outside of its Provider')
  }
  return context
}
