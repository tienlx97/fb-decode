import React from 'react'
import { BaseToasterStateManager } from '../utils/base-toaster-state-manager'

export const BaseToasterStateManagerContext = React.createContext(
  BaseToasterStateManager.getInstance(),
)
