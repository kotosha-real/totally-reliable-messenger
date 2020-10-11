import { queryStringify } from '../utils/mydash/queryStringify'

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

const request = (
  url: string,
  options: Record<string, any>,
  timeout = 5000
): Promise<XMLHttpRequest> | never => {
  if (!options) throw new Error('Give me something')

  const { method, data, headers } = options

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.withCredentials = true

    if (headers && Object.entries(headers).length) setHeaders(xhr, headers)

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

const setHeaders = (xhr: XMLHttpRequest, headers: Record<string, any>): void => {
  if (!xhr) throw new Error('Give me something')

  Object.entries(headers).forEach(([header, value]) => {
    if (!header || !value) return
    xhr.setRequestHeader(header, value)
  })
}

export class http {
  static get (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> {
    const { data } = options
    return request(
      `${url}${queryStringify(data)}`,
      { ...options, method: METHODS.GET },
      options.timeout
    )
  }

  static post (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> {
    return request(url, { ...options, method: METHODS.POST }, options.timeout)
  }

  static put (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> {
    return request(url, { ...options, method: METHODS.PUT }, options.timeout)
  }

  static delete (url: string, options: Record<string, any> = {}): Promise<XMLHttpRequest> {
    return request(url, { ...options, method: METHODS.DELETE }, options.timeout)
  }
}
