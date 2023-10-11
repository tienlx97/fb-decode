import ErrorNormalizeUtils from './error-normalize-utils'
import ErrorSerializer from './error-serializer'
import { getErrorSafe } from './get-error-safe'
import ErrorGuardState from './error-guard-state'
import ErrorPubSub from './error-pubsub'
import { Error2 } from './error-2'
import { NormalizeErrorProps } from './types'

const oa = '<anonymous guard>'
let guardGlobalFlag = !1

function applyWithGuard(a: any, b: any, c: any, nError: NormalizeErrorProps) {
  ErrorGuardState.pushGuard({
    name:
      ((nError === null || nError === void 0 ? void 0 : nError.name) != null
        ? nError.name
        : null) ||
      (a.name ? 'func_name:' + a.name : null) ||
      oa,
    deferredSource:
      nError === null || nError === void 0 ? void 0 : nError.deferredSource,
  })
  if (guardGlobalFlag)
    try {
      return a.apply(b, c)
    } finally {
      ErrorGuardState.popGuard()
    }
  try {
    return Function.prototype.apply.call(a, b, c)
  } catch (h) {
    try {
      b = nError !== null && nError !== void 0 ? nError : {}
      let e = b.deferredSource
      const f = b.onError
      b = b.onNormalizedError
      const sError: Error2 = getErrorSafe(h)
      e = {
        deferredSource: e,
        loggingSource: 'GUARDED',
        project:
          (e =
            nError === null || nError === void 0 ? void 0 : nError.project) !==
            null && e !== void 0
            ? e
            : 'ErrorGuard',
        type: nError === null || nError === void 0 ? void 0 : nError.errorType,
      }
      ErrorSerializer.aggregateError(sError, e)
      nError = ErrorNormalizeUtils.normalizeError(sError)
      sError == null &&
        a &&
        // @ts-ignore
        ((nError.extra[a.toString().substring(0, 100)] = 'function'),
        c != null &&
          c.length &&
          // @ts-ignore
          (nError.extra[Array.from(c).toString().substring(0, 100)] = 'args'))
      nError.guardList = ErrorGuardState.cloneGuardList()
      f && f(sError)
      b && b(nError)
      ErrorPubSub.reportNormalizedError(nError)
    } catch (a) {
      //
    }
  } finally {
    ErrorGuardState.popGuard()
  }
}

function guard(a: any, b: any) {
  function c(...args: any) {
    // @ts-ignore
    return applyWithGuard(a, this, args, b)
  }
  a.__SMmeta && (c.__SMmeta = a.__SMmeta)
  return c
}

function inGuard() {
  return ErrorGuardState.inGuard()
}

function skipGuardGlobal(flag: boolean) {
  guardGlobalFlag = flag
}

const ErrorGuard = {
  skipGuardGlobal,
  inGuard,
  guard,
  applyWithGuard,
}

export default ErrorGuard
export { skipGuardGlobal, inGuard, guard, applyWithGuard }
