/* eslint-disable react/no-children-prop */
import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import React from 'react'

function m() {
  const m = Object.assign
    ? // @ts-ignore
      Object.assign.bind()
    : function (a: any) {
        for (let b = 1; b < arguments.length; b++) {
          let c = arguments[b]
          for (let d in c)
            Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
        return a
      }
  // @ts-ignore
  return m.apply(this, arguments)
}

let n = new Set([
    'Adlm',
    'Arab',
    'Aran',
    'Armi',
    'Avst',
    'Cprt',
    'Egyp',
    'Hatr',
    'Hebr',
    'Khar',
    'Mand',
    'Mend',
    'Nkoo',
    'Rohg',
    'Samr',
    'Syrc',
    'Thaa',
    'Yezi',
  ]),
  o = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'iw',
    'khw',
    'ks',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi',
  ]),
  p = new Map()

function q(a: any) {
  let b = !1,
    c = null,
    d = p.get(a)
  if (d != null) b = d
  else {
    Intl.Locale != null && (c = new Intl.Locale(a).maximize().script)
    if (c != null) b = n.has(c)
    else {
      d = a.split(/-|_/)[0]
      b = o.has(d)
    }
    p.set(a, b)
  }
  return b ? 'rtl' : 'ltr'
}

let r = new Set([
    'alt',
    'aria-activedescendant',
    'aria-atomic',
    'aria-autocomplete',
    'aria-busy',
    'aria-checked',
    'aria-columncount',
    'aria-columnindex',
    'aria-columnspan',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-disabled',
    'aria-errormessage',
    'aria-expanded',
    'aria-flowto',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-level',
    'aria-live',
    'aria-modal',
    'aria-multiline',
    'aria-multiselectable',
    'aria-orientation',
    'aria-owns',
    'aria-placeholder',
    'aria-posinset',
    'aria-pressed',
    'aria-readonly',
    'aria-required',
    'aria-roledescription',
    'aria-rowcount',
    'aria-rowindex',
    'aria-rowspan',
    'aria-selected',
    'aria-setsize',
    'aria-sort',
    'aria-valuemax',
    'aria-valuemin',
    'aria-valuenow',
    'aria-valuetext',
    'autoCapitalize',
    'autoComplete',
    'autoFocus',
    'checked',
    'children',
    'crossOrigin',
    'data-testid',
    'decoding',
    'defaultChecked',
    'defaultValue',
    'dir',
    'disabled',
    'download',
    'draggable',
    'elementTiming',
    'enterKeyHint',
    'fetchPriority',
    'for',
    'height',
    'hidden',
    'href',
    'id',
    'inert',
    'inputMode',
    'label',
    'lang',
    'loading',
    'max',
    'maxLength',
    'min',
    'minLength',
    'multiple',
    'onAuxClick',
    'onBeforeInput',
    'onBlur',
    'onChange',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onError',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onFullscreenChange',
    'onFullscreenError',
    'onGotPointerCapture',
    'onInput',
    'onInvalid',
    'onKeyDown',
    'onKeyUp',
    'onLoad',
    'onLostPointerCapture',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onPaste',
    'onPointerCancel',
    'onPointerDown',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerMove',
    'onPointerOut',
    'onPointerOver',
    'onPointerUp',
    'onScroll',
    'onSelect',
    'onSelectionChange',
    'onWheel',
    'placeholder',
    'readOnly',
    'referrerPolicy',
    'rel',
    'required',
    'role',
    'rows',
    'selected',
    'spellCheck',
    'src',
    'srcSet',
    'step',
    'style',
    'suppressHydrationWarning',
    'tabIndex',
    'target',
    'type',
    'value',
    'width',
  ]),
  s = {
    display: 'none',
  }

function aa(a: any) {
  Object.keys(a).forEach(function (b) {
    let c = r.has(b)
    c || delete a[b]
  })
}

