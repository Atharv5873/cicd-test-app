const { formatResponse } = require('../src/utils')

describe('formatResponse', () => {
  test('wraps data in success envelope', () => {
    const result = formatResponse({ id: 1 })
    expect(result.success).toBe(true)
    expect(result.data).toEqual({ id: 1 })
    expect(result.timestamp).toBeDefined()
  })
})