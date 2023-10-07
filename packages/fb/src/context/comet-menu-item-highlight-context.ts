import { createContext } from 'react'

type CometMenuItemHighlightContextProps = boolean

const CometMenuItemHighlightContext = createContext<
  CometMenuItemHighlightContextProps | undefined
>(false)

export default CometMenuItemHighlightContext
