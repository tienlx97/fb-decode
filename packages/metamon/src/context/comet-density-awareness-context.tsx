import { createContext } from 'react'

type CometDensityAwarenessContextProps = boolean

const CometDensityAwarenessContext =
  createContext<CometDensityAwarenessContextProps>(false)

export default CometDensityAwarenessContext
