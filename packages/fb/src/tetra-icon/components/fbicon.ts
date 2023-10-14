import memoizeWithArgs from '@fb/utils/memoize-with-args'
import { TintableIconSource } from '../utils/tintable-icon-source'
import coerceImageishSprited from '../utils/coerce-imageish-sprited'

export const fbicon = memoizeWithArgs(
  (src: any, size: any) => {
    return new TintableIconSource('FB', src, size)
  },
  (option: any, b: any) => {
    if (typeof option === 'object') {
      const sprite = coerceImageishSprited(option)
      if (sprite) {
        return sprite.identifier + ':' + b
      } else if (typeof option.uri === 'string') {
        return option.uri + ':' + b
      }
    } else if (typeof option === 'string') {
      return option + ':' + b
    }
    throw new Error('fbicon._: Invalid icon provided.')
  },
)
