import React from 'react'
import { useCometPlaceholderImpl } from './use-comet-placeholder-impl'

export default function CometBackupPlaceholder(props: any) {
  return useCometPlaceholderImpl(
    Object.assign({}, props, {
      // eslint-disable-next-line camelcase
      unstable_avoidThisFallback: !0,
    }),
  )
}
