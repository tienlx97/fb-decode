import { FBLogger } from '@negiganaito/error'

let h = 0

function i() {
  return h++
}

export const initialState = [
  {
    key: i(),
    type: 'initial_page',
  },
]

export function reducer(a: any, b: any) {
  const d = a.filter(function (a: any) {
    return a.type !== 'pushed_page' || !a.removed
  })

  switch (b.type) {
    case 'push_page': {
      const e =
        b.pageKey != null
          ? d.find(function (a: any) {
              return a.pageKey === b.pageKey
            })
          : null
      if (e != null)
        throw FBLogger('comet_ui').mustfixThrow(
          'Tried to push page with duplicate key.',
        )
      return d.concat([
        {
          component: b.component,
          direction: b.direction,
          key: i(),
          pageKey: b.pageKey,
          removed: !1,
          type: 'pushed_page',
        },
      ])
    }
    case 'clear_removed_pages':
      return d
    case 'pop_page': {
      const e = d[d.length - 1]
      if (e.type === 'pushed_page') {
        let f = b.index
        if (b.pageKey != null) {
          const g = d.findIndex(function (a: any) {
            return a.pageKey === b.pageKey
          })
          f = g > -1 ? g : f
        }
        return [].concat(d.slice(0, f != null ? Math.max(f + 1, 1) : -1), [
          // @ts-ignore
          Object.assign({}, e, {
            removed: !0,
          }),
        ])
      }
    }
  }

  return a
}
