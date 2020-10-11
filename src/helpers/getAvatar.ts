/**
 * Returns retrieved avatar from passed @data
 */
Handlebars.registerHelper('getAvatar', function (data: Record<string, any>[]): string {
  return data.find((it) => it.title === 'Avatar')!.value
})
