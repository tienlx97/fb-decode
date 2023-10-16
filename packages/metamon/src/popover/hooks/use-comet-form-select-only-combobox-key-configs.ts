import { cometKeys } from '@negiganaito/keyboards'
import { useCallback, useMemo } from 'react'

export default function useCometFormSelectOnlyComboboxKeyConfigs({
  activeValue,
  filteredOptions,
  isMenuVisible,
  onHide,
  onPress,
  onShow,
  setActiveValue,
  value,
}: any) {
  const handlerKey1 = useCallback(() => {
    if (filteredOptions.length === 0) return
    if (!isMenuVisible) {
      var a
      setActiveValue((a = value) != null ? a : filteredOptions[0].value)
      onShow()
      return
    }
    a = filteredOptions.findIndex(function (a: any) {
      return a.value === activeValue
    })
    a > 0 && setActiveValue(filteredOptions[a - 1].value)
    onShow()
  }, [
    filteredOptions,
    isMenuVisible,
    onShow,
    setActiveValue,
    value,
    activeValue,
  ])
  const handlerKey2 = useCallback(() => {
    if (filteredOptions.length === 0) return
    if (!isMenuVisible) {
      var a
      onShow()
      setActiveValue((a = value) != null ? a : filteredOptions[0].value)
      return
    }
    a = filteredOptions.findIndex(function (a: any) {
      return a.value === activeValue
    })
    a < filteredOptions.length - 1 &&
      setActiveValue(filteredOptions[a + 1].value)
    onShow()
  }, [
    filteredOptions,
    isMenuVisible,
    onShow,
    setActiveValue,
    value,
    activeValue,
  ])

  return useMemo(() => {
    return [
      {
        command: {
          key: cometKeys.ENTER,
        },
        description: 'Select option',
        handler: onPress,
      },
      {
        command: {
          key: cometKeys.SPACE,
        },
        description: 'Select option',
        handler: onPress,
      },
      {
        command: {
          alt: !0,
          key: cometKeys.UP,
        },
        description: 'Select option',
        handler: onPress,
      },
      {
        command: {
          key: cometKeys.ESCAPE,
        },
        description: 'Close listbox',
        handler: function () {
          isMenuVisible && onHide()
        },
        shouldStopPropagation: isMenuVisible ? void 0 : !1,
      },
      {
        command: {
          key: cometKeys.TAB,
        },
        description: 'Select option',
        handler: onPress,
        shouldPreventDefault: !1,
      },
      {
        command: {
          key: cometKeys.DOWN,
        },
        description: 'Select Next item',
        handler: handlerKey2,
      },
      {
        command: {
          key: cometKeys.UP,
        },
        description: 'Select Previous item',
        handler: handlerKey1,
      },
      {
        command: {
          key: cometKeys.HOME,
        },
        description: 'Select First item',
        handler: function () {
          isMenuVisible || onShow(), setActiveValue(filteredOptions[0].value)
        },
      },
      {
        command: {
          key: cometKeys.END,
        },
        description: 'Select last item',
        handler: function () {
          isMenuVisible || onShow(),
            setActiveValue(filteredOptions[filteredOptions.length - 1].value)
        },
      },
      {
        command: {
          key: cometKeys.PAGE_UP,
        },
        description: 'Page up',
        handler: function () {
          var a = filteredOptions.findIndex(function (a: any) {
            return a.value === activeValue
          })
          isMenuVisible &&
            (filteredOptions.length <= 11 || a <= 11
              ? setActiveValue(filteredOptions[0].value)
              : setActiveValue(
                  filteredOptions[filteredOptions.length - 10].value,
                ))
        },
      },
      {
        command: {
          key: cometKeys.PAGE_DOWN,
        },
        description: 'Page down',
        handler: function () {
          var a = filteredOptions.findIndex(function (a: any) {
            return a.value === activeValue
          })
          isMenuVisible &&
            (filteredOptions.length <= 11 || filteredOptions.length - a <= 11
              ? setActiveValue(
                  filteredOptions[filteredOptions.length - 1].value,
                )
              : setActiveValue(
                  filteredOptions[filteredOptions.length + 10].value,
                ))
        },
      },
    ]
  }, [
    onPress,
    isMenuVisible,
    handlerKey2,
    handlerKey1,
    onHide,
    setActiveValue,
    filteredOptions,
    onShow,
    activeValue,
  ])
}
