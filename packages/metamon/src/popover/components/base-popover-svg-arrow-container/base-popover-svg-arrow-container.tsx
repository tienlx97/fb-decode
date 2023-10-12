import React, { forwardRef, ReactNode, useContext, useMemo } from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import { mergeClasses } from '@fluentui/react-components'
import {
  BaseContextualLayerContextSizeContext,
  BaseContextualLayerLayerAdjustmentContext,
  BaseContextualLayerOrientationContext,
} from '@metamon/context'

import BasePopoverDownEdgeArrow from '../base-popover-down-edge-arrow'
import BasePopoverDownInsetArrow from '../base-popover-down-inset-arrow'
import BasePopoverRightEdgeArrow from '../base-popover-right-edge-arrow'
import BasePopoverRightInsetArrow from '../base-popover-right-inset-arrow'
import {
  useAlign1,
  useAlign2,
  useArrowStyles,
  usePopoverStyles,
  usePositionStyles,
} from './styles'

type BasePopoverSVGArrowContainerProps = {
  arrowAlignment?: string
  children?: ReactNode
  label?: string
  labelledby?: string
  testid?: string
  className?: string
  // align: string
  // position: 'above' | 'below' | 'start' | 'end'
} & React.JSX.IntrinsicElements['div']

const k = 3
const l = false // isRTL
const m = 25

const BasePopoverSVGArrowContainer = forwardRef<
  HTMLElement,
  BasePopoverSVGArrowContainerProps
>(
  (
    {
      arrowAlignment = 'center',
      children,
      label,
      labelledby,
      testid,
      className,
      ...rest
    },
    ref,
  ) => {
    const p = usePositionStyles()
    const r = useAlign2()
    const q = useAlign1()
    const n = useArrowStyles()
    const o = usePopoverStyles()

    const { align, position } = useContext(
      BaseContextualLayerOrientationContext,
    )
    const y = useContext(BaseContextualLayerContextSizeContext)
    const v = getArrowComponent(position, align)

    const z = useContext(BaseContextualLayerLayerAdjustmentContext) ?? 0

    const d = useMemo(() => {
      var a = l ? 'start' : 'end',
        b = l ? 'end' : 'start',
        c = (align === 'end' && !l) || (align === 'start' && l),
        d = 1,
        e = 1,
        g = 0,
        h = 0
      switch (position) {
        case 'above':
          g += -z
          if (c) {
            d = -1
          }
          break
        case 'below':
          g += -z
          e = -1
          if (c) {
            d = -1
          }
          break
        case b:
          h += -z
          if (align === 'start') {
            e = -1
          }
          break
        case a:
          h += -z
          d = -1
          if (align === 'start') {
            e = -1
          }
          break
      }
      return {
        arrowStyle: {
          transform:
            'scale(' + d + ', ' + e + ') translate(' + g + 'px, ' + h + 'px)',
        },
        containerStyle: getContainerStyle(position, align, arrowAlignment, y),
      }
    }, [align, arrowAlignment, y, z, position])

    const { arrowStyle, containerStyle } = d

    return jsxs(
      'div',
      Object.assign(
        {},
        rest,
        {
          'aria-label': label,
          'aria-labelledby': labelledby,
          className: mergeClasses(n.container, o[position], className),
          ref,
          style: containerStyle,
        },
        {
          children: [
            children,
            jsx(v, {
              className: mergeClasses(
                n.arrow,
                p[position],
                (position === 'start' || position === 'end') && r[align],
                (position === 'above' || position === 'below') && q[align],
              ),
              fill: 'var(--card-background)',
              style: arrowStyle,
            }),
          ],
        },
      ),
    )
  },
)

function getArrowComponent(position?: string, align?: string) {
  return position === 'above' || position === 'below'
    ? align === 'middle'
      ? BasePopoverDownInsetArrow
      : BasePopoverDownEdgeArrow
    : align === 'middle'
    ? BasePopoverRightInsetArrow
    : BasePopoverRightEdgeArrow
}

function getContainerStyle(
  position: any,
  align: any,
  arrowAlignment: any,
  baseContextualLayerContextSizeContext: any,
) {
  if (arrowAlignment === 'edge' || !baseContextualLayerContextSizeContext) {
    return {}
  }
  const positionBelowOrAbove = position === 'below' || position === 'above'
  const widthOrHeight = positionBelowOrAbove
    ? baseContextualLayerContextSizeContext.width
    : baseContextualLayerContextSizeContext.height
  const dummy = widthOrHeight > 0 ? widthOrHeight / 2 : 0
  if (dummy === 0) {
    return {}
  }
  position = s(positionBelowOrAbove, align, align === 'middle' ? m / 2 : dummy)
  return {
    transform: positionBelowOrAbove
      ? 'translateX(' + position + 'px)'
      : 'translateY(' + position + 'px)',
  }
}

function s(positionBelowOrAbove: boolean, align: string, c: number) {
  c = c - k
  if (!positionBelowOrAbove) {
    return align === 'end' || align === 'middle' ? c * -1 : c
  }
  return (l && align === 'start') || (!l && align === 'end') ? c * -1 : c
}

export default BasePopoverSVGArrowContainer

