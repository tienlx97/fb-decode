/* eslint-disable camelcase */
var keys = {
  alt: 'alt',
  enter: 'enter',
  delete: 'delete',
  forward_delete: 'forward delete',
  caps_lock: 'caps lock',
  shift: 'shift',
  opt: 'opt',
  ctrl: 'ctrl',
  cmd: 'cmd',
  esc: 'esc',
  tab: 'tab',
  up: 'up',
  down: 'down',
  right: 'right',
  left: 'left',
  page_up: 'page up',
  page_down: 'page down',
  home: 'home',
  end: 'end',
}

export function translateKey(a: any) {
  if (Object.prototype.hasOwnProperty.call(keys, a)) {
    // @ts-ignore
    return keys[a]
  }
  // a.length === 1 || i(0, 2507)
  return a
}
