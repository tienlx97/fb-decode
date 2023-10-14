import React, { useContext } from 'react'
import CometErrorProjectContext from '../context/CometErrorProjectContext'

function useCometErrorProject() {
  return useContext(CometErrorProjectContext)
}
export default useCometErrorProject
export { useCometErrorProject }
