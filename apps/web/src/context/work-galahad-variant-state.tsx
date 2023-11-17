'use client'

import React, { createContext, useContext, useState } from 'react'

const context = createContext({
  hasNotifPriorityBadgeCount: !0,
  hasNotifDotOnTabs: !1,
  hasGdriveNotifications: !0,
  hasChatFirst: !1,
  hasSMB: !1,
  hasSimplification: !1,
  hasRiverKnight: !1,
  hasDenseThreadlist: !1,
  hasGemini: !1,
  hasChatBubbleless: !1,
  hasChatless: !1,
  hasLightSpeed: !1,
  hasInternAppbar: !0,
  hasInternAppbarOpenNewTab: !1,
  hasInternAppbarEnableHotkeys: !1,
  hasBlurChatMessages: !1,
  hasWorkMeetingAlerts: !0,
  hasDisableLinkPreviews: !1,
  hasInclusiveLanguageSuggestion: !0,
  rhcFeedCollapsed: !1,
  rhcGroupCollapsed: !1,
  rhcChatCollapsed: !1,
  rhcGroupChatLinkedCollapsed: !1,
  rhcProfileCollapsed: !1,
  rhcNextCollapsed: !1,
  rhcKnowledgeCollapsed: !1,
  rhcEventCollapsed: !1,
  rhcHelpdeskCollapsed: !1,
  rhcWhatsNewCollapsed: !1,
  rhcDeviceLoginCollapsed: !1,
  rhcHashtagCollapsed: !1,
  rhcInterviewToolsMarketplaceCollapsed: !1,
  rhcApprovalsCollapsed: !1,
})

export const useWorkGalahadVariant = () => {
  return useContext(context)
}

type WorkGalahadVariantStateProvider = {
  children?: any
}

const q = createContext(function () {})

const Provider = ({ children }: WorkGalahadVariantStateProvider) => {
  const [val, setVal] = useState({
    hasNotifPriorityBadgeCount: true,
    hasNotifDotOnTabs: false,
    hasGdriveNotifications: false,
    hasSMB: false,
    hasChatFirst: false,
    hasSimplification: false,
    hasRiverKnight: false,
    hasDenseThreadlist: false,
    hasGemini: true,
    hasChatBubbleless: false,
    hasChatless: false,
    hasLightSpeed: false,
    hasInternAppbar: true,
    hasInternAppbarOpenNewTab: true,
    hasInternAppbarEnableHotkeys: false,
    hasBlurChatMessages: false,
    hasWorkMeetingAlerts: true,
    hasInclusiveLanguageSuggestion: true,
    hasDisableLinkPreviews: false,
    rhcFeedCollapsed: false,
    rhcGroupCollapsed: false,
    rhcChatCollapsed: false,
    rhcGroupChatLinkedCollapsed: false,
    rhcProfileCollapsed: false,
    rhcNextCollapsed: false,
    rhcKnowledgeCollapsed: false,
    rhcEventCollapsed: false,
    rhcHelpdeskCollapsed: false,
    rhcWhatsNewCollapsed: false,
    rhcDeviceLoginCollapsed: false,
    rhcHashtagCollapsed: false,
    rhcInterviewToolsMarketplaceCollapsed: false,
    rhcApprovalsCollapsed: false,
  })

  return <context.Provider value={val}>{children}</context.Provider>
}

export const WorkGalahadVariantState = {
  Provider,
  useWorkGalahadVariant,
}
