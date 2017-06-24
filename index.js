const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

let port = parseInt(process.env.SERVER_PORT, 10);

app.listen(port, function () {
  console.log('Example app listening on port' + port)
})
