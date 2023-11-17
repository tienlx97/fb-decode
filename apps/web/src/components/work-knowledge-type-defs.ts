import { InternalEnum } from '@negiganaito/utils/common/$InternalEnum'

const unitStyle = InternalEnum.Mirrored([
  'XL_SOLID',
  'L_SOLID',
  'L_NONE',
  'WIDE_SOLID',
  'M_SOLID',
  'S_SOLID',
  'XS_HOLLOW',
])

function getPublicationStatus(a: any, b: any) {
  switch (a) {
    case 'CANCELING':
    case 'DEFAULT':
      return b === 'PUBLISHED' ? 'PUBLISHED' : 'DRAFT'
    case 'SAVING':
      return b === 'PUBLISHED' ? 'PUBLISHING_UPDATES' : 'SAVING_DRAFT'
    case 'SAVING_DRAFT':
      return 'SAVING_DRAFT'
    default:
      return a
  }
}

export const WorkKnowledgeTypeDefs = {
  UnitStyle: unitStyle,
  getPublicationStatus,
}
