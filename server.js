import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import db from 'database'

const PORT = 3002

const app = express()

app.use(cors())

app.use(bodyParser.json())

// To get current settings for theme
app.get('/api/theme', async function (req, res) {
  const { merchantId } = req.query
  const theme = await db.query.getTheme({ merchantId })
  if (!theme) return res.sendStatus(400)
  return res.status(200).json(theme)
})

// To publish changes in theme settings
app.post('/api/theme', async function (req, res) {
  const { merchantId, previewToken } = req.body
  const theme = await db.query.saveThemeData({ merchantId, previewToken })
  if (!theme) return res.sendStatus(400)
  return res.sendStatus(200).json(theme)
})

// To get preview theme settings
app.get('/api/theme-preview', async function (req, res) {
  const { previewToken } = req.query
  const theme = await db.query.getPreviewThemeData({ previewToken })
  if (!theme) return res.sendStatus(400)
  return res.status(200).json(theme)
})

// To save changes to preview theme settings
app.post('/api/theme-preview', async function (req, res) {
  const { previewToken, themeSettings, sectionSettings } = req.body
  const theme = await db.query.savePreviewThemeData({ previewToken, themeSettings, sectionSettings })
  if (!theme) return res.sendStatus(400)
  return res.sendStatus(200).json(theme)
})

// To get preview token
app.get('/api/preview-token', async function (req, res) {
  const { merchantId } = req.query
  const previewToken = merchantId && await db.query.getThemePreviewToken({ merchantId })
  if (!previewToken) return res.sendStatus(400)
  return res.status(200).json(previewToken)
})

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
  })
}

db.connect(startServer)
