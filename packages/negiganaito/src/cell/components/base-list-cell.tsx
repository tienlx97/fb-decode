import React, { forwardRef, useContext } from 'react'

import Locale from 'fbjs/lib/Locale'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import { CometCompositeStructureContext } from '@negiganaito/context'
import { getItemRoleFromCompositeRole } from '@negiganaito/utils/common/get-item-role-from-composite-role'
import { BaseRow, BaseRowItem, BaseView } from '@negiganaito/common'
import { makeStyles, mergeClasses } from '@griffel/react'

type BaseListCellProps = {
  addOnBottom?: any
  addOnBottomResponsive?: any
  addOnEnd?: any
  addOnEndVerticalAlign?: any
  addOnFooter?: any
  addOnStart?: any
  addOnStartVerticalAlign?: any
  addOnStartXStyle?: any
  'aria-hidden'?: any
  content?: any
  contentId?: any
  nestedSpacing?: any
  role?: any
  testid?: any
  verticalAlign?: any
  className?: any
}

const useStyles = makeStyles({
  bottomAddOn: {
    display: 'flex',
    flexDirection: 'column',
  },
  bottomAddOnResponsive: {
    flexGrow: 1,
  },
  item: {
    display: 'flex',
  },
  root: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
    minWidth: 0,
  },
  textContent: {
    flexGrow: 1,
  },
  textContentContainer: {
    flexBasis: 'auto',
  },
  textWithResponsiveAddOnBottom: {
    flexBasis: '50%',
    maxWidth: '100%',
    minWidth: '50%',
  },
})

export const BaseListCell = forwardRef<any, BaseListCellProps>(
  (
    {
      addOnBottom,
      addOnBottomResponsive = false,
      addOnEnd,
      addOnEndVerticalAlign,
      addOnFooter,
      addOnStart,
      addOnStartVerticalAlign,
      addOnStartXStyle,
      'aria-hidden': ah = false,
      content,
      contentId,
      verticalAlign = 'center',
      className,
      nestedSpacing,
      role,
      testid,
    },
    ref,
  ) => {
    const classes = useStyles()

    const isRTL = Locale.isRTL()

    const u = nestedSpacing
      ? isRTL
        ? {
            marginRight: nestedSpacing,
          }
        : {
            marginLeft: nestedSpacing,
          }
      : undefined

    const { role: _role } = useContext(CometCompositeStructureContext)
    const r = getItemRoleFromCompositeRole(_role)

    return jsxs(BaseView, {
      'aria-hidden': ah ? !0 : void 0,
      ref,
      role: role ?? r ?? undefined, //(b = (o = s) != null ? o : r) != null ? b : void 0,
      testid: void 0,
      className: mergeClasses(classes.root, className),
      children: [
        jsxs(BaseRow, {
          verticalAlign: verticalAlign,
          children: [
            u &&
              jsx(BaseRowItem, {
                children: jsx('div', {
                  style: u,
                }),
              }),
            addOnStart &&
              jsx(BaseRowItem, {
                verticalAlign: addOnStartVerticalAlign,
                className: mergeClasses(classes.item, addOnStartXStyle),
                children: addOnStart,
              }),
            jsxs(BaseRow, {
              expanding: true,
              verticalAlign: 'center',
              wrap: 'forward',
              className: classes.textContentContainer,
              children: [
                content &&
                  jsx(BaseRowItem, {
                    className: mergeClasses(
                      classes.textContent,
                      addOnBottomResponsive &&
                        classes.textWithResponsiveAddOnBottom,
                    ),
                    children: contentId
                      ? jsx('div', {
                          'aria-hidden': !0,
                          children: jsx('div', {
                            id: contentId,
                            children: content,
                          }),
                        })
                      : content,
                  }),
                addOnBottom &&
                  jsx(BaseRowItem, {
                    className: mergeClasses(
                      classes.bottomAddOn,
                      addOnBottomResponsive && classes.bottomAddOnResponsive,
                    ),
                    children: addOnBottom,
                  }),
              ],
            }),
            addOnEnd &&
              jsx(BaseRowItem, {
                verticalAlign: addOnEndVerticalAlign,
                className: classes.item,
                children: addOnEnd,
              }),
          ],
        }),
        addOnFooter && addOnFooter,
      ],
    })
  },
)
