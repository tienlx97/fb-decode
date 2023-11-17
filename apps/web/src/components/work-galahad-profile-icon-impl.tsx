import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { WorkGalahadUIProfilePhotoForUser } from './work-galahad-ui-profile-photo-for-user'

type WorkGalahadProfileIconImplProps = {
  size?: any
  disableAltText?: any
}

export function WorkGalahadProfileIconImpl({
  disableAltText = false,
  size,
}: WorkGalahadProfileIconImplProps) {
  // const e = {
  //   endDate: 0,
  //   userStatus: 'active',
  // }

  return jsx(WorkGalahadUIProfilePhotoForUser, {
    size,
    badgeData: {
      endDate: 0,
      userStatus: 'active',
    },
    disableAltText,
  })
}
