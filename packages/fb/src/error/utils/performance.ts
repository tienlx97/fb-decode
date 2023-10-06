const performance =
  window.performance ||
  // @ts-ignore
  window.msPerformance ||
  // @ts-ignore
  window.webkitPerformance ||
  // @ts-ignore
  window.mozPerformance ||
  {}

export default performance
