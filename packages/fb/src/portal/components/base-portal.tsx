import React, { ReactNode, useContext } from 'react'
import { createPortal } from 'react-dom'
import BasePortalTargetContext from '../context/base-portal-target-context'
import useStable from '@fb/hooks/useStable'
import executionEnvironment from '@fb/utils/execution-environment'
import suspendOrThrowIfUsedInSSR from '@fb/utils/suspend-or-throw-if-used-in-ssr'
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
