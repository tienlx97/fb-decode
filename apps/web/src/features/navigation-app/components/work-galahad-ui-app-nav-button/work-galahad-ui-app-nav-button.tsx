import React, { forwardRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { useStyles } from './styles'
import { mergeClasses } from '@fluentui/react-components'
import { CometPlaceholder, CometPressable } from '@fb/components'
import { WorkGalahadUIBaseAppTabBadge } from '../work-galahad-app-tab-key-updates-badge-renderer'

type WorkGalahadUIAppNavButtonProps = {
  href: string
  elementId: string
  label: string
  selected: boolean
  preventLocalNavigation: boolean
  addOn?: React.ReactNode
  badgeRenderer?: React.ReactNode
  largeAddOn?: React.ReactNode
  useGreyBadging?: boolean
  onHoverIn?: (...param: any) => any
  onHoverOut?: (...param: any) => any
  onPressIn?: (...param: any) => any
  onPress?: (...param: any) => any
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
                    <CometPlaceholder
                      fallback={null}
                      // eslint-disable-next-line react/no-children-prop
                      children={jsx(badgeRenderer, {
                        hovered,
                        selected,
                        useGreyBadging,
                      })}
                    />
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

    return <span className={classes.wfull}>{children}</span>
  },
)

export default WorkGalahadUIAppNavButton
