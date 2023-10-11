import React, {
  ReactNode,
  createContext,
  useId,
  useMemo,
  useState,
} from 'react'
import { useDelayedState } from '@metamon/hooks'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

type ContainerProps = {
  children?: ReactNode
  tooltipImpl?: any
}

type InternalContextProps = {
  activeContentKey: any
  isVisible: any
  onHide: (a: any, b: any) => void
  onShow: (a: any, b: any, c: any) => void
  tooltipIdentifier: string
}

const InternalContext = createContext<InternalContextProps | undefined>(
  undefined,
)

export function Container({ children, tooltipImpl }: ContainerProps) {
  const [isVisible, setVisible] = useDelayedState(false)
  const [tooltipImplProps, setTooltipImplProps] = useState<any>(null)

  const tooltipIdentifier = useId()

  const activeContentKey =
    tooltipImplProps && tooltipImplProps.contentKey
      ? tooltipImplProps.contentKey
      : null

  const internalContextValue = useMemo(() => {
    return {
      activeContentKey: activeContentKey,
      isVisible: isVisible,
      onHide: function (a: any, b: any) {
        setVisible(!1, a, b)
      },
      onShow: function (a: any, b: any, c: any) {
        setTooltipImplProps(a)
        setVisible(!0, b, c)
      },
      tooltipIdentifier,
    }
  }, [activeContentKey, isVisible, tooltipIdentifier, setVisible])

  return jsxs(React.Fragment, {
    children: [
      jsx(InternalContext.Provider, {
        value: internalContextValue,
        children,
      }),
      tooltipImplProps
        ? jsx(
            tooltipImpl,
            Object.assign({}, tooltipImplProps, {
              id: isVisible ? tooltipIdentifier : void 0,
              isVisible: isVisible,
            }),
          )
        : null,
    ],
  })
}

export const Context = InternalContext
