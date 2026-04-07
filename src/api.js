const axios = require('axios')

const BASE_URL = process.env.API_URL || 'http://localhost:8000'
const requestConfig = { timeout: 5000 }

async function fetchRuns() {
  const response = await axios.get(`${BASE_URL}/runs`, requestConfig)
  return response.data
}

function transformData(data) {
  return data
}

async function processResponse(data) {
  const processed = transformData(data)
  return processed
}

module.exports = { fetchRuns, processResponse }