import { createContext } from 'react'

type CometFocusGroupContextProps = {
  FocusContainer: any
  FocusItem: any
}

const CometFocusGroupContext = createContext<CometFocusGroupContextProps>({
  FocusContainer: null,
  FocusItem: null,
})

export default CometFocusGroupContext
