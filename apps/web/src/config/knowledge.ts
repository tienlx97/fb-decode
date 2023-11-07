export type KnowledgeItem = {
  id: string
  isKnowledgeCategory: boolean
  canEdit: boolean
  level: 1 | 2 | 3 | 4
  status: 'PUBLISHED' | 'DRAFT'
  collectiontitle: string
  visualSetting: {
    icon: string
    hexcolor: string
  }
  childrenKnowledge: any
  isPinnedForViewer: boolean
}
