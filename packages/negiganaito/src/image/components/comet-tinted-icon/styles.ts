import { makeStyles } from '@griffel/react'

export const useImageStyles = makeStyles({
  image: {
    verticalAlign: '-0.25em',
  },
})

export const useFilterStyles = makeStyles({
  accent: {
    filter: 'var(--filter-accent)',
    WebkitFilter: 'var(--filter-accent)',
  },
  blueLink: {
    filter: 'var(--filter-blue-link-icon)',
    WebkitFilter: 'var(--filter-blue-link-icon)',
  },
  disabled: {
    filter: 'var(--filter-disabled-icon)',
    WebkitFilter: 'var(--filter-disabled-icon)',
  },
  negative: {
    filter: 'var(--filter-negative)',
    WebkitFilter: 'var(--filter-negative)',
  },
  placeholder: {
    filter: 'var(--filter-placeholder-icon)',
    WebkitFilter: 'var(--filter-placeholder-icon)',
  },
  positive: {
    filter: 'var(--filter-positive)',
    WebkitFilter: 'var(--filter-positive)',
  },
  primary: {
    filter: 'var(--filter-primary-icon)',
    WebkitFilter: 'var(--filter-primary-icon)',
  },
  primaryAccent: {
    filter: 'var(--filter-primary-accent)',
    WebkitFilter: 'var(--filter-primary-accent)',
  },
  secondary: {
    filter: 'var(--filter-secondary-icon)',
    WebkitFilter: 'var(--filter-secondary-icon)',
  },
  warning: {
    filter: 'var(--filter-warning-icon)',
    WebkitFilter: 'var(--filter-warning-icon)',
  },
  white: {
    filter: 'var(--filter-always-white)',
    WebkitFilter: 'var(--filter-always-white)',
  },
})
