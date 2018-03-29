const removeInvalidType = ({ types = [], obj = {} }) => Object.keys(obj).reduce(
  (acc, cur) => {
    if (types.findIndex(e => e === obj[cur].type) >= 0) {
      acc[cur] = obj[cur]
    }
    return acc
  },
  {}
)

const removeInvalidObj = ({ objList = [], arr = [] }) => arr.filter(e => objList.findIndex(obj => obj === e) >= 0)

const removeInvalidSectionsData = ({ pages, sections, sectionTypes }) => {
  const validSections = removeInvalidType({ types: Object.keys(sectionTypes), obj: sections })
  Object.keys(validSections).forEach((sectionKey) => {
    const section = validSections[sectionKey]
    const blockTypes = sectionTypes[section.type].blocks.reduce((acc, block) => {
      acc[block.type] = block
      return acc
    }, {})
    section.blocks = removeInvalidType({ types: Object.keys(blockTypes), obj: section.blocks })
    section.blocksOrder = removeInvalidObj({ objList: Object.keys(section.blocks), arr: section.blocksOrder })
  })
  const validPages = Object.keys(pages).reduce((acc, page) => {
    acc[page] = removeInvalidObj({ objList: Object.keys(validSections), arr: pages[page] })
    return acc
  }, {})
  return {
    sections: validSections,
    pages: validPages
  }
}

export const invalidateThemeData = async (theme, themeData) => {
  const { sectionSettingSchema } = theme
  const sectionTypes = sectionSettingSchema.reduce((acc, section) => {
    acc[section.type] = section
    return acc
  }, {})
  const { sectionSettings } = themeData
  const { sections, pages } = sectionSettings
  return themeData.update({
    sectionSettings: removeInvalidSectionsData({ pages, sections, sectionTypes })
  }).exec()
}
