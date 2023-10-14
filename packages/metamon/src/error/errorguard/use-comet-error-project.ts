import React, { useContext } from 'react'
import { CometErrorProjectContext } from '@metamon/context'

function useCometErrorProject() {
  return useContext(CometErrorProjectContext)
}
export default useCometErrorProject
export { useCometErrorProject }
