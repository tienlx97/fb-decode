/* eslint-disable camelcase */
import type { SupportedLocales } from '@/types'

import vi from '../../translations/out/vi_VN.json'
import en from '../../translations/out/en_US.json'

type TranslationStr = string

// {locale: {hash: translation}}
type TranslationDict = {
  [locale: string]: { [hashKey: string]: TranslationStr }
}

export function getFbtTranslations(locale: SupportedLocales): TranslationDict {
  // TODO: support translations lazy loading
  const supportedLocales = {
    vi_VN: vi,
    en_US: en,
  }

  // invariant(
  //   supportedLocales[locale] != null,
  //   'Cannot get FBT translation for locale "%s" because it doesn\'t exist.',
  //   locale,
  // )

  return supportedLocales[locale]
}
