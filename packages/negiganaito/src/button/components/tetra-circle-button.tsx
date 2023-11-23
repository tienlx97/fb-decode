import { forwardRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import {
  CometCircleButton,
  CometCircleButtonProps,
} from './comet-circle-button'

type TetraCircleButtonProps = CometCircleButtonProps

export const TetraCircleButton = forwardRef<any, TetraCircleButtonProps>(
  (props, ref) => {
    return jsx(
      CometCircleButton,
      Object.assign({}, props, {
        ref,
      }),
    )
  },
)
