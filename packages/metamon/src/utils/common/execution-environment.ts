export const isClient = () => typeof window !== 'undefined'

const canUseDOM =
  isClient() &&
  !!(window !== undefined && window.document && window.document.createElement)

// @ts-ignore
const isInWorker = typeof WorkerGlobalScope === 'function'

const executionEnvironment = {
  canUseDOM,
  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || (window as any).attachEvent),
  canUseViewport: isClient() && window && !!window.screen,
  canUseWorkers: typeof Worker !== 'undefined',
  isInBrowser: (isClient() && window) || isInWorker,
  isInWorker,
}

export default executionEnvironment
