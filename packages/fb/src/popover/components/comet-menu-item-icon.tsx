import { CometIcon, IconSource, ImageIconSource } from '@fb/tetra-icon'
import CometImage from '@fb/tetra-icon/components/comet-image'
import { EmojiIcon, LegacySVGIcon, SVGIcon } from '@fb/utils'
import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import React, { useMemo } from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

type CometMenuItemIconProps = {
  disabled?: boolean
  emojiSize?: number
  icon?: any
  iconColor?: string
  iconCssSelectorId?: string
  iconSize?: number
  use?: 'contained_small_icon' | 'normal' | 'contained'
}

const useStyles = makeStyles({
  circle: {
    ...shorthands.borderRadius('50%'),
  },
  contained: {
    backgroundColor: 'var(--secondary-button-background)',
    ...shorthands.borderRadius('50%'),
    height: 'var(--menu-item-icon-container-size,36px)',
    minWidth: 'var(--menu-item-icon-container-size,36px)',
  },
  iconRelativeContainer: {
    position: 'relative',
  },
  inset: {
    boxShadow: 'inset 0 0 0 1px var(--media-inner-border)',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  normal: {
    height: 'var(--menu-item-icon-default-size,initial)',
    minWidth: 'var(--menu-item-icon-default-size,initial)',
  },
  root: {
    alignItems: 'center',
    alignSelf: 'baseline',
    display: 'flex',
    justifyContent: 'center',
    marginRight: '12px',
  },
  roundedRect: {
    ...shorthands.borderRadius('8px'),
  },
})

const useDummyStyles = makeStyles({
  dummy1: {
    position: 'relative',
  },
})

export default function CometMenuItemIcon({
  disabled,
  emojiSize = 20,
  icon,
  iconColor,
  iconCssSelectorId,
  iconSize = 20,
  use = 'normal',
}: CometMenuItemIconProps) {
  const classes = useStyles()
  const dummyclasses = useDummyStyles()

  const child = useMemo(() => {
    if (icon instanceof IconSource) {
      return jsx(CometIcon, {
        color: iconColor ?? 'primary',
        disabled,
        icon,
      })
    }
    if (icon instanceof ImageIconSource)
      return jsx(CometIcon, {
        disabled,
        icon,
      })
    if (icon instanceof SVGIcon) {
      return jsx(CometIcon, {
        color: iconColor ?? 'primary',
        disabled,
        icon,
        size: iconSize,
      })
    }
    if (icon instanceof LegacySVGIcon) {
      return jsx(CometIcon, {
        color: iconColor ?? 'primary',
        disabled,
        icon,
        size: iconSize,
      })
    }
    if (icon instanceof EmojiIcon)
      return jsx('CometEmoji.react', {
        emoji: icon.codepoints,
        size: emojiSize,
      })
    if (
      typeof icon === 'object' &&
      typeof icon !== 'function' &&
      !icon._isSVG &&
      icon.src
    ) {
      const _size = use === 'contained' ? 36 : 20
      return jsxs('div', {
        className: dummyclasses.dummy1, // 'x1n2onr6',
        children: [
          jsx(CometImage, {
            height: _size,
            src: icon.src,
            width: _size,
            className: mergeClasses(
              icon.style === 'circle' && classes.circle,
              icon.style === 'roundedRect' && classes.roundedRect,
            ),
          }),
          icon.style !== 'square'
            ? jsx('div', {
                className: mergeClasses(
                  icon.style === 'circle' && classes.circle,
                  classes.inset,
                  icon.style === 'roundedRect' && classes.roundedRect,
                ),
                style: {
                  height: _size,
                  width: _size,
                },
              })
            : null,
        ],
      })
    }
    return jsx(CometIcon, {
      color: iconColor ?? 'secondary',
      disabled,
      icon,
    })
  }, [disabled, emojiSize, icon, iconColor, iconSize, use])

  return jsx('div', {
    className: mergeClasses(
      classes.root,
      (use === 'contained' || use === 'contained_small_icon') &&
        classes.contained,
      use === 'normal' && classes.normal,
    ),
    id: iconCssSelectorId,
    children: child,
  })
}

/* 

__d(
  'CometMenuItemIcon.react',
  [
    'CometEmoji.react',
    'CometIcon.react',
    'CometImage.react',
    'IconSource',
    'ImageIconSource',
    'SVGIcon',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = d('react'),
      i = d('react').useMemo,
      j = {
        circle: {
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          $$css: !0,
        },
        contained: {
          backgroundColor: 'x1qhmfi1',
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          height: 'xvnh2x',
          minWidth: 'x1g0q3yh',
          $$css: !0,
        },
        iconRelativeContainer: {
          position: 'x1n2onr6',
          $$css: !0,
        },
        inset: {
          boxShadow: 'xlg9a9y',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          $$css: !0,
        },
        normal: {
          height: 'xcrj56b',
          minWidth: 'x1ua1ozc',
          $$css: !0,
        },
        root: {
          alignItems: 'x6s0dn4',
          alignSelf: 'xoi2r2e',
          display: 'x78zum5',
          justifyContent: 'xl56j7k',
          marginEnd: 'xq8finb',
          $$css: !0,
        },
        roundedRect: {
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          $$css: !0,
        },
      }
    function a(a) {
      var b = a.disabled,
        e = a.emojiSize,
        f = e === void 0 ? 20 : e,
        g = a.icon,
        k = a.iconColor
      e = a.iconCssSelectorId
      var l = a.iconSize,
        m = l === void 0 ? 20 : l
      l = a.use
      var n = l === void 0 ? 'normal' : l
      a = i(
        function () {
          if (g instanceof c('IconSource')) {
            var a
            return h.jsx(c('CometIcon.react'), {
              color: (a = k) != null ? a : 'primary',
              disabled: b,
              icon: g,
            })
          }
          if (g instanceof c('ImageIconSource'))
            return h.jsx(c('CometIcon.react'), {
              disabled: b,
              icon: g,
            })
          if (g instanceof d('SVGIcon').SVGIcon) {
            return h.jsx(c('CometIcon.react'), {
              color: (a = k) != null ? a : 'primary',
              disabled: b,
              icon: g,
              size: m,
            })
          }
          if (g instanceof d('SVGIcon').LegacySVGIcon) {
            return h.jsx(c('CometIcon.react'), {
              color: (a = k) != null ? a : 'primary',
              disabled: b,
              icon: g,
              size: m,
            })
          }
          if (g instanceof d('SVGIcon').EmojiIcon)
            return h.jsx(c('CometEmoji.react'), {
              emoji: g.codepoints,
              size: f,
            })
          if (
            typeof g === 'object' &&
            typeof g !== 'function' &&
            !g._isSVG &&
            g.src !== null
          ) {
            a = n === 'contained' ? 36 : 20
            return h.jsxs('div', {
              className: 'x1n2onr6',
              children: [
                h.jsx(c('CometImage.react'), {
                  height: a,
                  src: g.src,
                  width: a,
                  xstyle: [
                    g.style === 'circle' && j.circle,
                    g.style === 'roundedRect' && j.roundedRect,
                  ],
                }),
                g.style !== 'square'
                  ? h.jsx('div', {
                      className: c('stylex')(
                        g.style === 'circle' && j.circle,
                        j.inset,
                        g.style === 'roundedRect' && j.roundedRect,
                      ),
                      style: {
                        height: a,
                        width: a,
                      },
                    })
                  : null,
              ],
            })
          }
          return h.jsx(c('CometIcon.react'), {
            color: (a = k) != null ? a : 'secondary',
            disabled: b,
            icon: g,
          })
        },
        [b, f, g, k, m, n],
      )
      return h.jsx('div', {
        className: c('stylex')([
          j.root,
          (n === 'contained' || n === 'contained_small_icon') && j.contained,
          n === 'normal' && j.normal,
        ]),
        id: e,
        children: a,
      })
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    b = h.memo(a)
    g['default'] = b
  },
  98,
)

*/
