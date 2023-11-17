import { createContext } from 'react'

type CometKeyCommandSettingsContextProps = {
  addCustomCommand: (props: any) => any
  checkForKeyCommandConflict: (props: any) => []
  disableCustomCommand: (props: any) => any
  getAreSingleKeysDisabled: () => boolean
  getCustomCommandsMap: () => any
  getCustomKeyCombination: (...props: any) => any
  getModifiedKeyboardShortcutsPreference: (...props: any) => number
  isViewerShowing: boolean
  resetAllCustomCommands: (props: any) => any
  resetCustomCommand: (props: any) => any
  setAreSingleKeysDisabled: (props: any) => any
  setModifiedKeyboardShortcutsPreference: (props: any) => any
  setViewerInfo: (props: any) => any
  viewerType: string
}

const areSingleKeysDisabled = false
// c('CometCustomKeyCommands').areSingleKeysDisabled === null &&
// !c('gkx')('1707273')
//   ? false
//   : c('CometCustomKeyCommands').areSingleKeysDisabled

const CometKeyCommandSettingsContext =
  createContext<CometKeyCommandSettingsContextProps>({
    addCustomCommand: function (a: any) {},
    checkForKeyCommandConflict: function (a: any) {
      return []
    },
    disableCustomCommand: function (a: any) {},
    getAreSingleKeysDisabled: function () {
      return areSingleKeysDisabled
    },
    getCustomCommandsMap: function () {
      return new Map()
    },
    getCustomKeyCombination: function (a: any) {},
    getModifiedKeyboardShortcutsPreference: function (...a: any) {
      return 4
    },
    isViewerShowing: false,
    resetAllCustomCommands: function (a: any) {},
    resetCustomCommand: function (a: any) {},
    setAreSingleKeysDisabled: function (a: any) {},
    setModifiedKeyboardShortcutsPreference: function (a: any) {},
    setViewerInfo: function (a: any) {},
    viewerType: 'see_all',
  })

export default CometKeyCommandSettingsContext