function a(a: any, b: any) {
  let d = {
    'debug::name': 'html-' + a,
  }
  const e = React.forwardRef((e: any, f) => {
    let g = e.lang != null ? q(e.lang) : null
    g = e.dir || g || (b == null ? void 0 : b.dir)
    let h = b.style,
      { style, ...j } = b,
      l = e.style,
      { style: ss, ...n } = e
    // n = babelHelpers.objectWithoutPropertiesLoose(e, ['style'])
    let jj = Object.assign({}, j, n)
    aa(jj)
    g !== null && (j.dir = g)
    e.role !== null && (j.role = e.role === 'none' ? 'presentation' : e.role)
    // n = (i || (i = c('stylex'))).spread
    // @ts-ignore
    g = mergeClasses(d['debug::name'], h, l, e.hidden === !0 && s) // ??
    n = React.createElement(
      a,
      // @ts-ignore
      m({}, jj, g, {
        ref: f,
      }),
    )
    return n
  })

  e.displayName = 'html.' + a
  return e
}

let e: any = makeStyles({
  block: {
    listStyleType: 'none',
    ...shorthands.margin('0'),
    ...shorthands.padding('0'),
  },
  inline: {
    ...shorthands.margin('0'),
    ...shorthands.padding('0'),
    textDecorationLine: 'none',
    textAlign: 'inherit',
    wordWrap: 'break-word',
  },
  inlineblock: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.margin('0'),
    ...shorthands.padding('0'),
  },
  button: {
    ...shorthands.borderWidth('1px'),
  },
  codePre: {
    fontFamily: 'monospace,monospace',
    fontSize: '1em',
    overflowX: 'auto',
    overflowY: 'auto',
  },
  heading: {
    fontSize: '1.5rem',
    wordWrap: 'break-word',
  },
  hr: {
    backgroundColor: 'black',
    ...shorthands.borderStyle('none'),
    ...shorthands.borderWidth(0),
    boxSizing: 'border-box',
    height: '1px',
  },
  img: {
    aspectRatio: 'attr(width) /attr(height)',
    height: 'auto',
    maxWidth: '100%',
  },
  input: {
    ...shorthands.borderWidth('1px'),
    ...shorthands.borderStyle('solid'),
  },
  strong: {
    fontWeight: 'bolder',
  },
  textarea: {
    ...shorthands.borderWidth('1px'),
    ...shorthands.borderStyle('solid'),
    resize: 'vertical',
  },
})

let f: any = () => {
  const eStyles = e()

  return { style: eStyles.inline }
}

// const f = {
//   style: e.inline,
// }

let d: any = a('a', f)

f = () => {
  const eStyles = e()

  return { style: eStyles.block }
}

f = a('article', f)

let t: any = () => {
  const eStyles = e()
  return {
    style: eStyles.block,
  }
}

t = a('aside', t)

let u: any = () => {
  const eStyles = e()
  return {
    style: eStyles.inline,
  }
}

u = a('b', u)

let v: any = () => {
  const eStyles = e()
  return {
    style: eStyles.inline,
  }
}
v = a('bdi', v)

let w: any = () => {
  const eStyles = e()
  return {
    style: eStyles.inline,
  }
}
w = a('bdo', w)

let x: any = () => {
  const eStyles = e()
  return {
    style: eStyles.block,
  }
}
x = a('blockquote', x)

let y: any = () => {
  const eStyles = e()
  return {
    style: mergeClasses(eStyles.inlineblock, eStyles.button),
    type: 'button',
  }
}
y = a('button', y)

let z: any = () => {
  const eStyles = e()

  return {
    style: mergeClasses(eStyles.inline, eStyles.codePre),
  }
}
z = a('code', z)

let A: any = () => {
  const eStyles = e()
  return {
    style: eStyles.block,
  }
}
A = a('div', A)

let B: any = () => {
  const eStyles = e()
  return {
    style: eStyles.inline,
  }
}
B = a('em', B)

let C: any = () => {
  const eStyles = e()

  return {
    style: eStyles.block,
  }
}
C = a('fieldset', C)

let D: any = () => {
  const eStyles = e()

  return {
    style: eStyles.block,
  }
}
D = a('footer', D)

let E: any = () => {
  const eStyles = e()

  return {
    style: eStyles.block,
  }
}
E = a('form', E)

let F: any = () => {
  const eStyles = e()

  return {
    style: mergeClasses(eStyles.block, eStyles.heading),
  }
}

