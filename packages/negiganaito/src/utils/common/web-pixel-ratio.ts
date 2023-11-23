import { SiteData } from './site-data'

export const WebPixelRatio = {
  get: () => {
    return SiteData.pr && SiteData.pr > 0
      ? SiteData.pr
      : window.devicePixelRatio || 1
  },
}
