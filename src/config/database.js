require('../config/env')
const mongoose = require('mongoose')

const dbHost = process.env.DB_HOST || 'localhost'
const dbPort = process.env.DB_PORT || 27017
const dbName = process.env.DB_NAME || 'test'
const dbUser = process.env.DB_USER || ''
const dbPassword = process.env.DB_PASSWORD || ''
const authEnabled = (process.env.DB_AUTH.toLowerCase() == 'true' ? true : false) || false

const run = async () => {
  mongoose.set('strictQuery', true)
  if (authEnabled) {
    await mongoose.connect(`mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`, { useNewUrlParser: true })
  } else {
    await mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, { useNewUrlParser: true })
  }
}

module.exports = { run, mongoose }
