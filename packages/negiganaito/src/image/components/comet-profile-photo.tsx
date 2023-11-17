/* eslint-disable camelcase */
/*

__d("CometProfilePhoto.react", 
  ["BaseSvgImage.react", //
  "CometErrorBoundary.react", //
  "CometImage.react", //
  "CometLoadingAnimation.react", //
  "CometPlaceholder.react", 
  "CometPressable.react", "CometPressableChildrenWithOverlay.react", 
  "CometPressableOverlay.react", 
  "CometProfilePhotoAvailabilityBadge.react", "CometProfilePhotoLastActiveTimeBadge.react", "CometProfilePhotoNotificationBadge.react", "CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react", "CometSSRSuspendOnServer.react", "CometTrackingNodeProvider.react", "CometVisualCompletionAttributes", "LazyCometProfileVideoSection.react", "profilePhotoUtils", "react", "stylex", "useSetAttributeRef"], (function(a, b, c, d, e, f, g) {

    __d("BaseSvgImage.react", ["react", "useFeedImageErrorEventLoggerCbs"], (function(a, b, c, d, e, f, g) {


*/

import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import { CometTrackingNodeProvider } from '@negiganaito/dialog'
import {
  CometPressable,
  CometPressableChildrenWithOverlay,
  CometPressableOverlay,
} from '@negiganaito/pressable'
import { forwardRef, useId } from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import { BaseSvgImage } from './base-svg-image'
import CometImage from './comet-image'
import { CometErrorBoundary } from '@negiganaito/error'
import { CometPlaceholder } from '@negiganaito/placeholder'
import { CometLoadingAnimation } from './comet-loading-animation'
import { profilePhotoUtils } from './profile-photo-utils'
import { useSetAttributeRef } from '../hooks/use-set-attribute-ref'
import { CometProfilePhotoNotificationBadge } from './comet-profile-photo-notification-badge'
import { CometSSRReplaceContentOnHydrationAndBreakEventReplaying } from './comet-ssr-replace-content-on-hydration-and-break-event-replaying'
import { CometSSRSuspendOnServer } from './comet-ssr-suspend-on-server'
import { LazyCometProfileVideoSection } from './lazy-comet-profile-video-section'
import { CometProfilePhotoAvailabilityBadge } from './comet-profile-photo-availability-badge'

type CometProfilePhotoProps = {
  addOn?: any
  addOnTopEnd?: any
  alt?: string
  children?: any
  cursorDisabled?: boolean
  isOverlapped?: boolean
  linkProps?: any
  onHoverIn?: any
  onHoverOut?: any
  onPress?: any
  onPressIn?: any
  overlayDisabled?: boolean
  preview?: any
  profileVideo?: any
  shape?: string
  shouldShowCloseFriendsBadge?: boolean
  size: number
  source?: any
  storyStatus?: any
  testid?: string
  testOnly_pressed?: string
  testOnly_previewDelay?: any
}

