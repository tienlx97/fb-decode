import { createContext } from 'react'

type CometContainerPressableContextProps = boolean

const CometContainerPressableContext =
  createContext<CometContainerPressableContextProps>(false)

export default CometContainerPressableContext
