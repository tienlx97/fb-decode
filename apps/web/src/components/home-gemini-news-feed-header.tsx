import {
  CometFormSelectOnlyCombobox,
  CometRowItem,
  fbicon,
} from '@negiganaito/react-components'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

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

export function HomeGeminiNewsFeedHeader() {
  return jsx(CometRowItem, {
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
  })
}
