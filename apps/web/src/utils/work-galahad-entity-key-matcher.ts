function useMatcher(a: any) {
  a === void 0 && (a = 'keyOrSubKey')
  var b = c('useTopMostRouteCometEntityKey')()
  return function (c) {
    return k(c, b, a === 'keyOrSubKey' ? j : i)
  }
}

/*

useTopMostRouteCometEntityKey
  useCometRouterState
    CometRouterStateContext
  getTopMostRouteCometEntityKey

*/
