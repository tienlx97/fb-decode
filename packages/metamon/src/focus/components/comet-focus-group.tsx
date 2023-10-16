import React, { useMemo } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { createFocusGroup } from './focus-group'
import { tabbableScopeQuery } from '../util'
import { CometCompositeFocusIndicator } from './comet-composite-focus-indicator'
import { CometFocusGroupContext } from '@negiganaito/context'

const [FocusContainer, FocusItem] = createFocusGroup(tabbableScopeQuery)

type CometFocusGroupProps = {
  children?: any
  hideArrowSignifiers?: any
  role?: any
  orientation?: string
}

export function CometFocusGroup({
  children,
  hideArrowSignifiers,
  role,
  ...rest
}: CometFocusGroupProps) {
  //
  const cometFocusGroupValue = useMemo(() => {
    return {
      FocusContainer: FocusContainer,
      FocusItem: FocusItem,
    }
  }, [])

  const compositeInfo = useMemo(() => {
    return {
      hideArrowSignifiers: hideArrowSignifiers === !0,
      horizontal: rest.orientation !== 'vertical',
      role,
      vertical: rest.orientation !== 'horizontal',
    }
  }, [hideArrowSignifiers, rest.orientation, role])

  return jsx(CometCompositeFocusIndicator, {
    compositeInfo,
    children: (clazz: any) => {
      return jsx(CometFocusGroupContext.Provider, {
        value: cometFocusGroupValue,
        children: jsx(
          FocusContainer,
          Object.assign({}, rest, {
            children: children(clazz),
          }),
        ),
      })
    },
  })
}
