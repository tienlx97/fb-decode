import { makeStyles, mergeClasses } from '@griffel/react'
import {
  CometIcon,
  CometPressable,
  CometTooltip,
  useHover,
  fbiconWithoutMemorize,
} from '@negiganaito/react-components'
import React from 'react'

const useStyles = makeStyles({
  tooltip: {
    position: 'relative',
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
  hidden: {
    display: 'none',
  },
  button: {
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',

    boxSizing: 'border-box',
    height: '32px',
    width: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bounceLeft: {
    animationDuration: '.7s',
    animationIterationCount: '1',
    animationName: {
      '0%': {},

      '50%': {
        transform: 'translateX(-16%)',
      },

      '65%': {
        transform: 'translateX(8%)',
      },

      '80%': {
        transform: 'translateX(-8%)',
      },

      '95%': {
        transform: 'translateX(4%)',
      },

      '100%': {
        transform: 'translateX(0)',
      },
    },
    animationTimingFunction: 'ease-in-out',
  },
  bounceRight: {
    animationDuration: '.7s',
    animationIterationCount: '1',
    animationName: {
      '0%': {},

      '50%': {
        transform: 'translateX(16%)',
      },

      '65%': {
        transform: 'translateX(-8%)',
      },
      '80%': {
        transform: 'translateX(8%)',
      },

      '95%': {
        transform: 'translateX(-4%)',
      },

      '100%': {
        transform: 'translateX(0)',
      },
    },
    animationTimingFunction: 'ease-in-out',
  },
})

type WorkGalahadColumnCollapseButtonProps = {
  columnPosition?: any
  mode?: any
  onClick?: any
  tooltipMessage?: any
  'aria-label'?: string
  visible?: boolean
  className?: string
}

const isRTL = false

export function WorkGalahadColumnCollapseButton({
  columnPosition,
  mode,
  onClick,
  tooltipMessage,
  'aria-label': al,
  visible,
  className,
}: WorkGalahadColumnCollapseButtonProps) {
  const classes = useStyles()

  // is element hovered
  const [isHover, hoverFunc] = useHover()

  let isRTLAndColumnPositionComparison = isRTL === (columnPosition === 'left')
  isRTLAndColumnPositionComparison =
    isRTLAndColumnPositionComparison === (mode === 'collapse')
  const isCollapse = (columnPosition === 'left') !== (mode === 'collapse')

  return (
    <div className={mergeClasses(classes.tooltip, !visible && classes.hidden)}>
      <CometTooltip
        align={columnPosition === 'left' ? 'start' : 'end'}
        tooltip={tooltipMessage}
      >
        <CometPressable
          onHoverIn={hoverFunc.onMouseEnter}
          onHoverOut={hoverFunc.onMouseLeave}
          className={mergeClasses(
            classes.button,
            className,
            isHover && (isCollapse ? classes.bounceLeft : classes.bounceRight),
          )}
          onPress={onClick}
          aria-label={al}
          role="button"
        >
          <CometIcon
            icon={generateIcon(isRTLAndColumnPositionComparison, isHover)}
            color={isHover ? 'secondary' : 'tertiary'}
          />
        </CometPressable>
      </CometTooltip>
    </div>
  )
}

function generateIcon(
  isRTLAndColumnPositionComparison: boolean,
  isHover: boolean,
) {
  if (isHover) {
    if (isRTLAndColumnPositionComparison) {
      return fbiconWithoutMemorize(
        {
          sprited: 2,
          spi: '/assets/workplace/LpDNDnSEXvH.png',
          _spi: '/assets/workplace/LpDNDnSEXvH.png',
          w: 20,
          h: 20,
          p: '-21px -233px',
          sz: 'auto',
        },
        20,
      )
    } else {
      return fbiconWithoutMemorize(
        {
          sprited: 2,
          spi: '/assets/workplace/LpDNDnSEXvH.png',
          _spi: '/assets/workplace/LpDNDnSEXvH.png',
          w: 20,
          h: 20,
          p: '0 -212px',
          sz: 'auto',
        },
        20,
      )
    }
  } else {
    if (isRTLAndColumnPositionComparison) {
      return fbiconWithoutMemorize(
        {
          sprited: 2,
          spi: '/assets/workplace/LpDNDnSEXvH.png',
          _spi: '/assets/workplace/LpDNDnSEXvH.png',
          w: 20,
          h: 20,
          p: '0 -254px',
          sz: 'auto',
        },
        20,
      )
    } else {
      return fbiconWithoutMemorize(
        {
          sprited: 2,
          spi: '/assets/workplace/LpDNDnSEXvH.png',
          _spi: '/assets/workplace/LpDNDnSEXvH.png',
          w: 20,
          h: 20,
          p: '-21px -212px',
          sz: 'auto',
        },
        20,
      )
    }
  }
}
