let a

export const supportsCSSSticky =
  ((a = window.CSS) == null ? void 0 : a.supports) &&
  (window.CSS.supports('position', 'sticky') ||
    window.CSS.supports('position', '-webkit-sticky'))
