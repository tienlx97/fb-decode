import { useEffect, useState } from 'react'

import isStringNullOrEmpty from '@fb/utils/is-string-null-or-empty'

export const getFirstLetterNavigationTag = function (a: any) {
  return a.slice(0, 1).toLowerCase()
}

export const useFirstLetterNavigationTag = function (a: any) {
  var b = useState(void 0),
    d = b[0],
    e = b[1]
  useEffect(
    function () {
      var b
      b = a == null ? void 0 : (b = a.current) == null ? void 0 : b.innerText
      isStringNullOrEmpty(b) || e(getFirstLetterNavigationTag(b))
    },
    [a],
  )
  return d
}

export const handleFirstLetterNavigation = function (a: any) {
  if (a.type === 'PRINT_CHAR') {
    a.event.stopPropagation()
    var b = a.event.key.toLowerCase()
    b = a.getItemByTag(b)
    b != null && a.focusItem(b)
  }
}
