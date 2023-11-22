'use client'

import * as React from 'react'
// import { TetraText } from '@negiganaito/text'
import {
  HelpCenterHeaderLanguageSelector,
  // CometTab, TetraButton,
  TetraText,
} from '@negiganaito/react-components'
import { WorkKnowledgeCustomHomePageHeaderActions } from './work-knowledge-custom-home-page-header-actions'
// import { CometFormTextArea } from '@negiganaito/textarea'
// import { CometFormTextInput } from '@negiganaito/input'
// import { CometSwitch } from '@negiganaito/switch'
// import { CometFormSelectOnlyCombobox } from '@negiganaito/combobox'

// import { TetraButton } from '@fb/tetra-button'

import JSResource from 'jsresource'

export const Default = () => {
  // const [state, setState] = React.useState(
  // eslint-disable-next-line no-irregular-whitespace
  //   'だれでもない。だれ　でもいたくないです。',
  // )

  // const [password, setPassword] = React.useState('Lexuantien1997')

  // const [switchVal, setSwitchVal] = React.useState(true)

  // const [comboboxValue, setComboboxValue] = React.useState('MARRIED_NAME')

  return (
    <div style={{ width: '440px' }}>
      <button
        onClick={() => {
          JSResource('BaseText')
        }}
      >
        123
      </button>

      {/* <div style={{ margin: '3rem' }}>
        <CometTab aria-haspopup="menu" />
      </div>

      <div style={{ margin: '5rem' }}>
        <TetraButton
          type="primary"
          tooltip="Fake tooltip"
          tooltipPosition="above"
          label="Create"
          // reduceEmphasis
          // addOnSecondary={<CaretDownFilled color="highlight" size={16} />}
          // addOnPrimary={<CaretDownFilled color="highlight" size={16} />}
          // icon={CaretDownSvg}
        />
      </div> */}
      <div style={{ display: 'none' }}>
        <TetraText color="secondary" align="center" type="body2">
          You are all caught up for now. Be sure to check for more updates soon.
        </TetraText>
      </div>

      <HelpCenterHeaderLanguageSelector
        selectedLanguage="English (US)"
        buttonTheme="secondary"
      />

      <div style={{ margin: '16px' }}>
        <WorkKnowledgeCustomHomePageHeaderActions />
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
