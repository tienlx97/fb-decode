import { makeStyles, mergeClasses } from '@griffel/react'
import { HiddenSubtreeContext } from '@negiganaito/context'
import {
  FocusRegion,
  headerFirstTabbableSecondScopeQuery,
  tabbableScopeQuery,
} from '@negiganaito/focus'
import { useStable } from '@negiganaito/hooks'
import { BaseContextualLayerAnchorRoot } from '@negiganaito/popover'
import React, { useContext } from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import { VoyageUserJourneyUILayerProvider } from './voyage-user-journey-ui-layer-provider'
import { BaseHeadingContext } from '@negiganaito/text'
import {
  CometHeroInteractionWithDiv,
  HeroInteractionContextPassthrough,
} from '@negiganaito/common'
import { BaseThemeProvider } from '@negiganaito/styles'
import { BasePortal } from '@negiganaito/portal'
import { BaseDocumentScrollView } from './base-document-scroll-view'
import { CometLayerKeyCommandWrapper } from '@negiganaito/keyboards/components/comet-layer-key-command-wrapper'

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
  },
  contentDvh: {
    '@supports (min-height: 100dvh)': {
      minHeight: '100dvh',
    },
  },
  contentDvhWhenNarrow: {
    '@media (max-width: 679px)': {
      // minHeight: '100vh',
      minHeight: '100dvh',
    },
  },
  hidden: {
    visibility: 'hidden',
  },
  mask: {
    bottom: 0,
    right: 0,
    position: 'fixed',
    left: 0,
    top: 0,
  },
  maskOverlay: {
    backgroundColor: 'var(--overlay-alpha-80)',
  },
  root: {
    position: 'relative',
  },
  rootStatic: {
    position: 'static',
  },
})

const useBehaviour = makeStyles({
  'above-everything': {
    zIndex: 1,
  },
  'above-nav': {
    zIndex: 3,
  },
  normal: {
    zIndex: 'unset',
  },
})

type BaseCometModalProps = {
  blockKeyCommands?: boolean
  children?: any
  contextKey?: any
  hidden?: boolean
  interactionDesc?: any
  interactionUUID?: any
  isOverlayTransparent?: boolean
  noPortal?: boolean
  shouldUseDvhMinHeight?: boolean
  stackingBehavior?: any
}

export function BaseCometModal({
  blockKeyCommands = false,
  children,
  contextKey,
  hidden = false,
  interactionDesc,
  interactionUUID,
  isOverlayTransparent = false,
  noPortal = false,
  shouldUseDvhMinHeight = false,
  stackingBehavior = 'auto',
}: BaseCometModalProps) {
  const classes = useStyles()
  const behavourClasses = useBehaviour()

  const { hidden: hiddenSubtree } = useContext(HiddenSubtreeContext)

  const interactionUUIDStable = useStable(function () {
    return interactionUUID
  })

  // u = c("useCometVisualChangeTracker")();

  const modalOverlay = jsx(VoyageUserJourneyUILayerProvider, {
    children: jsxs(React.Fragment, {
      children: [
        jsx('div', {
          className: mergeClasses(
            classes.mask,
            !isOverlayTransparent && classes.maskOverlay,
          ),
        }),
        jsx(BaseContextualLayerAnchorRoot, {
          children: jsx(FocusRegion, {
            autoFocusQuery: headerFirstTabbableSecondScopeQuery,
            autoRestoreFocus: true,
            containFocusQuery: tabbableScopeQuery,
            recoverFocusQuery: headerFirstTabbableSecondScopeQuery,
            children: blockKeyCommands
              ? children
              : jsx(CometLayerKeyCommandWrapper, {
                  debugName: 'modal layer',
                  children,
                }),
          }),
        }),
      ],
    }),
    name: 'modal',
  })

  const stackingBehaviorMode = hiddenSubtree ? 'normal' : stackingBehavior

  const modalClasses = mergeClasses(
    stackingBehaviorMode === 'auto' ? classes.rootStatic : classes.root,
    hidden && classes.hidden,
    // @ts-ignore
    stackingBehaviorMode !== 'auto' && behavourClasses[stackingBehaviorMode],
  )

  const modalContent = jsx(BaseDocumentScrollView, {
    contextKey,
    hiddenWhenDetached: hidden,
    children: jsx(BaseHeadingContext.Provider, {
      value: 1,
      children: interactionUUIDStable
        ? jsx(HeroInteractionContextPassthrough, {
            clear: !0,
            children: jsx(CometHeroInteractionWithDiv, {
              interactionDesc,
              interactionUUID,
              // ref: u,
              className: mergeClasses(
                classes.content,
                shouldUseDvhMinHeight && classes.contentDvh,
                classes.contentDvhWhenNarrow,
              ),
              children: modalOverlay,
            }),
          })
        : jsx('div', {
            className: mergeClasses(
              classes.content,
              shouldUseDvhMinHeight && classes.contentDvh,
            ),
            // ref: u,
            children: modalOverlay,
          }),
    }),
  })

  return noPortal
    ? jsx(BaseThemeProvider, {
        children: (themeClass: any, themeVariable: any) => {
          return jsx('div', {
            className: mergeClasses(themeClass.theme, modalClasses),
            style: themeVariable,
            children: modalContent,
          })
        },
      })
    : jsx(BasePortal, {
        hidden: hiddenSubtree,
        className: modalClasses,
        children: modalContent,
      })
}
