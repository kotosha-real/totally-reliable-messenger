import { http } from '../src/api/http'

describe('http module', () => {
  const vm = {
    request: jest.fn()
  }

  describe('get()', () => {
    test('without data', () => {
      http.get.bind(vm)('url')
      expect(vm.request).toHaveBeenCalledWith('url', { method: 'GET' }, undefined)
    })

    test('with data', () => {
      http.get.bind(vm)('url', { timeout: 1000 })
      expect(vm.request).toHaveBeenCalledWith('url', { timeout: 1000, method: 'GET' }, 1000)
    })
  })

  describe('post()', () => {
    test('without data', () => {
      http.post.bind(vm)('url')
      expect(vm.request).toHaveBeenCalledWith('url', { method: 'POST' }, undefined)
    })

    test('with data', () => {
      http.post.bind(vm)('url', { timeout: 1000 })
      expect(vm.request).toHaveBeenCalledWith('url', { timeout: 1000, method: 'POST' }, 1000)
    })
  })

  describe('put()', () => {
    test('without data', () => {
      http.put.bind(vm)('url')
      expect(vm.request).toHaveBeenCalledWith('url', { method: 'PUT' }, undefined)
    })

    test('with data', () => {
      http.put.bind(vm)('url', { timeout: 1000 })
      expect(vm.request).toHaveBeenCalledWith('url', { timeout: 1000, method: 'PUT' }, 1000)
    })
  })

  describe('delete()', () => {
    test('without data', () => {
      http.delete.bind(vm)('url')
      expect(vm.request).toHaveBeenCalledWith('url', { method: 'DELETE' }, undefined)
    })

    test('with data', () => {
      http.delete.bind(vm)('url', { timeout: 1000 })
      expect(vm.request).toHaveBeenCalledWith('url', { timeout: 1000, method: 'DELETE' }, 1000)
    })
  })

  describe('request()', () => {
    test('without data', () => {
      expect(http.request).toThrow('Give me something')
    })

    test('with data', () => {
      const res = http.request('url', {})
      expect(Promise.resolve(res)).toBe(res)
    })
  })

  describe('setHeaders()', () => {
    test('without data', () => {
      expect(http.setHeaders).toThrow('Give me something')
    })

    test('with data', () => {
      const xhr = new XMLHttpRequest()
      xhr.setRequestHeader = jest.fn()
      http.setHeaders(xhr, { header1: '1', header2: '2' })
      expect(xhr.setRequestHeader).toHaveBeenCalledWith('header1', '1')
      expect(xhr.setRequestHeader).toHaveBeenCalledWith('header2', '2')
    })
  })
})
