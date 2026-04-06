function formatResponse(data) {
  return {
    success: true,
    data: data,
    timestamp: new Date().toISOString()
  }
}

function calculateMetrics(runs) {
  if (!Array.isArray(runs)) return { total: 0, failed: 0 }
  const failed = runs.filter(r => r.conclusion === 'failure').length
  return { total: runs.length, failed, successRate: ((runs.length - failed) / runs.length) * 100 }
}

module.exports = { formatResponse, calculateMetrics }