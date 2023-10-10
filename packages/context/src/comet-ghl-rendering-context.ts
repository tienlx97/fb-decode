import { createContext } from 'react'

type CometGHLRenderingContextProps = boolean

const CometGHLRenderingContext =
  createContext<CometGHLRenderingContextProps>(false)

export default CometGHLRenderingContext
