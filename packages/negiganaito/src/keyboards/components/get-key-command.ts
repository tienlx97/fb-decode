import { isPlatform } from '@negiganaito/utils/user-agent'
import { getCometKey } from './get-comet-key'
import { createKeyCommand } from '../util'

export function getKeyCommand(a: any) {
  var b = getCometKey(a)
  if (b == null) return null
  let d: any = !1
  isPlatform('Mac OS X') ? a.metaKey && (d = !0) : a.ctrlKey && (d = !0)
  d = {
    alt: a.altKey,
    command: d,
    key: b,
    shift: a.shiftKey,
  }
  return createKeyCommand(d)
}
