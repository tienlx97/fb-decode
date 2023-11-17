/* eslint-disable no-self-assign */
import { TrackingNodeConstants } from './tracking-node-constants'

export function encodeTrackingNode(a: any, b: any) {
  const c = function (a: any) {
      return Math.pow(TrackingNodeConstants.BASE_CODE_SIZE, a)
    },
    e = function (a: any, b: any) {
      let c = ''
      a = a
      b = b
      while (b > 0) {
        let e = a % TrackingNodeConstants.BASE_CODE_SIZE
        c = String.fromCharCode(TrackingNodeConstants.BASE_CODE_START + e) + c
        // @ts-ignore
        a = parseInt(a / TrackingNodeConstants.BASE_CODE_SIZE, 10)
        b -= 1
      }
      return c
    },
    f = function (a: any) {
      a = a - TrackingNodeConstants.TOTAL_IDS_SUPPORTED_BY_LEGACY_ENCODING - 1
      if (a < c(2))
        return (
          String.fromCharCode(
            TrackingNodeConstants.ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE,
          ) + e(a, 2)
        )
      a -= c(2)
      return (
        String.fromCharCode(
          TrackingNodeConstants.ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE,
        ) + e(a, 3)
      )
    },
    g = (a - 1) % TrackingNodeConstants.BASE_CODE_SIZE,
    // @ts-ignore
    h = parseInt((a - 1) / TrackingNodeConstants.BASE_CODE_SIZE, 10)
  if (
    a < 1 ||
    a >
      (TrackingNodeConstants.PREFIX_CODE_SIZE + 1) *
        TrackingNodeConstants.BASE_CODE_SIZE +
        Math.pow(TrackingNodeConstants.BASE_CODE_SIZE, 2) +
        Math.pow(TrackingNodeConstants.BASE_CODE_SIZE, 3)
  )
    throw Error('Invalid tracking node: ' + a)
  let i = ''
  h > TrackingNodeConstants.PREFIX_CODE_SIZE
    ? (i += f(a))
    : (h > 0 &&
        (i += String.fromCharCode(
          h - 1 + TrackingNodeConstants.PREFIX_CODE_START,
        )),
      (i += String.fromCharCode(g + TrackingNodeConstants.BASE_CODE_START)))
  b !== void 0 &&
    b > 0 &&
    (b > 10 && (i += '#'),
    (i += parseInt(
      // @ts-ignore
      Math.min(b, TrackingNodeConstants.ENCODE_NUMBER_MAX) - 1,
      10,
    )))
  return i
}
