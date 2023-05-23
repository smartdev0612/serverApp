const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('<h1>Helllooooo</h1>')
})

app.get('/', (req, res) => {
  res.send('Getting root')
})

app.get('/profile', (req, res) => {
  res.send('Getting profile')
})

app.post('/profile', (req, res) => {
  const user = {
    name: 'Sally',
    hobby: 'soccer',
  }
  res.send(user)
})

app.listen(3001)
