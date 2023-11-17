let g: any = null

function h(a: any) {
  g = a.matches
}

export default function getPrefersReducedMotion() {
  if (g == null)
    if (typeof window.matchMedia === 'function') {
      var a = matchMedia('(prefers-reduced-motion: reduce)')
      g = a.matches
      a.addListener(h)
    } else g = !1
  return g
}
