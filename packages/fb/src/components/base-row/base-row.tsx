import React, { forwardRef, ReactNode, useMemo } from 'react'

import { BaseRowContext } from '@fb/context/base-row-context'
import { makeStyles, mergeClasses } from '@fluentui/react-components'

import BaseView from '../base-view'
import {
  alignVariable,
  useAlignStyles,
  useDirectionStyles,
  useExpanding,
  useVerticalAlignStyles,
  useWrapStyles,
} from './styles'

type BaseRowProps = {
  align?: 'center' | 'end' | 'justify' | 'start'
  children: ReactNode
  columns?: number
  direction?: 'backward' | 'forward'
  expanding?: boolean
  verticalAlign?: 'bottom' | 'center' | 'stretch' | 'top'
  wrap?: 'backward' | 'forward' | 'none'
  className?: string
  useDeprecatedStyles?: any
}

const BaseRow = forwardRef<HTMLDivElement, BaseRowProps>(
  (
    {
      children,
      align = 'justify',
      columns = 0,
      direction = 'forward',
      expanding = false,
      verticalAlign = 'stretch',
      wrap = 'none',
      className,
      ...rest
    },
    ref,
  ) => {
    const expandingClasses = useExpanding()
    const alignClasses = useAlignStyles()
    const verticalAlignClasses = useVerticalAlignStyles()
    const wrapClasses = useWrapStyles()
    const directionClasses = useDirectionStyles()

    var baseRowContextValue = useMemo(() => {
      return {
        columns,
        wrap,
      }
    }, [columns, wrap])

    return (
      <BaseView
        {...rest}
        ref={ref}
        className={mergeClasses(
          expandingClasses.row,
          expanding && expandingClasses.expanding,
          // @ts-ignore
          alignClasses[
            direction === 'backward' && (align === 'start' || align === 'end')
              ? alignVariable[align]
              : align
          ],
          verticalAlignClasses[verticalAlign],
          wrapClasses[wrap],
          directionClasses[direction],
          className,
        )}
      >
        <BaseRowContext.Provider value={baseRowContextValue}>
          {children}
        </BaseRowContext.Provider>
      </BaseView>
    )
  },
)

export default BaseRow

// __d(
//   'BaseRow.react',
//   ['BaseRowContext', 'BaseView.react', 'react'],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h = d('react'),
//       i = d('react').useMemo,
//       j = {
//         expanding: {
//           flexBasis: 'x1r8uery',
//           flexGrow: 'x1iyjqo2',
//           flexShrink: 'xs83m0k',
//           minWidth: 'xeuugli',
//           $$css: !0,
//         },
//         row: {
//           display: 'x78zum5',
//           flexShrink: 'x2lah0s',
//           $$css: !0,
//         },
//       },
//       k = {
//         center: {
//           justifyContent: 'xl56j7k',
//           $$css: !0,
//         },
//         end: {
//           justifyContent: 'x13a6bvl',
//           $$css: !0,
//         },
//         justify: {
//           justifyContent: 'x1qughib',
//           $$css: !0,
//         },
//         start: {
//           justifyContent: 'x1nhvcw1',
//           $$css: !0,
//         },
//       },
//       l = {
//         bottom: {
//           alignItems: 'xuk3077',
//           $$css: !0,
//         },
//         center: {
//           alignItems: 'x6s0dn4',
//           $$css: !0,
//         },
//         stretch: {
//           alignItems: 'x1qjc9v5',
//           $$css: !0,
//         },
//         top: {
//           alignItems: 'x1cy8zhl',
//           $$css: !0,
//         },
//       },
//       m = {
//         backward: {
//           flexDirection: 'x15zctf7',
//           $$css: !0,
//         },
//         forward: {
//           flexDirection: 'x1q0g3np',
//           $$css: !0,
//         },
//       },
//       n = {
//         backward: {
//           flexWrap: 'x8hhl5t',
//           $$css: !0,
//         },
//         forward: {
//           flexWrap: 'x1a02dak',
//           $$css: !0,
//         },
//         none: {
//           flexWrap: 'xozqiw3',
//           $$css: !0,
//         },
//       },
//       o = {
//         end: 'start',
//         start: 'end',
//       }
//     function a(a, b) {
//       var d = a.align
//       d = d === void 0 ? 'justify' : d
//       var e = a.children,
//         f = a.columns,
//         g = f === void 0 ? 0 : f
//       f = a.direction
//       f = f === void 0 ? 'forward' : f
//       var p = a.expanding
//       p = p === void 0 ? !1 : p
//       var q = a.verticalAlign
//       q = q === void 0 ? 'stretch' : q
//       var r = a.wrap,
//         s = r === void 0 ? 'none' : r
//       r = a.xstyle
//       a = babelHelpers.objectWithoutPropertiesLoose(a, [
//         'align',
//         'children',
//         'columns',
//         'direction',
//         'expanding',
//         'verticalAlign',
//         'wrap',
//         'xstyle',
//       ])
//       var t = i(
//         function () {
//           return {
//             columns: g,
//             wrap: s,
//           }
//         },
//         [g, s],
//       )
//       return h.jsx(
//         c('BaseView.react'),
//         babelHelpers['extends']({}, a, {
//           ref: b,
//           xstyle: [
//             j.row,
//             p && j.expanding,
//             k[f === 'backward' && (d === 'start' || d === 'end') ? o[d] : d],
//             l[q],
//             n[s],
//             m[f],
//             r,
//           ],
//           children: h.jsx(c('BaseRowContext').Provider, {
//             value: t,
//             children: e,
//           }),
//         }),
//       )
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     b = h.forwardRef(a)
//     g['default'] = b
//   },
//   98,
// )
