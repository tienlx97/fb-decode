import { mergeClasses } from '@griffel/react'
import React, { ReactNode, cloneElement, isValidElement, useId } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import {
  CometSVGIconColor,
  CometSVGIconSize,
  useColorStyles,
  useIconSizeStyles,
  useStyles,
} from './styles'

type CometIconProps = {
  alt?: string
  color: CometSVGIconColor
  size: CometSVGIconSize
  viewBox?: string
  children?: ReactNode
  component?: ReactNode
  inline?: boolean
  shadow?: boolean
}

export default function CometSvgIcon(props: CometIconProps) {
  const iconId = useId()

  const classes = useStyles()
  const colorClasses = useColorStyles()
  const iconSizeClasses = useIconSizeStyles()

  if (props.viewBox === undefined) {
    const {
      alt,
      color,
      component,
      inline = false,
      shadow = false,
      size,
    } = props

    return jsx(component, {
      className: mergeClasses(
        classes.icon,
        inline && classes.inline,
        shadow && classes.shadow,
        colorClasses[color],
        iconSizeClasses[size],
      ),
    })
  } else {
    const {
      children,
      color,
      inline = false,
      shadow = false,
      size,
      ...rest
    } = props

    const a = []
    var o

    if (color && typeof color !== 'string' && isValidElement(color)) {
      a.push(
        cloneElement(color, {
          id: iconId,
          key: '1',
          suppressHydrationWarning: true,
        }),
      )

      o = 'url(#' + iconId + ')'
    }

    return (
      <svg
        {...rest}
        className={mergeClasses(
          classes.icon,
          inline && classes.inline,
          shadow && classes.shadow,
          typeof color === 'string' && colorClasses[color],
        )}
        fill={o ? o : 'currentColor'}
        height={size}
        width={size}
        suppressHydrationWarning
      >
        {a.length > 0 && <defs>{a}</defs>}
        {children}
      </svg>
    )

    // f = a.children
    // g = a.color
    // m = a.inline
    // e = m === void 0 ? !1 : m
    // n = a.shadow
    // d = n === void 0 ? !1 : n
    // m = a.size
    // n = babelHelpers.objectWithoutPropertiesLoose(a, [
    //   'children',
    //   'color',
    //   'inline',
    //   'shadow',
    //   'size',
    // ])
    // a = []
    // var o
    // g != null &&
    //   typeof g !== 'string' &&
    //   h.isValidElement(g) &&
    //   (a.push(
    //     h.cloneElement(g, {
    //       id: b,
    //       key: '1',
    //       suppressHydrationWarning: !0,
    //     }),
    //   ),
    //   (o = 'url(#' + b + ')'))
    // return h.jsxs(
    //   'svg',
    //   babelHelpers['extends']({}, n, {
    //     className: c('stylex')([
    //       j.icon,
    //       e && j.inline,
    //       d && j.shadow,
    //       typeof g === 'string' && l[g],
    //     ]),
    //     fill: (b = o) != null ? b : 'currentColor',
    //     height: m,
    //     suppressHydrationWarning: !0,
    //     width: m,
    //     children: [
    //       a.length > 0
    //         ? h.jsx('defs', {
    //             children: a,
    //           })
    //         : void 0,
    //       f,
    //     ],
    //   }),
    // )
  }
}
