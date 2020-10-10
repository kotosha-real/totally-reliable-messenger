import { queryStringify } from '../utils/mydash/queryStringify'

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

/**
 * Returns passed @data stringified
 * @param {object} data
 */

export class http {
  get (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> {
    const { data } = options
    return this.request(
      `${url}${queryStringify(data)}`,
      { ...options, method: METHODS.GET },
      options.timeout
    )
  }

  post (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout)
  }

  put (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout)
  }

  delete (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout)
  }

  request (
    url: string,
    options: Record<string, any>,
    timeout = 5000
  ): Promise<XMLHttpRequest> | never {
    if (!options) throw new Error('Give me something')

    const { method, data, headers } = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, url)

      if (headers && Object.entries(headers).length) this.setHeaders(xhr, headers)

      xhr.timeout = timeout

      xhr.onload = function () {
        resolve(xhr)
      }

      xhr.onabort = reject
      xhr.onerror = reject
      xhr.ontimeout = reject

      if (method === METHODS.GET || !data) {
        xhr.send()
      } else {
        xhr.send(data)
      }
    })
  }

  setHeaders (xhr: XMLHttpRequest, headers: Record<string, any>): void {
    if (!xhr) throw new Error('Give me something')

    Object.entries(headers).forEach(([header, value]) => {
      if (!header || !value) return
      xhr.setRequestHeader(header, value)
    })
  }
}
