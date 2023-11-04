export function dedupString(a: any) {
  let b: any
  return Object.keys(((b = {}), (b[a] = 0), b))[0]
}
