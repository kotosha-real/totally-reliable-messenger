/**
 * Returns @obj field specified by @path or @fallback if @path is incorrect
 * @param {object} obj
 * @param {string} path
 * @param {*} fallback
 */
export const get = function (obj: Record<string, any>, path: string, fallback: any): any {
  const keys: string[] = path.split('.')
  return keys.reduce((acc, key) => acc && acc[key], obj) || fallback
}
