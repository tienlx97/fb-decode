import { createContext } from 'react'

type CometCompositeStructureContextProps = {
  horizontal: boolean
  vertical: boolean
  role?: string
}

const CometCompositeStructureContext =
  createContext<CometCompositeStructureContextProps>({
    horizontal: false,
    vertical: false,
  })

export default CometCompositeStructureContext
