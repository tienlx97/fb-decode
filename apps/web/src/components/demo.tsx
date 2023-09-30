'use client'

import * as React from 'react'
import { TetraText } from '@fb/tetra-text'
import { TetraButton } from '@fb/tetra-button'
import {
  CaretDownFilled,
  CaretDownSvg,
  CometCircleButton,
  legacySVGIcon,
  CometFormTextArea,
  CometFormTextInput,
} from 'fb'

export const Default = () => {
  const [state, setState] = React.useState(
    'だれでもない。だれ　でもいたくないです。',
  )

  const [password, setPassword] = React.useState('Lexuantien1997')

  return (
    <div style={{ width: '440px' }}>
      <TetraText color="secondary" align="center" type="body2">
        You're all caught up for now. Be sure to check for more updates soon.
      </TetraText>

      {/* <TetraButton
        label="Create"
        reduceEmphasis
        addOnSecondary={<CaretDownFilled color="highlight" size={16} />}
        addOnPrimary={<CaretDownFilled color="highlight" size={16} />}
        icon={CaretDownSvg}
      />

      <CometCircleButton
        icon={CaretDownSvg}
        size={40}
        // type="primary-background-overlay"
        color="black"
      />

      <div style={{ margin: '1rem' }}>
        <CometFormTextArea
          label="Favorite quotes"
          disabled={false}
          value={state}
          onValueChange={(val, e) => {
            setState(val)
          }}
          minRows={3}
        />
      </div> */}

      <div style={{ margin: '1rem' }}>
        <CometFormTextInput
          label="Password"
          type="password"
          value={password}
          validationState={null}
          onValueChange={(val, e) => {
            setPassword(val)
          }}
          helperText=""
          testid={undefined}
        />
      </div>
    </div>
  )
}
