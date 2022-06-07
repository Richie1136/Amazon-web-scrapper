import express from 'express'
import request from 'request-promise'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 4000

const apiKey = '9369326f7eeeda5489b984142cd45bf1'

const baseURL = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`


app.get('/', (req, res) => {
  res.send('Welcome to Amazon Web Scrapper API')
})

// fetch product details

app.get('/products/:productId', async (req, res) => {
  const { productId } = req.params

  try {
    const response = await request(`${baseURL}&url=https://www.amazon.com/dp/${productId}`)
    res.json(JSON.parse(response))
  } catch (error) {
    res.json(error)
  }
})

// Get Product Reviews
app.get('/products/:productId/reviews', async (req, res) => {
  const { productId } = req.params

  try {
    const response = await request(`${baseURL}&url=https://www.amazon.com/product-reviews/${productId}`)
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error)
  }
})

// Get Product Offers
app.get('/products/:productId/offers', async (req, res) => {
  const { productId } = req.params

  try {
    const response = await request(`${baseURL}&url=https://www.amazon.com/gp/offer-listing/${productId}`)
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error)
  }
})

// Get Search Results
app.get('/search/:searchQuery', async (req, res) => {
  const { searchQuery } = req.params

  try {
    const response = await request(`${baseURL}&url=https://www.amazon.com/s?k=${searchQuery}`)
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error)
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})