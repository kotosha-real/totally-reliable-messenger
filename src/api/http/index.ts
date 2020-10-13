import { queryStringify } from '../../utils/mydash/queryStringify'

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

export class http {
  static get (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> {
    const { data } = options
    return this.request(
      `${url}${queryStringify(data)}`,
      { ...options, method: METHODS.GET },
      options.timeout
    )
  }

  static post (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout)
  }

  static put (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout)
  }

  static delete (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout)
  }

  // did not want to include request and setHeaders methods here but have no idea how to test them elsewise
  // will be glad to hear an advice
  static request (
    url: string,
    options: Record<string, any>,
    timeout = 5000
  ): Promise<XMLHttpRequest> | never {
    if (!options) throw new Error('Give me something')

    // thx Yuri Markov for the tip
    const BASE_URL = process.env.BASEURL || 'https://ya-praktikum.tech/api/v2/'
    // check complete URLs from form actions
    const isUrlComplete = url.match(BASE_URL)
    const requestUrl = `${isUrlComplete ? '' : BASE_URL}${url}`

    const { method, data, headers } = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, requestUrl)
      xhr.withCredentials = true

      if (headers && Object.entries(headers).length) this.setHeaders(xhr, headers)

      xhr.timeout = timeout

      xhr.onload = function () {
        if (xhr.status >= 400) {
          reject(xhr)
        } else {
          resolve(xhr)
        }
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

  static setHeaders (xhr: XMLHttpRequest, headers: Record<string, any>): void {
    if (!xhr) throw new Error('Give me something')

    Object.entries(headers).forEach(([header, value]) => {
      if (!header || !value) return
      xhr.setRequestHeader(header, value)
    })
  }
}
