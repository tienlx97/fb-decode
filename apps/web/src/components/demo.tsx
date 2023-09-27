'use client'

import * as React from 'react'
import { TetraText } from '@fb/tetra-text'
import { TetraButton } from '@fb/tetra-button'
import {
  CaretDownFilled,
  CaretDownSvg,
  CometCircleButton,
  legacySVGIcon,
} from 'fb'

export const Default = () => (
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
    /> */}

    <CometCircleButton
      icon={CaretDownSvg}
      size={40}
      type="primary-background-overlay"
      color="baseLime"
    />
  </div>
)
