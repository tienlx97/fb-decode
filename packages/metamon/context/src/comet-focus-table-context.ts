import { createContext } from 'react'

type CometFocusTableContextProps = {
  FocusCell: any
  FocusRow: any
  FocusTable: any
}

const CometFocusTableContext = createContext<CometFocusTableContextProps>({
  FocusCell: null,
  FocusRow: null,
  FocusTable: null,
})

export default CometFocusTableContext
