import { invariantViolation } from './flow-migration-utils-for-legacy-files'

const isWebkit =
  typeof navigator !== 'undefined' &&
  navigator.userAgent.indexOf('AppleWebKit') > -1

export function getDocumentScrollElement(doc?: any) {
  doc = doc || document
  if (doc.scrollingElement) {
    return doc.scrollingElement
  }
  doc =
    !isWebkit && doc.compatMode === 'CSS1Compat'
      ? doc.documentElement
      : doc.body
  doc || invariantViolation('null result in getDocumentScrollElement')
  return doc
}
