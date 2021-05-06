const express = require('express')
const bodyParser = require('body-parser')

const mainRoutes = require('./routes/main.routes')
const modulesRoutes = require('./routes/modules.routes')
const globalRoutes = require('./routes/global.routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', mainRoutes)
app.use('/api/global', globalRoutes)
app.use('/api/modules', modulesRoutes)

module.exports = app
