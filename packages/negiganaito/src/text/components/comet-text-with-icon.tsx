import { makeStyles, mergeClasses } from '@griffel/react'
import { BaseView, CometNonBreakingSpace } from '@negiganaito/common'
import React, { CSSProperties, ReactNode } from 'react'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'

type CometTextWithIconProps = {
  children?: ReactNode
  iconAfter?: ReactNode
  iconBefore?: ReactNode
  iconOverrideVerticalStyle?: string
  observeDirectionality?: boolean
  spacing?: 0.25 | 0.5 | 0.75 | 1
}

const useStyles = makeStyles({
  icon: {
    alignItems: 'center',
    display: 'inline-flex',
    verticalAlign: 'middle',
  },
  iconContainer: {
    display: 'inline',
    whiteSpace: 'nowrap',
  },
})

export default function CometTextWithIcon({
  children,
  iconAfter,
  iconBefore,
  iconOverrideVerticalStyle,
  observeDirectionality = false,
  spacing = 0.5,
}: CometTextWithIconProps) {
  const classes = useStyles()

  const child = jsxs(React.Fragment, {
    children: [
      iconBefore &&
        jsxs(BaseView, {
          className: classes.iconContainer,
          children: [
            jsx(BaseView, {
              className: mergeClasses(classes.icon, iconOverrideVerticalStyle),
              children: iconBefore,
            }),
            jsx(CometNonBreakingSpace, {
              size: spacing,
            }),
          ],
        }),
      children,
      iconAfter &&
        jsxs(BaseView, {
          className: classes.iconContainer,
          children: [
            jsx(CometNonBreakingSpace, {
              size: spacing,
            }),
            jsx(BaseView, {
              className: mergeClasses(classes.icon, iconOverrideVerticalStyle),
              children: iconAfter,
            }),
          ],
        }),
    ],
  })

  return observeDirectionality ? <span dir="auto">{child}</span> : child
}

/*

__d(
  'CometTextWithIcon.react',
  ['BaseView.react', 'CometNonBreakingSpace.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = d('react'),
      i = {
        icon: {
          alignItems: 'x6s0dn4',
          display: 'x3nfvp2',
          verticalAlign: 'xxymvpz',
          $$css: !0,
        },
        iconContainer: {
          display: 'xt0psk2',
          whiteSpace: 'xuxw1ft',
          $$css: !0,
        },
      }
    function a(a) {
      var b = a.children,
        d = a.iconAfter,
        e = a.iconBefore,
        f = a.iconOverrideVerticalStyle,
        g = a.observeDirectionality
      g = g === void 0 ? !1 : g
      a = a.spacing
      a = a === void 0 ? 0.5 : a
      e = h.jsxs(h.Fragment, {
        children: [
          e != null &&
            h.jsxs(c('BaseView.react'), {
              xstyle: i.iconContainer,
              children: [
                h.jsx(c('BaseView.react'), {
                  xstyle: babelHelpers['extends']({}, i.icon, f),
                  children: e,
                }),
                h.jsx(c('CometNonBreakingSpace.react'), {
                  size: a,
                }),
              ],
            }),
          b,
          d != null &&
            h.jsxs(c('BaseView.react'), {
              xstyle: i.iconContainer,
              children: [
                h.jsx(c('CometNonBreakingSpace.react'), {
                  size: a,
                }),
                h.jsx(c('BaseView.react'), {
                  xstyle: babelHelpers['extends']({}, i.icon, f),
                  children: d,
                }),
              ],
            }),
        ],
      })
      return g
        ? h.jsx('span', {
            dir: 'auto',
            children: e,
          })
        : e
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    g['default'] = a
  },
  98,
)

*/
