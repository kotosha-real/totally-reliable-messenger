/**
 * Returns true @value is not avatar
 */
Handlebars.registerHelper('isRegularData', function (value) {
  return value !== 'Avatar'
})
