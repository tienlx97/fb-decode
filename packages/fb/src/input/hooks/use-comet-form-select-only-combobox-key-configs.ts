import cometKeys from '@fb/key-command/utils/comet-keys'
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
        description: `h._('__JHASH__H9r-54XFgGX__JHASH__')`,
        handler: onPress,
      },
      {
        command: {
          key: cometKeys.SPACE,
        },
        description: `h._('__JHASH__H9r-54XFgGX__JHASH__')`,
        handler: onPress,
      },
      {
        command: {
          alt: !0,
          key: cometKeys.UP,
        },
        description: `h._('__JHASH__H9r-54XFgGX__JHASH__')`,
        handler: onPress,
      },
      {
        command: {
          key: cometKeys.ESCAPE,
        },
        description: `h._('__JHASH__gx0C5Qpg34W__JHASH__')`,
        handler: function () {
          isMenuVisible && onHide()
        },
        shouldStopPropagation: isMenuVisible ? void 0 : !1,
      },
      {
        command: {
          key: cometKeys.TAB,
        },
        description: `h._('__JHASH__H9r-54XFgGX__JHASH__')`,
        handler: onPress,
        shouldPreventDefault: !1,
      },
      {
        command: {
          key: cometKeys.DOWN,
        },
        description: `h._('__JHASH__cxFOlaY4tQA__JHASH__')`,
        handler: handlerKey2,
      },
      {
        command: {
          key: cometKeys.UP,
        },
        description: `h._('__JHASH__JvfQjzZTBTU__JHASH__')`,
        handler: handlerKey1,
      },
      {
        command: {
          key: cometKeys.HOME,
        },
        description: `h._('__JHASH__YCFt2LFLOyX__JHASH__')`,
        handler: function () {
          isMenuVisible || onShow(), setActiveValue(filteredOptions[0].value)
        },
      },
      {
        command: {
          key: cometKeys.END,
        },
        description: `h._('__JHASH__8RbNJUNJiJ5__JHASH__')`,
        handler: function () {
          isMenuVisible || onShow(),
            setActiveValue(filteredOptions[filteredOptions.length - 1].value)
        },
      },
      {
        command: {
          key: cometKeys.PAGE_UP,
        },
        description: `h._('__JHASH__P9EEfGTJGkw__JHASH__')`,
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
        description: `h._('__JHASH__c0Qyjhx5Cbn__JHASH__')`,
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
