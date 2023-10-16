import { invariantViolation } from './flow-migration-utils-for-legacy-files'

const h =
  typeof navigator !== 'undefined' &&
  navigator.userAgent.indexOf('AppleWebKit') > -1

export function getDocumentScrollElement(a?: any) {
  a = a || document
  if (a.scrollingElement) {
    return a.scrollingElement
  }
  a = !h && a.compatMode === 'CSS1Compat' ? a.documentElement : a.body
  a || invariantViolation('null result in getDocumentScrollElement')
  return a
}
