import { createContext } from 'react'

type CometKeyCommandUtilsContextProps = {
  setActiveWrapper: (...props: any) => any
  notifyCommandUpdate: (...props: any) => any
}

const CometKeyCommandUtilsContext = createContext<
  CometKeyCommandUtilsContextProps | undefined
>(undefined)

export default CometKeyCommandUtilsContext
