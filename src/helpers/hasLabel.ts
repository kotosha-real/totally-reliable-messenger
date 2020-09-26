/**
 * Returns true if context contains both @title and @label
 */
Handlebars.registerHelper('hasLabel', function (
  title?: string,
  label?: string
): string | undefined {
  return title && label
})
