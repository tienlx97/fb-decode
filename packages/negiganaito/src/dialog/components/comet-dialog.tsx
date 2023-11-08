import React, {
  forwardRef,
  ReactNode,
  ReactHTML,
  HTMLProps,
  useId,
} from 'react'
import { CometDialogPage, CometDialogPageProps } from './comet-dialog-page'
import {
  CometDialogContainer,
  CometDialogContainerProps,
} from './comet-dialog-container'

type CometDialogProps = CometDialogContainerProps & CometDialogPageProps

function CometDialog(props: CometDialogProps, ref: React.Ref<HTMLDivElement>) {
  const {
    anchorXStyle,
    disableClosingWithMask,
    header,
    label,
    labelledBy,
    onClose,
    size,
    testid,
    ...rest
  } = props

  const dialogId = useId()

  let dialogHeader = header
  if (header && !header.props.id) {
    dialogHeader = React.cloneElement(header, { id: dialogId })
  }

  return (
    <CometDialogContainer
      anchorXStyle={anchorXStyle}
      disableClosingWithMask={disableClosingWithMask}
      label={label}
      labelledBy={labelledBy || dialogHeader?.props.id}
      onClose={onClose}
      ref={ref}
      size={size}
      testid={undefined}
    >
      <CometDialogPage header={dialogHeader} {...rest} />
    </CometDialogContainer>
  )
}

export  forwardRef(CometDialog)
