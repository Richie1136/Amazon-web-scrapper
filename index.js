import express from 'express'
import request from 'request-promise'

const app = express()

const PORT = process.env.PORT || 4000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to Amazon Web Scrapper API')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})