/**
 * https://github.com/microsoft/TypeScript/issues/16577
 * Serve /dist/* files with .js extension
 */
const fs = require('fs')
const path = require('path')

function fromDir(startPath, filter, callback) {
  if (!fs.existsSync(startPath)) {
    console.log('no dir ', startPath)
    return
  }

  const files = fs.readdirSync(startPath)
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i])
    const stat = fs.lstatSync(filename)
    if (stat.isDirectory()) {
      fromDir(filename, filter, callback) //recurse
    } else if (filter.test(filename)) callback(filename)
  }
}

function addDotJsToLocalImports(filename) {
  const buf = fs.readFileSync(filename)
  let replaced = buf
    .toString()
    .replace(/(import .* from\s+['"])(?!.*\.js['"])(\..*?)(?=['"])/g, '$1$2.js')
    .replace(/(import ['"])(?!.*\.js['"])(\..*?)(?=['"])/g, '$1$2.js')
  if (replaced !== buf.toString()) {
    fs.writeFileSync(filename, replaced)
    console.log('fixed imports at ' + filename)
  }
}

fromDir('./dist', /\.js$/, addDotJsToLocalImports)
