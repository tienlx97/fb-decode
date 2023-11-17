import { makeStyles, mergeClasses } from '@griffel/react'
// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'
import emptyFunction from 'fbjs/lib/emptyFunction'
import { CometDialogHeaderContainer } from './comet-dialog-header-container'
import { CometCircleButton } from '@negiganaito/button'
import {
  ArrowLeftFilled24,
  ArrowRightFilled24,
  CrossFilled24,
} from '@negiganaito/icons'
import { TetraText } from '@negiganaito/text'
import { CometTrackingNodeProvider } from './comet-tracking-node-provider'

const useStyles = makeStyles({
  headerItem: {
    marginLeft: '16px',
    marginRight: '16px',
  },
  headerPlaceholder: {
    height: '36px',
    width: '36px',
  },

  d1: {
    marginLeft: '16px',
    marginRight: '16px',
  },
})

// isRTL();
const m = false

type CometDialogHeaderProps = {
  backTestID?: string
  closeTestID?: string
  disabled?: boolean
  id?: string
  onBack?: () => void
  onClose?: () => void
  showTruncationTooltip?: boolean
  text?: string | null
  withBackButton?: boolean
  withCloseButton?: boolean
  withoutDivider?: boolean
}

export function CometDialogHeader({
  backTestID = 'back-button',
  closeTestID = 'close-button',
  disabled = false,
  id,
  onBack = emptyFunction,
  onClose = emptyFunction,
  showTruncationTooltip = false,
  text,
  withBackButton = false,
  withCloseButton = true,
  withoutDivider = false,
}: CometDialogHeaderProps) {
  const classes = useStyles()

  return jsxs(CometDialogHeaderContainer, {
    withDivider: !withoutDivider,
    children: [
      withBackButton
        ? jsx('div', {
            className: classes.d1,
            children: jsx(CometCircleButton, {
              disabled,
              icon: m ? ArrowRightFilled24 : ArrowLeftFilled24,
              label: 'Back',
              onPress: onBack,
              size: 36,
              testid: void 0,
            }),
          })
        : jsx('div', {
            className: mergeClasses(
              classes.headerItem,
              classes.headerPlaceholder,
            ),
          }),

      text &&
        jsx(TetraText, {
          align: 'center',
          id,
          isSemanticHeading: !0,
          numberOfLines: 1,
          truncationTooltip: showTruncationTooltip ? text : void 0,
          type: 'headlineEmphasized2',
          children: text,
        }),

      withCloseButton
        ? jsx('div', {
            className: 'x1d52u69 xktsk01',
            children: jsx(CometTrackingNodeProvider, {
              trackingNode: 29,
              children: jsx(CometCircleButton, {
                disabled,
                icon: CrossFilled24,
                label: 'Close',
                onPress: onClose,
                size: 36,
                testid: void 0,
              }),
            }),
          })
        : jsx('div', {
            className: mergeClasses(
              classes.headerPlaceholder,
              classes.headerItem,
            ),
          }),
    ],
  })
}
