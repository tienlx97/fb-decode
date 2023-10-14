const g = 1
const h = 5

function i(a: any, b: any, c: any, d: any) {
  return Math.sqrt(Math.pow(d - b, 2) + Math.pow(c - a, 2))
}

function j(a: any, b: any) {
  return i(a.clientX, a.clientY, b.clientX, b.clientY)
}

export function isWithinThreshold(a: any, b: any) {
  var c = b.pointerType === 'touch' || b.pointerType === 'pen' ? h : g
  a = j(a, b)
  return a <= c
}
