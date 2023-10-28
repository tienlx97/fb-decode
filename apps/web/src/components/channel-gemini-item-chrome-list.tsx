import React from 'react/'

import { BaseLoadingStateElement } from '@negiganaito/popover'
// @ts-ignore
import { jsx, jsxs } from 'react/'
import { WorkGalahadUIChannelItem } from './work-galahad-ui-channel-item'
import { CometGlimmer } from '@negiganaito/glimmer'
import { makeStyles, mergeClasses, shorthands } from '@griffel/react'

type ChannelGeminiItemChromeListProps = {
  amount?: any
  initialIndex?: number
  type?: any
  withHeader?: boolean
}

type KProps = {
  index: number
  isIndented?: boolean
  isNested?: boolean
  roundIcon?: boolean
  size?: string
  textType?: string
}

const useStyles = makeStyles({
  line: {
    ...shorthands.borderRadius('12px'),
    display: 'block',
    height: '12px',
    marginTop: '2px',
    marginRight: 0,
    marginBottom: '2px',
    marginLeft: 0,
  },
  smallLine: {
    height: '10px',
  },
  longLine: {
    width: 'calc(100% - 36px)',
  },
  shortLine: {
    width: '40%',
  },
  shortestLine: {
    width: '25%',
  },
  headerChrome: {
    marginBottom: '8px',
    marginTop: '8px',
    paddingLeft: '24px',
    paddingRight: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexColumn: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  smallIcon: {
    height: '24px',
    width: '24px',
  },
  icon: {
    height: '36px',
    width: '36px',
  },
  largeIcon: {
    height: '48px',
    width: '48px',
  },
  circle: {
    ...shorthands.borderRadius('50%'),
  },
  roundedRect: {
    ...shorthands.borderRadius('8px'),
  },

  dummy1: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },

  dummy2: {
    marginBottom: '8px',
    marginTop: '8px',
    paddingLeft: '24px',
    paddingRight: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

function K({
  index,
  isIndented = false,
  isNested = false,
  roundIcon = false,
  size = 'medium',
  textType = 'single',
}: KProps) {
  const classes = useStyles()

  return (
    <div>
      <WorkGalahadUIChannelItem
        isSemanticListItem={false}
        headline={
          <React.Fragment>
            <div style={{ width: '100%' }} className={classes.dummy1}>
              <CometGlimmer
                className={mergeClasses(
                  classes.line,
                  classes.longLine,
                  size === 'small' && classes.smallLine,
                )}
                index={index}
              />
            </div>
            {textType === 'multi' && (
              <React.Fragment>
                <CometGlimmer
                  className={mergeClasses(
                    classes.line,
                    classes.shortLine,
                    size === 'small' && classes.smallLine,
                  )}
                  index={index}
                />
                <CometGlimmer
                  className={mergeClasses(
                    classes.line,
                    classes.shortestLine,
                    size === 'small' && classes.smallLine,
                  )}
                  index={index}
                />
              </React.Fragment>
            )}
          </React.Fragment>
        }
        meta={
          textType === 'subtitled' ? (
            <CometGlimmer
              className={mergeClasses(
                classes.line,
                classes.shortLine,
                size === 'small' && classes.smallLine,
              )}
              index={index}
            />
          ) : undefined
        }
        addOnPrimary={
          isNested ? undefined : (
            <CometGlimmer
              className={mergeClasses(
                size === 'medium' && classes.icon,
                size === 'small' && classes.smallIcon,
                size === 'large' && classes.largeIcon,
                roundIcon && classes.circle,
                !roundIcon && classes.roundedRect,
              )}
              index={index}
            />
          )
        }
        indentationLevel={isIndented ? 2 : 1}
      />
    </div>
  )
}

type LProps = {
  initialIndex?: number
}

function L({ initialIndex = 0 }: LProps) {
  const classes = useStyles()

  return (
    <div className={classes.dummy2}>
      <CometGlimmer
        className={mergeClasses(classes.line, classes.shortLine)}
        index={initialIndex}
      />
    </div>
  )
}

export function ChannelGeminiItemChromeList({
  amount,
  initialIndex = 0,
  type,
  withHeader = false,
}: ChannelGeminiItemChromeListProps) {
  let temp: any

  switch (type) {
    case 'groups':
    case 'teams': {
      temp = {
        isIndented: true,
      }
      break
    }
    case 'people':
      temp = {
        roundIcon: !0,
        isIndented: !0,
      }
      break
    case 'notifications':
      temp = {
        textType: 'multi',
        roundIcon: !0,
        size: 'large',
        isIndented: !0,
      }
      break
    case 'minimall':
      temp = {
        textType: 'multi',
        roundIcon: !0,
        isIndented: !0,
      }
      break
    case 'inlineMinimall':
      temp = {
        textType: 'multi',
        roundIcon: !0,
        isNested: !0,
        isIndented: !0,
      }
      break
    case 'search':
      temp = {
        textType: 'subtitled',
      }
      break
    case 'chats':
      temp = {
        roundIcon: !0,
        size: 'large',
        isIndented: !0,
      }
      break
    case 'quick-chat':
      temp = {
        roundIcon: !0,
        size: 'small',
      }
      break
    case 'dense-chats':
      temp = {
        roundIcon: !0,
        size: 'small',
        isIndented: !0,
      }
      break
    case 'message-search':
      temp = {
        textType: 'subtitled',
        roundIcon: !0,
      }
      break
    default:
      type
  }

  let arr = []

  for (let g = 0; g < amount; g++) {
    arr.push(
      jsx(
        K,
        Object.assign(
          {
            index: g + initialIndex,
          },
          temp,
        ),
        g,
      ),
    )
  }

  return jsxs(BaseLoadingStateElement, {
    children: [
      withHeader
        ? jsx(L, {
            initialIndex: initialIndex,
          })
        : null,
      arr,
    ],
  })
}
