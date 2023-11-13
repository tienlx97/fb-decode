export function getActiveCommands(a: any, b: any, c: any) {
  let d = new Map()
  function e(a: any) {
    a.forEach((a: any, b: any) => {
      let c = d.get(b)
      if (c) {
        let e = c.every((a: any) => {
          return a.shouldStopPropagation === !1
        })
        e && c.push(a)
      } else d.set(b, [a])
    })
  }
  // eslint-disable-next-line no-self-assign
  a = a
  while (a != null) {
    let f = a && a.getCommandMap()
    e(f)
    a = a && a.getParent()
  }
  b && e(b.getCommandMap())
  c && e(c.getCommandMap())
  return d
}
