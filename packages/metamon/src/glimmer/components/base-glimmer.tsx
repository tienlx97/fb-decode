import { makeStyles, mergeClasses } from '@fluentui/react-components'
import { useVisibilityObserver } from '@metamon/hooks'
import { BaseLoadingStateElement } from '@metamon/popover'
import { useCallback, useState } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

const l = 200
const useStyles = makeStyles({
  paused: {
    animationPlayState: 'xorstpt',
  },
  root: {
    animationDirection: 'xpz12be',
    animationDuration: 'x1q3qbx4',
    animationIterationCount: 'xa4qsjk',
    animationName: 'xeuoslp',
    animationTimingFunction: 'x193epu2',
    opacity: 'xvpkmg4',
  },
})

export type BaseGlimmerProps = {
  children?: any
  index?: any
  className?: any
}

export function BaseGlimmer({ children, index, className }: BaseGlimmerProps) {
  const classes = useStyles()

  const [f, g] = useState(!0)

  const onHidden = useCallback(function (e: any) {
    const { hiddenReason } = e
    hiddenReason !== 'COMPONENT_UNMOUNTED' && g(!0)
  }, [])

  const onVisible = useCallback(function () {
    g(!1)
  }, [])

  const ref = useVisibilityObserver({
    onHidden: onHidden,
    onVisible: onVisible,
  })

  return jsx(BaseLoadingStateElement, {
    ref,
    style: {
      animationDelay: (index % 10) * l + 'ms',
    },
    className: mergeClasses(classes.root, f && classes.paused, className),
    children,
  })
}
