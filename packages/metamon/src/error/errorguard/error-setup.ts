import ErrorGlobalEventHandler from './error-global-event-handler'
import ErrorPubSub from './error-pubsub'
import ErrorPoster from './error-poster'
import ErrorUnhandledRejectionHandler from './error-unhandled-rejection-handler'
import { ErrorPosterProp, NormalizeErrorProps } from './types'

function preSetup(objSetup?: any) {
  ;(objSetup == null || objSetup.ignoreOnError !== true) &&
    ErrorGlobalEventHandler.setup(ErrorPubSub),
    (objSetup == null || objSetup.ignoreOnUnahndledRejection !== true) &&
      ErrorUnhandledRejectionHandler.setup(ErrorPubSub)
}

function setup(props: ErrorPosterProp, logFunc: any) {
  ErrorPubSub.addListener((nError: NormalizeErrorProps) => {
    ErrorPoster.postError(nError, props, logFunc)
  })
}

const ErrorSetup = {
  setup,
  preSetup,
}

export default ErrorSetup
