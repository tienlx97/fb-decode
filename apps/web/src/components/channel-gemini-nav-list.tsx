import React, { ReactNode, useMemo } from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import { ChannelGeminiNavListContext } from '@/context/channel-gemini-nav-list-context'
import { makeStyles, mergeClasses } from '@griffel/react'
import {
  BaseHeadingContextWrapper,
  ChannelGeminiFocusableTable,
  List,
  useFocusState,
  useHover,
  WorkGalahadChannelFocusableScopeQuery,
} from '@negiganaito/react-components'

import { WorkCometOnVisible } from './work-comet-on-visible'

const useStyles = makeStyles({
  root: {
    marginBottom: '20px',
  },
})

type ChannelGeminiNavListProps = {
  alwaysShowHeader?: boolean
  'aria-label'?: string
  bottomAction?: any
  children?: ReactNode
  'data-testid'?: string
  header?: any
  isEmpty?: boolean
  isFocusTable?: boolean
  role?: string
  scrollLoad?: boolean
  trackingNodeType?: number
  wrapXToNextLine?: boolean
  wrapY?: boolean
  className?: string
}

export function ChannelGeminiNavList({
  alwaysShowHeader = false,
  'aria-label': al,
  bottomAction,
  children,
  'data-testid': dt,
  header,
  isEmpty = false,
  isFocusTable = true,
  role = 'grid',
  scrollLoad = false,
  trackingNodeType,
  wrapXToNextLine = false,
  wrapY = true,
  className,
}: ChannelGeminiNavListProps) {
  const classes = useStyles()

  const childrenArr = React.Children.toArray(children)

  const [isHovered, { onMouseEnter, onMouseLeave }] = useHover()

  const [isFocused, onFocus, onBlur] = useFocusState()

  const ariaLabel = createAriaLabel(
    al,
    header != null
      ? header.props == null
        ? void 0
        : header.props.title
      : null,
  )

  const channelGeminiNavListValue = useMemo(() => {
    return {
      hovered: isHovered,
      focused: isFocused,
    }
  }, [isFocused, isHovered])

  if (childrenArr.length === 0 && !(alwaysShowHeader || !header)) {
    return null
  }

  if (
    scrollLoad &&
    bottomAction != null &&
    childrenArr.length > 10 &&
    bottomAction.show
  ) {
    const r = childrenArr.length - 10
    childrenArr.splice(
      r,
      0,
      jsx(
        WorkCometOnVisible,
        {
          onVisible: bottomAction.onClick,
          children: (node: any) => {
            return jsx('div', {
              ref: node,
            })
          },
        },
        'onVisible' + r,
      ),
    )
  }

  const normalizeChildren =
    isEmpty || childrenArr.length === 0
      ? childrenArr
      : jsxs(
          List,
          Object.assign(
            {
              border: 'none',
              direction: 'vertical',
              role,
              spacing: 'none',
            },
            ariaLabel,
            {
              children: [
                childrenArr,
                bottomAction
                  ? jsx(
                      'ChannelGeminiNavListBottomAction',
                      Object.assign(
                        {
                          triggerOnVisible: scrollLoad,
                        },
                        bottomAction,
                      ),
                      'bottom' + childrenArr.length,
                    )
                  : null,
              ],
            },
          ),
        )

  return jsx(BaseHeadingContextWrapper, {
    children: jsx(ChannelGeminiNavListContext.Provider, {
      value: channelGeminiNavListValue,
      children: jsxs('div', {
        className: mergeClasses(classes.root, className),
        'data-testid': void 0,
        onBlur: onBlur,
        onFocus: onFocus,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        children: [
          header,
          isFocusTable && !(isEmpty || childrenArr.length === 0)
            ? jsx(ChannelGeminiFocusableTable, {
                allowModifiers: !0,
                tabScopeQuery: WorkGalahadChannelFocusableScopeQuery,
                wrapXToNextLine: wrapXToNextLine,
                wrapY: wrapY,
                children: normalizeChildren,
              })
            : normalizeChildren,
        ],
      }),
    }),
  })
}

function createAriaLabel(a?: any, b?: any) {
  return a == null && b == null
    ? {}
    : {
        // eslint-disable-next-line no-self-assign
        'aria-label': (a = a) != null ? a : b,
      }
}
