/**
 * Parses passed @template via @handlebars and appends it to the passed @root
 * @root defaults to '#app'
 * @param {string} template
 * @param {*} options
 * @param {string} root
 */
export const render = function (template, options, root = '#app') {
  const __handlebarsTemplate__ = Handlebars.compile(template)
  const __document__ = new DOMParser().parseFromString(__handlebarsTemplate__(options), 'text/html')
  document.querySelector(root).appendChild(__document__.body.firstChild)
}
