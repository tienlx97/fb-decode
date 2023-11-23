import { createContext } from 'react'

type CometListCellContextProps = {
  disabled: boolean
  level?: any
  shouldToggleOnListcell: boolean
}

export const CometListCellContext = createContext<CometListCellContextProps>({
  disabled: false,
  level: undefined,
  shouldToggleOnListcell: false,
})
