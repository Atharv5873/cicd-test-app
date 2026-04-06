const { calculateMetrics } = require('../src/utils')

describe('calculateMetrics', () => {
  test('calculates success rate correctly', () => {
    const runs = [
      { conclusion: 'success' },
      { conclusion: 'failure' },
      { conclusion: 'success' },
    ]
    const result = calculateMetrics(runs)
    expect(result.total).toBe(3)
    expect(result.failed).toBe(1)
    expect(result.successRate).toBe(100)  // ← WRONG: should be 66.67 — test will FAIL
  })

  test('handles empty array', () => {
    const result = calculateMetrics([])
    expect(result.total).toBe(0)
    expect(result.failed).toBe(0)
  })

  test('API returns expected shape', async () => {
    // Simulates a real API call that times out
    const response = await Promise.race([
      fetch('http://localhost:9999/runs'),  // nothing running here — will fail
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 1000))
    ])
    expect(response.ok).toBe(true)
  })
})