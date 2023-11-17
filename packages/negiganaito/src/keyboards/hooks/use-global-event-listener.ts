import { useEffect } from 'react'

const j = {
  fullscreenchange: [
    'webkitfullscreenchange',
    'mozfullscreenchange',
    'MSFullscreenChange',
    'fullscreenchange',
  ],
}

export const useGlobalEventListener = function (a: any, b: any, c?: any) {
  useEffect(
    function () {
      if (b != null) {
        var d,
          // @ts-ignore
          e = (d = j[a]) != null ? d : a
        window.addEventListener(e, b, c)
        return function () {
          window.removeEventListener(e, b, c)
        }
      }
    },
    [b, a, c],
  )
}
