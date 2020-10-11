/**
 * Specific helper for @classNames function
 */
function processObject (obj: Object): string {
  const clsArr = []

  for (const [key, value] of Object.entries(obj)) {
    if (value) clsArr.push(key)
  }

  return clsArr.join(' ').trim()
}

/**
 * Parses passed @args to return string of class names out of it
 * @param {array} args
 * @returns {string}
 */
export const classNames = (...args: unknown[]): string => {
  let clsStr = ''

  for (const cls of args) {
    if (Array.isArray(cls)) {
      clsStr += ` ${classNames(...cls)}`
    } else if (cls && typeof cls === 'object') {
      clsStr += ` ${processObject(cls)}`
    } else if (cls && (typeof cls === 'string' || typeof cls === 'number')) {
      clsStr += ` ${cls}`
    }
  }

  return clsStr.trim()
}
