import { createContext } from 'react'

type CometDialogLoadingStateContextProps = boolean

export const CometDialogLoadingStateContext =
  createContext<CometDialogLoadingStateContextProps>(false)
