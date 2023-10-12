import { createContext } from 'react'

type CometMenuItemBaseRoleContextProps = {}

const CometMenuItemBaseRoleContext = createContext<
  CometMenuItemBaseRoleContextProps | undefined
>(undefined)

export default CometMenuItemBaseRoleContext
