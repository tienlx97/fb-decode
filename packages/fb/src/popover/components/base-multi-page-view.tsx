import { forwardRef, useCallback, useReducer } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import {
  initialState as BaseMultiPageViewInitialState,
  reducer as BaseMultiPageViewReducer,
} from '@fb/reducer/base-multi-page-view-reducer'

import { BaseMultiPageViewContainer } from './base-multi-page-view-container'

type BaseMultiPageViewProps = any

const BaseMultiPageView = forwardRef<HTMLElement, BaseMultiPageViewProps>(
  (props, ref) => {
    const [pageHistory, dispatch] = useReducer(
      BaseMultiPageViewReducer,
      BaseMultiPageViewInitialState,
    )

    const onAddPageCb = useCallback(
      (direction: any, component: any, options: any) => {
        dispatch({
          component: component,
          direction: direction,
          pageKey: options == null ? void 0 : options.pageKey,
          type: 'push_page',
        })
      },
      [dispatch],
    )

    const onPopPageCb = useCallback(
      (a: any) => {
        return dispatch({
          index: a == null ? void 0 : a.index,
          pageKey: a == null ? void 0 : a.pageKey,
          type: 'pop_page',
        })
      },
      [dispatch],
    )

    const onClearRemovedPagesCb = useCallback(() => {
      dispatch({
        type: 'clear_removed_pages',
      })
    }, [dispatch])

    return jsx(
      BaseMultiPageViewContainer,
      Object.assign({}, props, {
        onAddPage: onAddPageCb,
        onClearRemovedPages: onClearRemovedPagesCb,
        onPopPage: onPopPageCb,
        pageHistory: pageHistory,
        ref,
      }),
    )
  },
)

export default BaseMultiPageView
