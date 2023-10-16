export function getLoadingStateAriaProps(a: any, option: any) {
  var c
  option = a
    ? {
        'aria-label': `h._('__JHASH__6lD-XyRyuHe__JHASH__')`,
      }
    : {
        'aria-valuemax':
          (c = !option ? undefined : option.max) != null ? c : 100,
        'aria-valuemin': (c = !option ? undefined : option.min) != null ? c : 0,
        'aria-valuenow': a,
      }
  return Object.assign(
    {
      role: 'progressbar',
    },
    option,
  )
}
