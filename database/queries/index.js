import uuid from 'uuid/v4'
import Theme from '../schema/themeSchema'
import ThemeData, { Temp } from '../schema/themeData'

const getTheme = async ({ merchantId }) => {
  const themeData = await ThemeData.findOne({ merchantId })
  const themeSchema = await Theme.findOne({ _id: themeData.themeId })
  return {
    themeData,
    themeSchema
  }
}

const createNewTheme = ({
  themeMeta,
  themeSettingSchema,
  sectionSettingSchema
}) => Theme.create({ ...themeMeta, themeSettingSchema, sectionSettingSchema })

const getThemePreviewToken = async ({ merchantId }) => {
  const themeData = await ThemeData.findOne({ merchantId })
  let temp = await Temp.findOne({ merchantId })
  if (!temp) {
    temp = await Temp.create({ merchantId, previewToken: uuid() })
    const { themeId, themeSettings, sectionSettings } = themeData
    await Temp.findOneAndUpdate({ merchantId }, { themeId, themeSettings, sectionSettings })
  }
  return temp.previewToken
}

const getPreviewThemeData = async ({ merchantId, previewToken }) => {
  const themeData = await Temp.findOne({ merchantId, previewToken })
  const themeSchema = await Theme.findOne({ _id: themeData.themeId })
  return {
    themeData,
    themeSchema
  }
}

const savePreviewThemeData = async ({ merchantId, previewToken, themeSettings, sectionSettings }) => {
  const themeData = await Temp.findOneAndUpdate(
    { merchantId, previewToken },
    { themeSettings, sectionSettings }
  )
  return themeData
}

const saveThemeData = async ({ merchantId, previewToken }) => {
  const previewThemeData = await Temp.findOne({ merchantId, previewToken })
  const { themeId, themeSettings, sectionSettings } = previewThemeData
  return ThemeData.findOneAndUpdate(
    { merchantId },
    { themeId, themeSettings, sectionSettings }
  )
}

export {
  getThemePreviewToken,
  getPreviewThemeData,
  savePreviewThemeData,
  getTheme,
  createNewTheme,
  saveThemeData
}
