/**
 * IMPORTANT NOTE
 *
 * Since @tsc does not serve file extensions I should use them in src files' imports
 * But Jest does not like it when there are extensions in imports
 * So I write extensions to make it work
 * Tests are fine, believe me ;)
 */

import http from '../src/components/http.ts'

const httpInstance = new http()

describe('http module', () => {
  const vm = {
    request: jest.fn()
  }

  describe('get()', () => {
    test('without data', () => {
      httpInstance.get.bind(vm)('url')
      expect(vm.request).toHaveBeenCalledWith('url', { method: 'GET' }, undefined)
    })

    test('with data', () => {
      httpInstance.get.bind(vm)('url', { timeout: 1000 })
      expect(vm.request).toHaveBeenCalledWith('url', { timeout: 1000, method: 'GET' }, 1000)
    })
  })

  describe('post()', () => {
    test('without data', () => {
      httpInstance.post.bind(vm)('url')
      expect(vm.request).toHaveBeenCalledWith('url', { method: 'POST' }, undefined)
    })

    test('with data', () => {
      httpInstance.post.bind(vm)('url', { timeout: 1000 })
      expect(vm.request).toHaveBeenCalledWith('url', { timeout: 1000, method: 'POST' }, 1000)
    })
  })

  describe('put()', () => {
    test('without data', () => {
      httpInstance.put.bind(vm)('url')
      expect(vm.request).toHaveBeenCalledWith('url', { method: 'PUT' }, undefined)
    })

    test('with data', () => {
      httpInstance.put.bind(vm)('url', { timeout: 1000 })
      expect(vm.request).toHaveBeenCalledWith('url', { timeout: 1000, method: 'PUT' }, 1000)
    })
  })

  describe('delete()', () => {
    test('without data', () => {
      httpInstance.delete.bind(vm)('url')
      expect(vm.request).toHaveBeenCalledWith('url', { method: 'DELETE' }, undefined)
    })

    test('with data', () => {
      httpInstance.delete.bind(vm)('url', { timeout: 1000 })
      expect(vm.request).toHaveBeenCalledWith('url', { timeout: 1000, method: 'DELETE' }, 1000)
    })
  })

  describe('request()', () => {
    test('without data', () => {
      expect(httpInstance.request).toThrow('Give me something')
    })

    test('with data', () => {
      const res = httpInstance.request('url', {})
      expect(Promise.resolve(res)).toBe(res)
    })
  })

  describe('setHeaders()', () => {
    test('without data', () => {
      expect(httpInstance.setHeaders).toThrow('Give me something')
    })

    test('with data', () => {
      const xhr = new XMLHttpRequest()
      xhr.setRequestHeader = jest.fn()
      httpInstance.setHeaders(xhr, { header1: '1', header2: '2' })
      expect(xhr.setRequestHeader).toHaveBeenCalledWith('header1', '1')
      expect(xhr.setRequestHeader).toHaveBeenCalledWith('header2', '2')
    })
  })
})
