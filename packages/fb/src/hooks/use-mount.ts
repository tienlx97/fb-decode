import { Fn } from '@fb/utils/_ssr.config'
import { useEffect } from 'react'

/**
 * Run a function when a component is mounted.
 *
 * @deprecated This hook breaks in React 18's strict mode, since it's not idempotent
 *
 * @param callback function to be executed
 */
export function useMount(callback: Fn) {
  useEffect(callback, [])
}
