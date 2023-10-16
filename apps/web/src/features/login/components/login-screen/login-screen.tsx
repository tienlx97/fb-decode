'use client'

import React, { ReactNode } from 'react'

import { Logo } from '../logo'
import { useStyles } from './styles'

export default function LoginScreen({ children }: { children?: any }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Logo />
      {children}
    </div>
  )
}
