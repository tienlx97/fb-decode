import { FBLogger } from '@negiganaito/error'

var isBrowser = typeof window !== 'undefined'

export const noop = function (a: any) {
  return a
}

export function noopAndLog(a: any) {
  var b =
    isBrowser && typeof window.origin !== 'undefined'
      ? window.origin
      : 'undefined'
  FBLogger('saf_web_trusted_types_rollout', b)
    .blameToPreviousFrame()
    .blameToPreviousFrame()
    .warn(a)
  return a
}
export function logInfo(a: any) {
  FBLogger('saf_web').info(
    '[Trusted-Types][%s]: %s',
    isBrowser && typeof window.origin !== 'undefined'
      ? window.origin
      : 'undefined',
    a,
  )
}
export function logWarning(a: any) {
  FBLogger('saf_web').warn(
    '[Trusted-Types][%s]: %s',
    isBrowser && typeof window.origin !== 'undefined'
      ? window.origin
      : 'undefined',
    a,
  )
}
export function logError(a: any) {
  FBLogger('saf_web').mustfix(
    '[Trusted-Types][%s]: %s',
    isBrowser && typeof window.origin !== 'undefined'
      ? window.origin
      : 'undefined',
    a,
  )
}
export function logDefaultPolicySanitization(a: any, b: any) {
  logWarning(
    "String '" +
      a.toString().slice(0, 15) +
      "' is flowing to DOM XSS sink. Default Trusted Type policy was executed and removed dangerous elements. " +
      ("Returned string is: '" +
        b.toString().slice(0, 15) +
        "' If this is breaking your feature, post in ") +
      'Security Infra group.',
  )
}

export const TrustedTypesUtils = {
  isBrowser,
  noop,
  noopAndLog,
  logError,
  logWarning,
  logDefaultPolicySanitization,
}
