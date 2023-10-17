import { makeStyles, shorthands } from '@griffel/react'

export const useStyles = makeStyles({
  displayBlock: {
    display: 'block',
  },

  contentDisabled: {
    opacity: 0.3,
  },
  darkOverlay: {
    backgroundColor: 'var(--always-dark-overlay)',
    color: 'var(--always-white)',
  },
  darkOverlayPressed: {
    backgroundColor: 'var(--non-media-pressed)',
  },
  disabled: {
    backgroundColor: 'var(--disabled-button-background)',
  },
  fdsOverrideBlack: {
    backgroundColor: 'var(--always-black)',
  },
  fdsOverrideCollaborativePostCTA: {
    backgroundColor: 'var(--always-white)',
    mixBlendMode: 'lighten',
  },
  fdsOverrideNegative: {
    backgroundColor: 'var(--negative)',
  },
  fdsOverridePositive: {
    backgroundColor: 'var(--positive)',
  },
  overlay: {
    backgroundColor: 'var(--always-white)',
  },
  overlayDeemphasized: {
    backgroundColor: 'var(--always-light-overlay)',
  },
  overlayDeemphasizedOverlayPressed: {
    backgroundColor: 'var(--always-light-overlay)',
  },
  overlayDisabled: {
    backgroundColor: 'var(--progress-ring-on-media-background)',
  },
  overlayOverlayPressed: {
    backgroundColor: 'var(--shadow-1)',
  },
  paddingIconOnly: {
    paddingRight: '1rem',
    paddingLeft: '1rem',
  },
  primary: {
    backgroundColor: 'var(--primary-button-background)',
  },
  primaryDeemphasized: {
    backgroundColor: 'var(--primary-deemphasized-button-background)',
  },
  primaryDeemphasizedOverlayPressed: {
    backgroundColor: 'var(--primary-deemphasized-button-pressed-overlay)',
  },
  primaryOverlayPressed: {
    backgroundColor: 'var(--press-overlay)',
  },
  secondary: {
    backgroundColor: 'var(--secondary-button-background)',
  },
  secondaryDeemphasized: {
    backgroundColor: 'transparent',
  },
  secondaryDeemphasizedOverlayPressed: {
    backgroundColor: 'var(--primary-deemphasized-button-pressed-overlay)',
  },
  secondaryOverlayPressed: {
    backgroundColor: 'var(--press-overlay)',
  },
  sizeLarge: {
    height: 'var(--button-height-large)',
  },
  sizeMedium: {
    height: 'var(--button-height-medium)',
  },
})

export const useBlueprintStyles = makeStyles({
  sizeLarge: {
    ...shorthands.borderRadius('var(--button-corner-radius-large)'),
    height: 'var(--blueprint-button-height-large)',
  },
  sizeMedium: {
    ...shorthands.borderRadius('var(--button-corner-radius-medium)'),
    height: 'var(--blueprint-button-height-medium)',
  },
})
