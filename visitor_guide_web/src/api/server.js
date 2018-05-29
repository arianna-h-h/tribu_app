const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello Express World')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('Error in Server')
  }

  console.log(`server is listening on ${port}`)
})

app.use((err, request, response, next) => {
  console.log(err)
  response.status(500).send('Server error')
})
