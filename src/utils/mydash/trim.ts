/**
 * Trims passed @value by passed @removable and whitespaces
 * @param {string} template
 * @param {string} removable
 * @param {string} root
 */

export const trim = (value: string, removable = ''): string => {
  const regexp: RegExp = new RegExp(`^([${removable}\\s]+)|([${removable}\\s]+)$`, 'g')

  return value.replace(regexp, '')
}
