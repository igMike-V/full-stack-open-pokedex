const express = require('express')
const app = express()


// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000
const VERSION = '1.0.2'
app.get('/version', (_req, res) => {
  res.send(VERSION)
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
  // eslint-disable-next-line no-console
  console.log('version: ', VERSION)
})
