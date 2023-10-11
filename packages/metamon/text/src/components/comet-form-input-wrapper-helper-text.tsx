import React from 'react'
import { TetraTextPairing } from './tetra-text-pairing'

type CometFormInputWrapperHelperTextProps = {
  validationState: string
  value: any
}

export default function CometFormInputWrapperHelperText({
  validationState,
  value,
}: CometFormInputWrapperHelperTextProps) {
  return (
    <TetraTextPairing
      level={4}
      meta={value}
      metaColor={validationState === 'ERROR' ? 'negative' : 'secondary'}
    />
  )
}
