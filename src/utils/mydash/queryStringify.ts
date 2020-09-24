import { isObject } from './isObject'

/**
 * Returns stringified object to use in @http class
 * @param {object} data
 * @returns {string}
 */
export const queryStringify = function (data: Record<string, any> | undefined): string {
  let query = '?'

  if (data && isObject(data)) {
    Object.entries(data).forEach(([key, value]) => {
      query += `${key}=${value.toString()}&`
    })
  }

  return query.slice(0, query.length - 1)
}
