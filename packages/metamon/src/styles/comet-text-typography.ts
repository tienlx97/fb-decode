import { isPlatform, isBrowser, isEngine } from '@negiganaito/utils/user-agent'

export const FONT_FAMILY = {
  apple: {
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    fontFamily: 'var(--font-family-apple)',
  },

  default: {
    fontFamily: 'var(--font-family-default)',
  },

  segoe: {
    fontFamily: 'var(--font-family-segoe)',
  },
}

type TyporaphyStyle = {
  defaultColor?: string
  fontFamily: string
  fontSize: number
  fontWeight: string
  lineHeight: number
  offsets?: number[]
}

export const TYPORAPHY_STYLES = {
  body1: {
    fontFamily: 'default',
    fontSize: 20,
    fontWeight: 'normal',
    lineHeight: 24,
    offsets: [4, 5],
  } as TyporaphyStyle,
  body2: {
    fontFamily: 'default',
    fontSize: 17,
    fontWeight: 'normal',
    lineHeight: 20,
    offsets: [3, 5],
  } as TyporaphyStyle,
  body3: {
    fontFamily: 'default',
    fontSize: 15,
    fontWeight: 'normal',
    lineHeight: 20,
    offsets: [4, 5],
  } as TyporaphyStyle,
  body4: {
    fontFamily: 'default',
    fontSize: 13,
    fontWeight: 'normal',
    lineHeight: 16,
    offsets: [3, 4],
  } as TyporaphyStyle,
  bodyLink1: {
    fontFamily: 'default',
    fontSize: 20,
    fontWeight: 'semibold',
    lineHeight: 24,
    offsets: [4, 5],
  } as TyporaphyStyle,
  bodyLink2: {
    fontFamily: 'default',
    fontSize: 17,
    fontWeight: 'semibold',
    lineHeight: 20,
    offsets: [3, 5],
  } as TyporaphyStyle,
  bodyLink3: {
    fontFamily: 'default',
    fontSize: 15,
    fontWeight: 'semibold',
    lineHeight: 20,
    offsets: [4, 5],
  } as TyporaphyStyle,
  bodyLink4: {
    fontFamily: 'default',
    fontSize: 13,
    fontWeight: 'semibold',
    lineHeight: 16,
    offsets: [3, 4],
  } as TyporaphyStyle,
  button1: {
    fontFamily: 'default',
    fontSize: 17,
    fontWeight: 'semibold',
    lineHeight: 20,
    offsets: [3, 5],
  } as TyporaphyStyle,
  button2: {
    fontFamily: 'default',
    fontSize: 15,
    fontWeight: 'semibold',
    lineHeight: 20,
    offsets: [4, 5],
  } as TyporaphyStyle,
  entityHeaderHeadline1: {
    fontFamily: 'default',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 38,
    offsets: [7, 8],
  } as TyporaphyStyle,
  entityHeaderHeadline2: {
    fontFamily: 'default',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 32,
    offsets: [5, 7],
  } as TyporaphyStyle,
  entityHeaderMeta1: {
    defaultColor: 'secondary',
    fontFamily: 'default',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 20,
    offsets: [4, 5],
  } as TyporaphyStyle,
  entityHeaderMeta2: {
    defaultColor: 'secondary',
    fontFamily: 'default',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 20,
    offsets: [4, 5],
  } as TyporaphyStyle,
  headline3: {
    fontFamily: 'default',
    fontSize: 17,
    fontWeight: 'medium',
    lineHeight: 20,
    offsets: [3, 5],
  } as TyporaphyStyle,
  headline4: {
    fontFamily: 'default',
    fontSize: 15,
    fontWeight: 'medium',
    lineHeight: 20,
    offsets: [4, 5],
  } as TyporaphyStyle,
  headlineDeemphasized3: {
    fontFamily: 'default',
    fontSize: 17,
    fontWeight: 'normal',
    lineHeight: 20,
    offsets: [3, 5],
  } as TyporaphyStyle,
  headlineDeemphasized4: {
    fontFamily: 'default',
    fontSize: 15,
    fontWeight: 'normal',
    lineHeight: 20,
    offsets: [4, 5],
  } as TyporaphyStyle,
  headlineEmphasized1: {
    fontFamily: 'default',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
    offsets: [5, 6],
  } as TyporaphyStyle,
  headlineEmphasized2: {
    fontFamily: 'default',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
    offsets: [4, 5],
  } as TyporaphyStyle,
  headlineEmphasized3: {
    fontFamily: 'default',
    fontSize: 17,
    fontWeight: 'semibold',
    lineHeight: 20,
    offsets: [3, 4],
  } as TyporaphyStyle,
  headlineEmphasized4: {
    fontFamily: 'default',
    fontSize: 15,
    fontWeight: 'semibold',
    lineHeight: 20,
    offsets: [4, 5],
  } as TyporaphyStyle,
  meta1: {
    defaultColor: 'secondary',
    fontFamily: 'default',
    fontSize: 13,
    fontWeight: 'semibold',
    lineHeight: 16,
    offsets: [3, 4],
  } as TyporaphyStyle,
  meta2: {
    defaultColor: 'secondary',
    fontFamily: 'default',
    fontSize: 13,
    fontWeight: 'semibold',
    lineHeight: 16,
    offsets: [3, 4],
  } as TyporaphyStyle,
  meta3: {
    defaultColor: 'secondary',
    fontFamily: 'default',
    fontSize: 13,
    fontWeight: 'normal',
    lineHeight: 16,
    offsets: [3, 4],
  } as TyporaphyStyle,
  meta4: {
    defaultColor: 'secondary',
    fontFamily: 'default',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 16,
    offsets: [3, 4],
  } as TyporaphyStyle,
}

