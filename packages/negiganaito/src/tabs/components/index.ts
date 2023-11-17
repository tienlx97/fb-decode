export * from './comet-tab'
export * from './comet-tabs'
export { CometTabMenu } from './comet-tab-menu'
export { default as CometEntityHeaderTabs } from './comet-entity-header-tabs'
export { default as CometEntityHeaderTabBar } from './comet-entity-header-tab-bar'

/*

__d("ProfileCometTabs.react", ["fbt", "Banzai", "CometBadge.react", "CometEntityHeaderTabBar.react", "CometRelay", "ProfileCometContext", "ProfileCometManageSectionsDialog.entrypoint", "ProfileCometSession", "ProfileCometTabs_cometProfileTabs.graphql", "ProfileCometTabs_mentions_nux.graphql", "ProfileCometURIUtils", "ProfileCometUtils", "TimelineAppSectionType", "getJSEnumSafe", "keyMirror", "qpl", "react", "requireDeferred", "useCometCallout", "useCometEntryPointDialog", "useCometTooltipQP", "useCurrentRoute", "useMaybeNUX", "useTopMostRouteCometEntityKey"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j, k, l = k || (k = d("react"));
    e = k;
    var m = e.useContext
      , n = e.useRef
      , o = c("requireDeferred")("ProfileEngagementEventsFalcoEvent").__setRef("ProfileCometTabs.react")
      , p = c("requireDeferred")("ProfileEngagementFalcoEvent").__setRef("ProfileCometTabs.react")
      , q = c("requireDeferred")("QPLUserFlow").__setRef("ProfileCometTabs.react")
      , r = c("keyMirror")(c("TimelineAppSectionType"))
      , s = {
        mentionsNux: {
            maxWidth: "xw5ewwj",
            $$css: !0
        }
    };
    function a(a) {
        var e, f = d("CometRelay").useFragment(i !== void 0 ? i : i = b("ProfileCometTabs_cometProfileTabs.graphql"), a.cometProfileTabs);
        a = d("CometRelay").useFragment(j !== void 0 ? j : j = b("ProfileCometTabs_mentions_nux.graphql"), a.nux);
        var g = f.profile_user
          , k = m(c("ProfileCometContext"))
          , t = k.profileID;
        k = k.viewerID;
        n(null);
        var u = c("useCometEntryPointDialog")(c("ProfileCometManageSectionsDialog.entrypoint"), {
            profileID: t
        }, "button")
          , v = u[0]
          , w = u[1]
          , x = u[2];
        u = u[3];
        var y = c("useCurrentRoute")()
          , z = {
            event_metadata: {
                super_tab: ""
            },
            event_type: "click",
            profile_feature: "tab_nav",
            profile_section: "navigation",
            profile_session_id: d("ProfileCometSession").get(t, y),
            viewee_userid: t
        }
          , A = {
            content_id: null,
            profile_event_type: "click",
            profile_id: t,
            profile_product_bucket: "nav_bar",
            profile_session_id: d("ProfileCometSession").get(t),
            profile_subsurface: "nav_bar",
            profile_surface: "timeline"
        };
        y = d("ProfileCometUtils").isViewingSelfProfile(t, k);
        a = c("useMaybeNUX")(a);
        var B = a[0];
        a = a[1];
        e = {
            arrowStyle: "inset",
            hasCloseButton: !0,
            label: (e = g == null ? void 0 : g.mentions_tab_tooltip_nux_text) != null ? e : "",
            onHide: a,
            position: "above",
            type: "accent",
            xstyle: s.mentionsNux
        };
        var C = c("useCometCallout")(e, (a = B) != null ? a : !1);
        e = y ? f == null ? void 0 : (e = f.profile_user) == null ? void 0 : (B = e.viewer) == null ? void 0 : (a = B.eligible_promotions) == null ? void 0 : (f = a.nodes) == null ? void 0 : f[0] : null;
        var D = c("useCometTooltipQP")(e, {
            arrowStyle: "inset",
            hasCloseButton: !1,
            position: "below"
        })
          , E = (B = g == null ? void 0 : g.is_currently_live) != null ? B : !1;
        f = (a = g == null ? void 0 : g.is_viewer_friend) != null ? a : !1;
        e = (a = g == null ? void 0 : (e = g.wem_private_sharing_bundle) == null ? void 0 : (B = e.private_sharing_control_model_for_user) == null ? void 0 : B.private_sharing_enabled) != null ? a : !1;
        var F = !y && e && !f
          , G = (B = c("useTopMostRouteCometEntityKey")()) == null ? void 0 : B.section;
        a = d("ProfileCometURIUtils").useURIForProfile();
        B = (f = g == null ? void 0 : (e = g.memorialized_user_info) == null ? void 0 : e.has_tributes_section) != null ? f : !1;
        var H = (e = g == null ? void 0 : g.is_memorialized) != null ? e : !1
          , I = [];
        f = d("ProfileCometURIUtils").useURIForProfileSection("tributes");
        var J = d("ProfileCometURIUtils").useIsProfileSectionActive("tributes");
        e = d("ProfileCometURIUtils").useURIForProfileSection("timeline");
        var K = d("ProfileCometURIUtils").useIsProfileSectionActive("timeline")
          , L = d("ProfileCometURIUtils").useIsProfileSectionActive("pretributestimeline")
          , M = d("ProfileCometURIUtils").useIsProfileSectionActive("grid")
          , N = d("ProfileCometURIUtils").useURIForProfileSection("supporters")
          , O = d("ProfileCometURIUtils").useIsProfileSectionActive("supporters");
        B && I.push({
            isActive: function() {
                return J
            },
            label: h._("__JHASH__n2H_VN10V-4__JHASH__"),
            linkProps: {
                replace: !0,
                url: f
            },
            onPress: function() {
                p.onReady(function(a) {
                    a = a.log;
                    a(function() {
                        return babelHelpers["extends"]({}, A, {
                            profile_item_subtype: "tributes",
                            profile_item_type: "tributes"
                        })
                    })
                })
            }
        });
        I.push({
            isActive: function() {
                return H ? L : K || M
            },
            label: h._("__JHASH__KDTJXNcOyIk__JHASH__"),
            linkProps: {
                replace: !0,
                url: B ? e : a
            },
            onPress: function() {
                o.onReady(function(a) {
                    a = a.log;
                    a(function() {
                        return babelHelpers["extends"]({}, z, {
                            feature_item: r.TIMELINE.toLowerCase()
                        })
                    })
                }),
                p.onReady(function(a) {
                    a = a.log;
                    a(function() {
                        return babelHelpers["extends"]({}, A, {
                            profile_item_subtype: "home",
                            profile_item_type: "timeline"
                        })
                    })
                })
            }
        });
        ((g == null ? void 0 : (f = g.profile_plus_woodhenge_creator_info) == null ? void 0 : f.viewer_can_see_supporter_hub) || y && (g == null ? void 0 : g.profile_plus_woodhenge_creator_info) != null) && I.push({
            isActive: function() {
                return O
            },
            label: h._("__JHASH__sAtVCjFTmD2__JHASH__"),
            linkProps: {
                replace: !1,
                url: N
            },
            onPress: function() {
                var a;
                p.onReady(function(a) {
                    a = a.log;
                    a(function() {
                        return babelHelpers["extends"]({}, A, {
                            profile_item_subtype: "home",
                            profile_item_type: "timeline"
                        })
                    })
                });
                if ((g == null ? void 0 : (a = g.profile_plus_woodhenge_creator_info) == null ? void 0 : a.supporter_hub_tab_redirect_type) === "consideration_flow") {
                    q.onReady(function(a) {
                        return a.start(c("qpl")._(930220853, "760"), {
                            annotations: {
                                string: {
                                    device_os: "comet",
                                    entrypoint_surface: "supporter_hub_tab_on_profile_plus_surface"
                                }
                            }
                        })
                    });
                    c("Banzai").post("logger:WoodhengeClientLoggerConfig", {
                        creator_page_id: g == null ? void 0 : (a = g.delegate_page) == null ? void 0 : a.id,
                        entrypoint_surface: "supporter_hub_tab_on_profile_plus_surface",
                        name: "funding_consideration_page_cta_click",
                        surface: "supporter_hub_tab_on_profile_plus_surface"
                    })
                }
            }
        });
        e = g == null ? void 0 : (B = g.timeline_nav_app_sections) == null ? void 0 : B.edges;
        e && e.forEach(function(a) {
            a = a.node;
            if (!a)
                return;
            var b = a.displayable_count
              , d = a.name
              , e = a.section_type
              , f = a.tab_key
              , g = a.tracking
              , h = a.url;
            if (h == null || d == null)
                return;
            var i = (a = a.all_collections) == null ? void 0 : a.nodes;
            I.push({
                badge: e === "LIVE_VIDEOS" && E ? l.jsx(c("CometBadge.react"), {}) : (a = b) != null ? a : void 0,
                isActive: function() {
                    var a = G === f;
                    if (a)
                        return !0;
                    if (G === "album" && e === "PHOTOS")
                        return !0;
                    return i == null ? !1 : i.some(function(a) {
                        a = a.tab_key;
                        return a === G
                    })
                },
                label: d,
                linkProps: {
                    replace: !0,
                    url: e === "PHOTOS" && F ? null : h
                },
                onPress: function() {
                    o.onReady(function(a) {
                        var b;
                        a = a.log;
                        var d = ((b = c("getJSEnumSafe")(r, e)) != null ? b : "unknown").toLowerCase();
                        a(function() {
                            return babelHelpers["extends"]({}, z, {
                                feature_item: d
                            })
                        })
                    }),
                    p.onReady(function(a) {
                        a = a.log;
                        a(function() {
                            return babelHelpers["extends"]({}, A, {
                                profile_item_subtype: e == null ? void 0 : e.toLowerCase(),
                                profile_item_type: g
                            })
                        })
                    })
                },
                tabRef: e === "MENTIONS" ? C : e === "CHANNELS" ? D : void 0
            })
        });
        t === k && I.push({
            isActive: function() {
                return !1
            },
            label: h._("__JHASH__erWYiBa1sao__JHASH__"),
            onHoverIn: w,
            onHoverOut: x,
            onPress: function() {
                p.onReady(function(a) {
                    a = a.log;
                    a(function() {
                        return babelHelpers["extends"]({}, A, {
                            profile_item_type: "manage_sections"
                        })
                    })
                }),
                v({
                    profileID: t
                })
            },
            onPressIn: u
        });
        return l.jsx(c("CometEntityHeaderTabBar.react"), {
            maxTabs: 6,
            tabs: I
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);

*/
