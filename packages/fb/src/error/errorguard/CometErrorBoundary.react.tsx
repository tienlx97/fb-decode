import React, { forwardRef, useContext } from 'react'
import ErrorBoundaryReact, { ErrorBoundaryProps } from './ErrorBoundary.react'
import ErrorMetadata from './ErrorMetadata'
import { ErrorProps } from './types'
import { Context } from '@fb/context/hero-interaction-context'

const cometErrorBoundary = (props: ErrorBoundaryProps, ref: any) => {
  const context = useContext(Context)
  const { pageletStack } = context
  props = Object.assign({}, props)
  props.context == null && (props.context = {} as ErrorProps)
  const metadata =
    (props.context == null ? undefined : props.context.metadata) ||
    new ErrorMetadata()
  if (pageletStack != null) {
    metadata.addEntries([
      'COMET_INFRA',
      'INTERACTION_PAGELET_STACK',
      pageletStack.join(','),
    ])
  }
  props.context.metadata = metadata

  // const { children, ...rest } = props;
  return (
    <ErrorBoundaryReact
      {...Object.assign({}, props, {
        fallback: props.fallback,
        ref,
      })}
    />
  )
}

cometErrorBoundary.displayName = `${cometErrorBoundary.name} [from CometErrorBoundary.react]`

const CometErrorBoundaryReact = forwardRef(cometErrorBoundary)

export { CometErrorBoundaryReact }
export default CometErrorBoundaryReact
