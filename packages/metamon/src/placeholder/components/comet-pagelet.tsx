import React, { forwardRef } from 'react'

// @ts-ignore
import { jsxs } from 'react/jsx-runtime'

const Placeholder = forwardRef(function (props: any, ref) {
  const { children } = props

  return jsxs(React.Fragment, {
    children: [
      ' ',
      children(ref, function () {
        return null
      }),
      ' ',
    ],
  })
})

export const CometPagelet = {
  Placeholder,
}
