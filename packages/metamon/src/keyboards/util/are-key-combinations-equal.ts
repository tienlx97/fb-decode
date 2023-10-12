export default function areKeyCombinationsEqual(a: any, b: any) {
  return a == null || b == null
    ? a === b
    : a.key !== '' &&
        b.key !== '' &&
        a.key === b.key &&
        (a.alt === !0) === (b.alt === !0) &&
        (a.command === !0) === (b.command === !0) &&
        (a.shift === !0) === (b.shift === !0)
}
