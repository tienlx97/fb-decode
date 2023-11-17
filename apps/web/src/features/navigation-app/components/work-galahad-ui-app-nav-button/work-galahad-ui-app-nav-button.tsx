'use client'

import React, { forwardRef, memo } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { useStyles } from './styles'
import { mergeClasses } from '@griffel/react'
import { CometPlaceholder, CometPressable } from '@fb/components'
import { WorkGalahadUIBaseAppTabBadge } from '../work-galahad-app-tab-key-updates-badge-renderer'
import ErrorBoundaryReact from '@fb/error/errorguard/ErrorBoundary.react'

const CometTooltip = dynamic(() =>
  import('@negiganaito/tooltip').then(r => r.CometTooltip),
)

// import { CometTooltip } from '@negiganaito/tooltip'

import dynamic from 'next/dynamic'
import { WorkGalahadNavFocusableItem } from '@/components/channel-gemini-nav-focusable-group'

type WorkGalahadUIAppNavButtonProps = {
  label?: any
  ariaLabel?: any
  selected: boolean
  useGreyBadging?: boolean
  badgeCount?: number
  badgeRenderer?: React.ReactNode
  href?: string
  onPress?: (...param: any) => any
  elementId: string
  largeAddOn?: React.ReactNode
  preventLocalNavigation: boolean
  addOn?: any
  onPressIn?: (...param: any) => any
  onHoverIn?: (...param: any) => any
  onHoverOut?: (...param: any) => any
  target?: any
  tooltipHidden?: boolean
}

const WorkGalahadUIAppNavButton = memo(
  forwardRef<HTMLElement, WorkGalahadUIAppNavButtonProps>(
    (
      {
        label,
        ariaLabel,
        selected = false,
        useGreyBadging = false,
        badgeCount = 0,
        badgeRenderer,
        href,
        onPress,
        elementId,
        largeAddOn = false,
        preventLocalNavigation = true,
        addOn,
        onPressIn,
        onHoverIn,
        onHoverOut,
        target,
        tooltipHidden = false,
      },
      ref,
    ) => {
      const classes = useStyles()

      const roleProps = selected
        ? {
            role: 'link',
            'aria-current': 'page',
          }
        : {
            role: 'link',
          }

      const children = (
        <>
          <div className={classes.wfull}>
            <CometPressable
              {...roleProps}
              ref={ref}
              id={elementId}
              aria-label={ariaLabel ?? label}
              onPress={onPress}
              linkProps={
                href
                  ? {
                      url: href,
                      preventLocalNavigation,
                      target,
                    }
                  : undefined
              }
              className={({ hovered }: any) => {
                return mergeClasses(
                  classes.link,
                  classes.linkLight,
                  hovered && classes.linkHoveredLight,
                  selected && classes.linkSelectedNoLabel,
                )
              }}
              onPressIn={onPressIn}
              onHoverIn={onHoverIn}
              onHoverOut={onHoverOut}
              // eslint-disable-next-line react/no-children-prop
              children={({ hovered, overlay }: any) => {
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
                            count={badgeCount}
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
          </div>
        </>
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
  ),
)

export default WorkGalahadUIAppNavButton
