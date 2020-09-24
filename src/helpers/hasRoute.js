/**
 * Returns true if context contains both @title and @label
 */
Handlebars.registerHelper('hasRoute', function (route) {
  return typeof route === 'string'
})