const useStyles = makeStyles({
  activityBadge: {
    alignItems: 'center',
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('0'),
    ...shorthands.borderRadius('50%'),
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'center',
    ...shorthands.margin('0'),
    minHeight: '0',
    minWidth: '0',
    overflowX: 'hidden',
    overflowY: 'hidden',
    ...shorthands.padding('0'),
    position: 'relative',
    zIndex: 'unset',
  },
  activityIcon10: {
    height: '22px',
    ...shorthands.padding('5px'),
    width: '22px',
  },
  activityIcon16: {
    height: '26px',
    ...shorthands.padding('5px'),
    width: '26px',
  },
  activityIcon8: {
    height: '14px',
    width: '14px',
  },
  badge: {
    ...shorthands.borderRadius('50%'),
    position: 'absolute',
    zIndex: 2,
  },
  badgeWithBorder: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderColor('var(--surface-background)'),
  },
  badgeWithLastActiveTime: {
    bottom: '0',
    display: 'flex',
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
  },
  badgeWithShadow: {
    boxShadow: '0 0 6px var(--shadow-1)',
  },
  insetSVG: {
    fill: 'none',
    stroke: 'var(--media-inner-border)',
    strokeWidth: '2',
  },
  photo: {
    verticalAlign: 'bottom',
  },
  photoCircle: {
    ...shorthands.borderRadius('50%'),
  },
  photoRoundedRect: {
    ...shorthands.borderRadius('8px'),
  },
  pressable: {
    color: 'var(--primary-text)',
    display: 'inline-block',
  },
  pressed: {
    transform: 'scale(.96)',
  },
  storyRingBlue: {
    stroke: 'var(--accent)',
  },
  storyRingGray: {
    stroke: 'var(--divider)',
  },
  storyRingGreen: {
    stroke: 'var(--positive)',
  },
  storyRingRed: {
    stroke: 'var(--negative)',
  },
  storyRingSize2: {
    strokeWidth: '2',
  },
  storyRingSize3: {
    strokeWidth: '3',
  },
  storyRingSize4: {
    strokeWidth: '4',
  },
  svgOverlay: {
    fill: 'var(--media-pressed)',
  },
  videoContainer: {
    WebkitMaskImage: '-webkit-radial-gradient(white,black)',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  videoContainerRectRounded: {
    ...shorthands.borderRadius('8px'),
  },
  videoContainerRounded: {
    ...shorthands.borderRadius('50%'),
  },
  wrapper: {
    display: 'inline-block',
    position: 'relative',
    verticalAlign: 'bottom',
    zIndex: 'unset',
  },

  dummy1: {
    ...shorthands.borderRadius('50%'),
    position: 'absolute',
    zIndex: 2,
  },

  dummy2: {
    display: 'inline-block',
    position: 'relative',
    verticalAlign: 'bottom',
    zIndex: 'unset',
  },
})

