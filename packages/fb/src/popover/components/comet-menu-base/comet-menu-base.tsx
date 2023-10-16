'use-client'

import React, { ReactNode } from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import CometSeparatorMenuItem from '../comet-separator-menu-item'
import { CometErrorBoundaryReact } from '@fb/error/errorguard'
import { BaseScrollableArea } from '../base-scrollable-area'
import CometMenuItemBaseRoleContext from '@fb/context/comet-menu-item-base-role-context'
import { CometListCellStrict } from '../comet-list-cell-strict'
import { TetraTextPairing } from '@fb/tetra-text'
import { FocusRegion } from '@fb/focus/components/focus-region'
import { tabbableScopeQuery } from '@fb/focus/utils/focus-scope-queries'
import { FocusGroup } from '@fb/focus/components/comet-menu-focus-group'
import { handleFirstLetterNavigation } from '@fb/focus/components/comet-focus-group-first-letter-navigation'
import { useStyles, usedummyStyles } from './styles'
import { fbicon } from '@fb/tetra-icon'
import { mergeClasses } from '@griffel/react'

type CometMenuBaseProps = {
  children?: any
  footer?: any
  header?: any
  maxHeight?: any
  role?: 'menu' | 'listbox'
  size?: 'full' | 'normal' | 'small'
}

const MAX_HEIGHT = 145

const roleMap = {
  listbox: 'option',
  menu: 'menuitem',
}

function CometMenuBase({
  children,
  footer,
  header,
  maxHeight,
  role = 'menu',
  size = 'normal',
}: CometMenuBaseProps) {
  let p = 0

  const classes = useStyles()
  const dummyClasses = usedummyStyles()

  const _children = React.Children.toArray(children).map((child: any) => {
    if (!child) {
      return null
    }

    let b = p++

    return child.type === CometSeparatorMenuItem
      ? child
      : jsx(
          CometErrorBoundaryReact,
          {
            children: child,
          },
          b,
        )
  })

  const cometMenuItemBaseRoleValue = roleMap[role]

  return React.Children.count(children) > 0
    ? jsx(BaseScrollableArea, {
        horizontal: false,
        style: maxHeight
          ? {
              maxHeight: Math.max(maxHeight, MAX_HEIGHT),
            }
          : undefined,
        vertical: true,
        className: mergeClasses(
          classes.root,
          size === 'full' && classes.sizeFull,
          size === 'normal' && classes.sizeNormal,
          size === 'small' && classes.sizeSmall,
        ),
        children: jsxs(CometMenuItemBaseRoleContext.Provider, {
          value: cometMenuItemBaseRoleValue,
          children: [
            header
              ? jsxs(React.Fragment, {
                  children: [
                    header.onPressBack
                      ? jsx(CometListCellStrict, {
                          addOnStart: {
                            'aria-label': `h._('__JHASH__v6nfNn2Wv-y__JHASH__',)`,
                            icon: fbicon(
                              {
                                sprited: 2,
                                spi: '/assets/fb/yTUMQJovBsj.png',
                                _spi: '/assets/fb/yTUMQJovBsj.png',
                                w: 24,
                                h: 24,
                                p: '-33px -26px',
                                sz: 'auto',
                              },
                              24,
                            ),
                            // `d('fbicon')._(i('512665'), 24)`,
                            onPress: header.onPressBack,
                            type: 'icon',
                          },
                          addOnStartVerticalAlign: 'center',
                          emphasized: !1,
                          headline: header.title,
                          level: 3,
                          meta: header.meta,
                          paddingHorizontal: 8,
                        })
                      : jsx('div', {
                          className: classes.listItem,
                          children: jsx(TetraTextPairing, {
                            body: header.body,
                            headline: header.title,
                            level: 3,
                            meta: header.meta,
                            reduceEmphasis: !0,
                          }),
                        }),
                    jsx(CometSeparatorMenuItem, {}),
                  ],
                })
              : null,
            jsx(FocusRegion, {
              autoFocusQuery: (header == null ? void 0 : header.onPressBack)
                ? tabbableScopeQuery
                : null,
              children: jsx(FocusGroup, {
                onNavigate: handleFirstLetterNavigation,
                orientation: 'vertical',
                preventScrollOnFocus: !1,
                tabScopeQuery: tabbableScopeQuery,
                wrap: !0,
                children: _children,
              }),
            }),
            footer
              ? jsxs(React.Fragment, {
                  children: [
                    jsx(CometSeparatorMenuItem, {}),
                    jsx('div', {
                      className: dummyClasses.dummy1,
                      // 'x1lcm9me x1yr5g0i xrt01vj x10y3i5r x78zum5 x1q0g3np xdj266r x1emribx xat24cr x1i64zmx xz9dl7a x1sxyh0 xsag5q8 xurb0ha',
                      children: jsx(TetraTextPairing, {
                        level: 3,
                        meta: footer.text,
                      }),
                    }),
                  ],
                })
              : null,
          ],
        }),
      })
    : null
}

export default CometMenuBase
