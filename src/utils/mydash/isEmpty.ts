import { isObject } from './isObject'

/**
 * Returns true if passed argument is empty or false if it's not
 * @param {*} value
 * @returns {boolean}
 */

/**
 * Q:
 * A: Из задания: «Значения 1, 0, null, false, "", undefined, [], {} должны возвращать true.»
 */
export const isEmpty = function (value: any): boolean {
  // Из задания: «Значения 1, 0, null, false, "", undefined, [], {} должны возвращать true.»
  value = value === 1 ? 0 : value
  const objectEmpty: boolean = Boolean(
    (Array.isArray(value) && !value.length) || (isObject(value) && !Object.keys(value).length)
  )
  return objectEmpty || !value
}
