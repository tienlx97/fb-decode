import cometKeys from './comet-keys'
import { translateKey } from './translate-key'

import { isPlatform } from '@negiganaito/utils/user-agent'

let i: any = {}
let j: any
const b = String.fromCodePoint(8594)
const d = String.fromCodePoint(8592)
const e = String.fromCodePoint(8593)
const f = String.fromCodePoint(8595)
const k = String.fromCodePoint(8617)
const l = String.fromCodePoint(8629)
const m = String.fromCodePoint(8998)
const n = String.fromCodePoint(8679)
const o = String.fromCodePoint(8984)
const p = String.fromCodePoint(8997)
const q = String.fromCodePoint(8963)
let r: any = String.fromCodePoint(8677)
const s = Object.assign(
  ((i = {}),
  (i[(j = cometKeys.SPACE)] = ['space', 'Space']),
  (i[cometKeys.QUESTION] = [cometKeys.QUESTION, 'Question mark']),
  (i[cometKeys.SLASH] = [cometKeys.SLASH, 'Forward slash']),
  (i[cometKeys.TAB] = [r, translateKey('tab')]),
  (i.CapsLock = ['caps lock', 'caps_lock']),
  (i.Dead = ['`', null]),
  (i.PageDown = ['page down', 'page_down']),
  (i.PageUp = ['page up', 'page_up']),
  (i.arrowdown = [f, 'down']),
  (i.arrowleft = [d, 'left']),
  (i.arrowright = [b, 'right']),
  (i.arrowup = [e, 'up']),
  (i.shift = [n, 'shift']),
  i),
  isPlatform('Mac OS X')
    ? ((j = {}),
      (j[cometKeys.DELETE] = ['delete', translateKey('delete')]),
      (j[cometKeys.DEL] = [m, translateKey('forward_delete')]),
      (j[cometKeys.ENTER] = [k, translateKey('enter')]),
      (j.Control = [q, translateKey('ctrl')]),
      (j.alt = [p, translateKey('opt')]),
      (j.command = [o, translateKey('cmd')]),
      j)
    : ((r = {}),
      (r[cometKeys.ENTER] = [l, translateKey('enter')]),
      (r.Meta = ['windows', null]),
      (r.alt = ['alt', translateKey('alt')]),
      (r.command = ['ctrl', translateKey('ctrl')]),
      r),
)

export function getKeyboardKeyAsString(key: any) {
  return s[key] ?? [key, null]
}
