/**
 * Returns @obj field specified by @path or @fallback if @path is incorrect
 * @param {object} obj
 * @param {string} path
 * @param {*} fallback
 */
export const get = function (obj: Record<string, any>, path: string, fallback: any): any {
  let result: Record<string, any> = obj

  const keys: string[] = path.split('.')

  for (const key of keys) {
    const value = result[key]

    if (value === undefined) return fallback

    result = value
  }

  return result
}
