/**
 * Returns @obj field specified by @path or @fallback if @path is incorrect
 * @param {object} obj
 * @param {string} path
 * @param {*} fallback
 */
function get(obj, path, fallback) {
  let result = obj

  const keys = path.split('.')

  for (const key of keys) {
    const value = result[key]

    if (value === undefined) return fallback

    result = value
  }

  return result
}
