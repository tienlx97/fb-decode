import { WorkKnowledgeNavHeaderState } from '@/config/work-knowledge-nav-header-state'
import { makeStyles, mergeClasses } from '@griffel/react'
import React from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import WorkGalahadNavTextHeader from './work-galahad-nav-text-header'
import { ChannelGeminiNavHeaderLoadingAction } from './channel-gemini-nav-header-loading-action'
import { WorkGalahadNavHeaderPressableAction } from './work-galahad-nav-header-pressable-action'
import { ChannelGeminiNavHeaderCustomEscapeHatchAction } from './channel-gemini-nav-header-custom-escape-hatch-action'

const useStyles = makeStyles({
  saveCancel: {
    display: 'flex',
  },
  cancel: {
    marginLeft: '20px',
  },

  dummy1: {
    marginLeft: '20px',
  },
})

type WorkKnowledgeNavCollectionsHeaderProps = {
  entrypoint: string
  headerState: number
  isEditing: boolean
  manageButtonAriaLabel: any
  //
  onCancelClick: any
  onEditClick: any
  onSaveClick: any
  //
  showEditButton: boolean
  title: any
  subtitle?: any
  tooltip?: any
  className?: string
  disabled?: boolean
}

export function WorkKnowledgeNavCollectionsHeader({
  disabled,
  entrypoint,
  headerState,
  isEditing,
  manageButtonAriaLabel,
  onCancelClick,
  onEditClick,
  onSaveClick,
  showEditButton,
  subtitle,
  title,
  tooltip,
  className,
}: WorkKnowledgeNavCollectionsHeaderProps) {
  const classes = useStyles()

  if (headerState === WorkKnowledgeNavHeaderState.LOADING) {
    return jsx(WorkGalahadNavTextHeader, {
      action: showEditButton
        ? jsx(ChannelGeminiNavHeaderLoadingAction, {})
        : void 0,
      title,
      titleSize: 'LARGE',
      className,
    })
  }

  if (headerState === WorkKnowledgeNavHeaderState.MOVE) {
    return jsx(WorkGalahadNavTextHeader, {
      action:
        onCancelClick &&
        jsx(WorkGalahadNavHeaderPressableAction, {
          onClick: function () {
            // c('QPLUserFlow').endCancel(c('qpl')._(559099663, '497'), {
            //   instanceKey: d(
            //     'WorkKnowledgeReorderingLoggingUtils',
            //   ).flowInstanceKeyFromEntrypoint(e),
            // }),
            onCancelClick()
          },
          title: 'Cancel',
        }),
      subtitle:
        'Only categories you can edit and can move to are shown. Published subcategories can\u2019t move to draft categories.',
      title: 'Choose category',
      titleSize: 'LARGE',
      className,
    })
  }

  if (isEditing) {
    const _action = jsx(ChannelGeminiNavHeaderCustomEscapeHatchAction, {
      children: jsxs('div', {
        className: mergeClasses(className, classes.saveCancel),
        children: [
          jsx(WorkGalahadNavHeaderPressableAction, {
            onClick: function () {
              // c('QPLUserFlow').addPoint(
              //   c('qpl')._(559099663, '497'),
              //   'save_clicked',
              //   {
              //     instanceKey: d(
              //       'WorkKnowledgeReorderingLoggingUtils',
              //     ).flowInstanceKeyFromEntrypoint(e),
              //   },
              // ),
              onSaveClick()
              // function () {
              //   c('QPLUserFlow').endSuccess(c('qpl')._(559099663, '497'), {
              //     instanceKey: d(
              //       'WorkKnowledgeReorderingLoggingUtils',
              //     ).flowInstanceKeyFromEntrypoint(e),
              //   })
              // },
              // function (a) {
              //   c('QPLUserFlow').endFailure(c('qpl')._(559099663, '497'), a, {
              //     instanceKey: d(
              //       'WorkKnowledgeReorderingLoggingUtils',
              //     ).flowInstanceKeyFromEntrypoint(e),
              //   })
              // },
            },
            testid: void 0,
            title: 'Save',
          }),
          onCancelClick &&
            jsx('div', {
              className: classes.dummy1,
              children: jsx(WorkGalahadNavHeaderPressableAction, {
                onClick: function () {
                  // c('QPLUserFlow').endCancel(c('qpl')._(559099663, '497'), {
                  //   instanceKey: d(
                  //     'WorkKnowledgeReorderingLoggingUtils',
                  //   ).flowInstanceKeyFromEntrypoint(e),
                  // }),
                  onCancelClick()
                },
                title: 'Cancel',
              }),
            }),
        ],
      }),
    })

    return jsx(WorkGalahadNavTextHeader, {
      action: _action,
      subtitle: 'Drag to reorder',
      title,
      titleSize: 'LARGE',
      className,
    })
  } else {
    return jsx(WorkGalahadNavTextHeader, {
      action: showEditButton
        ? jsx(WorkGalahadNavHeaderPressableAction, {
            'aria-label': manageButtonAriaLabel,
            disabled,
            onClick:
              headerState === WorkKnowledgeNavHeaderState.ENABLED
                ? function () {
                    // c('QPLUserFlow').start(c('qpl')._(559099663, '497'), {
                    //   instanceKey: d(
                    //     'WorkKnowledgeReorderingLoggingUtils',
                    //   ).flowInstanceKeyFromEntrypoint(e),
                    //   annotations: {
                    //     string: {
                    //       entrypoint: e,
                    //     },
                    //   },
                    // }),
                    void onEditClick()
                  }
                : function () {},
            testid: void 0,
            title: 'Manage',
            tooltip,
          })
        : void 0,
      subtitle,
      title,
      titleSize: 'LARGE',
      className,
    })
  }
}
