import React, { ReactNode, createContext, useContext, useMemo } from 'react'

type BaseTextContextProps = {
  nested: boolean
}

export const BaseTextContext = createContext<BaseTextContextProps | undefined>(
  undefined,
)

export function BaseTextContextProvider({
  nested,
  children,
}: BaseTextContextProps & {
  children: ReactNode
}) {
  const value = useMemo(() => {
    return { nested: nested }
  }, [nested])

  return (
    <BaseTextContext.Provider value={value}>
      {children}
    </BaseTextContext.Provider>
  )
}

export const useBaseTextContext = () => {
  const context = useContext(BaseTextContext)
  // if (context === undefined) {
  //   throw new Error("useBaseTextContext was used outside of its Provider");
  // }
  return context
}
