const axios = require('axios')

const BASE_URL = process.env.API_URL || 'http://localhost:8000'
const unusedConfig = { timeout: 5000 }  // ← no-unused-vars

async function fetchRuns() {
  const response = await axios.get(`${BASE_URL}/runs`)
  return response.data
}

async function processResponse(data) {
  const processed = transformData(data)  // ← transformData not defined, no-undef
  return processed
}

module.exports = { fetchRuns, processResponse }