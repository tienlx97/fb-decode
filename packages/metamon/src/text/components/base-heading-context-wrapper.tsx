import React, { useContext } from 'react'
import { BaseHeadingContext } from '../context'

type BaseHeadingContextWrapperProps = {
  children?: any
}

export default function BaseHeadingContextWrapper({
  children,
}: BaseHeadingContextWrapperProps) {
  const baseHeadingValue = useContext(BaseHeadingContext)

  return (
    <BaseHeadingContext.Provider value={baseHeadingValue + 1}>
      {children}
    </BaseHeadingContext.Provider>
  )
}
