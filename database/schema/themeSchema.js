// to store schema of a theme
import mongoose, { Schema } from 'mongoose'

const themeSettingSchema = new Schema({
  name: String,
  settings: [Schema.Types.Mixed]
})

const sectionSettingSchema = new Schema({
  name: String,
  type: String,
  settings: [Schema.Types.Mixed],
  blocks: [Schema.Types.Mixed],
  presets: {
    name: String,
    category: String,
    blocks: [Schema.Types.Mixed]
  }
})

const themeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  version: String,
  created: Date,
  apiVersion: String,
  themeSettingSchema: [themeSettingSchema],
  sectionSettingSchema: [sectionSettingSchema]
})

themeSchema.static('findOneOrCreate', async function findOneOrCreate (condition, doc) {
  const one = await this.findOne(condition)
  return one || (doc ? this.create(doc) : this.create(condition))
})

export default mongoose.model('Theme', themeSchema)