/*

__d(
  'BasePopoverSVGArrowContainer.react',
  [
    'BaseContextualLayerContextSizeContext',
    'BaseContextualLayerLayerAdjustmentContext',
    'BaseContextualLayerOrientationContext',
    'BasePopoverDownEdgeArrow.svg.react',
    'BasePopoverDownInsetArrow.svg.react',
    'BasePopoverRightEdgeArrow.svg.react',
    'BasePopoverRightInsetArrow.svg.react',
    'Locale',
    'react',
    'stylex',
    'testID',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = d('react')
    b = d('react')
    var i = b.useContext,
      j = b.useMemo,
      k = 3,
      l = c('Locale').isRTL(),
      m = 25,
      n = {
        arrow: {
          position: 'x10l6tqk',
          $$css: !0,
        },
        container: {
          position: 'x1n2onr6',
          $$css: !0,
        },
      },
      o = {
        above: {
          marginBottom: 'x1fqp7bg',
          $$css: !0,
        },
        below: {
          marginTop: 'xcxhlts',
          $$css: !0,
        },
        end: {
          marginStart: 'x13ibhcj',
          $$css: !0,
        },
        start: {
          marginEnd: 'x1jqylkn',
          $$css: !0,
        },
      },
      p = {
        above: {
          top: 'x11k2h6o',
          $$css: !0,
        },
        below: {
          bottom: 'xng853d',
          $$css: !0,
        },
        end: {
          end: 'x1gozi89',
          $$css: !0,
        },
        start: {
          start: 'x1ke83zm',
          $$css: !0,
        },
      },
      q = {
        end: {
          end: 'xds687c',
          $$css: !0,
        },
        middle: {
          start: 'xu8u0ou',
          $$css: !0,
        },
        start: {
          start: 'x17qophe',
          $$css: !0,
        },
        stretch: {
          $$css: !0,
        },
      },
      r = {
        end: {
          bottom: 'x1ey2m1c',
          $$css: !0,
        },
        middle: {
          top: 'x18g6o9x',
          $$css: !0,
        },
        start: {
          top: 'x13vifvy',
          $$css: !0,
        },
        stretch: {
          $$css: !0,
        },
      }
    function s(a, b, c) {
      c = c - k
      if (!a) return b === 'end' || b === 'middle' ? c * -1 : c
      return (l && b === 'start') || (!l && b === 'end') ? c * -1 : c
    }
    function t(a, b, c, d) {
      if (c === 'edge' || d == null) return {}
      c = a === 'below' || a === 'above'
      a = c ? d.width : d.height
      d = a > 0 ? a / 2 : 0
      if (d === 0) return {}
      a = s(c, b, b === 'middle' ? m / 2 : d)
      return {
        transform: c ? 'translateX(' + a + 'px)' : 'translateY(' + a + 'px)',
      }
    }
    function u(a, b) {
      return a === 'above' || a === 'below'
        ? b === 'middle'
          ? c('BasePopoverDownInsetArrow.svg.react')
          : c('BasePopoverDownEdgeArrow.svg.react')
        : b === 'middle'
        ? c('BasePopoverRightInsetArrow.svg.react')
        : c('BasePopoverRightEdgeArrow.svg.react')
    }
    function a(a, b) {
      var d,
        e = a.arrowAlignment,
        f = e === void 0 ? 'center' : e
      e = a.children
      var g = a.label,
        k = a.labelledby,
        m = a.testid,
        s = a.xstyle
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'arrowAlignment',
        'children',
        'label',
        'labelledby',
        'testid',
        'xstyle',
      ])
      var v = i(c('BaseContextualLayerOrientationContext')),
        w = v.align,
        x = v.position,
        y = i(c('BaseContextualLayerContextSizeContext'))
      v = u(x, w)
      var z =
        (d = i(c('BaseContextualLayerLayerAdjustmentContext'))) != null ? d : 0
      d = j(
        function () {
          var a = l ? 'start' : 'end',
            b = l ? 'end' : 'start',
            c = (w === 'end' && !l) || (w === 'start' && l),
            d = 1,
            e = 1,
            g = 0,
            h = 0
          switch (x) {
            case 'above':
              g += -z
              c && (d = -1)
              break
            case 'below':
              g += -z
              e = -1
              c && (d = -1)
              break
            case b:
              h += -z
              w === 'start' && (e = -1)
              break
            case a:
              h += -z
              d = -1
              w === 'start' && (e = -1)
              break
          }
          return {
            arrowStyle: {
              transform:
                'scale(' +
                d +
                ', ' +
                e +
                ') translate(' +
                g +
                'px, ' +
                h +
                'px)',
            },
            containerStyle: t(x, w, f, y),
          }
        },
        [w, f, y, z, x],
      )
      var A = d.arrowStyle
      d = d.containerStyle
      return h.jsxs(
        'div',
        babelHelpers['extends'](
          {},
          a,
          {
            'aria-label': g,
            'aria-labelledby': k,
            className: c('stylex')(n.container, o[x], s),
            ref: b,
            style: d,
          },
          c('testID')(m),
          {
            children: [
              e,
              h.jsx(v, {
                className: c('stylex')(
                  n.arrow,
                  p[x],
                  (x === 'start' || x === 'end') && r[w],
                  (x === 'above' || x === 'below') && q[w],
                ),
                fill: 'var(--card-background)',
                style: A,
              }),
            ],
          },
        ),
      )
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    e = h.forwardRef(a)
    g['default'] = e
  },
  98,
)

*/
