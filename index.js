import express from 'express'
import request from 'request-promise'

const app = express()

const PORT = process.env.PORT || 4000

const apiKey = '9369326f7eeeda5489b984142cd45bf1'

const baseURL = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to Amazon Web Scrapper API')
})

// fetch product details

app.get('/products/:productId', async (req, res) => {
  const { productId } = req.params

  try {
    const response = await request(`${baseURL}&url=https://www.amazon.com/dp/${productId}`)
    res.json(response)
  } catch (error) {
    res.json(error)
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})