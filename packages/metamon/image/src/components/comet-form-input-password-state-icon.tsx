import React from 'react'
import CometIcon from './comet-icon/comet-icon'
import { fbicon } from './fbicon'

type CometFormInputPasswordStateIconProps = {
  isVisible: boolean
}

export default function CometFormInputPasswordStateIcon({
  isVisible,
}: CometFormInputPasswordStateIconProps) {
  if (isVisible) {
    return (
      <CometIcon
        aria-label="Hide password"
        color="primary"
        icon={fbicon(
          {
            sprited: 2,
            spi: '/assets/fb/u2pSNQP57bj.png',
            _spi: '/assets/fb/u2pSNQP57bj.png',
            w: 20,
            h: 20,
            p: '0 -229px',
            sz: 'auto',
          },
          20,
        )}
      />
    )
  } else {
    return (
      <CometIcon
        aria-label="Show password"
        icon={fbicon({
          sprited: 2,
          spi: '/assets/fb/muzj8gfJ9FD.png',
          _spi: '/assets/fb/muzj8gfJ9FD.png',
          w: 20,
          h: 20,
          p: '0 -624px',
          sz: 'auto',
          loggingID: '491223',
        })}
        color={'primary'}
      />
    )
  }
}
