var g = /([A-Z])/g
export function hyphenate(a: any) {
  return a.replace(g, '-$1').toLowerCase()
}
