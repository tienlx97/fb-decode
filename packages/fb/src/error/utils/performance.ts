// TODO
const performance =
  typeof window !== 'undefined'
    ? window.performance ||
      // @ts-ignore
      window.msPerformance ||
      // @ts-ignore
      window.webkitPerformance ||
      // @ts-ignore
      window.mozPerformance ||
      {}
    : {}

export default performance
