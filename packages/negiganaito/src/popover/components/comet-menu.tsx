import React, { forwardRef } from 'react'
import CometMenuBaseWithPopover, {
  CometMenuBaseWithPopoverProps,
} from './comet-menu-base-with-popover'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type CometMenuProps = CometMenuBaseWithPopoverProps

const CometMenu = forwardRef<any, CometMenuProps>((props, ref) => {
  return jsx(CometMenuBaseWithPopover, Object.assign({}, props, { ref })) //  <CometMenuBaseWithPopover {...props} ref={ref} />
})

export default CometMenu

/*

__d("CometMenu.react", ["CometMenuBaseWithPopover.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
        return h.jsx(c("CometMenuBaseWithPopover.react"), babelHelpers["extends"]({}, a, {
            ref: b
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}

*/
