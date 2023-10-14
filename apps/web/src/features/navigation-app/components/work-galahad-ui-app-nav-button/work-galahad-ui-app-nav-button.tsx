'use-client'

import React, { forwardRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { useStyles } from './styles'
import { mergeClasses } from '@fluentui/react-components'
import { CometPlaceholder, CometPressable } from '@fb/components'
import { WorkGalahadUIBaseAppTabBadge } from '../work-galahad-app-tab-key-updates-badge-renderer'
import ErrorBoundaryReact from '@fb/error/errorguard/ErrorBoundary.react'

const CometTooltip = dynamic(() =>
  import('@metamon/tooltip').then(r => r.CometTooltip),
)

// import { CometTooltip } from '@metamon/tooltip'

import dynamic from 'next/dynamic'

type WorkGalahadUIAppNavButtonProps = {
  href: string
  elementId: string
  label: string
  selected: boolean
  preventLocalNavigation: boolean
  addOn?: any
  badgeRenderer?: React.ReactNode
  largeAddOn?: React.ReactNode
  useGreyBadging?: boolean
  onHoverIn?: (...param: any) => any
  onHoverOut?: (...param: any) => any
  onPressIn?: (...param: any) => any
  onPress?: (...param: any) => any
  tooltipHidden?: boolean
}

const WorkGalahadUIAppNavButton = forwardRef<
  HTMLElement,
  WorkGalahadUIAppNavButtonProps
>(
  (
    {
      addOn,
      elementId,
      href,
      label,
      preventLocalNavigation,
      selected,
      onHoverIn,
      onHoverOut,
      onPress,
      onPressIn,
      largeAddOn,
      badgeRenderer,
      useGreyBadging = false,
      tooltipHidden = false,
    },
    ref,
  ) => {
    const classes = useStyles()

    const children = (
      <CometPressable
        ref={ref}
        id={elementId}
        onPress={onPress}
        linkProps={{
          url: href,
          preventLocalNavigation,
        }}
        onPressIn={onPressIn}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        className={(param: any) => {
          const { hovered } = param

          return mergeClasses(
            classes.link,
            classes.linkLight,
            hovered && classes.linkHoveredLight,
            selected && classes.linkSelectedNoLabel,
          )
        }}
        // eslint-disable-next-line react/no-children-prop
        children={(param: any) => {
          const { hovered, overlay } = param

          return (
            <>
              <div className={classes.root}>
                <div
                  className={mergeClasses(
                    classes.addOn,
                    !!largeAddOn && classes.largeAddOn,
                  )}
                >
                  {addOn}
                  {badgeRenderer ? (
                    <ErrorBoundaryReact fallback={() => null}>
                      <CometPlaceholder
                        fallback={null}
                        // eslint-disable-next-line react/no-children-prop
                        children={jsx(badgeRenderer, {
                          hovered,
                          selected,
                          useGreyBadging,
                        })}
                      />
                    </ErrorBoundaryReact>
                  ) : (
                    <WorkGalahadUIBaseAppTabBadge
                      count={0}
                      hovered={hovered}
                      selected={selected}
                      useGreyBadging={useGreyBadging}
                    />
                  )}
                </div>
              </div>
              {overlay}
            </>
          )
        }}
      />
    )

    return (
      <span className={classes.wfull}>
        {/* {children} */}
        {tooltipHidden ? (
          children
        ) : (
          // @ts-ignore
          <CometTooltip position="end" tooltip={label} delayMs={0}>
            {children}
          </CometTooltip>
        )}
      </span>
    )
  },
)

export default WorkGalahadUIAppNavButton
