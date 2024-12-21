const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const aiRoutes = require('./routes/aiRoutes')
app.use('/api', aiRoutes)

app.get('/', (req, res) => {
    res.send('Hello from the server')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})