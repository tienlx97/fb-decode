import { makeStyles, shorthands } from '@fluentui/react-components'
import React from 'react'

export const useStyles = makeStyles({
  alignIcon: {
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'var(--switch-active)',
    bottom: '0',
    boxSizing: 'border-box',
    right: 0,
    opacity: 0,
    pointerEvents: 'none',
    position: 'absolute',
    left: 0,
    top: 0,
    transitionDuration: 'var(--fds-duration-extra-short-out)',
    transitionProperty: 'opacity',
    transitionTimingFunction: 'var(--fds-animation-move-out)',
  },
  backgroundActive: {
    opacity: 1,
    transitionDuration: 'var(--fds-duration-extra-short-in)',
    transitionTimingFunction: 'var(--fds-animation-move-in)',
  },
  disabled: {
    opacity: 0.4,
    transitionDuration: 'var(--fds-duration-extra-short-in)',
    transitionTimingFunction: 'var(--fds-animation-move-in)',
  },
  innerShadow: {
    ...shorthands.borderRadius('14px'),

    boxShadow: 'inset 0 0 0 .5px var(--media-inner-border)',
    height: '28px',
    width: '52px',
  },
  slider: {
    backgroundColor: 'var(--always-white)',
    ...shorthands.borderRadius('12px'),

    boxShadow: '0 1px 2px var(--shadow-5)',
    height: '24px',
    pointerEvents: 'none',
    position: 'absolute',
    left: '2px',
    top: '2px',
    transitionDuration: 'var(--fds-duration-extra-short-out)',
    transitionProperty: 'transform',
    transitionTimingFunction: 'var(--fds-animation-move-out)',
    width: '24px',
  },
  sliderActive: {
    transitionDuration: 'var(--fds-duration-extra-short-in)',
    transitionTimingFunction: 'var(--fds-animation-move-in)',
  },
  sliderActiveLeft: {
    transform: 'translateX(-24px)',
  },
  sliderActiveLeftSmall: {
    transform: 'translateX(-20px)',
  },
  sliderActiveRight: {
    transform: 'translateX(24px)',
  },
  sliderActiveRightSmall: {
    transform: 'translateX(20px)',
  },
  sliderIconContainer: {
    height: '100%',
    width: '100%',
  },
  sliderSmall: {
    height: '20px',
    width: '20px',
  },
  switch: {
    backgroundColor: 'var(--divider)',
    ...shorthands.borderRadius('14px'),

    boxSizing: 'border-box',
    display: 'inline-block',
    height: '28px',
    opacity: 1,
    overflowX: 'hidden',
    overflowY: 'hidden',
    ...shorthands.padding(0),

    position: 'relative',
    transitionDuration: 'var(--fds-duration-extra-short-out)',
    transitionProperty: 'opacity',
    transitionTimingFunction: 'var(--fds-animation-move-out)',
    width: '52px',
  },
  switchSmall: {
    ...shorthands.borderRadius('12px'),
    height: '24px',
    width: '44px',
  },
})
