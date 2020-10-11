/**
 * Returns camelCase variant of passed string
 */
Handlebars.registerHelper('getCamelCaseId', function (value: string): string {
  const tokens = value.trim().split(' ')
  const camelCaseTokens = tokens.map((token: string, i: number) => {
    const lowercaseToken = token.toLocaleLowerCase()
    return i === 0
      ? lowercaseToken
      : lowercaseToken.charAt(0).toLocaleUpperCase() + lowercaseToken.slice(1)
  })

  return camelCaseTokens.join('')
})
