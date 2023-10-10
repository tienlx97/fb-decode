import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import { CometPressable, CometPressableOverlay } from '@fb/components'
import CometNonBreakingSpace from '@fb/components/comet-non-breaking-space'
import CometMenuContext from '@fb/context/comet-menu-context'
import CometMenuItemBaseRoleContext from '@fb/context/comet-menu-item-base-role-context'
import CometMenuItemHighlightContext from '@fb/context/comet-menu-item-highlight-context'
import { BaseFocusRing } from '@fb/focus/components/base-focus-ring'
import { useFirstLetterNavigationTag } from '@fb/focus/components/comet-focus-group-first-letter-navigation'
import { FocusItem } from '@fb/focus/components/comet-menu-focus-group'
import { mergeRefs } from '@fb/hooks/use-merge-refs'
import CometTextWithIcon from '@fb/input/components/comet-text-with-icon'
import { TetraText, TetraTextPairing } from '@fb/tetra-text'
import { makeStyles, mergeClasses } from '@fluentui/react-components'

const useStyles = makeStyles({
  aux: {
    marginLeft: '12px',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
    minWidth: 0,
  },
  disabled: {
    cursor: 'not-allowed',
  },
  extraHorizontalPadding: {
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  listItem: {
    alignItems: 'center',
    WebkitAppearance: 'none',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    marginLeft: 'var(--menu-item-base-margin-horizontal)',
    marginRight: 'var(--menu-item-base-margin-horizontal)',
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 'var(--menu-item-base-padding-horizontal)',
    paddingRight: 'var(--menu-item-base-padding-horizontal)',
    paddingTop: '12px',
    paddingBottom: '12px',
    position: 'relative',
    textAlign: 'inherit',
    zIndex: 0,
  },
  listItemAlignedCenter: {
    alignItems: 'center',
  },
  listItemWithIcon: {
    paddingTop: '8px',
    paddingBottom: '8px',
  },
})

const useDummyStyles = makeStyles({
  dummy1: {
    marginLeft: '12px',
  },
})

const o = true

type CometMenuItemBaseProps = {
  alignCenter?: boolean
  autoScrollOnLoad?: boolean
  aux?: any
  badge?: any
  bodyColor?: any
  bodyText?: any
  disabled?: boolean
  download?: boolean
  href?: any
  iconNode?: any
  id?: string
  isIconAnImage?: any
  //
  onClick?: any
  onFocusIn?: any
  onFocusOut?: any
  onHoverIn?: any
  onHoverOut?: any
  onPressIn?: any
  overlayRadius?: number
  passthroughProps?: any
  prefetchQueriesOnHover?: any
  preventClosingMenuOnSelect?: boolean
  preventLocalNavigation?: any
  primaryColor?: any
  primaryText?: any
  role?: string
  routeTarget?: any
  secondaryColor?: any
  secondaryText?: string
  target?: any
  testid?: string
  traceParams?: string
  visuallyFocused?: boolean
}

const CometMenuItemBase = forwardRef<HTMLElement, CometMenuItemBaseProps>(
  (
    {
      alignCenter = false,
      autoScrollOnLoad = false,
      aux,
      badge,
      bodyColor,
      bodyText,
      disabled = false,
      download,
      href,
      iconNode,
      id,
      isIconAnImage,
      onClick,
      onFocusIn,
      onFocusOut,
      onHoverIn,
      onHoverOut,
      onPressIn,
      overlayRadius = 4,
      passthroughProps,
      prefetchQueriesOnHover,
      preventClosingMenuOnSelect = false,
      preventLocalNavigation,
      primaryColor,
      primaryText,
      role,
      routeTarget,
      secondaryColor,
      secondaryText,
      target,
      testid,
      traceParams,
      visuallyFocused = false,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()
    const dummyClasses = useDummyStyles()

    const T = useRef<any>(null)
    const cometMenuContextValue = useContext(CometMenuContext)
    const U =
      preventClosingMenuOnSelect !== !0 && cometMenuContextValue
        ? cometMenuContextValue.onClose
        : null

    const _linkProps =
      href || routeTarget || target
        ? {
            download,
            passthroughProps,
            prefetchQueriesOnHover,
            preventLocalNavigation,
            routeTarget,
            target,
            traceParams,
            url: href,
          }
        : undefined

    const onPressCb = useCallback(
      (a: any) => {
        U && U()
        onClick && onClick(a)
      },
      [onClick, U],
    )

    const cometMenuItemBaseRoleContextValue = useContext(
      CometMenuItemBaseRoleContext,
    )
    let E
    const G = role ?? cometMenuItemBaseRoleContextValue
    const _role = G ?? undefined
    const V = useRef(autoScrollOnLoad)

    useEffect(function () {
      // const a = T.current

      if (V.current && T.current) {
        V.current = !1
        T.current.scrollIntoView({
          block: 'nearest',
        })
      }

      // V.current &&
      //   a &&
      //   ((V.current = !1),
      //   a.scrollIntoView({
      //     block: 'nearest',
      //   }))
    }, [])

    const headlineRef = useRef(null)
    const tag = useFirstLetterNavigationTag(headlineRef)

    const pressableRef = useMemo(
      function () {
        return mergeRefs(ref, T)
      },
      [ref],
    )

    const HeadLine = badge
      ? typeof badge === 'number'
        ? jsxs(React.Fragment, {
            children: [
              primaryText,
              jsx(CometNonBreakingSpace, {
                size: 0.5,
              }),
              jsx(TetraText, {
                color: disabled ? 'disabled' : primaryColor,
                type: 'body4',
                children: badge,
              }),
            ],
          })
        : jsx(CometTextWithIcon, {
            iconAfter: badge,
            children: primaryText,
          })
      : primaryText

    return jsx(FocusItem, {
      disabled,
      tag: tag,
      children: jsx(
        CometPressable,
        Object.assign({}, rest, {
          disabled,
          display: 'inline',
          id,
          linkProps: _linkProps,
          onFocusIn,
          onFocusOut,
          onHoverIn,
          onHoverOut,
          onPress: onPressCb,
          onPressIn,
          overlayDisabled: true,
          ref: pressableRef,
          role: _role,
          suppressFocusRing: true,
          testid: undefined,
          className: mergeClasses(
            classes.listItem,
            alignCenter && classes.listItemAlignedCenter,
            iconNode && classes.listItemWithIcon,
            disabled && classes.disabled,
            !o && visuallyFocused && BaseFocusRing.focusRingXStyle,
          ),
          children: ({ focused, focusVisible, hovered, pressed }: any) => {
            // const b = a.focused,
            //   d = a.focusVisible,
            //   e = a.hovered
            // a = a.pressed
            return jsxs(CometMenuItemHighlightContext.Provider, {
              value: (focused && focusVisible) || hovered,
              children: [
                iconNode,
                jsxs('div', {
                  className: mergeClasses(
                    classes.content,
                    //  (b = x) != null ? b : !1) &&
                    isIconAnImage && classes.extraHorizontalPadding,
                  ),
                  children: [
                    jsx(TetraTextPairing, {
                      body: bodyText,
                      bodyColor: disabled ? 'disabled' : bodyColor,
                      headline: HeadLine,
                      headlineColor: disabled ? 'disabled' : primaryColor,
                      headlineRef: headlineRef,
                      level: 4,
                      meta: secondaryText,
                      metaColor: disabled ? 'disabled' : secondaryColor,
                      reduceEmphasis: true,
                    }),
                    aux &&
                      jsx('div', {
                        className: dummyClasses.dummy1,
                        children: aux,
                      }),
                  ],
                }),
                jsx(CometPressableOverlay, {
                  focusVisible: focusVisible || visuallyFocused,
                  hovered,
                  pressed,
                  radius: overlayRadius,
                  showFocusRing: true,
                }),
              ],
            })
          },
        }),
      ),
    })
  },
)

export default CometMenuItemBase

/*


__d("CometMenuItemBase.react", ["BaseFocusRing.react", "CometFocusGroupFirstLetterNavigation", "CometMenuContext", "CometMenuFocusGroup", "CometMenuItemBaseRoleContext", "CometMenuItemHighlightContext", "CometNonBreakingSpace.react", "CometPressable.react", "CometPressableOverlay.react", "CometTextWithIcon.react", "TetraText.react", "TetraTextPairing.react", "gkx", "mergeRefs", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback
      , j = b.useContext
      , k = b.useEffect
      , l = b.useMemo
      , m = b.useRef
      , n = {
        aux: {
            marginStart: "x16n37ib",
            $$css: !0
        },
        content: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            flexGrow: "x1iyjqo2",
            justifyContent: "x1qughib",
            minWidth: "xeuugli",
            $$css: !0
        },
        disabled: {
            cursor: "x1h6gzvc",
            $$css: !0
        },
        extraHorizontalPadding: {
            paddingStart: "xurb0ha",
            paddingEnd: "x1sxyh0",
            $$css: !0
        },
        listItem: {
            alignItems: "x6s0dn4",
            appearance: "xjyslct",
            boxSizing: "x9f619",
            cursor: "x1ypdohk",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            flexShrink: "x2lah0s",
            marginStart: "xnqzcj9",
            marginEnd: "x1gh759c",
            marginTop: "xdj266r",
            marginBottom: "xat24cr",
            paddingStart: "x1344otq",
            paddingEnd: "x1de53dj",
            paddingTop: "xz9dl7a",
            paddingBottom: "xsag5q8",
            position: "x1n2onr6",
            textAlign: "x16tdsg8",
            zIndex: "x1ja2u2z",
            $$css: !0
        },
        listItemAlignedCenter: {
            alignItems: "x6s0dn4",
            $$css: !0
        },
        listItemWithIcon: {
            paddingTop: "x1y1aw1k",
            paddingBottom: "xwib8y2",
            $$css: !0
        }
    }
      , o = c("gkx")("1721477") || c("gkx")("1459");
    function a(a, b) {
        var e = a.alignCenter;
        e = e === undefined ? !1 : e;
        var f = a.autoScrollOnLoad;
        f = f === undefined ? !1 : f;
        var g = a.aux
          , p = a.badge
          , q = a.bodyColor
          , r = a.bodyText
          , s = a.disabled
          , t = s === undefined ? !1 : s;
        s = a.download;
        var u = a.href
          , v = a.iconNode
          , w = a.id
          , x = a.isIconAnImage
          , y = a.onClick
          , z = a.onFocusIn
          , A = a.onFocusOut
          , B = a.onHoverIn
          , C = a.onHoverOut
          , D = a.onPressIn
          , E = a.overlayRadius
          , F = E === undefined ? 4 : E;
        E = a.passthroughProps;
        var G = a.prefetchQueriesOnHover
          , H = a.preventClosingMenuOnSelect;
        H = H === undefined ? !1 : H;
        var I = a.preventLocalNavigation
          , J = a.primaryColor
          , K = a.primaryText
          , L = a.role
          , M = a.routeTarget
          , N = a.secondaryColor
          , O = a.secondaryText
          , P = a.target
          , Q = a.testid;
        Q = a.traceParams;
        var R = a.visuallyFocused
          , S = R === undefined ? !1 : R;
        R = babelHelpers.objectWithoutPropertiesLoose(a, ["alignCenter", "autoScrollOnLoad", "aux", "badge", "bodyColor", "bodyText", "disabled", "download", "href", "iconNode", "id", "isIconAnImage", "onClick", "onFocusIn", "onFocusOut", "onHoverIn", "onHoverOut", "onPressIn", "overlayRadius", "passthroughProps", "prefetchQueriesOnHover", "preventClosingMenuOnSelect", "preventLocalNavigation", "primaryColor", "primaryText", "role", "routeTarget", "secondaryColor", "secondaryText", "target", "testid", "traceParams", "visuallyFocused"]);
        var T = m(null);
        a = j(c("CometMenuContext"));
        var U = H !== !0 && a ? a.onClose : null;
        H = u != null || M != null || P != null ? {
            download: s,
            passthroughProps: E,
            prefetchQueriesOnHover: G,
            preventLocalNavigation: I,
            routeTarget: M,
            target: P,
            traceParams: Q,
            url: u
        } : undefined;
        a = i(function(a) {
            U != null && U(),
            y && y(a)
        }, [y, U]);
        s = j(c("CometMenuItemBaseRoleContext"));
        I = (G = (E = L) != null ? E : s) != null ? G : undefined;
        var V = m(f);
        k(function() {
            var a = T.current;
            V.current && a != null && (V.current = !1,
            a.scrollIntoView({
                block: "nearest"
            }))
        }, []);
        var W = m(S);
        k(function() {
            var a = T.current;
            !W.current && S && a != null && a.scrollIntoView({
                block: "nearest"
            })
        }, [S]);
        var X = m(null);
        M = d("CometFocusGroupFirstLetterNavigation").useFirstLetterNavigationTag(X);
        P = l(function() {
            return c("mergeRefs")(b, T)
        }, [b]);
        var Y = p != null ? typeof p === "number" ? h.jsxs(h.Fragment, {
            children: [K, h.jsx(c("CometNonBreakingSpace.react"), {
                size: .5
            }), h.jsx(c("TetraText.react"), {
                color: t ? "disabled" : J,
                type: "body4",
                children: p
            })]
        }) : h.jsx(c("CometTextWithIcon.react"), {
            iconAfter: p,
            children: K
        }) : K;
        return h.jsx(c("CometMenuFocusGroup").FocusItem, {
            disabled: t,
            tag: M,
            children: h.jsx(c("CometPressable.react"), babelHelpers["extends"]({}, R, {
                disabled: t,
                display: "inline",
                id: w,
                linkProps: H,
                onFocusIn: z,
                onFocusOut: A,
                onHoverIn: B,
                onHoverOut: C,
                onPress: a,
                onPressIn: D,
                overlayDisabled: !0,
                ref: P,
                role: I,
                suppressFocusRing: !0,
                testid: undefined,
                xstyle: [n.listItem, e && n.listItemAlignedCenter, v != null && n.listItemWithIcon, t && n.disabled, !o && S && c("BaseFocusRing.react").focusRingXStyle],
                children: function(a) {
                    var b = a.focused
                      , d = a.focusVisible
                      , e = a.hovered;
                    a = a.pressed;
                    return h.jsxs(c("CometMenuItemHighlightContext").Provider, {
                        value: b && d || e,
                        children: [v, h.jsxs("div", {
                            className: c("stylex")(n.content, ((b = x) != null ? b : !1) && n.extraHorizontalPadding),
                            children: [h.jsx(c("TetraTextPairing.react"), {
                                body: r,
                                bodyColor: t ? "disabled" : q,
                                headline: Y,
                                headlineColor: t ? "disabled" : J,
                                headlineRef: X,
                                level: 4,
                                meta: O,
                                metaColor: t ? "disabled" : N,
                                reduceEmphasis: !0
                            }), g != null && h.jsx("div", {
                                className: "x16n37ib",
                                children: g
                            })]
                        }), h.jsx(c("CometPressableOverlay.react"), {
                            focusVisible: d || S,
                            hovered: e,
                            pressed: a,
                            radius: F,
                            showFocusRing: !0
                        })]
                    })
                }
            }))
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e
}
), 98);

*/
