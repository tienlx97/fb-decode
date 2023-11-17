import { makeStyles } from '@griffel/react'
import { TetraButton } from '@negiganaito/button'
import { CometImage, TetraText } from '@negiganaito/index'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '24px',
    paddingRight: '32px',
    paddingBottom: '24px',
    paddingLeft: '32px',
    textAlign: 'center',
  },
  icon: {
    marginBottom: '12px',
  },
  title: {
    marginBottom: '12px',
  },
  subtitle: {
    marginBottom: '20px',
  },

  dummy1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '24px',
    paddingRight: '32px',
    paddingBottom: '24px',
    paddingLeft: '32px',
    textAlign: 'center',
  },

  dummy2: {
    marginBottom: '12px',
  },

  dummy3: {
    marginBottom: '20px',
  },
})

type WorkChannelNetworkErrorStateProps = {
  onRetry?: any
}

export function WorkChannelNetworkErrorState({
  onRetry,
}: WorkChannelNetworkErrorStateProps) {
  const classes = useStyles()

  return jsxs('div', {
    className: classes.dummy1,
    // 'x78zum5 xdt5ytf x6s0dn4 x1p5oq8j xqmdsaz xwxc41k x1xfsgkm x2b8uid',
    children: [
      jsx(CometImage, {
        src: {
          sprited: 2,
          spi: '/assets/workplace/IjAAeicFMW8.png',
          _spi: '/assets/workplace/IjAAeicFMW8.png',
          w: 24,
          h: 24,
          p: '0 -175px',
          sz: 'auto',
        },
        className: classes.icon,
      }),
      jsx('div', {
        className: classes.dummy2, // 'xod5an3',
        children: jsx(TetraText, {
          color: 'primary',
          type: 'headline3',
          children: 'Connection error',
        }),
      }),
      jsx('div', {
        className: classes.dummy3, // 'xieb3on',
        children: jsx(TetraText, {
          color: 'secondary',
          type: 'headline4',
          children: 'Please check your Internet connection.',
        }),
      }),
      jsx(TetraButton, {
        label: 'Try Again',
        onPress: onRetry,
        type: 'secondary',
      }),
    ],
  })
}
