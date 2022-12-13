const express = require('express')
const { createServer } = require('http')
require('./env')

const app = express()
const port = process.env.PORT
const httpServer = createServer(app)

module.exports = { app, port, httpServer }
