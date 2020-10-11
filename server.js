const express = require('express')

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.static('./'))

app.use('*', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
