import { err, isStringNullOrEmpty } from '@negiganaito/react-components'

function a(a: any) {
  switch (a) {
    case 1:
      return 2
    case 2:
      return 3
    case 3:
      return 4
    case 4:
      return 5
    default:
      throw err('unsupported indentation level.')
  }
}
function b(a: any) {
  switch (a) {
    case 2:
      return 1
    case 3:
      return 2
    case 4:
      return 3
    case 5:
      return 4
    default:
      throw err('unsupported indentation level.')
  }
}
function d(a: any) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return a
    default:
      throw err('unsupported indentation level : %s', a)
  }
}
var j = 5,
  k = 50,
  l = 800,
  m = 150,
  n = 1e3,
  o = '65676BFF',
  p = 'BADGE',
  q = '#8d8b8a',
  r = '#bcbab8',
  s = 3
function e(a: any) {
  var b = 'Welcome to Knowledge Library'
  return isStringNullOrEmpty(a) ? b : a
}
function f(a: any) {
  var b = 'Find useful company content, all in one place'
  return isStringNullOrEmpty(a) ? b : a
}
function h(a: any) {
  // return i._(
  //   {
  //     '*': '{number} subcategories',
  //     _1: '1 subcategory',
  //   },
  //   [i._plural(a, 'number')],
  // )

  return 1
}

function t(a: any) {
  return a ? 'Collapse' : 'View all subcategories'
}
function u(a: any) {
  a = a != null ? a.split(/<.*?>/).join(' ') : ''
  return a.split(/\s+/g).filter((a: any) => {
    return a.length > 0
  }).length
}
const v = 'Your subcategories'

function w(a: any) {
  // return i._(
  //   'This can be a maximum of {max_character_limit} characters lon',
  //   [i._param('max_character_limit', a)],
  // )

  return ''
}

export const WorkKnowledgeUtils = {
  getNextIndentLevel: a,
  getPreviousIndentLevel: b,
  getLevelTyped: d,
  MAX_HIERARCHY_LEVEL: j,
  TITLE_MAX_LENGTH: k,
  DESC_MAX_LENGTH: l,
  FILE_NAME_LIMIT_LENGTH: m,
  FILE_DESC_LIMIT_LENGTH: n,
  DEFAULT_ICON_BACKGROUND_COLOR: o,
  DEFAULT_ICON: p,
  DEFAULT_COLOR: q,
  DEFAULT_COLOR_DARKER: r,
  FILTERED_FEATURED_BUNDLES_COUNT: s,
  getHomeTitle: e,
  getHomeSubTitle: f,
  getSubcategoriesCount: h,
  getChevronLabel: t,
  getWordCount: u,
  fosteredSubcategoryRootBreadCrumbName: v,
  charLimitReachedMessage: w,
}
