import { FBLogger } from '@negiganaito/error'

const projectName = 'flow_typing_for_legacy_code'

export function invariantViolation(a: any) {
  FBLogger(projectName)
    .blameToPreviousFile()
    .event(projectName + '.bad_call')
    .mustfix(a)
  return new Error('[' + projectName + '] ' + a)
}
