/**
 * Returns flatten string of classes passed as an array
 */
Handlebars.registerHelper('stringifyClassList', function (value) {
  return value.join(' ')
})
