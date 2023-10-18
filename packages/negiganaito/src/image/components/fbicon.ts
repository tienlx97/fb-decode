import memoizeWithArgs from '@negiganaito/utils/common/memoize-with-args'
import { TintableIconSource } from '../utils/tintable-icon-source'
import coerceImageishSprited from '../utils/coerce-imageish-sprited'

// export const fbicon = memoizeWithArgs(
//   (src: any, size: any) => {
//     return new TintableIconSource('FB', src, size)
//   },
//   (option: any, b: any) => {
//     if (typeof option === 'object') {
//       const sprite = coerceImageishSprited(option)
//       if (sprite) {
//         return sprite.identifier + ':' + b
//       } else if (typeof option.uri === 'string') {
//         return option.uri + ':' + b
//       }
//     } else if (typeof option === 'string') {
//       return option + ':' + b
//     }
//     throw new Error('fbicon._: Invalid icon provided.')
//   },
// )

export const fbicon = memoizeWithArgs(
  (source: any, iconSize: any) => {
    return new TintableIconSource('FB', source, iconSize)
  },
  (iconOption: any, identifier: any) => {
    if (typeof iconOption === 'object') {
      const spritedImage = coerceImageishSprited(iconOption)
      if (spritedImage) {
        return spritedImage.identifier + ':' + identifier
      } else if (typeof iconOption.uri === 'string') {
        return iconOption.uri + ':' + identifier
      }
    } else if (typeof iconOption === 'string') {
      return iconOption + ':' + identifier
    }
    throw new Error('createFacebookIcon: Invalid icon provided.')
  },
)

export const fbiconWithoutMemorize = (source: any, iconSize: any) => {
  return new TintableIconSource('FB', source, iconSize)
}
