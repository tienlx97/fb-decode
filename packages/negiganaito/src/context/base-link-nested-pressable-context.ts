import { createContext } from 'react'

type BaseLinkNestedPressableContextProps = boolean

const BaseLinkNestedPressableContext =
  createContext<BaseLinkNestedPressableContextProps>(false)

export default BaseLinkNestedPressableContext
