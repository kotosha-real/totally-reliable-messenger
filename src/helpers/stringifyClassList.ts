/**
 * Returns flatten string of classes passed as an array
 */
Handlebars.registerHelper('stringifyClassList', function (value: string[]): string {
  return value.join(' ')
})
