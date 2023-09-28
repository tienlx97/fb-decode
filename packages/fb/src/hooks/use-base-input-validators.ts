import { useMemo } from 'react'
import useIsPristineValue from './use-is-pristine-value'
import validateBaseInput from '@fb/utils/validate-base-input'

export default function useBaseInputValidators(props: any) {
  const { isInitialValuePristine = true, validator, value } = props
  const isPristine = useIsPristineValue(value, isInitialValuePristine)

  return useMemo(
    () => validateBaseInput(isPristine, value, validator),
    [isPristine, validator, value],
  )
}
