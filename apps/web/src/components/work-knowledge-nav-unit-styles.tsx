import { err } from '@negiganaito/index'
import { WorkKnowledgeTypeDefs } from './work-knowledge-type-defs'

export class WorkKnowledgeNavUnitStyles {
  private $1: any

  constructor(a: any) {
    this.$1 = a
  }

  static forCreationPreview = function () {
    return new WorkKnowledgeNavUnitStyles(
      WorkKnowledgeTypeDefs.UnitStyle.M_SOLID,
    )
  }
  static forCategoryHeader = function () {
    return new WorkKnowledgeNavUnitStyles(
      WorkKnowledgeTypeDefs.UnitStyle.L_SOLID,
    )
  }
  static forCoverpageSubCategoryCardHeader = function () {
    return new WorkKnowledgeNavUnitStyles(
      WorkKnowledgeTypeDefs.UnitStyle.S_SOLID,
    )
  }
  static forCoverpageSubSubCategoryCardHeader = function () {
    return new WorkKnowledgeNavUnitStyles(
      WorkKnowledgeTypeDefs.UnitStyle.XS_HOLLOW,
    )
  }
  static forHomepageCategoryCardHeader = function () {
    return new WorkKnowledgeNavUnitStyles(
      WorkKnowledgeTypeDefs.UnitStyle.M_SOLID,
    )
  }
  static forComposerView = function () {
    return new WorkKnowledgeNavUnitStyles(
      WorkKnowledgeTypeDefs.UnitStyle.M_SOLID,
    )
  }
  static forSERP = function () {
    return new WorkKnowledgeNavUnitStyles(
      WorkKnowledgeTypeDefs.UnitStyle.XL_SOLID,
    )
  }
  static forNewSERP = function () {
    return new WorkKnowledgeNavUnitStyles(
      WorkKnowledgeTypeDefs.UnitStyle.M_SOLID,
    )
  }
  static forSelector = function () {
    return new WorkKnowledgeNavUnitStyles(
      WorkKnowledgeTypeDefs.UnitStyle.WIDE_SOLID,
    )
  }
  static fromLevel = function (b: number) {
    switch (b) {
      case 1:
        return new WorkKnowledgeNavUnitStyles(
          WorkKnowledgeTypeDefs.UnitStyle.M_SOLID,
        )
      case 2:
        return new WorkKnowledgeNavUnitStyles(
          WorkKnowledgeTypeDefs.UnitStyle.S_SOLID,
        )
      default:
        return new WorkKnowledgeNavUnitStyles(
          WorkKnowledgeTypeDefs.UnitStyle.XS_HOLLOW,
        )
    }
  }

  allowsIcon = () => {
    switch (this.$1) {
      case WorkKnowledgeTypeDefs.UnitStyle.XL_SOLID:
      case WorkKnowledgeTypeDefs.UnitStyle.L_SOLID:
      case WorkKnowledgeTypeDefs.UnitStyle.L_NONE:
      case WorkKnowledgeTypeDefs.UnitStyle.M_SOLID:
        return !0
      default:
        return !1
    }
  }

  getSize = () => {
    switch (this.$1) {
      case WorkKnowledgeTypeDefs.UnitStyle.XL_SOLID:
        return 74
      case WorkKnowledgeTypeDefs.UnitStyle.L_SOLID:
      case WorkKnowledgeTypeDefs.UnitStyle.L_NONE:
        return 52
      case WorkKnowledgeTypeDefs.UnitStyle.M_SOLID:
        return 36
      case WorkKnowledgeTypeDefs.UnitStyle.S_SOLID:
        return 24
      case WorkKnowledgeTypeDefs.UnitStyle.XS_HOLLOW:
        return 16
      case WorkKnowledgeTypeDefs.UnitStyle.WIDE_SOLID:
        throw err('unsupported style')
    }
  }

  getSizeStyle = () => {
    if (this.$1 === WorkKnowledgeTypeDefs.UnitStyle.WIDE_SOLID)
      return {
        height: 44,
        width: 44,
      }
    var a = this.getSize()
    return {
      height: a,
      width: a,
    }
  }
  $2 = () => {
    switch (this.$1) {
      case WorkKnowledgeTypeDefs.UnitStyle.XL_SOLID:
      case WorkKnowledgeTypeDefs.UnitStyle.L_SOLID:
      case WorkKnowledgeTypeDefs.UnitStyle.L_NONE:
      case WorkKnowledgeTypeDefs.UnitStyle.M_SOLID:
      case WorkKnowledgeTypeDefs.UnitStyle.WIDE_SOLID:
        return null
      case WorkKnowledgeTypeDefs.UnitStyle.S_SOLID:
        return 4
      case WorkKnowledgeTypeDefs.UnitStyle.XS_HOLLOW:
        return 8
    }
  }
  getOuterPaddingStyle = () => {
    var a = this.$2()
    return a == null
      ? {}
      : {
          paddingTop: a,
          paddingBottom: a,
        }
  }
  getColorStyle = (a: any) => {
    switch (this.$1) {
      case WorkKnowledgeTypeDefs.UnitStyle.XL_SOLID:
      case WorkKnowledgeTypeDefs.UnitStyle.L_SOLID:
      case WorkKnowledgeTypeDefs.UnitStyle.M_SOLID:
      case WorkKnowledgeTypeDefs.UnitStyle.S_SOLID:
      case WorkKnowledgeTypeDefs.UnitStyle.WIDE_SOLID:
        return {
          backgroundColor: a,
        }
      case WorkKnowledgeTypeDefs.UnitStyle.XS_HOLLOW:
        return {
          boxSizing: 'border-box',
          border: '3px solid ' + a,
          borderRadius: 6,
        }
      case WorkKnowledgeTypeDefs.UnitStyle.L_NONE:
        return {
          backgroundColor: void 0,
        }
    }
  }
  getIconSize = () => {
    switch (this.$1) {
      case WorkKnowledgeTypeDefs.UnitStyle.L_SOLID:
      case WorkKnowledgeTypeDefs.UnitStyle.L_NONE:
        return '24'
      default:
        return '16'
    }
  }
  getIconColor = () => {
    switch (this.$1) {
      case WorkKnowledgeTypeDefs.UnitStyle.WIDE_SOLID:
        return 'black'
      default:
        return 'white'
    }
  }
}
