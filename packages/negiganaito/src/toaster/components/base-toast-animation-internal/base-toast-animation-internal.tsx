import { mergeClasses } from '@griffel/react'
import {
  useFadeEffect,
  useMergeRefs,
  useVisibilityObserver,
} from '@negiganaito/hooks'
import { useToasterStateManager } from '@negiganaito/toaster/hooks'
import React, { useCallback, useEffect, useState } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { useStyles } from './styles'

type BaseToastAnimationInternalProps = {
  children?: any
  expired?: boolean
  id: string
  position?: any
  className?: string
}

const n = 100

export default function BaseToastAnimationInternal({
  children,
  expired = false,
  id,
  position,
  className,
}: BaseToastAnimationInternalProps) {
  const classes = useStyles()

  const [i, p] = useState(!1)

  const q = useToasterStateManager()
  const r = React.Children.only(children)
  const onBlur = useCallback(
    function () {
      q.resetTimer(id)
    },
    [id, q],
  )
  const onFocus = useCallback(
    function () {
      q.stopTimer(id)
    },
    [id, q],
  )
  const onVisible = useCallback(
    function () {
      q.shown(id)
    },
    [id, q],
  )
  const onHidden = useCallback(
      function () {
        q.hidden(id)
      },
      [id, q],
    ),
    u = useCallback(
      function (a: any) {
        r.props.onActionPress != null && r.props.onActionPress(a),
          a.defaultPrevented || q.expire(id)
      },
      [r.props, id, q],
    )
  const observerRef = useVisibilityObserver({
    onHidden: onHidden,
    onVisible: onVisible,
    options: {
      activityMonitorOverride: null,
    },
  })
  // isTransitioning, shouldBeVisible, fadeRef
  const [isTransitioning, shouldBeVisible, fadeRef] = useFadeEffect(!expired)

  const ref = useMergeRefs(fadeRef, observerRef)
  useEffect(
    function () {
      shouldBeVisible === !0 && p(!0)
    },
    [shouldBeVisible],
  )
  return isTransitioning
    ? jsx('li', {
        className: mergeClasses(
          classes.root,
          shouldBeVisible && classes.mount,
          className,
        ),
        onBlur: onBlur,
        onFocus: onFocus,
        onMouseEnter: onFocus,
        onMouseLeave: onBlur,
        ref,
        style: {
          bottom: n * position,
        },
        children:
          i &&
          React.cloneElement(r, {
            onActionPress: u,
          }),
      })
    : null
}
