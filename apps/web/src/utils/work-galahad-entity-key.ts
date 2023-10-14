export function serialize(a: any) {
  // eslint-disable-next-line no-self-assign
  return (a = a) != null ? a : ''
}
