import { BaseToasterStateManagerContext } from '../context'
import { BaseToasterStateManager } from '../utils/base-toaster-state-manager'

type BaseToasterStateManagerProviderProps = {
  children?: any
}

const instance = BaseToasterStateManager.getInstance()

export function BaseToasterStateManagerProvider({
  children,
}: BaseToasterStateManagerProviderProps) {
  return (
    // @ts-ignore
    <BaseToasterStateManagerContext.Provider value={instance}>
      {children}
    </BaseToasterStateManagerContext.Provider>
  )
}
