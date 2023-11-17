function i(a: any, b: any) {
  var c = a
  while (c.parentNode) c = c.parentNode
  if (c instanceof Element) {
    c = c.querySelectorAll(b)
    return Array.prototype.indexOf.call(c, a) !== -1
  }
  return !1
}

function addClass(a: any, b: any) {
  // ;/\s/.test(b) && h(0, 11794, b)
  b &&
    (a.classList
      ? a.classList.add(b)
      : hasClass(a, b) || (a.className = a.className + ' ' + b))
  return a
}

function removeClass(a: any, b: any) {
  // ;/\s/.test(b) && h(0, 11795, b)
  b &&
    (a.classList
      ? a.classList.remove(b)
      : hasClass(a, b) &&
        (a.className = a.className
          .replace(new RegExp('(^|\\s)' + b + '(?:\\s|$)', 'g'), '$1')
          .replace(/\s+/g, ' ')
          .replace(/^\s*|\s*$/g, '')))
  return a
}

function conditionClass(a: any, b: any, c: any) {
  return (c ? addClass : removeClass)(a, b)
}

function hasClass(a: any, b: any) {
  // ;/\s/.test(b) && h(0, 442)
  return a.classList
    ? !!b && a.classList.contains(b)
    : (' ' + a.className + ' ').indexOf(' ' + b + ' ') > -1
}

function matchesSelector(a: any, b: any) {
  var c =
    a.matches ||
    a.webkitMatchesSelector ||
    a.mozMatchesSelector ||
    a.msMatchesSelector ||
    function (b: any) {
      return i(a, b)
    }
  return c.call(a, b)
}

export const CssCore = {
  matchesSelector,
  hasClass,
  conditionClass,
  removeClass,
  addClass,
}
