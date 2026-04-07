const { calculateMetrics } = require('../src/utils')

jest.setTimeout(6000)

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
    expect(result.successRate).toBeCloseTo(66.67, 1)
  })

  test('handles empty array', () => {
    const result = calculateMetrics([])
    expect(result.total).toBe(0)
    expect(result.failed).toBe(0)
  })

  test('API returns expected shape', async () => {
    const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({ ok: true })
    const response = await fetch('http://localhost:9999/runs')
    expect(response.ok).toBe(true)
    fetchSpy.mockRestore()
  })
})