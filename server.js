const express = require('express')
const nano = require('nano')('http://localhost:5984')
const app = express()

// get our DB
var db = nano.use('gaelic-flash')

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/api/allThemes', (req, res) => {
  db.view('myDesignDoc', 'allThemes', (err, body) => {
    if (!err) {
      let themes = []
      body.rows.forEach( doc => {
        themes.push(doc.key)
      })
      res.send(themes)
    }
  })
})

app.get('/api/flashCard', (req, res) => {
  let themeId = req.params.id || '10c58caafa5d1e903528d958ff0018db'
  db.get(themeId, (err, body) => {
    if (!err) {
      res.send(body)
    }
  })
})

app.listen(3004, () => {
  console.log('app listening on 3004')
})
