import memoizeWithArgs from '@metamon/utils/common/memoize-with-args' // Import the correct path for memoizeWithArgs

interface TetraTextHierarchyStyle {
  bodyType: string
  headlineType: string
  metaType: string
}

function getTetraTextHierarchyStyleSwitch(
  level: number | string,
  emphasized: boolean,
): TetraTextHierarchyStyle {
  switch (level) {
    case 1:
      return {
        bodyType: 'body1',
        headlineType: 'headlineEmphasized1',
        metaType: 'meta1',
      }
    case 2:
      return {
        bodyType: 'body2',
        headlineType: 'headlineEmphasized2',
        metaType: 'meta2',
      }
    case 3:
      return {
        bodyType: 'body3',
        headlineType: emphasized ? 'headline3' : 'headlineEmphasized3',
        metaType: 'meta3',
      }
    case 4:
    default:
      return {
        bodyType: 'body4',
        headlineType: emphasized ? 'headline4' : 'headlineEmphasized4',
        metaType: 'meta4',
      }
    case 'entityHeader1':
      return {
        bodyType: 'body2',
        headlineType: 'entityHeaderHeadline1',
        metaType: 'entityHeaderMeta1',
      }
    case 'entityHeader2':
      return {
        bodyType: 'body2',
        headlineType: 'entityHeaderHeadline2',
        metaType: 'entityHeaderMeta2',
      }
  }
}

function getCacheKey(level: number | string, emphasized: boolean): string {
  return `${level}${emphasized ? '' : 'e'}`
}

const getTetraTextHierarchyStyle = memoizeWithArgs(
  getTetraTextHierarchyStyleSwitch,
  getCacheKey,
)

export default getTetraTextHierarchyStyle

// __d("getTetraTextHierarchyStyle", ["memoizeWithArgs"], (function(a, b, c, d, e, f, g) {
//   "use strict";
//   a = c("memoizeWithArgs")(function(a, b) {
//       switch (a) {
//       case 1:
//           return {
//               bodyType: "body1",
//               headlineType: "headlineEmphasized1",
//               metaType: "meta1"
//           };
//       case 2:
//           return {
//               bodyType: "body2",
//               headlineType: "headlineEmphasized2",
//               metaType: "meta2"
//           };
//       case 3:
//           return {
//               bodyType: "body3",
//               headlineType: b === !0 ? "headline3" : "headlineEmphasized3",
//               metaType: "meta3"
//           };
//       default:
//       case 4:
//           return {
//               bodyType: "body4",
//               headlineType: b === !0 ? "headline4" : "headlineEmphasized4",
//               metaType: "meta4"
//           };
//       case "entityHeader1":
//           return {
//               bodyType: "body2",
//               headlineType: "entityHeaderHeadline1",
//               metaType: "entityHeaderMeta1"
//           };
//       case "entityHeader2":
//           return {
//               bodyType: "body2",
//               headlineType: "entityHeaderHeadline2",
//               metaType: "entityHeaderMeta2"
//           }
//       }
//   }, function(a, b) {
//       return String(a) + (b === !0 ? "" : "e")
//   });
//   g["default"] = a
// }
// ), 98);
