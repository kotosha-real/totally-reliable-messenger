/**
 * Returns array to use in partials — https://stackoverflow.com/a/36362826
 */
Handlebars.registerHelper('createArray', function () {
  return Array.from(arguments).slice(0, arguments.length - 1)
})
