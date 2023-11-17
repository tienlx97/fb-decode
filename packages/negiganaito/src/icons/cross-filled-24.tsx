import React, { SVGProps } from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

export function CrossFilled24(props: SVGProps<SVGSVGElement>) {
  return jsxs(
    'svg',
    Object.assign(
      {
        viewBox: '0 0 24 24',
        width: '1em',
        height: '1em',
        fill: 'currentColor',
      },
      props,
      {
        children: [
          props.children &&
            jsx('defs', {
              children: props.children,
            }),
          jsx('path', {
            d: 'M18.707 5.293a1 1 0 0 0-1.414 0L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0 0-1.414z',
          }),
        ],
      },
    ),
  )
}
CrossFilled24._isSVG = !0
