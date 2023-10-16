import createKeyCommandWidget from './create-key-command-widget'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

export function CometSearchKeyCommandWrapper(props: any) {
  const { children, ...rest } = props

  return jsx(
    createKeyCommandWidget().Wrapper,
    Object.assign({}, rest, {
      children,
    }),
  )
}
