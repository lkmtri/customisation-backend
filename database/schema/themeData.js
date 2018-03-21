// to store merchants' theme settings
import mongoose, { Schema } from 'mongoose'

const sectionSettingDataSchema = new Schema({
  sections: Schema.Types.Mixed,
  pages: Schema.Types.Mixed
})

const themeDataSchema = new Schema({
  merchantId: {
    type: String,
    index: true,
    unique: true
  },
  themeId: { type: Schema.Types.ObjectId, ref: 'Theme' },
  themeSettings: Schema.Types.Mixed,
  sectionSettings: sectionSettingDataSchema
})

const temp = new Schema({
  merchantId: {
    type: String,
    index: true,
    unique: true
  },
  previewToken: String,
  themeId: { type: Schema.Types.ObjectId, ref: 'Theme' },
  themeSettings: Schema.Types.Mixed,
  sectionSettings: sectionSettingDataSchema
})

temp.static('findOneOrCreate', async function findOneOrCreate (condition, doc) {
  const one = await this.findOne(condition)
  return one || (doc ? this.create(doc) : this.create(condition))
})

themeDataSchema.static('findOneOrCreate', async function findOneOrCreate (condition, doc) {
  const one = await this.findOne(condition)
  return one || (doc ? this.create(doc) : this.create(condition))
})

export const Temp = mongoose.model('Temp', temp)

const ThemeData = mongoose.model('ThemeData', themeDataSchema)

export default ThemeData