export const CometProfilePhoto = forwardRef<any, CometProfilePhotoProps>(
  (
    {
      addOn,
      addOnTopEnd,
      alt,
      children,
      cursorDisabled,
      isOverlapped = false,
      linkProps,
      onHoverIn,
      onHoverOut,
      onPress,
      onPressIn,
      overlayDisabled = false,
      preview,
      profileVideo,
      shape = 'circle',
      shouldShowCloseFriendsBadge = false,
      size,
      source,
      storyStatus = 'none',
      testid,
      testOnly_pressed,
      testOnly_previewDelay,
      ...rest
    },
    ref,
  ) => {
    const l = useStyles()

    const D = useId()
    const E = useSetAttributeRef('id', D)
    const F = 'url(#' + D + ')'
    const G = useSetAttributeRef('mask', F)

    const H = ({ pressed, overlay }: any, _ref?: any) => {
      const o =
        storyStatus !== 'none'
          ? (profilePhotoUtils.getStoryRingSize(size) as number)
          : 0
      const w = profilePhotoUtils.getBadgePosition(size / 2, !0)

      const [I, H] = profilePhotoUtils.getBadgeSizeAndStrokeWidth(
        size,
        !addOn ? void 0 : addOn.type,
      )

      let J = profileVideo
        ? {
            borderWidth: H,
          }
        : {}

      let K =
        (!addOn ? void 0 : addOn.type) === 'lastActiveTimeBadge' && size > 28

      const L = K ? {} : profilePhotoUtils.getBadgePosition(size / 2, !1)

      K = addOn
        ? jsx(
            'div',
            Object.assign(
              {
                className: mergeClasses(
                  l.badge,
                  K && l.badgeWithLastActiveTime,
                  size === 60 &&
                    addOn.type === 'activityBadge' &&
                    l.badgeWithShadow,
                  addOn.type === 'activityBadge' &&
                    (profileVideo || addOn.withBorder) &&
                    l.badgeWithBorder,
                ),
              },
              // c('CometVisualCompletionAttributes').IGNORE,
              {
                style: Object.assign({}, L, J),
                children: jsx(m, {
                  addOn,
                  pressed,
                  size,
                }),
              },
            ),
          )
        : null

      J = addOnTopEnd
        ? jsx('div', {
            className: l.dummy1,
            'data-testid': void 0,
            style: Object.assign({}, w),
            children: jsx(CometProfilePhotoNotificationBadge, {
              number: addOnTopEnd.number,
            }),
          })
        : null

      const M =
        typeof source.uri === 'string'
          ? jsx(BaseSvgImage, {
              src: source.uri,
              style: {
                height: size - o * 4,
                width: size - o * 4,
              },
              x: 2 * o,
              y: 2 * o,
            })
          : jsx(CometImage, {
              alt,
              height: size - 4 * o,
              src: source.uri,
              testid: void 0,
              width: size - 4 * o,
              className: mergeClasses(
                l.photo,
                shape === 'circle' && l.photoCircle,
                shape === 'roundedRect' && l.photoRoundedRect,
              ),
            })
      const II =
        typeof source.uri === 'string'
          ? jsxs(
              'svg',
              Object.assign(
                {
                  'aria-hidden': !alt ? !0 : void 0,
                  'aria-label': alt,
                  className: 'x3ajldb',
                },
                // c('CometVisualCompletionAttributes').IGNORE_DYNAMIC,
                {
                  role: alt ? 'img' : 'none',
                  style: {
                    height: size,
                    width: size,
                  },
                  children: [
                    jsxs('mask', {
                      id: D,
                      ref: E,
                      suppressHydrationWarning: !0,
                      children: [
                        shape === 'circle'
                          ? jsx('circle', {
                              cx: size / 2,
                              cy: size / 2,
                              fill: 'white',
                              r: size / 2,
                            })
                          : jsx('rect', {
                              cy: size / 2,
                              fill: 'white',
                              height: size,
                              rx: shape === 'square' ? 0 : 8,
                              ry: shape === 'square' ? 0 : 8,
                              width: size,
                              x: 0,
                              y: 0,
                            }),
                        jsx(
                          CometSSRReplaceContentOnHydrationAndBreakEventReplaying,
                          {
                            useSuspenseDirectlyForSVG: !0,
                            children:
                              K != null &&
                              (!addOn ? void 0 : addOn.type) !== 'trigger' &&
                              (!addOn ? void 0 : addOn.type) !==
                                'lastActiveTimeBadge' &&
                              (!addOn ? void 0 : addOn.backgroundColor) !==
                                'none' &&
                              jsx(
                                'circle',
                                Object.assign(
                                  {
                                    cx: L.left ?? size - (L.left ?? 0),
                                    // cx:
                                    //   (k = L.left) != null
                                    //     ? k
                                    //     : z - ((k = L.right) != null ? k : 0),
                                    cy: L.top ?? size - (L.bottom ?? 0),
                                    // cy:
                                    //   (k = L.top) != null
                                    //     ? k
                                    //     : z - ((k = L.bottom) != null ? k : 0),
                                  },
                                  // c('CometVisualCompletionAttributes').IGNORE,
                                  {
                                    fill: 'black',
                                    r: Math.max(
                                      (!addOn ? void 0 : addOn.type) ===
                                        'activityBadge'
                                        ? 8
                                        : 0,
                                      I / 2 + H,
                                    ),
                                  },
                                ),
                              ),
                          },
                        ),
                        J &&
                          addOnTopEnd &&
                          addOnTopEnd.type === 'notificationBadge' &&
                          jsx('rect', {
                            height: 22,
                            rx: 11,
                            ry: 11,
                            width:
                              addOnTopEnd.number <= 9
                                ? 22
                                : addOnTopEnd.number <= 99
                                  ? 33
                                  : 44,
                            x:
                              w.left != null
                                ? w.left -
                                  (addOnTopEnd.number <= 9
                                    ? 11
                                    : addOnTopEnd.number <= 99
                                      ? 22
                                      : 33)
                                : // : size - ((L = w.right) != null ? L : 0) - 11,
                                  size - (w.right ?? 0) - 11,
                            y:
                              w.top != null
                                ? w.top - 11
                                : // : size - ((k = w.bottom) != null ? k : 0) - 11,
                                  size - (w.bottom ?? 0) - 11,
                          }),
                        storyStatus === 'uploading' &&
                        (size === 36 || size === 60)
                          ? jsx('circle', {
                              cx: size / 2,
                              cy: size / 2,
                              fill: 'transparent',
                              r: size / 2 - 1 * o,
                              stroke: 'black',
                              strokeWidth: o * 2,
                            })
                          : storyStatus !== 'none' &&
                            o > 0 &&
                            jsx('circle', {
                              cx: size / 2,
                              cy: profileVideo / 2,
                              fill: 'transparent',
                              r: size / 2 - 1.5 * o,
                              stroke: 'black',
                              strokeWidth: o,
                            }),
                        isOverlapped &&
                          jsx('circle', {
                            cx: -size / 2 + 4,
                            cy: size / 2,
                            fill: 'black',
                            r: size / 2 + 2,
                          }),
                      ],
                    }),
                    jsxs('g', {
                      mask: F,
                      ref: G,
                      suppressHydrationWarning: !0,
                      children: [
                        profileVideo
                          ? jsx(CometErrorBoundary, {
                              fallback: function () {
                                return M
                              },
                              children: jsx(CometPlaceholder, {
                                fallback: M,
                                children: jsx(CometSSRSuspendOnServer, {
                                  children: jsx('foreignObject', {
                                    height: '100%',
                                    width: '100%',
                                    x: 2 * o,
                                    y: 2 * o,
                                    children: jsx('div', {
                                      className: mergeClasses(
                                        l.videoContainer,
                                        shape === 'roundedRect' &&
                                          l.videoContainerRectRounded,
                                        shape === 'circle' &&
                                          l.videoContainerRounded,
                                      ),
                                      style: {
                                        height: size - o * 4,
                                        width: size - o * 4,
                                      },
                                      children: jsx(
                                        LazyCometProfileVideoSection,
                                        Object.assign(
                                          {
                                            linkProps,
                                            onHoverIn,
                                            onHoverOut,
                                            onPress,
                                            onPressIn,
                                            profileVideo,
                                            size: size - o * 4,
                                            thumbnailUri: source.uri,
                                          },
                                          rest,
                                        ),
                                      ),
                                    }),
                                  }),
                                }),
                              }),
                            })
                          : M,
                        shape === 'circle'
                          ? jsx('circle', {
                              className: mergeClasses(
                                l.insetSVG,
                                pressed && l.svgOverlay,
                              ),
                              cx: size / 2,
                              cy: size / 2,
                              r: size / 2,
                            })
                          : jsx('rect', {
                              className: mergeClasses(
                                l.insetSVG,
                                pressed && l.svgOverlay,
                              ),
                              cy: size / 2,
                              fill: 'white',
                              height: size,
                              rx: shape === 'square' ? 0 : 8,
                              ry: shape === 'square' ? 0 : 8,
                              width: size,
                              x: 0,
                              y: 0,
                            }),
                        storyStatus === 'uploading' &&
                        (size === 36 || size === 60)
                          ? null
                          : storyStatus !== 'none' &&
                            o > 0 &&
                            jsx('circle', {
                              className: mergeClasses(
                                storyStatus === 'unseen' &&
                                  (shouldShowCloseFriendsBadge
                                    ? l.storyRingGreen
                                    : l.storyRingBlue),
                                storyStatus === 'seen' && l.storyRingGray,
                                storyStatus === 'live' && l.storyRingRed,
                                o === 4 && l.storyRingSize4,
                                o === 3 && l.storyRingSize3,
                                o === 2 && l.storyRingSize2,
                              ),
                              cx: size / 2,
                              cy: size / 2,
                              fill: 'transparent',
                              r: size / 2 - o / 2,
                              stroke: 'var(--accent)',
                              strokeWidth: o,
                            }),
                      ],
                    }),
                    storyStatus === 'uploading' &&
                      (size === 36 || size === 60) &&
                      jsx('g', {
                        style: {
                          transform:
                            'scale(' +
                            (size - Math.floor(size / 30)) / size +
                            ')',
                        },
                        children: jsx(CometLoadingAnimation, {
                          size,
                        }),
                      }),
                  ],
                },
              ),
            )
          : M

      return jsxs('div', {
        className: l.dummy2,
        ref: _ref,
        children: [
          II,
          children,
          overlay,
          jsx(CometSSRReplaceContentOnHydrationAndBreakEventReplaying, {
            children: K,
          }),
          J,
        ],
      })
    }

    return !onPress && !linkProps && shouldShowCloseFriendsBadge !== !0
      ? H(
          {
            pressed: false,
          },
          ref,
        )
      : jsx(CometTrackingNodeProvider, {
          trackingNode: 3,
          children: jsx(
            CometPressable,
            Object.assign({}, rest, {
              cursorDisabled,
              linkProps,
              onHoverIn,
              onHoverOut,
              onPress,
              onPressIn,
              overlayDisabled,
              overlayRadius:
                shape === 'circle' ? '50%' : shape === 'roundedRect' ? 8 : 0,
              ref,
              testOnly_pressed,
              testid: void 0,
              className: ({ pressed }: any) => {
                // a = a.pressed
                return mergeClasses(l.pressable, pressed && l.pressed)
              },
              children: ({ overlay, pressed }: any) => {
                // var b = a.overlay
                // a = a.pressed
                return H(
                  {
                    overlay,
                    pressed,
                  },
                  null,
                )
              },
            }),
          ),
        })
  },
)

