/* eslint-disable camelcase */
import { CometProfilePhoto } from '@negiganaito/index'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type WorkGalahadUIProfilePhotoForActorProps = {
  actor: any
  addOn: any
  alt: string
  shape: any
  size: number
}

const SiteData = {
  server_revision: 1009911867,
  client_revision: 1009911867,
  tier: '',
  push_phase: 'C3',
  pkg_cohort: 'HYP:gemini_pkg',
  haste_session: '19676.HYP:gemini_pkg.2.1..0.0',
  pr: 1,
  haste_site: 'www',
  manifest_base_uri: 'https://static.xx.fbcdn.net',
  manifest_origin: null,
  manifest_version_prefix: null,
  be_one_ahead: true,
  is_rtl: false,
  is_comet: true,
  is_experimental_tier: false,
  is_jit_warmed_up: true,
  hsi: '7301603472964746767',
  semr_host_bucket: '6',
  bl_hash_version: 2,
  skip_rd_bl: true,
  comet_env: 15,
  wbloks_env: false,
  ef_page: 'GeminiProfileChatRoute',
  compose_bootloads: true,
  spin: 4,
  __spin_r: 1009911867,
  __spin_b: 'trunk',
  __spin_t: 1700037036,
  vip: '157.240.15.15',
}

export function WorkGalahadUIProfilePhotoForActor({
  actor,
  size,
  ...rest
}: WorkGalahadUIProfilePhotoForActorProps) {
  const profile_picture = {
    uri: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/281785584_122043038985708771_336913588166787812_n.png?stp=cp0_dst-webp_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vJpWIUB03NIAX89xj1z&_nc_ht=scontent.fsgn2-7.fna&uss=709763d7439f33fd&odm=dGllczYyOTEud29ya3BsYWNlLmNvbQ&oe2=655EC017&oh=00_AfAD5E20KFCdHlkEzT6upPkU5l6zbZAqcmvM8B-ZgncLUA&oe=65597053',
    scale: 1,
  }

  const source = {
    height: size,
    scale:
      profile_picture.scale ?? (SiteData.pr && SiteData.pr > 0)
        ? SiteData.pr
        : window.devicePixelRatio || 1,
    uri: profile_picture.uri,
    width: size,
  }

  return jsx(
    CometProfilePhoto,
    Object.assign(
      {
        size,
        source,
      },
      rest,
    ),
  )
}
