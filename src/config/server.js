const express = require('express')
const { createServer } = require('http')
require('./env')

const app = express()
const port = process.env.PORT
const httpServer = createServer(app)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const $config = process.env

module.exports = { app, port, httpServer, $config }
