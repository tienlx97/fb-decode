import { makeStyles } from '@griffel/react'
import { isBrowser } from '@negiganaito/utils/user-agent'
import React from 'react'
const l = makeStyles({
  divider: {
    borderTopColor: 'var(--divider)',
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    ':first-child': {
      display: 'none',
    },
  },
  dividerMargin: {
    ':first-child:empty+*': {
      marginTop: 0,
    },
  },
  expanding: {
    flexBasis: '100%',
    flexGrow: 1,
    flexShrink: 1,
    minHeight: 0,
  },
  expandingIE11: {
    flexBasis: 'auto',
  },
  marginFirstChild: {
    ':first-child': {
      marginTop: 0,
    },
  },
  marginLastChild: {
    ':last-child': {
      marginBottom: 0,
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    maxWidth: '100%',
  },
})

const m = makeStyles({
  center: {
    alignItems: 'center',
  },
  end: {
    alignItems: 'flex-end',
  },
  start: {
    alignItems: 'flex-start',
  },
})
const n = makeStyles({
  4: {
    paddingLeft: '4px',
    paddingRight: '4px',
  },
  8: {
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  12: {
    paddingLeft: '12px',
    paddingRight: '12px',
  },
  16: {
    paddingLeft: '16px',
    paddingRight: '16px',
  },
  20: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
})
const o = makeStyles({
  0: {
    paddingTop: '0',
  },
  4: {
    paddingTop: '4px',
  },
  8: {
    paddingTop: '8px',
  },
  12: {
    paddingTop: '12px',
  },
  16: {
    paddingTop: '16px',
  },
  20: {
    paddingTop: '20px',
  },
  40: {
    paddingTop: '40px',
  },
})

const p = makeStyles({
  4: {
    paddingTop: '4px',
    paddingBottom: '4px',
  },
  8: {
    paddingTop: '8px',
    paddingBottom: '8px',
  },
  12: {
    paddingTop: '12px',
    paddingBottom: '12px',
  },
  16: {
    paddingTop: '16px',
    paddingBottom: '16px',
  },
  20: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  40: {
    paddingTop: '40px',
    paddingBottom: '40px',
  },
})

const q = makeStyles({
  4: {
    marginTop: '2px',
    marginBottom: '2px',
  },
  8: {
    marginTop: '4px',
    marginBottom: '4px',
  },
  12: {
    marginTop: '6px',
    marginBottom: '6px',
  },
  16: {
    marginTop: '8px',
    marginBottom: '8px',
  },
  20: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  24: {
    marginTop: '12px',
    marginBottom: '12px',
  },
  32: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  40: {
    marginTop: '20px',
    marginBottom: '20px',
  },
})
const r = makeStyles({
  bottom: {
    justifyContent: 'flex-end',
  },
  center: {
    justifyContent: 'center',
  },
  'space-between': {
    justifyContent: 'space-between',
  },
})

const s = makeStyles({
  4: {
    marginLeft: '4px',
    marginRight: '4px',
  },
  8: {
    marginLeft: '8px',
    marginRight: '8px',
  },
  12: {
    marginLeft: '12px',
    marginRight: '12px',
  },
  16: {
    marginLeft: '16px',
    marginRight: '16px',
  },
  20: {
    marginLeft: '20px',
    marginRight: '20px',
  },
})

const t = isBrowser('IE >= 11')

/*

function a(a, b) {
        var d, e, f, g;
        d = (d = k(c("CometColumnContext"))) != null ? d : {};
        var i = a.align;
        e = i === void 0 ? (e = d.align) != null ? e : "stretch" : i;
        i = a.children;
        var v = a.expanding;
        v = v === void 0 ? !1 : v;
        var w = a.fallback
          , x = a.paddingHorizontal;
        f = x === void 0 ? (f = d.paddingHorizontal) != null ? f : 0 : x;
        x = a.paddingTop;
        var y = a.paddingVertical;
        y = y === void 0 ? 0 : y;
        var z = a.placeholder
          , A = a.verticalAlign;
        A = A === void 0 ? "top" : A;
        var B = babelHelpers.objectWithoutPropertiesLoose(a, ["align", "children", "expanding", "fallback", "paddingHorizontal", "paddingTop", "paddingVertical", "placeholder", "verticalAlign"])
          , C = (h || (h = c("stylex"))).compose(a.xstyle);
        g = j.jsxs(j.Fragment, {
            children: [d.hasDividers === !0 && j.jsx(c("BaseView.react"), {
                role: "separator",
                xstyle: [l.divider, s[(g = d.paddingHorizontal) != null ? g : 0], d.spacing != null && l.dividerMargin]
            }), j.jsx(c("BaseView.react"), babelHelpers["extends"]({}, B, {
                ref: b,
                xstyle: [l.root, v && [l.expanding, t && l.expandingIE11], e !== "stretch" && m[e], A !== "top" && r[A], n[f], p[y], x != null && o[x], d.spacing != null && [q[d.spacing], C.marginBottom == null && l.marginLastChild, C.marginTop == null && l.marginFirstChild], a.xstyle],
                children: j.jsx(c("CometColumnContext").Provider, {
                    value: null,
                    children: i
                })
            }))]
        });
        if (w !== void 0) {
            a.fallback;
            var D = babelHelpers.objectWithoutPropertiesLoose(a, ["fallback"]);
            w === null ? g = j.jsx(c("CometErrorBoundary.react"), {
                children: g
            }) : g = j.jsx(c("CometErrorBoundary.react"), {
                fallback: function(a, c) {
                    return j.jsx(u, babelHelpers["extends"]({}, D, {
                        ref: b,
                        children: typeof w === "function" ? w(a, c) : w
                    }))
                },
                children: g
            })
        }
        if (z !== void 0) {
            a.placeholder;
            B = babelHelpers.objectWithoutPropertiesLoose(a, ["placeholder"]);
            g = j.jsx(c("CometPlaceholder.react"), {
                fallback: z != null ? j.jsx(u, babelHelpers["extends"]({}, B, {
                    ref: b,
                    children: z
                })) : null,
                children: g
            })
        }
        return g
    }

*/
