module.exports = {
  verbose: true,
  globals: {
    Handlebars: {
      compile: () => () => '<div></div>'
    }
  }
}
