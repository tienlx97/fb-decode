'use client'

import * as React from 'react'
import { TetraText } from '@metamon/text'
import { TetraButton, CometCircleButton } from '@metamon/button'
import { CometFormTextArea } from '@metamon/textarea'
import { CometFormTextInput } from '@metamon/input'
import { CometSwitch } from '@metamon/switch'
import { CometFormSelectOnlyCombobox } from '@metamon/combobox'

// import { TetraButton } from '@fb/tetra-button'
import {
  CaretDownFilled,
  CaretDownSvg,
  // CometCircleButton,
  // legacySVGIcon,
  // CometFormTextArea,
  // CometFormTextInput,
  // CometSwitch,
  // CometFormSelectOnlyCombobox,
} from 'fb'

export const Default = () => {
  const [state, setState] = React.useState(
    'だれでもない。だれ　でもいたくないです。',
  )

  const [password, setPassword] = React.useState('Lexuantien1997')

  const [switchVal, setSwitchVal] = React.useState(true)

  const [comboboxValue, setComboboxValue] = React.useState('MARRIED_NAME')

  return (
    <div style={{ width: '440px' }}>
      <div style={{ margin: '3rem' }}>
        <TetraButton
          tooltip="Fake tooltip"
          tooltipPosition="end"
          label="Create"
          reduceEmphasis
          addOnSecondary={<CaretDownFilled color="highlight" size={16} />}
          addOnPrimary={<CaretDownFilled color="highlight" size={16} />}
          icon={CaretDownSvg}
        />
      </div>

      {/* <TetraText color="secondary" align="center" type="body2">
        You're all caught up for now. Be sure to check for more updates soon.
      </TetraText>

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
      </div>

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

      <CometSwitch
        disabled={false}
        size="small"
        value={switchVal}
        onClick={() => setSwitchVal(!switchVal)}
      >
        Works at Freelancer
      </CometSwitch>

      <div style={{ margin: '1rem' }}>
        <CometFormSelectOnlyCombobox
          disabled={false}
          label="Name type"
          value={comboboxValue}
          onValueChange={setComboboxValue}
          options={[
            {
              label: 'Nickname',
              value: 'NICKNAME',
            },
            {
              label: 'Maiden Name',
              value: 'MAIDEN_NAME',
            },
            {
              label: 'Alternate Spelling',
              value: 'ALTERNATE_SPELLING',
            },
            {
              label: 'Married Name',
              value: 'MARRIED_NAME',
            },
            {
              label: "Father's Name",
              value: 'FATHERS_NAME',
            },
            {
              label: 'Birth Name',
              value: 'BIRTH_NAME',
            },
            {
              label: 'Former Name',
              value: 'FORMER_NAME',
            },
            {
              label: 'Name with Title',
              value: 'NAME_WITH_TITLE',
            },
            {
              label: 'Other',
              value: 'OTHER',
            },
          ]}
        />
      </div> */}
    </div>
  )
}
