import performance from './performance'

let i: () => number = () => Date.now()

function setFallback(callback: () => number) {
  i = callback
}

let j: number

if (
  performance.now &&
  performance.timing &&
  performance.timing.navigationStart
) {
  j = performance.timing.navigationStart
} else {
  j = 0
}

const performanceAbsoluteNow = (): number => {
  return performance.now ? performance.now() + j : i()
}

performanceAbsoluteNow.setFallback = setFallback

export default performanceAbsoluteNow
