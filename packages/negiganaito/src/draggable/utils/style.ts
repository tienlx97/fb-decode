import { _Core } from '@negiganaito/styles'
import { StyleCore } from './style-core'

export const Style = Object.assign({}, StyleCore, {
  get: function (a: any, b: any) {
    typeof a === 'string' && (a = _Core(a))
    return StyleCore.get(a, b)
  },
  getFloat: function (a: any, b: any) {
    typeof a === 'string' && (a = _Core(a))
    return StyleCore.getFloat(a, b)
  },
})
