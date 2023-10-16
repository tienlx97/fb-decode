import React, { CSSProperties, ReactNode, forwardRef, useRef } from 'react'
import { mergeClasses } from '@griffel/react'

import { CometTextTypography, TypeKeys } from '@fb/styles'

import { useStyles } from './styles'
import { useCometTextContext } from '@fb/context/comet-text-context'
import cssUserAgentSupports from '@fb/utils/css-useragent-supports'

type CometLineClampProps = {
  children?: ReactNode
  id?: string
  lines?: number
  testid?: string
  useAutomaticTextDirection?: boolean
  className?: string
  truncationTooltip?: boolean
}

const notSupportWebkitLineClamp = cssUserAgentSupports.webkitLineClamp()

function calculateLineHeight(type?: TypeKeys) {
  return type != null && type in CometTextTypography
    ? CometTextTypography[type].lineHeight
    : 16
}

const CometLineClamp = forwardRef<HTMLElement, CometLineClampProps>(
  (
    {
      id,
      children,
      lines = 1,
      useAutomaticTextDirection = false,
      testid,
      className,
      truncationTooltip,
    },
    externalRef,
  ) => {
    const classes = useStyles()

    const cometTextContextValue = useCometTextContext()

    let internalStyle: CSSProperties | undefined
    let childrenClone = children

    //   t = useCallback(function(a:any) {
    //     if (a == null || truncationTooltip == null)
    //         return;
    //     n.preload()
    // }, [truncationTooltip]);

    if (lines > 1) {
      if (notSupportWebkitLineClamp) {
        internalStyle = {
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: lines,
          display: '-webkit-box',
        }
      } else {
        const lineHeight = calculateLineHeight(
          cometTextContextValue == null
            ? undefined
            : cometTextContextValue.type,
        )
        internalStyle = { maxHeight: lineHeight * lines + 0.1 }

        const calculateSize: CSSProperties = {
          maxHeight: 'calc((100% - ' + lineHeight * lines + 'px) * 999)',
          top: lineHeight * (lines - 1),
        }

        childrenClone = (
          <React.Fragment>
            {childrenClone}
            <span
              aria-hidden={true}
              className={classes.supportLineHeight}
              style={calculateSize}
            >
              &#8230;
            </span>
          </React.Fragment>
        )
      }
    }

    return (
      <span
        className={mergeClasses(
          classes.root,
          lines === 1 && classes.oneLine,
          className,
        )}
        data-testid={undefined}
        dir={useAutomaticTextDirection ? 'auto' : undefined}
        id={id}
        style={internalStyle}
        ref={externalRef}
      >
        {childrenClone}
      </span>
    )

    // CometTextContextValue = React.jsx(
    //   "span",
    //   {
    //     className: c("stylex")(
    //       stylex1.root,
    //       lines === 1 && stylex1.oneLine,
    //       props
    //     ),
    //     "data-testid": undefined,
    //     dir: testid ? "auto" : undefined,
    //     id: id,
    //     onMouseEnter: truncationTooltip != null ? children : undefined,
    //     ref: externalRef,
    //     style: internalStyle,
    //     children: v,
    //   },
    //   translationKeyForTextParent
    // );
  },
)

CometLineClamp.displayName = 'CometLineClamp.react'

export default CometLineClamp
