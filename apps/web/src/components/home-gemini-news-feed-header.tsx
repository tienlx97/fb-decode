import { useHomeGeminiFeedPreferencesDialog } from '@/hooks/use-home-gemini-feed-preferences-dialog'
import { makeStyles } from '@griffel/react'
import {
  CometFormInputWrapper,
  CometFormSelectOnlyCombobox,
  CometIcon,
  CometRow,
  CometRowItem,
  TetraText,
  TetraTextPairing,
  fbicon,
} from '@negiganaito/react-components'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

function getComboboxItems() {
  const icons = [
    {
      value: 'h_nor',
      label: 'Most relevant',
      icon: fbicon(
        {
          sprited: 2,
          spi: '/assets/workplace/m1poOTDbpnT.png',
          _spi: '/assets/workplace/m1poOTDbpnT.png',
          w: 20,
          h: 20,
          p: '0 -25px',
          sz: 'auto',
          loggingID: '602180',
        },
        20,
      ),
      testid: 'news-feed-sorting-option-relevance',
    },
    {
      value: 'h_chr',
      label: 'Most recent',
      icon: fbicon(
        {
          sprited: 2,
          spi: '/assets/workplace/m1poOTDbpnT.png',
          _spi: '/assets/workplace/m1poOTDbpnT.png',
          w: 20,
          h: 20,
          p: '0 -46px',
          sz: 'auto',
          loggingID: '1956559',
        },
        20,
      ),
      testid: 'news-feed-sorting-option-recent',
    },
    {
      value: 'h_seen',
      label: 'Previously viewed',
      icon: fbicon(
        {
          sprited: 2,
          spi: '/assets/workplace/m1poOTDbpnT.png',
          _spi: '/assets/workplace/m1poOTDbpnT.png',
          w: 20,
          h: 20,
          p: '0 -67px',
          sz: 'auto',
          loggingID: '713019',
        },
        20,
      ),
      testid: 'news-feed-sorting-option-seen',
    },
  ]
  return icons
}

const useStyles = makeStyles({
  dummy: {
    paddingTop: '16px',
    paddingRight: '16px',
    paddingBottom: '16px',
    paddingLeft: '16px',
  },
})

export function HomeGeminiNewsFeedHeader() {
  const classes = useStyles()

  const b = useHomeGeminiFeedPreferencesDialog()
  const e = b[0]

  return jsxs(CometRow, {
    paddingHorizontal: 0,
    paddingVertical: 12,
    children: [
      jsx(CometRowItem, {
        expanding: !0,
        verticalAlign: 'center',
        children: jsx(TetraTextPairing, {
          body: jsx(TetraText, {
            color: 'secondary',
            type: 'body4',
            children: 'Discover posts from across your organization',
          }),
          headline: 'Feed',
          level: 2,
        }),
      }),
      jsx(CometRowItem, {
        verticalAlign: 'center',
        children: jsx(CometFormSelectOnlyCombobox, {
          align: 'end',
          label: 'Sort',
          onValueChange: (a: any) => {
            // a = d('ChannelGeminiNavFeedBookmarkMetaHelper').getItemUrlByParamValue(
            //   a,
            // )
            // a != null && (f == null ? void 0 : f.go(a.toString(), {}))
          },
          options: getComboboxItems(),
          size: 'small',
          testid: void 0,
          value: 'h_nor',
        }),
      }),
      jsx(CometRowItem, {
        verticalAlign: 'center',
        children: jsx('div', {
          'data-testid': void 0,
          children: jsx(CometFormInputWrapper, {
            cursor: 'pointer',
            hideLabel: !0,
            label: 'Manage your Feed',
            onPress: () => {
              return e()
            },
            children: () => {
              return jsx('div', {
                className: classes.dummy,
                children: jsx(CometIcon, {
                  color: 'secondary',
                  icon: fbicon(
                    {
                      sprited: 2,
                      spi: '/assets/workplace/m1poOTDbpnT.png',
                      _spi: '/assets/workplace/m1poOTDbpnT.png',
                      w: 24,
                      h: 24,
                      p: '0 0',
                      sz: 'auto',
                      loggingID: '496357',
                    },
                    24,
                  ),
                }),
              })
            },
          }),
        }),
      }),
    ],
  })
}
