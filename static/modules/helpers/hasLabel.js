/**
 * Returns true if context contains both @title and @label
 */
Handlebars.registerHelper('hasLabel', function (title, label) {
  return title && label
})
