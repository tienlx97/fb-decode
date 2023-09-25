__d(
  'BaseStyledButton.react',
  [
    'BaseRow.react',
    'BaseRowItem.react',
    'CometPressable.react',
    'react',
    'stylex',
    'stylex-compat',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = d('react'),
      i = d('react').useRef,
      j = 0.96,
      k = 10,
      l = {
        button: {
          boxSizing: 'x9f619',
          display: 'x3nfvp2',
          flexDirection: 'xdt5ytf',
          justifyContent: 'xl56j7k',
          position: 'x1n2onr6',
          width: 'xh8yej3',
          $$css: !0,
        },
        content: {
          borderTopStartRadius: 'xi112ho',
          borderTopEndRadius: 'x17zwfj4',
          borderBottomEndRadius: 'x585lrc',
          borderBottomStartRadius: 'x1403ito',
          borderTopWidth: 'x972fbf',
          borderEndWidth: 'xcfux6l',
          borderBottomWidth: 'x1qhh985',
          borderStartWidth: 'xm0m39n',
          boxSizing: 'x9f619',
          paddingEnd: 'xn6708d',
          paddingStart: 'x1ye3gou',
          $$css: !0,
        },
        disabled: {
          backgroundColor: 'xwcfey6',
          $$css: !0,
        },
        item: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          flexShrink: 'x2lah0s',
          marginEnd: 'x1fbi1t2',
          marginStart: 'xl8fo4v',
          $$css: !0,
        },
        offset: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          justifyContent: 'xl56j7k',
          marginEnd: 'x1608yet',
          marginStart: 'xljgi0e',
          width: 'x1e0frkt',
          $$css: !0,
        },
        paddingWide: {
          paddingEnd: 'xbxaen2',
          paddingStart: 'x1u72gb5',
          $$css: !0,
        },
        sizeLargeItem: {
          marginEnd: 'x185m5pd',
          marginStart: 'xmly5ks',
          $$css: !0,
        },
        sizeLargeOffset: {
          marginEnd: 'x3fpzix',
          marginStart: 'xxdpisx',
          $$css: !0,
        },
      }
    function a(a, b) {
      var d = a.addOnAbsolute,
        e = a.addOnEnd,
        f = a.addOnStart,
        g = a.content,
        m = a.contentXstyle,
        o = a.disabled,
        p = o === void 0 ? !1 : o
      o = a.display
      o = o === void 0 ? 'inline' : o
      var q = a.focusable,
        r = a.icon,
        s = a.id,
        t = a.linkProps,
        u = a.onFocusIn,
        v = a.onFocusOut,
        w = a.onHoverIn,
        x = a.onHoverOut,
        y = a.onPress,
        z = a.onPressIn,
        A = a.onPressOut,
        B = a.overlayHoveredStyle,
        C = a.overlayPressedStyle,
        D = a.padding,
        E = D === void 0 ? 'normal' : D
      D = a.size
      var F = D === void 0 ? 'medium' : D
      D = a.suppressHydrationWarning
      D = D === void 0 ? !1 : D
      var G = a.testid
      G = a.testOnly_pressed
      G = G === void 0 ? !1 : G
      var H = a.xstyle
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'addOnAbsolute',
        'addOnEnd',
        'addOnStart',
        'content',
        'contentXstyle',
        'disabled',
        'display',
        'focusable',
        'icon',
        'id',
        'linkProps',
        'onFocusIn',
        'onFocusOut',
        'onHoverIn',
        'onHoverOut',
        'onPress',
        'onPressIn',
        'onPressOut',
        'overlayHoveredStyle',
        'overlayPressedStyle',
        'padding',
        'size',
        'suppressHydrationWarning',
        'testid',
        'testOnly_pressed',
        'xstyle',
      ])
      var I = i(null),
        J = function (a) {
          if (I.current != null) {
            var b = I.current
            b.style.transform =
              'scale(' + Math.max(j, (b.offsetWidth - k) / b.offsetWidth) + ')'
          }
          typeof z === 'function' && z(a)
        },
        K = function (a) {
          if (I.current != null) {
            var b = I.current
            b.style.transform = 'none'
          }
          typeof A === 'function' && A(a)
        }
      H = n(H)
      var L = H[0],
        M = H[1],
        N = [l.item, F === 'large' && l.sizeLargeItem]
      H = function (a) {
        a = a.overlay
        return h.jsxs(c('BaseRow.react'), {
          align: 'center',
          ref: I,
          verticalAlign: 'center',
          xstyle: [
            l.content,
            E === 'wide' && l.paddingWide,
            p && l.disabled,
            M,
            m,
          ],
          children: [
            h.jsxs('div', {
              className: c('stylex')([
                l.offset,
                F === 'large' && l.sizeLargeOffset,
              ]),
              children: [
                f != null
                  ? h.jsx(c('BaseRowItem.react'), {
                      useDeprecatedStyles: !0,
                      xstyle: N,
                      children: f,
                    })
                  : r != null
                  ? h.jsx(c('BaseRowItem.react'), {
                      useDeprecatedStyles: !0,
                      xstyle: N,
                      children: r,
                    })
                  : null,
                g != null
                  ? h.jsx(c('BaseRowItem.react'), {
                      useDeprecatedStyles: !0,
                      xstyle: N,
                      children: g,
                    })
                  : null,
                e != null
                  ? h.jsx(c('BaseRowItem.react'), {
                      useDeprecatedStyles: !0,
                      xstyle: N,
                      children: e,
                    })
                  : null,
              ],
            }),
            a,
            d != null ? d : null,
          ],
        })
      }
      return h.jsx(
        c('CometPressable.react'),
        babelHelpers['extends']({}, a, {
          disabled: p,
          display: o,
          focusable: q,
          id: s,
          linkProps: t,
          onFocusIn: u,
          onFocusOut: v,
          onHoverIn: w,
          onHoverOut: x,
          onPress: y,
          onPressIn: J,
          onPressOut: K,
          overlayHoveredStyle: B,
          overlayPressedStyle: C,
          ref: b,
          suppressHydrationWarning: D,
          testOnly_pressed: G,
          testid: void 0,
          xstyle: [l.button, L],
          children: H,
        }),
      )
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    b = h.forwardRef(a)
    var m = new WeakMap()
    function n(a) {
      if (!a) return [{}, {}]
      var b = m.get(a)
      if (b != null) return b
      b = c('stylex').compose(a)
      var e = b.alignSelf,
        f = b.flexBasis,
        g = b.flexGrow,
        h = b.flexShrink,
        i = b.height,
        j = b.justifySelf,
        k = b.margin,
        l = b.marginBottom,
        n = b.marginEnd,
        o = b.marginStart,
        p = b.marginTop,
        q = b.maxHeight,
        r = b.maxWidth,
        s = b.minHeight,
        t = b.minWidth,
        u = b.position,
        v = b.width
      b = babelHelpers.objectWithoutPropertiesLoose(b, [
        'alignSelf',
        'flexBasis',
        'flexGrow',
        'flexShrink',
        'height',
        'justifySelf',
        'margin',
        'marginBottom',
        'marginEnd',
        'marginStart',
        'marginTop',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'position',
        'width',
      ])
      e = {
        alignSelf: e,
        flexBasis: f,
        flexGrow: g,
        flexShrink: h,
        height: i,
        justifySelf: j,
        margin: k,
        marginBottom: l,
        marginEnd: n,
        marginStart: o,
        marginTop: p,
        maxHeight: q,
        maxWidth: r,
        minHeight: s,
        minWidth: t,
        position: u,
        width: v,
      }
      f = {}
      for (g in e) e[g] !== void 0 && (f[g] = e[g])
      h = [
        d('stylex-compat').makeNamespace(f),
        d('stylex-compat').makeNamespace(b),
      ]
      m.set(a, h)
      return h
    }
    g['default'] = b
  },
  98,
)

import React, { CSSProperties, ReactNode, forwardRef } from 'react'

type BaseStyledButtonProps = {
  addOnEnd?: any
  addOnStart?: any
  addOnAbsolute?: any
  content: ReactNode
  contentXstyle?: string
  disabled?: boolean
  display?: string
  focusable?: boolean
  id?: string
  onFocusIn?: any
  onFocusOut?: any
  onHoverIn?: any
  onHoverOut?: any
  onPress?: any
  onPressIn?: any
  onPressOut?: any
  overlayHoveredStyle?: CSSProperties
}

const BaseStyledButton = forwardRef<>(({}, ref) => {
  return <div />
})

export default BaseStyledButton
