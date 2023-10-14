import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import { mergeClasses } from '@fluentui/react-components'
import { CometFocusGroup, tabbableScopeQuery } from '@metamon/focus'
import { mergeRefs } from '@metamon/hooks'
import { TriangleDownFilled20 } from '@metamon/icons'
import { CometComponentWithKeyCommands, cometKeys } from '@metamon/keyboards'
import { CometDeferredPopoverTrigger } from '@metamon/popover/components/comet-deferred-popover-trigger'
import { svgIcon } from '@metamon/utils/common/svg-icon'

import { CometTab } from '../comet-tab'
import { CometTabMenu } from '../comet-tab-menu'
import { useDummyStyles, useLocaleStyles, useStyles } from './styles'

type CometTabsProps = {
  heightXStyle?: any
  maxHeightXStyle?: any
  tabs: any[]
  maxTabs?: number
  menuSize?: any
  moreTabRef?: any
  moreTabStyles?: any
  moreTabXStyle?: any
  moreWrapperXStyle?: any
  tabsContainerStyle?: any
  truncateMenu?: boolean
  onMoreTabPress?: any
}

const _3806 = true

export default function CometTabs({
  heightXStyle,
  maxHeightXStyle,
  tabs,
  maxTabs = tabs.length,
  menuSize,
  moreTabRef,
  moreTabStyles,
  moreTabXStyle,
  moreWrapperXStyle,
  tabsContainerStyle,
  truncateMenu = false,
  onMoreTabPress,
}: CometTabsProps) {
  const dummyClasses = useDummyStyles()

  const classes = useStyles()
  const localeClasses = useLocaleStyles()

  const containerRef = useRef<any>(null)
  const tabsRef = useRef<any>([])
  const H = useRef<any>(null)

  const [generatedNumbers, filteredNumbers] = useState(
    generateNumbersInRange(tabs.length, maxTabs),
  )

  useEffect(() => {
    filteredNumbers(generateNumbersInRange(tabs.length, maxTabs))
  }, [tabs.length, maxTabs])

  const limitedTabs = maxTabs < tabs.length ? tabs.slice(0, maxTabs) : tabs

  const isMaxTabs = maxTabs >= tabs.length

  const hasSelectedTabs = useMemo(() => {
    return generatedNumbers.some(a => (!tabs[a] ? void 0 : tabs[a].selected))
  }, [generatedNumbers, tabs])

  const CometDeferredPopoverTriggerChildren = useCallback(
    (externalRef: any, handler: any) => {
      const mergeRef = mergeRefs(externalRef, H, moreTabRef)
      const commandConfigs = [
        {
          command: {
            key: cometKeys.DOWN,
          },
          description: 'Open Menu', // h._('__JHASH__XKKEZVjEqk8__JHASH__'),
          handler: handler,
        },
      ]
      return jsx(CometComponentWithKeyCommands, {
        commandConfigs: commandConfigs,
        className: mergeClasses(
          classes.moreWrapper,
          localeClasses['default'],
          // locales.includes(c('CurrentLocale').get()) && s.englishOrShorter,
          heightXStyle,
          isMaxTabs && classes.moreWrapperAdaptive,
          moreWrapperXStyle,
          maxHeightXStyle,
        ),
        children: jsx(
          CometTab,
          Object.assign({}, moreTabStyles, {
            'aria-haspopup': 'menu',
            icon: svgIcon(TriangleDownFilled20),
            iconSize: 16,
            label: 'More', // h._('__JHASH__aIpSCYSYAKN__JHASH__'),
            onPress: () => {
              handler()
              onMoreTabPress && onMoreTabPress()
            },
            pressableXStyle: mergeClasses(classes.moreTab, heightXStyle),
            ref: mergeRef,
            role: 'tab',
            selected: hasSelectedTabs,
            testid: void 0,
            className: moreTabXStyle,
          }),
        ),
      })
    },
    [
      isMaxTabs,
      heightXStyle,
      hasSelectedTabs,
      maxHeightXStyle,
      moreTabStyles,
      moreTabXStyle,
      moreWrapperXStyle,
      onMoreTabPress,
    ],
  )

  return jsx(CometFocusGroup, {
    hideArrowSignifiers: true,
    orientation: 'horizontal',
    preventScrollOnFocus: !0,
    role: 'tablist',
    tabScopeQuery: tabbableScopeQuery,
    wrap: !0,
    children: (clazz: any) => {
      return jsx(
        'div',
        Object.assign(
          {
            className: mergeClasses(classes.root, clazz, heightXStyle),
            role: 'tablist',
          },
          // c('CometVisualCompletionAttributes').IGNORE_DYNAMIC,
          {
            children: jsxs('div', {
              className: dummyClasses.dummy1, // 'x14ju556 x1n2onr6',
              children: [
                isMaxTabs &&
                  jsx('div', {
                    className: dummyClasses.dummy2, // 'x6ikm8r x10wlt62 xlshs6z',
                    children: limitedTabs.map(
                      ({ linkProps, onPress, ...rest }: any, key: any) => {
                        return React.createElement(
                          CometTab,
                          Object.assign({}, rest, {
                            key: key + 'tab',
                            ref: (node: any) => {
                              return (tabsRef.current[key] = node)
                            },
                            role: 'tab',
                            selected: rest.selected,
                            className: mergeClasses(
                              classes.tab,
                              rest.className,
                            ),
                          }),
                        )
                      },
                    ),
                  }),
                jsxs('div', {
                  className: mergeClasses(
                    classes.tabsContainer,
                    tabsContainerStyle,
                  ),
                  'data-testid': void 0,
                  children: [
                    jsx(CometDeferredPopoverTrigger, {
                      popoverProps: {
                        menuItems: generatedNumbers
                          .map(item => tabs[item])
                          .filter(Boolean),
                        menuSize,
                        truncate: truncateMenu,
                      },
                      popoverResource: CometTabMenu,
                      children: CometDeferredPopoverTriggerChildren,
                    }),
                    limitedTabs.map((a, b) => {
                      return React.createElement(
                        CometTab,
                        Object.assign({}, a, {
                          containerRef: containerRef,
                          key: b + 'tab',
                          onHidden: (a: any) => {
                            if (_3806) {
                              const d = a
                                ? u(generatedNumbers, b)
                                : v(generatedNumbers, b)
                              d !== generatedNumbers && filteredNumbers(d)
                            } else {
                              filteredNumbers(c => (a ? u(c, b) : v(c, b)))
                            }
                          },
                          pressableXStyle: classes.tab,
                          ref: function (node: any) {
                            return (tabsRef.current[b] = node)
                          },
                          role: 'tab',
                          selected: a.selected,
                        }),
                      )
                    }),
                  ],
                }),
              ],
            }),
          },
        ),
      )
    },
  })
}

function generateNumbersInRange(length: number, minValue: any) {
  return Array.from({
    length,
  })
    .map((a, b) => b)
    .filter(a => a >= minValue)
}

function u(a: any, b: any) {
  return a.includes(b)
    ? a
    : // @ts-ignore
      [].concat(a, [b]).sort(function (a, b) {
        return a - b
      })
}
function v(a: any, b: any) {
  return a.includes(b)
    ? a.filter(function (a: any) {
        return a !== b
      })
    : a
}

const locales = [
  'en_US',
  'en_GB',
  'nl_NL',
  'vi_VN',
  'af_ZA',
  'fy_NL',
  'kk_KZ',
  'cs_CZ',
  'sw_KE',
  'it_IT',
  'pt_BR',
  'pt_PT',
  'bg_BG',
  'hr_HR',
  'nn_NO',
  'es_ES',
  'es_LA',
  'fr_FR',
  'ca_ES',
  'fr_CA',
  'si_LK',
  'sr_RS',
  'nb_NO',
  'sv_SE',
  'zh_HK',
  'zh_TW',
  'he_IL',
  'ne_NP',
  'eo_EO',
]
