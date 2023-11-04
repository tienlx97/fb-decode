export function isScalar(a: any) {
  return /string|number|boolean/.test(typeof a)
}
