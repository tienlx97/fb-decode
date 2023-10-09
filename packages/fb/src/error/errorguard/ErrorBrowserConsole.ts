import { LogTypeString, NormalizeErrorProps } from './types'

let j = false
// TODO
// const console = window.console

const errorListener = (nError: NormalizeErrorProps, loggingSource?: string) => {
  const logType = // @ts-ignore
    (console[nError.type!] ? nError.type : 'error') as LogTypeString
  if (nError.type === 'fatal' || (logType === 'error' && !j)) {
    console.error(
      'ErrorUtils caught an error:\n\n' +
        nError.message +
        "\n\nSubsequent non-fatal errors won't be logged; see https://fburl.com/debugjs.",
    )
    j = true
  }
}

const ErrorBrowserConsole = {
  errorListener,
}

export default ErrorBrowserConsole
export { errorListener }
