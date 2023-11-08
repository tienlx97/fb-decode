import React, { SVGProps } from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

export function ArrowRightFilled24(props: SVGProps<SVGSVGElement>) {
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
          jsx('g', {
            fillRule: 'evenodd',
            transform: 'translate(-444 -156)',
            children: jsxs('g', {
              fillRule: 'nonzero',
              children: [
                jsx('path', {
                  d: 'M102.043 20.043a1 1 0 0 0 1.414 1.414l6.25-6.25a1 1 0 0 0 0-1.414l-6.25-6.25a1 1 0 0 0-1.414 1.414l5.543 5.543-5.543 5.543z',
                  transform: 'translate(355 153.5)',
                }),
                jsx('path', {
                  d: 'M93 15.5h15.375a1 1 0 1 0 0-2H93a1 1 0 0 0 0 2z',
                  transform: 'translate(355 153.5)',
                }),
              ],
            }),
          }),
        ],
      },
    ),
  )
}
ArrowRightFilled24._isSVG = !0
