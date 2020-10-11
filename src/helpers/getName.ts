/**
 * Returns display name or first name of display name does not exist or default filler if none does exist
 */
Handlebars.registerHelper('getName', function (user: Record<string, any>): string {
  return user.display_name || user.first_name || 'unknown raccoon'
})
