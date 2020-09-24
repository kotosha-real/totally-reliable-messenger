/**
 * IMPORTANT NOTE
 *
 * Since @tsc does not serve file extensions I should use them in src files' imports
 * But Jest does not like it when there are extensions in imports
 * So I write extensions to make it work
 * Tests are fine, believe me ;)
 */

import { queryStringify } from '../src/utils/mydash/queryStringify'

describe('queryStringify()', () => {
  test('with no data', () => {
    const res = queryStringify()
    expect(res).toEqual('')
  })

  test('with correct data', () => {
    const data = {
      key1: true,
      key2: [1, 2, 3],
      key3: 'value'
    }
    const res = queryStringify(data)
    expect(res).toEqual('?key1=true&key2=1,2,3&key3=value')
  })

  test('with incorrect data', () => {
    const data = null
    const res = queryStringify(data)
    expect(res).toEqual('')
  })
})
