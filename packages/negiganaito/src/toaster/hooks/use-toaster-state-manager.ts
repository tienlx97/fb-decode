import { useContext } from 'react'
import { BaseToasterStateManagerContext } from '../context'

export function useToasterStateManager() {
  return useContext(BaseToasterStateManagerContext)
}
