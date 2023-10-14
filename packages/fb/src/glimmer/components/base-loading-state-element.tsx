import { mergeRefs } from '@fb/hooks/use-merge-refs'
import React, {
  CSSProperties,
  ReactNode,
  createContext,
  forwardRef,
  useContext,
  useMemo,
} from 'react'
import { getLoadingStateAriaProps } from './get-loading-state-aria-props'
import {
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components'

type BaseLoadingStateElementProps = {
  children?: ReactNode
  disableLoadingStateTracker?: boolean
  isFocusTarget?: boolean
  progress?: any
  style?: CSSProperties
  className?: string
}

const l = createContext(false)

const useStyles = makeStyles({
  hideOutline: {
    ...shorthands.outline('none'),
  },
})

const BaseLoadingStateElement = forwardRef<
  HTMLDivElement,
  BaseLoadingStateElementProps
>(
  (
    {
      disableLoadingStateTracker = false,
      className,
      style,
      children,
      progress,
      isFocusTarget,
    },
    ref,
  ) => {
    const classes = useStyles()

    const a = useContext(l)

    const o = useMemo(() => {
      return disableLoadingStateTracker ? ref : mergeRefs(ref)
    }, [disableLoadingStateTracker, ref])

    if (a) {
      return (
        <div
          className={className}
          data-testid={undefined}
          ref={ref}
          style={style}
        >
          {children}
        </div>
      )
    }

    const ariaProps = getLoadingStateAriaProps(progress, {
      max: 100,
      min: 0,
    })

    return (
      <l.Provider value={true}>
        <div
          {...ariaProps}
          className={mergeClasses(classes.hideOutline, className)}
          data-focus-target={isFocusTarget}
          data-testid={undefined}
          ref={o}
          style={style}
        >
          {children}
        </div>
      </l.Provider>
    )
  },
)

export default BaseLoadingStateElement