const ba = a('h1', F),
  ca = a('h2', F),
  da = a('h3', F),
  ea = a('h4', F),
  fa = a('h5', F)

F = a('h6', F)

let G: any = () => {
  const eStyles = e()
  return {
    style: eStyles.block,
  }
}
G = a('header', G)
let H: any = () => {
  const eStyles = e()
  return {
    style: mergeClasses(eStyles.block, eStyles.hr),
  }
}
H = a('hr', H)
let I: any = () => {
  const eStyles = e()
  return {
    style: eStyles.inline,
  }
}
I = a('i', I)
let J: any = () => {
  const eStyles = e()
  return {
    style: eStyles.img,
  }
}
J = a('img', J)
let K: any = () => {
  const eStyles = e()
  return {
    dir: 'auto',
    style: mergeClasses(eStyles.inlineblock, eStyles.input),
  }
}
K = a('input', K)
let L: any = () => {
  const eStyles = e()
  return {
    style: eStyles.inline,
  }
}
L = a('label', L)
let M: any = () => {
  const eStyles = e()
  return {
    style: eStyles.block,
  }
}
M = a('li', M)
let N: any = () => {
  const eStyles = e()
  return {
    style: eStyles.block,
  }
}
N = a('main', N)
let O: any = () => {
  const eStyles = e()
  return {
    style: eStyles.block,
  }
}
O = a('nav', O)
let P: any = () => {
  const eStyles = e()
  return {
    style: eStyles.block,
  }
}
P = a('ol', P)

let Q = {}
Q = a('optgroup', Q)
let R = {}
R = a('option', R)
let S: any = () => {
  const eStyles = e()
  return {
    style: eStyles.block,
  }
}
S = a('p', S)
let T: any = () => {
  const eStyles = e()
  return {
    style: mergeClasses(eStyles.block, eStyles.codePre),
  }
}
T = a('pre', T)
let U: any = () => {
  const eStyles = e()
  return {
    style: eStyles.block,
  }
}
U = a('section', U)
let V: any = () => {
  const eStyles = e()
  return {
    style: eStyles.inlineblock,
  }
}
V = a('select', V)
let W: any = () => {
  const eStyles = e()
  return {
    style: eStyles.inline,
  }
}
W = a('span', W)
let X: any = () => {
  const eStyles = e()
  return {
    style: mergeClasses(eStyles.inline, eStyles.strong),
  }
}
X = a('strong', X)
let Y: any = () => {
  const eStyles = e()
  return {
    style: eStyles.inline,
  }
}
Y = a('sub', Y)
let Z: any = () => {
  const eStyles = e()
  return {
    style: eStyles.inline,
  }
}
Z = a('sup', Z)
let $: any = () => {
  const eStyles = e()
  return {
    dir: 'auto',
    style: mergeClasses(eStyles.inlineblock, eStyles.textarea),
  }
}
$ = a('textarea', $)

const ee = () => {
  const eStyles = e()
  return {
    style: eStyles.block,
  }
}

const ul = a('ul', ee)

e = Object.freeze({
  __proto__: null,
  a: d,
  article: f,
  aside: t,
  b: u,
  bdi: v,
  bdo: w,
  blockquote: x,
  button: y,
  code: z,
  div: A,
  em: B,
  fieldset: C,
  footer: D,
  form: E,
  h1: ba,
  h2: ca,
  h3: da,
  h4: ea,
  h5: fa,
  h6: F,
  header: G,
  hr: H,
  i: I,
  img: J,
  input: K,
  label: L,
  li: M,
  main: N,
  nav: O,
  ol: P,
  optgroup: Q,
  option: R,
  p: S,
  pre: T,
  section: U,
  select: V,
  span: W,
  strong: X,
  sub: Y,
  sup: Z,
  textarea: $,
  ul: ul,
})

d = {
  customProperties: {},
}

let ga = React.createContext(d)

function b(a: any) {
  let b = a.children
  a = a.customProperties
  return a
    ? React.createElement(ga.Provider, {
        children: b,
        value: {
          customProperties: a,
        },
      })
    : b
}
f = {
  ThemeProvider: b,
}

export const ReactStrictDomWeb = {
  contexts: f,
  html: e,
}
