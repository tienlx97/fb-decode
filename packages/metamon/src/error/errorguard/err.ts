import expect from '../utils/expect'
import { PREVIOUS_FRAME } from '../utils/taal-opcodes'
import { Error2 } from './error-2'

function err(msg: string, ...agrs: any[]) {
  const error = new Error2(msg)
  if (expect.toBeUndefined(error.stack))
    try {
      throw error
    } catch (a) {
      //
    }

  error.messageFormat = msg

  error.messageParams = agrs.map(agr => String(agr))

  error.taalOpcodes = [PREVIOUS_FRAME]
  return error
}
export default err
export { err }
