var g = /-(.)/g
export function camelize(a: any) {
  return a.replace(g, function (a: any, b: any) {
    return b.toUpperCase()
  })
}
