const { Companies, Services } = require('./models')
const express = require('express')
const routes = require('./routes');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const db = require('./db')
const cors = require('cors')

const app = express()



app.use(cors())
app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res) => {
    res.send('This is our Project 2!')
})
app.get('/services', async (req, res) => {
    const services = await Services.find()
    res.json(services)
  })
  app.get('/services/:id', async (req, res) => {
    try {
      const { id } = req.params
      const services = await Services.findById(id)
      if (!services) throw Error('Services not found')
      res.json(services)
    } catch (e) {
      console.log(e)
      res.send('services not found!')
    }
  })
  app.get('/companies', async (req, res) => {
    const companies = await Companies.find()
    res.json(companies)
  })
  app.get('/companies/:id', async (req, res) => {
    try {
      const { id } = req.params
      const companies = await Companies.findById(id)
      if (!companies) throw Error('companies not found.')
      res.json(companies)
    } catch (e) {
      console.log(e)
      res.send('companies not found!!!')
    }
  })
 
  
  app.use(bodyParser.json())
  app.use('/api', routes)

  db.on('error', console.error.bind(console, 'MongoDB connection error'))
  
  app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)

   })
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))



