const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

let port = 8081;
app.listen(port, function () {
  console.log('Example app listening on port' + port)
})
