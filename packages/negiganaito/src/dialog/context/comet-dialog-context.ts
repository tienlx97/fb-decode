import { FBLogger } from '@negiganaito/error'
import React from 'react'

function a() {
  FBLogger('comet_ui')
    .blameToPreviousFrame()
    .mustfix(
      'Attempted to imperatively render a dialog without CometTransientDialogProvider in the tree. This is not allowed. Please add a CometTransientDialogProvider to render a dialog (https://fburl.com/dialog-provider).',
    )
}

type CometDialogProps = any

export const CometDialogContext = React.createContext<CometDialogProps>(a)
