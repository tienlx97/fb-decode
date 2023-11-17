import { isPlatform } from '@negiganaito/utils/user-agent'

const h = (function () {
  let a: HTMLDivElement | null = null

  return function () {
    const b = document.body

    if (b == null) {
      return null
    }
    ;(a == null || !b.contains(a)) && (a = document.createElement('div'))

    a.style.left = Number.MAX_SAFE_INTEGER + 'px'
    a.style.width = '100%'
    a.style.height = '100%'
    a.style.position = 'fixed'
    b.appendChild(a)

    return a
  }
})()

function i(): number {
  let a: number | undefined
  document.documentElement && (a = document.documentElement.clientWidth)
  a == null && document.body && (a = document.body.clientWidth)
  return a || 0
}

function j(): number {
  let a: number | undefined
  document.documentElement && (a = document.documentElement.clientHeight)
  a == null && document.body && (a = document.body.clientHeight)
  return a || 0
}

export function getViewportDimensions(): { width: number; height: number } {
  return {
    width: window.innerWidth || i(),
    height: window.innerHeight || j(),
  }
}

getViewportDimensions.withoutScrollbars = function () {
  return isPlatform('Android')
    ? getViewportDimensions()
    : {
        width: i(),
        height: j(),
      }
}

getViewportDimensions.layout = function (): { width: number; height: number } {
  const b = h()
  return {
    width: (b == null ? undefined : b.clientWidth) || i(),
    height: (b == null ? undefined : b.clientHeight) || j(),
  }
}
