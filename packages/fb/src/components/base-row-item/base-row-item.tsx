import React, { forwardRef, useContext } from 'react'
import { mergeClasses } from '@fluentui/react-components'
import { BaseRowContext } from '@fb/context/base-row-context'
import BaseView from '../base-view'
import { useColumnStyles, useStyles, useVerticalAlignStyles } from './styles'

type BaseRowItemReactProps = {
  expanding?: boolean
  useDeprecatedStyles?: boolean
  verticalAlign?: 'bottom' | 'top' | 'center' | 'stretch'
}

const BaseRowItem = forwardRef<
  HTMLDivElement,
  BaseRowItemReactProps & React.JSX.IntrinsicElements['div']
>(
  (
    {
      verticalAlign,
      className,
      expanding = false,
      useDeprecatedStyles = false,
      ...rest
    },
    ref,
  ) => {
    const { columns, wrap } = useContext(BaseRowContext)

    const classes = useStyles()
    const columnsClasses = useColumnStyles()
    const verticalAlignClasses = useVerticalAlignStyles()

    return (
      <BaseView
        {...rest}
        ref={ref}
        className={mergeClasses(
          useDeprecatedStyles ? classes.item_DEPRECATED : classes.item,
          expanding && classes.expanding,
          expanding && wrap !== 'none' && classes.expandingWithWrap,
          // @ts-ignore
          columns > 0 && columnsClasses[columns],
          // @ts-ignore
          verticalAlign && verticalAlignClasses[verticalAlign],
          className,
        )}
      />
    )
  },
)

BaseRowItem.displayName = 'BaseRowItem.react'

export default BaseRowItem

// __d(
//   'BaseRowItem.react',
//   ['BaseRowContext', 'BaseView.react', 'react'],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h = d('react'),
//       i = d('react').useContext,
//       j = {
//         expanding: {
//           flexBasis: 'x1r8uery',
//           flexGrow: 'x1iyjqo2',
//           flexShrink: 'xs83m0k',
//         },
//         expandingWithWrap: {
//           flexBasis: 'x1l7klhg',
//         },
//         item: {
//           display: 'x78zum5',
//           flexDirection: 'xdt5ytf',
//           flexShrink: 'x2lah0s',
//           maxWidth: 'x193iq5w',
//           minWidth: 'xeuugli',
//         },
//         item_DEPRECATED: {
//           maxWidth: 'x193iq5w',
//           minWidth: 'xeuugli',
//         },
//       },
//       k = {
//         1: {
//           flexBasis: 'x1l7klhg',
//         },
//         2: {
//           flexBasis: 'x4pfjvb',
//         },
//         3: {
//           flexBasis: 'x1upgvki',
//         },
//         4: {
//           flexBasis: 'xhnlq4v',
//         },
//         5: {
//           flexBasis: 'x15foiic',
//         },
//         6: {
//           flexBasis: 'xd8mu38',
//         },
//         7: {
//           flexBasis: 'xjtu8lc',
//         },
//         8: {
//           flexBasis: 'xvuwby9',
//         },
//         9: {
//           flexBasis: 'x1m2iiog',
//         },
//         10: {
//           flexBasis: 'x3cfelu',
//         },
//       },
//       l = {
//         bottom: {
//           alignSelf: 'xpvyfi4',
//         },
//         center: {
//           alignSelf: 'xamitd3',
//         },
//         stretch: {
//           alignSelf: 'xkh2ocl',
//         },
//         top: {
//           alignSelf: 'xqcrz7y',
//         },
//       }
//     function BaseRowItem(props, b) {
//       var expanding = props.expanding
//       expanding = expanding === void 0 ? !1 : expanding
//       var useDeprecatedStyles = props.useDeprecatedStyles
//       useDeprecatedStyles =
//         useDeprecatedStyles === void 0 ? !1 : useDeprecatedStyles
//       var verticalAlign = props.verticalAlign,
//         xstyle = props.xstyle
//       props = babelHelpers.objectWithoutPropertiesLoose(props, [
//         'expanding',
//         'useDeprecatedStyles',
//         'verticalAlign',
//         'xstyle',
//       ])
//       var BaseRowContextValue = i(c('BaseRowContext')),
//         columns = BaseRowContextValue.columns
//       BaseRowContextValue = BaseRowContextValue.wrap
//       return h.jsx(
//         c('BaseView.react'),
//         babelHelpers['extends']({}, props, {
//           ref: b,
//           xstyle: [
//             useDeprecatedStyles ? j.item_DEPRECATED : j.item,
//             expanding && j.expanding,
//             expanding && BaseRowContextValue !== 'none' && j.expandingWithWrap,
//             columns > 0 && k[columns],
//             verticalAlign != null && l[verticalAlign],
//             xstyle,
//           ],
//         }),
//       )
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     BaseRowItem = h.forwardRef(a)
//     g['default'] = BaseRowItem
//   },
//   98,
// )
