var g = new Set(),
  h = new Set()

export function addImage(a: any) {
  g.add(a)
}

export function clearImageCollection() {
  g.clear()
}

export function imagesToHTMLLinkString() {
  if (!g || g.size === 0) return ''
  var a: any = []
  g == null
    ? void 0
    : g.forEach(function (b) {
        h.has(b) ||
          (a.push('<link rel="preload" as="image" href="' + b + '" />'),
          h.add(b))
      })
  return a.join('\n')
}
