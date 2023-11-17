import { makeStyles, mergeClasses } from '@griffel/react'
import { useVisibilityObserver } from '@negiganaito/hooks'
import { BaseLoadingStateElement } from '@negiganaito/popover'
import { useCallback, useState } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

const l = 200
const useStyles = makeStyles({
  paused: {
    animationPlayState: 'paused',
  },
  root: {
    animationDirection: 'var(--glimmer-animation-direction)',
    animationDuration: 'var(--glimmer-animation-duration)',
    animationIterationCount: 'infinite',
    animationName: {
      '0%': {
        opacity: 'var(--glimmer-opacity-min)',
      },

      '100%': {
        opacity: 'var(--glimmer-opacity-max)',
      },
    },
    animationTimingFunction: 'steps(10,end)',
    opacity: 'var(--glimmer-opacity-min)',
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
