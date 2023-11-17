const modifierKeys: string[] = ['alt', 'command', 'shift']

export default function createKeyCommand(a: any) {
  return modifierKeys
    .filter(function (b) {
      return (a == null ? void 0 : a[b]) === !0
    })
    .concat(a == null ? void 0 : a.key)
    .join(' ')
}
