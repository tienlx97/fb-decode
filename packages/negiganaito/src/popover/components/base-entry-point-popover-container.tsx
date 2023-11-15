import React, { useLayoutEffect, useMemo } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type BaseEntryPointPopoverContainerProps = any

export function BaseEntryPointPopoverContainer({
  entryPointParams,
  entryPointReference,
  load,
  otherProps,
  ...rest
}: BaseEntryPointPopoverContainerProps) {
  const a = useMemo(() => {
    return Object.assign({}, otherProps, rest)
  }, [otherProps, rest])

  useLayoutEffect(
    function () {
      !entryPointReference && load()
    },
    [entryPointReference, load],
  )

  return !entryPointReference ? null : jsx(entryPointReference, a)
}
