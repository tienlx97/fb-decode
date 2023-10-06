export function getCubicBezierPercentageFunc(a: any, b: any, c: any, d: any) {
  function e(a: any, b: any) {
    return 1 - 3 * b + 3 * a
  }
  function f(a: any, b: any) {
    return 3 * b - 6 * a
  }
  function g(a: any) {
    return 3 * a
  }
  function h(a: any, b: any, c: any) {
    return ((e(b, c) * a + f(b, c)) * a + g(b)) * a
  }
  function i(a: any, b: any, c: any) {
    return 3 * e(b, c) * a * a + 2 * f(b, c) * a + g(b)
  }
  function j(b: any) {
    var d = b
    for (var e = 0; e < 4; ++e) {
      var f = i(d, a, c)
      if (f === 0) return d
      var g = h(d, a, c) - b
      d -= g / f
    }
    return d
  }
  return function (e: any) {
    return a === b && c === d ? e : h(j(e), b, d)
  }
}

export function getRingGifUrl(color: string, size: string, theme: string) {
  switch (size) {
    case '12':
      switch (theme) {
        case 'dark':
          switch (color) {
            case 'blue':
              return h('1876411')
            case 'disabled':
              return h('1876443')
            case 'dark':
              return h('1876427')
            case 'light':
              return h('1876427')
            default:
              return h('1876427')
          }
        case 'light':
          switch (color) {
            case 'blue':
              return h('1876419')
            case 'disabled':
              return h('1876451')
            case 'dark':
              return h('1876435')
            case 'light':
              return h('1876427')
            default:
              return h('1876435')
          }
        default:
          return h('1876435')
      }
    case '16':
      switch (theme) {
        case 'dark':
          switch (color) {
            case 'blue':
              return h('1876412')
            case 'disabled':
              return h('1876444')
            case 'dark':
              return h('1876428')
            case 'light':
              return h('1876428')
            default:
              return h('1876428')
          }
        case 'light':
          switch (color) {
            case 'blue':
              return h('1876420')
            case 'disabled':
              return h('1876452')
            case 'dark':
              return h('1876436')
            case 'light':
              return h('1876428')
            default:
              return h('1876436')
          }
        default:
          return h('1876436')
      }
    case '20':
      switch (theme) {
        case 'dark':
          switch (color) {
            case 'blue':
              return h('1876413')
            case 'disabled':
              return h('1876445')
            case 'dark':
              return h('1876429')
            case 'light':
              return h('1876429')
            default:
              return h('1876429')
          }
        case 'light':
          switch (color) {
            case 'blue':
              return h('1876421')
            case 'disabled':
              return h('1876453')
            case 'dark':
              return h('1876437')
            case 'light':
              return h('1876429')
            default:
              return h('1876437')
          }
        default:
          return h('1876437')
      }
    case '24':
      switch (theme) {
        case 'dark':
          switch (color) {
            case 'blue':
              return h('1876414')
            case 'disabled':
              return h('1876446')
            case 'dark':
              return h('1876430')
            case 'light':
              return h('1876430')
            default:
              return h('1876430')
          }
        case 'light':
          switch (color) {
            case 'blue':
              return h('1876422')
            case 'disabled':
              return h('1876454')
            case 'dark':
              return h('1876438')
            case 'light':
              return h('1876430')
            default:
              return h('1876438')
          }
        default:
          return h('1876438')
      }
    case '32':
      switch (theme) {
        case 'dark':
          switch (color) {
            case 'blue':
              return h('1876415')
            case 'disabled':
              return h('1876447')
            case 'dark':
              return h('1876431')
            case 'light':
              return h('1876431')
            default:
              return h('1876431')
          }
        case 'light':
          switch (color) {
            case 'blue':
              return h('1876423')
            case 'disabled':
              return h('1876455')
            case 'dark':
              return h('1876439')
            case 'light':
              return h('1876431')
            default:
              return h('1876439')
          }
        default:
          return h('1876439')
      }
    case '48':
      switch (theme) {
        case 'dark':
          switch (color) {
            case 'blue':
              return h('1876416')
            case 'disabled':
              return h('1876448')
            case 'dark':
              return h('1876432')
            case 'light':
              return h('1876432')
            default:
              return h('1876432')
          }
        case 'light':
          switch (color) {
            case 'blue':
              return h('1876424')
            case 'disabled':
              return h('1876456')
            case 'dark':
              return h('1876440')
            case 'light':
              return h('1876432')
            default:
              return h('1876440')
          }
        default:
          return h('1876440')
      }
    case '60':
      switch (theme) {
        case 'dark':
          switch (color) {
            case 'blue':
              return h('1940508')
            case 'disabled':
              return h('1940512')
            case 'dark':
              return h('1940510')
            case 'light':
              return h('1940510')
            default:
              return h('1940510')
          }
        case 'light':
          switch (color) {
            case 'blue':
              return h('1940509')
            case 'disabled':
              return h('1940513')
            case 'dark':
              return h('1940511')
            case 'light':
              return h('1940510')
            default:
              return h('1940511')
          }
        default:
          return h('1940511')
      }
    case '72':
      switch (theme) {
        case 'dark':
          switch (color) {
            case 'blue':
              return h('1876418')
            case 'disabled':
              return h('1876450')
            case 'dark':
              return h('1876434')
            case 'light':
              return h('1876434')
            default:
              return h('1876434')
          }
        case 'light':
          switch (color) {
            case 'blue':
              return h('1876426')
            case 'disabled':
              return h('1876458')
            case 'dark':
              return h('1876442')
            case 'light':
              return h('1876434')
            default:
              return h('1876442')
          }
        default:
          return h('1876442')
      }
    default:
      return h('1876439')
  }
}

export function getRingColor(color: string) {
  switch (color) {
    case 'dark':
      return {
        backgroundColor: 'var(--progress-ring-neutral-background)',
        foregroundColor: 'var(--progress-ring-neutral-foreground)',
      }
    case 'light':
      return {
        backgroundColor: 'var(--progress-ring-on-media-background)',
        foregroundColor: 'var(--progress-ring-on-media-foreground)',
      }
    case 'blue':
      return {
        backgroundColor: 'var(--progress-ring-blue-background)',
        foregroundColor: 'var(--progress-ring-blue-foreground)',
      }
    case 'disabled':
      return {
        backgroundColor: 'var(--progress-ring-disabled-background)',
        foregroundColor: 'var(--progress-ring-disabled-foreground)',
      }
    default:
      return {
        backgroundColor: 'var(--progress-ring-neutral-background)',
        foregroundColor: 'var(--progress-ring-neutral-foreground)',
      }
  }
}
