import React, { ReactNode, useContext } from 'react'
import { createPortal } from 'react-dom'

import { useStable } from '@negiganaito/hooks'

import executionEnvironment from '@negiganaito/utils/common/execution-environment'
import suspendOrThrowIfUsedInSSR from '@negiganaito/utils/common/suspend-or-throw-if-used-in-ssr'

import { BasePortalTargetContext } from '../context'
import BaseDomContainer from './base-dom-container'

type BasePortalProps = {
  children?: ReactNode
  hidden?: boolean
  target?: HTMLElement
  className?: string
}

export default function BasePortal({
  children,
  className,
  hidden = false,
  target,
}: BasePortalProps) {
  const basePortalTargetContext = useContext(BasePortalTargetContext)
  const domNode = target || basePortalTargetContext
  const providerValue = useStable(() => {
    executionEnvironment.canUseDOM ? document.createElement('div') : null
  }) as any
  suspendOrThrowIfUsedInSSR(
    'BasePortal: Portals are not currently supported by the server renderer.',
  )

  return domNode
    ? createPortal(
        <div hidden={hidden} className={className}>
          <BasePortalTargetContext.Provider value={providerValue}>
            {children}
          </BasePortalTargetContext.Provider>
          <BaseDomContainer node={providerValue} />
        </div>,
        domNode,
      )
    : undefined
}
