const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

let port = process.env.SERVER_PORT;

app.listen(port, function () {
  console.log('app Example app listening on port' + port)
})
