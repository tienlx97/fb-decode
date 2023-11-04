export function getObjectValues(a: any) {
  var b = []
  for (var c in a) b.push(a[c])
  return b
}
