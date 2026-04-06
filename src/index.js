const express = require('express')
const { processData } = require('./dataProcessor')  // ← this file doesn't exist
const { formatResponse } = require('./utils')

const app = express()
app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.post('/process', (req, res) => {
  const result = processData(req.body)
  res.json(formatResponse(result))
})

module.exports = app