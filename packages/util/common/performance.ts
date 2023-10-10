import { isClient } from './execution-environment'

const performance = !isClient()
  ? ({} as any)
  : window.performance ||
    (window as any).msPerformance ||
    (window as any).webkitPerformance

export default performance
