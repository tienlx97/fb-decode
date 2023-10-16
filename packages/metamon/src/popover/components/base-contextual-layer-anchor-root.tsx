'use-client'

import React, { useRef } from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import { BaseContextualLayerAnchorRootContext } from '@negiganaito/context'
/* eslint-disable camelcase */
import { useStable, useUnsafeRef_DEPRECATED } from '@negiganaito/hooks'
import { BaseDOMContainer } from '@negiganaito/portal'
import executionEnvironment from '@negiganaito/utils/common/execution-environment'

type BaseContextualLayerAnchorRootProps = {
  children?: any
}

function BaseContextualLayerAnchorRoot({
  children,
}: BaseContextualLayerAnchorRootProps) {
  const el = useStable(() => {
    return executionEnvironment.canUseDOM ? document.createElement('div') : null
  })

  const baseContextualLayerAnchorRootValue = useUnsafeRef_DEPRECATED(el)

  // const baseContextualLayerAnchorRootValue = useRef(el)

  return jsxs(React.Fragment, {
    children: [
      jsx(BaseContextualLayerAnchorRootContext.Provider, {
        value: baseContextualLayerAnchorRootValue,
        children,
      }),
      jsx(BaseDOMContainer, {
        node: el,
      }),
    ],
  })

  // return (
  //   <React.Fragment>
  //     <BaseContextualLayerAnchorRootContext.Provider
  //       value={baseContextualLayerAnchorRootValue}
  //     >
  //       {children}
  //     </BaseContextualLayerAnchorRootContext.Provider>
  //     <BaseDOMContainer node={el} />
  //   </React.Fragment>
  // )
}

export default BaseContextualLayerAnchorRoot