type MProps = {
  addOn?: any
  pressed?: any
  size?: number
}

function m({ addOn, pressed, size }: MProps) {
  switch (addOn.type) {
    case 'availabilityBadge': {
      // eslint-disable-next-line no-case-declarations
      const stroke = profilePhotoUtils.getBadgeSizeAndStrokeWidth(
        size,
        !addOn ? void 0 : addOn.type,
      )
      return jsx(CometProfilePhotoAvailabilityBadge, {
        pressed,
        size: stroke[0],
      })
    }
    case 'lastActiveTimeBadge':
      // TODO
      return jsx('CometProfilePhotoLastActiveTimeBadge', {
        border: addOn.border,
        pressed,
        time: addOn.time,
      })
    case 'activityBadge':
      return jsx(ActivityBadgeComp, {
        backgroundColor: addOn.backgroundColor,
        icon: addOn.icon,
        overflow: addOn.overflow,
        pressed,
        size: addOn.size,
      })
    case 'trigger':
      return addOn.icon
    case 'multipleVoicesForAction':
      return addOn.badge
    default:
      return null
  }
}

type ActivityBadgeCompProps = {
  backgroundColor?: string
  icon?: any
  overflow?: any
  pressed?: any
  size?: number
}

function ActivityBadgeComp({
  backgroundColor = 'white',
  icon,
  overflow,
  pressed,
  size,
}: ActivityBadgeCompProps) {
  const l = useStyles()

  return jsx(CometPressableChildrenWithOverlay, {
    overlay: jsx(CometPressableOverlay, {
      offset: 0,
      pressed,
      radius: '50%',
    }),
    children: jsx('div', {
      className: mergeClasses(
        l.activityBadge,
        size === 8 && l.activityIcon8,
        size === 10 && l.activityIcon10,
        size === 16 && l.activityIcon16,
      ),
      style: {
        backgroundColor,
        overflow,
      },
      children: icon,
    }),
  })
}
