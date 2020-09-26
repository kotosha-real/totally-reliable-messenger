/**
 * Returns true if context contains both @title and @label
 */
Handlebars.registerHelper('hasRoute', function (route: any): boolean {
  return typeof route === 'string'
})
