/* eslint-disable camelcase */
export function serialize(a: any) {
  // eslint-disable-next-line no-self-assign
  return (a = a) != null ? a : ''
}

const comparisonStatus = {
  DIFFERENT: 0,
  EQUAL: 1,
  SUBKEY: 2,
}

function compareStringsForEqualityAndSubkey(a: string, b: string) {
  const aLC = a.toLowerCase()
  const bLC = b.toLowerCase()
  return aLC === bLC
    ? comparisonStatus.EQUAL
    : aLC.indexOf(bLC) === 0 && aLC[bLC.length] === '/'
      ? comparisonStatus.SUBKEY
      : comparisonStatus.DIFFERENT
}

export const fromString_DO_NOT_USE = (str: any) => str

export const containsKey = (a: any, b: string) => {
  return a == null
    ? !1
    : compareStringsForEqualityAndSubkey(a, b) === comparisonStatus.EQUAL
}

export const containsSubkey = (a: any, b: string) => {
  return a == null
    ? !1
    : compareStringsForEqualityAndSubkey(a, b) === comparisonStatus.SUBKEY
}

export const containsKeyOrSubkey = (a: any, b: string) => {
  return a == null
    ? !1
    : compareStringsForEqualityAndSubkey(a, b) !== comparisonStatus.DIFFERENT
}
