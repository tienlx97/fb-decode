import React, { forwardRef, useContext } from 'react'
import ErrorBoundaryReact, { ErrorBoundaryProps } from './error-boundary'
import { ErrorMetadata } from './error-metadata'
import { ErrorProps } from './types'
import { HeroInteractionContext } from '@metamon/common'

const cometErrorBoundary = (props: ErrorBoundaryProps, ref: any) => {
  const context = useContext(HeroInteractionContext)
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

const CometErrorBoundary = forwardRef(cometErrorBoundary)

export default CometErrorBoundary
export { CometErrorBoundary }
