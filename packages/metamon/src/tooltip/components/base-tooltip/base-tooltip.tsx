import React, { ReactNode, useCallback, useContext, useId, useRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { BaseTooltipGroup } from '../base-tooltip-group'
import { useDelayedState } from '@negiganaito/hooks'
import { BaseTooltipTargetWrapper } from '../base-tooltip-target-wrapper'

type BaseTooltipProps = {
  delayTooltipMs?: number
  tooltipImpl?: any

  headline?: any
  tooltip?: any
  tooltipTheme?: string
  position?: 'end' | 'start' | 'above' | 'below'
  children?: ReactNode
}

const hideDelayMs = 50
const defaultDelayTooltipMs = 300

type BaseTooltipWithoutContextProps = {
  children?: ReactNode
  delayTooltipMs?: number
  disabled?: boolean
  forceInlineDisplay?: any
  tooltipImpl?: any
  onVisibilityChange?: any
}

function BaseTooltipWithoutContext({
  children,
  delayTooltipMs = defaultDelayTooltipMs,
  disabled = false,
  forceInlineDisplay,
  tooltipImpl,
  onVisibilityChange,
  ...rest
}: BaseTooltipWithoutContextProps) {
  const [isVisible, delayCb] = useDelayedState(false)

  const tooltipId = useId()

  const ref = useRef(null)

  const onShow = useCallback(() => {
    if (disabled) {
      return
    }
    delayCb(true, delayTooltipMs, onVisibilityChange)
  }, [delayTooltipMs, disabled, onVisibilityChange, delayCb])

  const onHide = useCallback(() => {
    delayCb(false, 0, onVisibilityChange)
  }, [onVisibilityChange, delayCb])

  return jsx(React.Fragment, {
    children: [
      jsx(BaseTooltipTargetWrapper, {
        forceInlineDisplay,
        onHide,
        onShow,
        ref: ref,
        tooltipIdentifier: isVisible ? tooltipId : undefined,
        children,
      }),
      jsx(
        tooltipImpl,
        Object.assign({}, rest, {
          contentKey: undefined,
          contextRef: ref,
          id: isVisible ? tooltipId : undefined,
          isVisible: isVisible,
        }),
      ),
    ],
  })
}

export default function BaseTooltip(props: BaseTooltipProps) {
  const baseTooltipGroupValue = useContext(BaseTooltipGroup.Context)

  if (baseTooltipGroupValue) {
    const _delayTooltipMs = props.delayTooltipMs ?? defaultDelayTooltipMs
    const { delayTooltipMs, tooltipImpl, ...rest } = props

    return jsx(
      BaseTooltipGroup.Child,
      Object.assign({}, rest, {
        hideDelayMs,
        showDelayMs: _delayTooltipMs,
      }),
    )
  }

  return jsx(BaseTooltipWithoutContext, Object.assign({}, props))
}
