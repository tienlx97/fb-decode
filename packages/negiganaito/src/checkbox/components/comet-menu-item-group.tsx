import { makeStyles } from '@griffel/react'
import { TetraText } from '@negiganaito/text'
import { forwardRef, useId } from 'react'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'

type CometMenuItemGroupProps = {
  label?: any
  children?: any
}

const useStyles = makeStyles({
  root: {
    paddingTop: '12px',
    paddingRight: '16px',
    paddingBottom: '12px',
    paddingLeft: '16px',
  },
})

export const CometMenuItemGroup = forwardRef<any, CometMenuItemGroupProps>(
  ({ children, label }, ref) => {
    const classes = useStyles()

    const id = useId()

    return jsxs('div', {
      'aria-labelledby': id,
      ref,
      role: 'group',
      children: [
        jsx('div', {
          className: classes.root,
          children: jsx(TetraText, {
            id,
            type: 'headlineEmphasized3',
            children: label,
          }),
        }),
        children,
      ],
    })
  },
)
