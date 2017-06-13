const express = require('express');
const path = require('path')
const app = express()

// define the port we will run on
app.set('port', 3000)

app.use(express.static(path.join(__dirname, 'last-build')))

// listen for regusts
var server = app.listen(app.get('port'), function() {
  var port = server.address().port
  console.log('Magic happens on port ' + port)
})

