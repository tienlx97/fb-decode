import { mergeClasses } from '@griffel/react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { WorkGalahadUIProfilePhotoForActor } from './work-galahad-ui-profile-photo-for-actor'

type WorkGalahadUIProfilePhotoForUserProps = {
  disableAltText?: boolean
  size?: number
  badgeData: {
    endDate: number
    userStatus: string
  }
  user?: any // fetch profile
}

export function WorkGalahadUIProfilePhotoForUser({
  user,
  size,
  badgeData,
  disableAltText = false,
}: WorkGalahadUIProfilePhotoForUserProps) {
  return jsx('div', {
    // className: mergeClasses(e && m.deactived),
    children: jsx(WorkGalahadUIProfilePhotoForActor, {
      actor: user,
      addOn: { type: 'availabilityBadge' },
      alt: 'Le Xuan Tien', // disableAltText
      size,
      shape: 'circle',
    }),
  })
}
