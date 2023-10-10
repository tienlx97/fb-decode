import { createContext } from 'react'

type LayoutAnimationBoundaryContextProps = any

const LayoutAnimationBoundaryContext = createContext<
  LayoutAnimationBoundaryContextProps | undefined
>(undefined)

export default LayoutAnimationBoundaryContext
