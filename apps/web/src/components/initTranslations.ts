import { init, IntlVariations as FbtIntlVariations } from 'fbt'

import { SupportedLocales } from '@/types'
import { getFbtTranslations } from '@/utils/get-fbt-translations'

export function initTranslations(locale: SupportedLocales) {
  const translations = getFbtTranslations(locale)

  // There is no dictionary for this locale yet so we initialize it with SX Design strings.
  init({
    translations,
    hooks: {
      getViewerContext: () => ({
        GENDER: FbtIntlVariations.GENDER_UNKNOWN,
        locale,
      }),
    },
  })
}
