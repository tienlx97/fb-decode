import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { ChannelGeminiNavTextHeaderBase } from './channel-gemini-nav-text-header-base'

type WorkGalahadNavTextHeaderProps = {
  action?: any
  indented?: boolean
  subtitle?: any
  title?: any
  titleSize?: 'EXTRA_LARGE' | 'LARGE'
  className?: string
}

export default function WorkGalahadNavTextHeader({
  action,
  indented = true,
  subtitle,
  title,
  titleSize = 'LARGE',
  className,
}: WorkGalahadNavTextHeaderProps) {
  return (
    <ChannelGeminiNavTextHeaderBase
      action={action}
      intented={indented}
      subtitle={subtitle}
      title={title ? calculateTitle(title, titleSize) : undefined}
      className={className}
    />
  )

  // return jsx(ChannelGeminiNavTextHeaderBase, {
  //   action,
  //   indented,
  //   subtitle,
  //   title: title ? calculateTitle(title, titleSize) : undefined,
  //   className,
  // })
}

function calculateTitle(title: any, titleSize: string) {
  switch (titleSize) {
    case 'EXTRA_LARGE':
      return <ChannelGeminiNavTextHeaderBase.ExtraLargeTitle title={title} />
    case 'LARGE':
    default:
      return <ChannelGeminiNavTextHeaderBase.LargeTitle title={title} />
  }
}
