'use client'

import * as React from 'react'
import { TetraText } from '@fb/tetra-text'
import { TetraButton } from '@fb/tetra-button'

export const Default = () => (
  <div style={{ width: '440px' }}>
    <TetraText color="secondary" align="center" type="body2">
      You're all caught up for now. Be sure to check for more updates soon.
    </TetraText>

    <TetraButton
      onPress={() => console.log('setting')}
      padding="normal"
      label="Create post"
      type="primary"
      size="medium"
    />
  </div>
)
