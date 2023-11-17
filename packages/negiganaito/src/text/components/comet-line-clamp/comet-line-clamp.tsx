import React, {
  CSSProperties,
  ReactNode,
  forwardRef,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import { mergeClasses } from '@griffel/react'

import { CometTextTypography, TypeKeys } from '@negiganaito/styles'

import { useStyles } from './styles'
import { CometTextContext } from '../../context'
import cssUserAgentSupports from '@negiganaito/utils/common/css-useragent-supports'
import { CometPlaceholder } from '@negiganaito/placeholder'
import { CometTooltip } from '@negiganaito/tooltip'
import { useMergeRefs } from '@negiganaito/hooks'

type CometLineClampProps = {
  children?: ReactNode
  id?: string
  lines?: number
  testid?: string
  useAutomaticTextDirection?: boolean
  className?: string
  truncationTooltip?: any
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

    const cometTextContextValue = useContext(CometTextContext)

    const [w, x] = useState(false)
    const y = useRef<any>(null)

    let internalStyle: CSSProperties | undefined
    let childrenClone = children

    const onMouseEneterWithTooltip = () => {
      const curr = y.current
      if (curr == null || lines < 1) {
        return
      }
      x(
        curr.offsetWidth < curr.scrollWidth ||
          curr.offsetHeight < curr.scrollHeight,
      )
    }

    const fallback = useCallback(
      (a: any) => {
        if (!a || !truncationTooltip) {
          return
        }
        // n.preload()
      },
      [truncationTooltip],
    )

    const ref = useMergeRefs(externalRef, y)

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

        childrenClone = jsxs(React.Fragment, {
          children: [
            childrenClone,
            jsx('span', {
              'aria-hidden': true,
              className: classes.supportLineHeight,
              style: calculateSize,
              children: '\u2026',
            }),
          ],
        })

        // (
        //   <React.Fragment>
        //     {childrenClone}
        //     <span
        //       aria-hidden={true}
        //       className={classes.supportLineHeight}
        //       style={calculateSize}
        //     >
        //       &#8230;
        //     </span>
        //   </React.Fragment>,
        // )
      }
    }

    const LineComp = jsx('span', {
      className: mergeClasses(
        classes.root,
        lines === 1 && classes.oneLine,
        className,
      ),
      'data-testid': undefined,
      dir: useAutomaticTextDirection ? 'auto' : undefined,
      onMouseEnter: truncationTooltip ? onMouseEneterWithTooltip : undefined,
      id,
      style: internalStyle,
      ref: ref,
      children: childrenClone,
    })
    // (
    //   <span
    //     className={mergeClasses(
    //       classes.root,
    //       lines === 1 && classes.oneLine,
    //       className,
    //     )}
    //     data-testid={undefined}
    //     dir={useAutomaticTextDirection ? 'auto' : undefined}
    //     onMouseEnter={truncationTooltip ? onMouseEneterWithTooltip : undefined}
    //     id={id}
    //     style={internalStyle}
    //     ref={externalRef}
    //   >
    //     {childrenClone}
    //   </span>,
    // )

    return w
      ? jsx(CometPlaceholder, {
          fallback,
          children: jsx(CometTooltip, {
            tooltip: truncationTooltip,
            children: LineComp,
          }),
        })
      : LineComp

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