const notGeckoOffsets: [string, number[]][] = [
  ['body1', [5, 5]],
  ['body2', [4, 4]],
  ['body3', [4, 4]],
  ['body4', [4, 3]],
  ['bodyLink1', [5, 5]],
  ['bodyLink2', [4, 4]],
  ['bodyLink3', [4, 4]],
  ['bodyLink4', [4, 3]],
  ['button1', [4, 4]],
  ['button2', [4, 4]],
  ['entityHeaderHeadline1', [8, 7]],
  ['entityHeaderHeadline2', [6, 6]],
  ['entityHeaderMeta1', [4, 4]],
  ['entityHeaderMeta2', [4, 4]],
  ['headline3', [4, 4]],
  ['headline4', [4, 4]],
  ['headlineDeemphasized3', [4, 4]],
  ['headlineDeemphasized4', [4, 4]],
  ['headlineEmphasized1', [6, 5]],
  ['headlineEmphasized2', [5, 5]],
  ['headlineEmphasized3', [4, 4]],
  ['headlineEmphasized4', [4, 4]],
  ['meta1', [4, 3]],
  ['meta2', [4, 3]],
  ['meta3', [4, 3]],
  ['meta4', [3, 3]],
]

const geckoOffsets: [string, number[]][] = [
  ['body1', [5, 5]],
  ['body2', [4, 4]],
  ['body3', [5, 4]],
  ['body4', [4, 3]],
  ['bodyLink1', [6, 4]],
  ['bodyLink2', [4, 3]],
  ['bodyLink3', [5, 4]],
  ['bodyLink4', [4, 3]],
  ['button1', [4, 3]],
  ['button2', [5, 4]],
  ['entityHeaderHeadline1', [8, 7]],
  ['entityHeaderHeadline2', [7, 5]],
  ['entityHeaderMeta1', [5, 4]],
  ['entityHeaderMeta2', [5, 4]],
  ['headline3', [5, 3]],
  ['headline4', [5, 4]],
  ['headlineDeemphasized3', [5, 3]],
  ['headlineDeemphasized4', [5, 4]],
  ['headlineEmphasized1', [6, 5]],
  ['headlineEmphasized2', [6, 4]],
  ['headlineEmphasized3', [4, 3]],
  ['headlineEmphasized4', [5, 4]],
  ['meta1', [4, 3]],
  ['meta2', [4, 3]],
  ['meta3', [4, 3]],
  ['meta4', [4, 3]],
]

const windowOffsets: [string, number[]][] = [
  ['body1', [6, 4, 1]],
  ['body2', [5, 3, 1]],
  ['body3', [5, 4]],
  ['body4', [4, 3, 1]],
  ['bodyLink1', [6, 4, 1]],
  ['bodyLink2', [5, 3, 1]],
  ['bodyLink3', [5, 4]],
  ['bodyLink4', [4, 3, 1]],
  ['button1', [5, 3, 1]],
  ['button2', [5, 4]],
  ['entityHeaderHeadline1', [10, 6, 2]],
  ['entityHeaderHeadline2', [8, 5, 3]],
  ['entityHeaderMeta1', [5, 4, 1]],
  ['entityHeaderMeta2', [5, 4, 1]],
  ['headline3', [5, 3, 1]],
  ['headline4', [5, 4]],
  ['headlineDeemphasized3', [5, 3, 1]],
  ['headlineDeemphasized4', [5, 4]],
  ['headlineEmphasized1', [7, 4, 2]],
  ['headlineEmphasized2', [6, 4, 2]],
  ['headlineEmphasized3', [5, 3, 1]],
  ['headlineEmphasized4', [5, 4]],
  ['meta1', [4, 3, 1]],
  ['meta2', [4, 3, 1]],
  ['meta3', [4, 3, 1]],
  ['meta4', [4, 3]],
]

export type TyporaphyType = keyof typeof TYPORAPHY_STYLES

function calculateOffsetBaseOnOs() {
  if (isPlatform('Windows >= 6'))
    // return { fontFamily: FONT_FAMILY.segoe, offsets: offsets3 };
    return { fontFamily: 'segoe', offsets: windowOffsets }
  return (isPlatform('Mac OS X >= 10.11') && !isBrowser('Firefox < 55')) ||
    isPlatform('iOS >= 9')
    ? {
        // fontFamily: FONT_FAMILY.apple,
        fontFamily: 'apple',
        offsets: isEngine('Gecko') ? geckoOffsets : notGeckoOffsets,
      }
    : null
}

function a() {
  const typoClone = Object.assign({}, TYPORAPHY_STYLES)
  const offsetBaseOnOS = calculateOffsetBaseOnOs()

  if (offsetBaseOnOS) {
    const { fontFamily, offsets } = offsetBaseOnOS
    const maps: Map<keyof typeof TYPORAPHY_STYLES, number[]> = new Map(
      offsets as any,
    )
    maps.forEach((offsetsValue, key) => {
      typoClone[key] = Object.assign({}, typoClone[key], {
        fontFamily,
        offsets: offsetsValue as number[],
      })
    })
  }

  return typoClone
}

export const CometTextTypography = a()
