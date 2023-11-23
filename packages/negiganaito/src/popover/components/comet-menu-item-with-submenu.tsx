import {
  BaseContextualLayerAvailableHeightContext,
  BaseMultiPageViewContext,
} from '@negiganaito/context'
import { CometIcon, fbicon } from '@negiganaito/image'
import {
  CometComponentWithKeyCommands,
  cometKeys,
} from '@negiganaito/keyboards'
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import CometMenuItemBase, {
  CometMenuItemBaseProps,
} from './comet-menu-item-base'
import CometMenuItemIcon from './comet-menu-item-icon'
import { makeStyles } from '@griffel/react'
import { CometMenuBase } from './comet-menu-base'

type CometMenuItemWithSubmenuProps = {
  disabled?: boolean
  icon?: any
  iconColor?: any
  iconNode?: any
  iconSize?: any
  iconStyle?: any
  onClick?: any
  primaryText?: any
  secondaryText?: any
  submenu?: any
} & CometMenuItemBaseProps

const p = createContext([])

const useStyles = makeStyles({
  root: {
    marginBottom: '-5px',
    marginTop: '--5px',
  },
})

export const CometMenuItemWithSubmenu = forwardRef<
  any,
  CometMenuItemWithSubmenuProps
>(
  (
    {
      disabled,
      icon,
      iconColor,
      iconNode,
      iconSize,
      iconStyle,
      onClick,
      primaryText,
      secondaryText,
      submenu,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()

    const arrContextValue = useContext(p)

    const textMergeValue = useMemo(() => {
      // @ts-ignore
      return [].concat(arrContextValue, [primaryText])
    }, [arrContextValue, primaryText])

    const [expand, setExpand] = useState(false)

    const iconChildren = jsx(CometIcon, {
      color: 'secondary',
      icon: fbicon(
        {
          sprited: 2,
          spi: '/assets/workplace/WByxatfI71E.png',
          _spi: '/assets/workplace/WByxatfI71E.png',
          w: 20,
          h: 20,
          p: '0 -389px',
          sz: 'auto',
          loggingID: '492572',
        },
        20,
      ),
    })

    const baseMultiPageViewValue = useContext(BaseMultiPageViewContext)

    const pageNavigate = useCallback(() => {
      if (!baseMultiPageViewValue) {
        return
      }

      const { header, ...headerProps } = submenu
      // var a = submenu.header,
      // b = babelHelpers.objectWithoutPropertiesLoose(w, ['header']),
      const onPressBack = () => {
        setExpand(!1),
          header == null
            ? void 0
            : header.onPressBack == null
              ? void 0
              : header.onPressBack(),
          baseMultiPageViewValue == null
            ? void 0
            : baseMultiPageViewValue.popPage == null
              ? void 0
              : baseMultiPageViewValue.popPage()
      }

      const _header = {
        meta: header ? header.meta : secondaryText,
        onPressBack: onPressBack,
        title: header ? header.title : primaryText,
      }

      setExpand(true)

      baseMultiPageViewValue.pushPage(() => {
        const baseViewCommandConfig = [
          {
            command: {
              key: cometKeys.LEFT,
            },
            description: 'Move to parent menu',
            handler: onPressBack,
          },
          {
            command: {
              key: cometKeys.ESCAPE,
            },
            description: 'Move to parent menu',
            handler: onPressBack,
          },
        ]

        let a = jsx(p.Provider, {
          value: textMergeValue,
          children: jsx(CometComponentWithKeyCommands, {
            commandConfigs: baseViewCommandConfig,
            children: jsx(
              q,
              Object.assign({}, headerProps, {
                header: _header,
              }),
            ),
          }),
        })
        for (let f = textMergeValue.length - 1; f >= 0; f--)
          a = jsx('div', {
            'aria-label': textMergeValue[f],
            role: 'menu',
            children: a,
          })

        return a
      })
    }, [
      baseMultiPageViewValue,
      submenu,
      secondaryText,
      primaryText,
      textMergeValue,
    ])

    const onClickHandler = (ev: any) => {
      onClick && onClick(ev)
      pageNavigate()
    }

    const commandConfigs = useMemo(() => {
      return [
        {
          command: {
            key: cometKeys.RIGHT,
          },
          description: 'Move to submenu',
          handler: pageNavigate,
        },
      ]
    }, [pageNavigate])

    return jsx(CometComponentWithKeyCommands, {
      commandConfigs: commandConfigs,
      children: jsx(
        CometMenuItemBase,
        Object.assign({}, rest, {
          'aria-expanded': expand,
          'aria-haspopup': 'menu',
          aux: icon
            ? jsx('div', {
                className: classes.root,
                children: iconChildren,
              })
            : iconChildren,
          disabled,
          iconNode: iconNode
            ? iconNode
            : icon
              ? jsx(CometMenuItemIcon, {
                  disabled,
                  icon,
                  iconColor,
                  iconSize,
                  use: iconStyle,
                })
              : null,
          onClick: onClickHandler,
          preventClosingMenuOnSelect: true,
          primaryText,
          ref,
          role: 'menuitem',
          secondaryText,
        }),
      ),
    })
  },
)

function q({ items, truncate = true, ...rest }: any) {
  const availableHeight = useContext(BaseContextualLayerAvailableHeightContext)

  return jsx(
    CometMenuBase,
    Object.assign({}, rest, {
      maxHeight: truncate ? availableHeight ?? 0 : void 0,
      children: items,
    }),
  )
}
