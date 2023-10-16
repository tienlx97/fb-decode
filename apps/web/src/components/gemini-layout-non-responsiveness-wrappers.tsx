import { useGeminiLayoutUserSettingsFullWidthMode } from '@/context/gemini-layout-full-width-mode-context'
import { useNavUIState } from '@/context/gemini-nav-and-channel-context'
import { makeStyles, mergeClasses } from '@griffel/react'
import { forwardRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type GeminiLayoutPageWrapperProps = {
  children?: any
}

// k = c("GalileoNavFeatureGating").isGalileoNavMode("employee_appbar_on_workplace"),
const k = false

const useStyles = makeStyles({
  pageContainer: {
    width: '100%',
    minWidth: '1266px',
    minHeight: '100vh',
    marginTop: '0',
    marginRight: 'auto',
    marginBottom: '0',
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'var(--wig-page-background)',
    '@media print': {
      minWidth: 0,
    },
  },
  pageContainerWP4MAppBar: {
    minWidth: '1226px',
  },
  pageContainerWithoutChannel: {
    minWidth: '966px',
  },
  pageContainerWithoutChannelWP4MAppBar: {
    minWidth: '926px',
  },
  pageContainerFixedWidth: {
    '@media (min-width: 1921px)': {
      width: '1600px',
    },
  },
  lhcNavigationWrapper: {
    overflowAnchor: 'none',
    flexBasis: '96px',
    flexGrow: 1,
    flexShrink: 0,
    position: 'relative',
    minWidth: '96px',
    maxWidth: '96px',
    // TODO : bug
    zIndex: 0,
    // zIndex: 3,
    '@media print': {
      display: 'none',
    },
  },
  lhcNavigationWrapperWP4MAppBar: {
    flexBasis: '56px',
    minWidth: '56px',
    maxWidth: '56px',
  },
  lhcNavigatioWrapperWithChannel: {
    flexBasis: '396px',
    maxWidth: '516px',
  },
  lhcNavigatioWrapperWithChannelWP4MAppBar: {
    flexBasis: '356px',
    maxWidth: '476px',
  },
  lhcChannel: {},
  entityLayourWrapper: {},
})

export function GeminiLayoutPageWrapper({
  children,
}: GeminiLayoutPageWrapperProps) {
  const classes = useStyles()

  const { isAutoHideEnabled } = useNavUIState()
  const pageContainerFixedWidth = useGeminiLayoutUserSettingsFullWidthMode()
  return children(
    mergeClasses(
      classes.pageContainer,
      k && classes.pageContainerWP4MAppBar,
      isAutoHideEnabled && classes.pageContainerWithoutChannel,
      k && isAutoHideEnabled && classes.pageContainerWithoutChannelWP4MAppBar,
      !pageContainerFixedWidth && classes.pageContainerFixedWidth,
    ),
  )
}

export const GeminiLayoutLeftHandColumnWrapper = forwardRef(
  (props: any, ref) => {
    const classes = useStyles()

    const { children, onMouseEnter, onMouseLeave } = props

    const { isAutoHideEnabled } = useNavUIState()

    return jsx('div', {
      className: mergeClasses(
        classes.lhcNavigationWrapper,
        k && classes.lhcNavigationWrapperWP4MAppBar,
        !isAutoHideEnabled && classes.lhcNavigatioWrapperWithChannel,
        k &&
          !isAutoHideEnabled &&
          classes.lhcNavigatioWrapperWithChannelWP4MAppBar,
      ),
      onMouseEnter,
      onMouseLeave,
      ref: ref,
      children: children(classes.lhcChannel),
    })
  },
)
