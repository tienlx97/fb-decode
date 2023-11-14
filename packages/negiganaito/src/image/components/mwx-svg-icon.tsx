import React from 'react'
import { svgIcon } from '@negiganaito/utils/common/svg-icon'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

function j(a: any) {
  const b = (props: any) => {
    return jsx(
      a,
      Object.assign({}, props, {
        overflow: 'visible',
        viewBox: '6 6 24 24',
      }),
    )
  }
  b._isSVG = true

  return svgIcon(b)
}

export class MWXSvgIcon {
  component: any

  constructor(a: any, b: boolean) {
    this.component = b ? j(a.component) : a
  }
}

export function mwxSvgIcon(a: any, b: boolean) {
  return new MWXSvgIcon(a, b)
}
