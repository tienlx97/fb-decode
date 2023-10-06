import React from 'react'
import { CometErrorBoundaryReact } from './CometErrorBoundary.react'

function i(a: any): any {
  throw new Error(a)
}

const recoverableViolationWithComponentStackReact = (props: any) => {
  const { errorMessage, fallback, projectName } = props

  return (
    <CometErrorBoundaryReact
      context={{ project: projectName, type: 'error' }}
      fallback={() => (fallback != null ? fallback : null)}
      // eslint-disable-next-line react/no-children-prop
      children={i(errorMessage)}
    />
  )
}

recoverableViolationWithComponentStackReact.displayName = `${recoverableViolationWithComponentStackReact.name} [RecoverableViolationWithComponentStack.react]`
export default recoverableViolationWithComponentStackReact
export { recoverableViolationWithComponentStackReact }
