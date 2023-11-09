import { HomeGeminiFeedPreferencesDialogLoadingState } from '@/components/home-gemini-feed-preferences-dialog-loading-state'
import { useCometEntryPointDialog } from '@negiganaito/dialog'
import { useRef } from 'react'
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

const l = (a: any) => {
  return jsx(HomeGeminiFeedPreferencesDialogLoadingState, {
    onClose: a,
  })
}

const m = !1

export function useHomeGeminiFeedPreferencesDialog(a: any) {
  useRef(null)
  const b = a ?? 'unknown'

  // HomeGeminiFeedPreferencesControlPanelDialog.react
  a = c('HomeGeminiFeedPreferencesControlPanelDialog.entrypoint')
  a = useCometEntryPointDialog(a, {}, 'button', l)
  var d = a[0]
  a[1]
  a[2]
  a = a[3]
  var e = j(
    function (a) {
      m ||
        (d(
          {
            controlPanelEntryPoint: b,
          },
          function () {
            ;(m = !1), a != null && a()
          },
        ),
        (m = !0))
    },
    [d, b],
  )
  return [e, a]
}
