const connectToMongo = require('./db.js');
const express = require('express')
var cors = require('cors')

// Mongodb connection
connectToMongo();

const app = express()
const port = 5000

// middle var
app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://localhost:${port}`)
})
