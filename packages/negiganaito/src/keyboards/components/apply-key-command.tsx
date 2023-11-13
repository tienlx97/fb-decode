import { getKeyCommand } from './get-key-command'

export function applyKeyCommand(a: any, b: any, d: any, e: any) {
  var f = getKeyCommand(a)
  if (f == null) return !1
  // eslint-disable-next-line no-self-assign
  b = b
  while (b != null) {
    if (b && b.applyCommand(f, a)) return !0
    b = b && b.getParent()
  }
  if (d != null && d.applyCommand(f, a)) return !0
  return e != null && e.applyCommand(f, a) ? !0 : !1
}
