const path = require('path')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.static('dist'))

app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
