import mongoose from 'mongoose'
import Theme from './schema/themeSchema'
import ThemeData, { Temp } from './schema/themeData'
import * as query from './queries'
import {
  themeMeta,
  themeSettingSchema,
  themeSettingData,
  sectionSettingSchema,
  sectionSettingData
} from './mock'

const setUpMockData = async () => {
  await ThemeData.deleteMany({})
  await Temp.deleteMany({})
  await Theme.deleteMany({})
  const theme = await Theme.create({
    ...themeMeta,
    themeSettingSchema,
    sectionSettingSchema
  })
  await ThemeData.findOneOrCreate({
    merchantId: '12345',
    themeId: theme._id,
    themeSettings: themeSettingData,
    sectionSettings: sectionSettingData
  })
  console.log(await Theme.find({}))
  console.log(await ThemeData.find({}))
}

const connect = (callback) => {
  mongoose.connect('mongodb://localhost/test')
  const db = mongoose.connection
  db.once('open', async function () {
    console.log('Successfully connected to mongodb')
    typeof callback === 'function' && callback()
    // await setUpMockData()
  })
}

export default {
  setUpMockData,
  connect,
  query
}
