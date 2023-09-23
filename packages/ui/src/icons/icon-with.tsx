'use client'

import React, { type SVGProps } from 'react'

import Document from './document'
import Home from './home'
import Notification from './notification'

export default function IconWith({
  name,
  selected,
  ...props
}: {
  name: string
  selected?: boolean
} & SVGProps<SVGSVGElement>) {
  switch (name) {
    case 'document':
      return <Document selected={selected} {...props} />
    case 'home':
      return <Home selected={selected} {...props} />
    default:
      return <Notification selected={selected} {...props} />
  }
}
