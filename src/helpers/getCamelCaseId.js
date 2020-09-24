/**
 * Returns camelCase variant of passed string
 */
Handlebars.registerHelper('getCamelCaseId', function (value) {
  let tokens = value.trim().split(' ')
  const camelCaseTokens = tokens.map((token, i) => {
    let lowercaseToken = token.toLocaleLowerCase()
    return i === 0
      ? lowercaseToken
      : lowercaseToken.charAt(0).toLocaleUpperCase() + lowercaseToken.slice(1)
  })

  return camelCaseTokens.join('')
})
