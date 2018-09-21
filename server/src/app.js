const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()

app.use(morgan('combined'))
app.use(express.json())
app.use(cors())

app.post('/register', (req, res) => {
    res.send({
        'message': 'your user was registered'
    })

})

const port = process.env.PORT || 8081

sequelize.sync()
    .then(() => {
        app.listen(config.port, () => {
            console.log(`server started on port ${config.port}`)
        })
    })