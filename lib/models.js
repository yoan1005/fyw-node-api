const fs = require('fs')
const { $capitalize } = require('../helpers/string.helper')
const files = fs.readdirSync('./models/')
const models = {}

for (var file of files) {
  const className = file.split('.model')
  models[$capitalize(className[0])] = require('../models/' + file)
}

console.log(`[✔] Models: Running… OK (${Object.keys(models).length} loaded) [✔]`)

module.exports = models
