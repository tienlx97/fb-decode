import { makeStyles, shorthands } from '@fluentui/react-components'

export const useStyles = makeStyles({
  navigationSticky: {
    width: '100%',
    position: 'sticky',
    top: 0,
  },
  navigationFixed: {
    position: 'fixed',
    minWidth: '96px',
    top: '0',
    '@media (min-width: 1921px)': {
      marginLeft: 0,
    },
  },
  navigationFixedWP4MAppBar: {
    minWidth: '56px',
  },
  navigationInner: {
    top: '0',
    height: '100vh',
    width: '100%',
    maxWidth: 'inherit',
    flexDirection: 'row',
    display: 'flex',
    boxSizing: 'border-box',
  },
  navigationInnerWithBannerNarrowBuffer: {
    paddingTop: '22px',
  },
  navigationAppNavList: {
    width: '96px',
    minWidth: '96px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  navigationAppNavListWP4MAppBar: {
    width: '56px',
    minWidth: '56px',
  },
  navigationBuffer: {
    width: '100%',
    height: '100%',
  },
  channelWrapper: {
    width: '100%',
    minWidth: '300px',
    maxWidth: '420px',
  },
  channelWrapperHidden: {
    display: 'none',
  },
  channelWrapperAutoHideButVisible: {
    position: 'absolute',
    left: '96px',
    width: '420px',
    ...shorthands.borderRadius(0),
    borderTopLeftRadius: '0',
    borderTopRightRadius: '12px',
    borderBottomRightRadius: '12px',
    borderBottomLeftRadius: '0',
    boxShadow:
      '1px 0 2px 0 var(--fds-black-alpha-05),2px 0 6px 2px var(--fds-black-alpha-05)',
  },
  channelWrapperAutoHideButVisibleWP4MAppBar: {
    left: '56px',
  },
  content: {
    display: 'flex',
    minWidth: '0',
    flexBasis: '870px',
    flexDirection: 'column',
    flexGrow: 4,
    flexShrink: 1,
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: 'var(--divider)',
    boxSizing: 'border-box',
    '@media print': {
      borderRightStyle: 'none',
    },
  },
  contentFullHeight: {
    alignSelf: 'stretch',
    height: 'auto',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  contentWithTopBannerNarrowBuffer: {
    paddingTop: '22px',
  },
  header: {
    zIndex: 2,
    backgroundColor: 'var(--wig-page-background)',
  },
  headerSticky: {
    position: 'sticky',
  },
  headerFixed: {
    top: '0',
    width: '100%',
    position: 'fixed',
    zIndex: 2,
    backgroundColor: 'var(--wig-page-background)',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: 'var(--divider)',
    maxWidth: 'calc(100% - 96px)',
    minWidth: '1266px',
    '@media (min-width: 1921px)': {
      maxWidth: '1504px',
    },
  },
  headerFixedWP4MAppBar: {
    maxWidth: 'calc(100% - 56px)',
    minWidth: '1226px',
    '@media (min-width: 1921px)': {
      maxWidth: '1544px',
    },
  },
  headerFixedFluid: {
    maxWidth: 'calc(100% - 96px)',
    minWidth: '1170px',
    '@media (min-width: 1921px)': {
      maxWidth: 'calc(100% - 96px)',
    },
  },
  headerFixedFluidWP4MAppBar: {
    maxWidth: 'calc(100% - 56px)',
    '@media (min-width: 1921px)': {
      maxWidth: 'calc(100% - 56px)',
    },
  },
  coverPhoto: {
    height: '300px',
    width: '100%',
  },
  headerContents: {
    boxSizing: 'border-box',
    paddingTop: '16px',
    paddingBottom: '8px',
    paddingLeft: '16px',
    paddingright: '16px',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'var(--divider)',
  },
  headerContentsConstrastBackground: {
    backgroundColor: 'var(--surface-background)',
  },
  headerInfo: {},
  headerInfoBuffer: {
    height: '85px',
    width: '100%',
  },
  headerNavigation: {
    height: '35px',
  },
  headerNavigationBuffer: {
    height: '35px',
    width: '100%',
  },
  entityWrapper: {
    display: 'flex',
    flexDirection: 'row-reverse',
    flexGrow: '1',
  },
  entityContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '0',
    minWidth: '0',
    flexGrow: '1',
  },
  entityContentColumnBase: {
    marginTop: '20px',
  },
  entityContentColumnNarrow: {
    width: '500px',
  },
  entityContentColumnFeedWider: {
    width: 'calc(100% - 40px)',
    maxWidth: '680px',
  },
  entityContentColumnWide: {
    width: 'calc(100% - 40px)',
    maxWidth: '806px',
  },
  entityContentColumnFullWithMargins: {
    width: 'calc(100% - 40px)',
  },
  entityContentColumnFull: {
    width: '100%',
  },
  entityContentStretchedCenterContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickChatBuffer: {
    height: '44px',
    flexShrink: 0,
  },
  fixedBannerContainer: {
    position: 'fixed',
    width: '100%',
    zIndex: '10',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'var(--divider)',
    backgroundColor: 'var(--wig-page-background)',
  },
  fixedBannerContainerNarrow: {
    height: '22px',
  },
  quickchatWrapper: {
    bottom: '0',
    height: '0',
    position: 'fixed',
    width: '0',
    zIndex: '3',
    right: '0',
    '@media print': {
      display: 'none',
    },
  },
  quickchatWrapperFixedWidth: {
    '@media (min-width: 1921px)': {
      right: 'calc((100vw - 1600px) / 2)',
    },
  },
  quickchatInner: {
    position: 'absolute',
    height: '44px',
    width: '292px',
    right: '0',
  },

  dummy1: {
    width: '100%',
    height: '100%',
  },
})
