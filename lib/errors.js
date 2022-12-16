const fs = require('fs')
const { $capitalize } = require('../helpers/string.helper')
const files = fs.readdirSync('./lib/errors/')
const { app } = require('../config/server')
const errors = {}

for (var file of files) {
  const className = file.split('.js')
  errors[$capitalize(className[0])] = require('./errors/' + file)
}

console.log(`[✔] Errors: Running… OK (${Object.keys(errors).length} loaded) [✔]`)

module.exports = errors
