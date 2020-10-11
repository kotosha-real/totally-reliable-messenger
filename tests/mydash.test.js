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
