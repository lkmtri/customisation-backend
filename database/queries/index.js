import uuid from 'uuid/v4'
import withPushUpdateToClient from 'socket'
import Theme from '../schema/themeSchema'
import ThemeData, { Temp } from '../schema/themeData'
import { invalidateThemeData } from './helper'

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

const getPreviewThemeData = async ({ previewToken }) => {
  const themeData = await Temp.findOne({ previewToken })
  const themeSchema = await Theme.findOne({ _id: themeData.themeId })
  return {
    themeData,
    themeSchema
  }
}

const savePreviewThemeData = async ({ previewToken, themeSettings, sectionSettings }) => {
  const themeData = await Temp.findOneAndUpdate(
    { previewToken },
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

const _updateThemeSchema = async ({ themeMeta, themeSettingSchema, sectionSettingSchema }) => {
  const theme = await Theme.findOneAndUpdate(
    { name: themeMeta.name },
    { themeSettingSchema, sectionSettingSchema },
    { new: true } // to return the updated document
  ).exec()
  const themeData = await ThemeData.findOne({ themeId: theme._id }).exec()
  const previewThemeData = await Temp.findOne({ themeId: theme._id }).exec()
  await invalidateThemeData(theme, themeData)
  previewThemeData && await invalidateThemeData(theme, previewThemeData)
  const validThemeData = await ThemeData.findOne({ themeId: theme._id }).exec()
  const validaPreviewThemeData = await Temp.findOne({ themeId: theme._id }).exec()
  console.log(theme)
  return {
    themeSettingSchema: theme.themeSettingSchema,
    sectionSettingSchema: theme.sectionSettingSchema,
    themeSettings: validThemeData.themeSettings,
    sectionSettings: validThemeData.sectionSettings,
    previewThemeSettings: validaPreviewThemeData && validaPreviewThemeData.themeSettings,
    previewSectionSettings: validaPreviewThemeData && validaPreviewThemeData.sectionSettings
  }
}

const updateThemeSchema = withPushUpdateToClient('theme_schema_update', _updateThemeSchema)

export {
  getThemePreviewToken,
  getPreviewThemeData,
  savePreviewThemeData,
  getTheme,
  createNewTheme,
  saveThemeData,
  updateThemeSchema
}
