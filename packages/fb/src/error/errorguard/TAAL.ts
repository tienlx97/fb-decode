import { TAALOpcodes } from '../utils'
import TaalOpcodes from '../utils/TAALOpcodes'
import { Error2 } from './Error2'

const taalOpcodesValue = (taalOpcodes: number[] | undefined) =>
  taalOpcodes != null ? taalOpcodes : []

const blameToPreviousFile = (error: Error2) => {
  error.taalOpcodes = taalOpcodesValue(error.taalOpcodes)
  error.taalOpcodes.push(TaalOpcodes.PREVIOUS_FILE)
  return error
}

const blameToPreviousFrame = (error: Error2) => {
  error.taalOpcodes = taalOpcodesValue(error.taalOpcodes)
  error.taalOpcodes.push(TAALOpcodes.PREVIOUS_FRAME)
  return error
}

const blameToPreviousDirectory = (error: Error2) => {
  error.taalOpcodes = taalOpcodesValue(error.taalOpcodes)
  error.taalOpcodes.push(TAALOpcodes.PREVIOUS_DIR)
  return error
}

const TAAL = {
  blameToPreviousFile,
  blameToPreviousFrame,
  blameToPreviousDirectory,
}

export default TAAL
export { blameToPreviousFile, blameToPreviousFrame, blameToPreviousDirectory }
