import React, { useState } from 'react'
import useStable from './useStable'

export default function useIsPristineValue(
  value: any,
  initialPristine: boolean,
) {
  const [isPristine, setIsPristine] = useState(initialPristine)

  const stableValue = useStable(() => value)

  if (isPristine && value !== stableValue) {
    setIsPristine(false)
  }

  return isPristine
}
