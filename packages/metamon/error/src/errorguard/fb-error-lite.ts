import TaalOpcodes from '../utils/taal-opcodes'
import { Error2 } from './error-2'

function fbErrorLite(msg: string, ...args: any) {
  const err = new Error2(msg)
  if (err.stack === void 0)
    try {
      throw err
    } catch (e) {
      //
    }
  err.messageFormat = msg
  err.messageParams = args.map((a: any) => String(a))
  err.taalOpcodes = [TaalOpcodes.PREVIOUS_FRAME]
  return err
}

export default fbErrorLite
export { fbErrorLite }
