export default function coerceImageishURL(option?: any) {
  if (
    option &&
    typeof option === 'object' &&
    !option.sprited &&
    typeof option.uri === 'string' &&
    option.width !== undefined &&
    option.height !== undefined
  )
    return option
  else {
    return null
  }
}
