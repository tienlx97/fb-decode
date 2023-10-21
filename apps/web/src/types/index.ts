// Please note that values here do not have to match supported currencies even though it makes
// a lot of sense to match them. Expand as needed.
//
// Supported locale must follow BCP 47 formatting (https://tools.ietf.org/html/bcp47)
export type SupportedLocales =
  | 'vi_VN' // VietNam
  | 'en_US' // English - USA

// LTR languages display content from left to right
// RTL languages display content from right to left
//
// See: https://rtlstyling.com/
// See: https://material.io/design/usability/bidirectionality.html
export enum SupportedDirections {
  LTR = 'ltr',
  RTL = 'rtl',
}
