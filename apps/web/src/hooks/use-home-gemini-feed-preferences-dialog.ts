import { HomeGeminiFeedPreferencesControlPanelDialog } from '@/components/home-gemini-feed-preferences-control-panel-dialog'
import { HomeGeminiFeedPreferencesDialogLoadingState } from '@/components/home-gemini-feed-preferences-dialog-loading-state'
import { useCometEntryPointDialog } from '@negiganaito/dialog'
import { useCallback, useRef } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

/*

__d("useHomeGeminiFeedPreferencesDialog", 
  ["HomeGeminiFeedPreferencesControlPanelDialog.entrypoint", 
  "HomeGeminiFeedPreferencesDialogLoadingState.react", //
  "react", "useCometEntryPointDialog"], //


__d("CometCardedDialogLegacy.react", 
  ["fbt", "ix", 
  "BaseDialog.react", 
  "BaseHeadingContextWrapper.react", 
  "CometCircleButton.react", 
  "CometTrackingNodeProvider.react", "Locale", "TetraText.react", "TetraTextPairing.react", "fbicon", "gkx", 
  "react", "stylex", "useIsCometOnMobile"], (function(a, b, c, d, e, f, g, h, i) {


__d("HomeGeminiFeedPreferencesDialogLoadingState.react", 
  ["CometCardedDialogLegacy.react", //
  "CometGlimmer.react", //
  "HomeGeminiFeedPreferencesConstants", "react"], (function(a, b, c, d, e, f, g) {

*/

const homeGeminiFeedPreferencesControlPanelDialog = {
  root: HomeGeminiFeedPreferencesControlPanelDialog,
}

const l = (a: any) => {
  return jsx(HomeGeminiFeedPreferencesDialogLoadingState, {
    onClose: a,
  })
}

let m = !1

export function useHomeGeminiFeedPreferencesDialog(
  controlPanelEntryPoint?: any,
) {
  useRef(null) //
  const _controlPanelEntryPoint = controlPanelEntryPoint ?? 'unknown'

  // HomeGeminiFeedPreferencesControlPanelDialog.react
  // a = c('HomeGeminiFeedPreferencesControlPanelDialog.entrypoint')
  let a = useCometEntryPointDialog(
    homeGeminiFeedPreferencesControlPanelDialog,
    {},
    'button',
    l,
  )
  var d = a[0]
  a[1]
  a[2]
  a = a[3]
  // const e = useCallback(
  //   (a?: any) => {
  //     m ||
  //       (d(
  //         {
  //           controlPanelEntryPoint: _controlPanelEntryPoint,
  //         },
  //         () => {
  //           m = !1
  //           a && a()
  //         },
  //       ),
  //       (m = !0))
  //   },
  //   [d, _controlPanelEntryPoint],
  // )

  const e = useCallback(
    (a?: any) => {
      if (!m) {
        d(
          {
            controlPanelEntryPoint: _controlPanelEntryPoint,
          },
          () => {
            m = false
            if (a) {
              a()
            }
          },
        )
        m = true
      }
    },
    [d, _controlPanelEntryPoint],
  )

  return [e, a] as const
}
