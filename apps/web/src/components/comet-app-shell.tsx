import React from 'react'

import { BaseToasterStateManagerProvider } from '@negiganaito/react-components'

type CometAppShellProps = {
  toaster?: any
  children?: any
}

export const CometAppShell = ({ children, toaster }: CometAppShellProps) => {
  return (
    <BaseToasterStateManagerProvider>
      {children}
      {toaster}
    </BaseToasterStateManagerProvider>
  )
}
