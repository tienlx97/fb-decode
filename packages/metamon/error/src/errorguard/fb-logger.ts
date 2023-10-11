import FBLogMessage from './fb-log-message'

function FBLogger(projectName: string, occurAt?: string) {
  const fbLogMessage = new FBLogMessage(projectName)
  return occurAt != undefined
    ? fbLogMessage.event(projectName + '.' + occurAt)
    : fbLogMessage
}

export default FBLogger
export { FBLogger }
