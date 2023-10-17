import { createContext } from 'react'

type CometMenuItemHighlightContextProps = boolean

const CometMenuItemHighlightContext =
  createContext<CometMenuItemHighlightContextProps>(false)

export default CometMenuItemHighlightContext
