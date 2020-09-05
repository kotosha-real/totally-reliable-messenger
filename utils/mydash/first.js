/**
 * Returns first element of passed array or undefined if:
 *  1. Argument is not array
 *  2. Arguments' length equals to 0
 * @param {array} list
 * @returns {*}
 */
function first(list) {
  if (!Array.isArray(list)) return undefined

  return list[0]
}
