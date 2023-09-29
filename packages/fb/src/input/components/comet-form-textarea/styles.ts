import { makeStyles, shorthands } from '@fluentui/react-components'

export const useStyles = makeStyles({
  disabled: {
    color: 'var(--disabled-text)',
    cursor: 'not-allowed',
  },
  hideLabel: {
    marginTop: '10px',
  },
  textArea: {
    backgroundColor: 'transparent',
    ...shorthands.borderStyle('none'),
    boxSizing: 'border-box',
    color: 'var(--primary-text)',
    display: 'flex',
    fontSize: '1rem',
    fontWeight: 'normal',
    lineHeight: '1.25',
    marginBottom: '10px',
    marginTop: '26px',
    outlineStyle: 'none',
    overflowX: 'hidden',
    overflowY: 'hidden',
    paddingRight: '16px',
    paddingLeft: '16px',
    resize: 'none',
    width: '100%',
  },
})
